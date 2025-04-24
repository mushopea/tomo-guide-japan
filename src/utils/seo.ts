
type SchemaType = "Organization" | "WebSite" | "Service" | "FAQPage" | "Article";

interface SeoProps {
  title?: string;
  description?: string;
  schema?: SchemaType;
}

export const getSiteMetadata = (props: SeoProps = {}) => {
  const defaultTitle = "Tomodachi | Your Japan Relocation & One-Off Task Support Partner";
  const defaultDescription = "Professional relocation support and one-off task assistance for your move to Japan. English-speaking support for visa, housing, bank setup, and more.";

  return {
    title: props.title || defaultTitle,
    description: props.description || defaultDescription,
    schema: getSchemaMarkup(props.schema || "WebSite")
  };
};

const getSchemaMarkup = (type: SchemaType) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    "name": "Tomodachi",
    "url": "https://tomodachi.lovable.dev",
    "logo": "https://tomodachi.lovable.dev/lovable-uploads/b0c798af-b1ff-458b-be27-7ad7f7ede331.png",
    "description": "Professional Japan relocation support and one-off task assistance"
  };

  switch (type) {
    case "Service":
      return {
        ...baseSchema,
        "serviceType": "Relocation Services",
        "areaServed": "Japan",
        "provider": {
          "@type": "Organization",
          "name": "Tomodachi"
        }
      };
    default:
      return baseSchema;
  }
};
