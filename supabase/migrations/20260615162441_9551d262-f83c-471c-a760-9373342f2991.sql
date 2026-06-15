
-- Enable extensions for cron + http
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- menu_groups
CREATE TABLE public.menu_groups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  toast_guid TEXT NOT NULL,
  description TEXT,
  last_synced_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.menu_groups TO anon, authenticated;
GRANT ALL ON public.menu_groups TO service_role;
ALTER TABLE public.menu_groups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Menu groups are publicly readable"
  ON public.menu_groups FOR SELECT
  USING (true);

-- menu_categories
CREATE TABLE public.menu_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id UUID NOT NULL REFERENCES public.menu_groups(id) ON DELETE CASCADE,
  toast_guid TEXT NOT NULL,
  slug TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (group_id, slug),
  UNIQUE (group_id, toast_guid)
);

CREATE INDEX idx_menu_categories_group ON public.menu_categories(group_id);

GRANT SELECT ON public.menu_categories TO anon, authenticated;
GRANT ALL ON public.menu_categories TO service_role;
ALTER TABLE public.menu_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Menu categories are publicly readable"
  ON public.menu_categories FOR SELECT
  USING (true);

-- menu_items
CREATE TABLE public.menu_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES public.menu_categories(id) ON DELETE CASCADE,
  group_id UUID NOT NULL REFERENCES public.menu_groups(id) ON DELETE CASCADE,
  toast_guid TEXT NOT NULL,
  slug TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10,2),
  image_url TEXT,
  calories INTEGER,
  allergens TEXT[],
  modifiers JSONB,
  available_online BOOLEAN NOT NULL DEFAULT true,
  is_86 BOOLEAN NOT NULL DEFAULT false,
  is_active BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (group_id, slug),
  UNIQUE (group_id, toast_guid)
);

CREATE INDEX idx_menu_items_category ON public.menu_items(category_id);
CREATE INDEX idx_menu_items_group ON public.menu_items(group_id);
CREATE INDEX idx_menu_items_visible ON public.menu_items(group_id, is_active, available_online, is_86);

GRANT SELECT ON public.menu_items TO anon, authenticated;
GRANT ALL ON public.menu_items TO service_role;
ALTER TABLE public.menu_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Menu items are publicly readable"
  ON public.menu_items FOR SELECT
  USING (true);

-- menu_sync_logs
CREATE TABLE public.menu_sync_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id UUID REFERENCES public.menu_groups(id) ON DELETE SET NULL,
  group_slug TEXT,
  status TEXT NOT NULL,
  categories_synced INTEGER DEFAULT 0,
  items_synced INTEGER DEFAULT 0,
  items_removed INTEGER DEFAULT 0,
  error TEXT,
  duration_ms INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT ALL ON public.menu_sync_logs TO service_role;
ALTER TABLE public.menu_sync_logs ENABLE ROW LEVEL SECURITY;
-- no public policies: backend-only

-- updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_menu_groups_updated BEFORE UPDATE ON public.menu_groups
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER trg_menu_categories_updated BEFORE UPDATE ON public.menu_categories
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER trg_menu_items_updated BEFORE UPDATE ON public.menu_items
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Seed the 3 menu groups (toast_guid populated by edge function from env on first sync)
INSERT INTO public.menu_groups (slug, name, toast_guid) VALUES
  ('downtown', 'Downtown Locations', 'PENDING'),
  ('suburbs',  'Suburb Locations',   'PENDING'),
  ('savannah', 'Savannah Location',  'PENDING');
