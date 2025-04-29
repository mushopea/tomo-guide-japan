
type SchemaType = "Organization" | "WebSite" | "Service" | "FAQPage" | "Article";
type PageType = "home" | "process" | "about" | "contact" | "services" | "notFound";

interface SeoProps {
  pageType?: PageType;
  title?: string;
  description?: string;
  schema?: SchemaType;
  canonicalUrl?: string;
}

export const getSiteMetadata = (props: SeoProps = {}) => {
  const defaultTitle = "Tomodachi | Relocation to Japan & One-Off Task Support";
  const defaultDescription = "Friendly relocation support and one-off task help for individuals, families, and businesses moving to Japan.";
  const baseUrl = "https://tomodachi.lovable.dev";
  
  // Define page-specific metadata
  const pageMetadata: Record<PageType, {title: string, description: string, path: string}> = {
    home: {
      title: "Tomodachi | Relocation to Japan & One-Off Task Support",
      description: "Friendly relocation support and one-off task help for individuals, families, and businesses moving to Japan.",
      path: "/"
    },
    process: {
      title: "Moving to Japan Step-by-Step | Tomodachi Guide",
      description: "Follow our step-by-step moving guide to start your Japan relocation smoothly.",
      path: "/process"
    },
    about: {
      title: "About Tomodachi | Your Japan Relocation Partner",
      description: "Learn about Tomodachi's mission to help you relocate to Japan with ease and confidence.",
      path: "/about"
    },
    contact: {
      title: "Contact Tomodachi | Your Japan Relocation Buddy",
      description: "Reach out to Tomodachi for personal support on your move to Japan.",
      path: "/contact"
    },
    services: {
      title: "Japan Relocation Services | Tomodachi Support",
      description: "Comprehensive relocation services and one-off task assistance for your smooth transition to Japan.",
      path: "/services"
    },
    notFound: {
      title: "Page Not Found | Tomodachi",
      description: "The page you're looking for doesn't exist. Navigate back to our main site.",
      path: "/404"
    }
  };
  
  // Get metadata based on page type or use provided values
  const pageType = props.pageType || "home";
  const metadata = pageMetadata[pageType];
  
  const title = props.title || metadata.title;
  const description = props.description || metadata.description;
  const canonicalUrl = props.canonicalUrl || `${baseUrl}${metadata.path}`;
  
  return {
    title,
    description,
    canonicalUrl,
    ogTags: {
      title,
      description,
      url: canonicalUrl,
      image: `${baseUrl}/lovable-uploads/b0c798af-b1ff-458b-be27-7ad7f7ede331.png`
    },
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

// Helper component to inject SEO metadata into pages
export const injectSEOMetaTags = (pageType: PageType) => {
  const metadata = getSiteMetadata({ pageType });
  
  // Update document title
  document.title = metadata.title;
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', metadata.description);
  
  // Update Open Graph tags
  const ogTags = [
    { property: 'og:title', content: metadata.ogTags.title },
    { property: 'og:description', content: metadata.ogTags.description },
    { property: 'og:url', content: metadata.ogTags.url },
    { property: 'og:image', content: metadata.ogTags.image },
    { property: 'og:type', content: 'website' }
  ];
  
  ogTags.forEach(tag => {
    let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('property', tag.property);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', tag.content);
  });
  
  // Update canonical URL
  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement('link');
    canonicalTag.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.setAttribute('href', metadata.canonicalUrl);
  
  return null;
};
