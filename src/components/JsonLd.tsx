interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

/** Server-rendered JSON-LD so crawlers that skip JavaScript still see it. */
const JsonLd = ({ data }: JsonLdProps) => {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
};

export default JsonLd;
