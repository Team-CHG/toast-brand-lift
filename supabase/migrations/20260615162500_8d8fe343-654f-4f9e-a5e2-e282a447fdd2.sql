
CREATE POLICY "Sync logs are backend-only"
  ON public.menu_sync_logs FOR SELECT
  USING (false);
