import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Dcrony (Ibrahim Abdulmajeed) – Full-Stack Developer & Founder of TickiSpot',
  description = 'Ibrahim Abdulmajeed (Dcrony) is a Full-Stack Web Developer and Founder of TickiSpot, a modern event ticketing and management platform. متخصص in MERN stack, React, and scalable web applications.',
  keywords = 'Dcrony, Ibrahim Abdulmajeed, TickiSpot founder, Full-Stack Developer Nigeria, MERN stack developer, React developer, Node.js developer, event ticketing platform founder, Nigerian tech founder',
  image = 'https://dcrony.vercel.app/og-image.jpg',
  url = 'https://dcrony.vercel.app',
  type = 'website'
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ibrahim Abdulmajeed" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Dcrony Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@codewithdcrony" />
      
      {/* Structured Data / JSON-LD */}
     <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "name": "Ibrahim Abdulmajeed",
      "alternateName": "Dcrony",
      "url": "https://dcrony.vercel.app",
      "image": image,
      "jobTitle": "Full-Stack Web Developer & Founder",
      "description":
        "Ibrahim Abdulmajeed (Dcrony) is a Full-Stack Web Developer and Founder of TickiSpot, an event ticketing and management platform.",
      "email": "ibrahimabdulmajeed14@gmail.com",
      "telephone": "+2349039492387",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "NG"
      },
      "sameAs": [
        "https://github.com/Dcrony",
        "https://x.com/codewithdcrony",
        "https://linkedin.com/in/ibrahim-abdulmajeed",
        "https://tiktok.com/codewithdcrony_"
      ],
      "knowsAbout": [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "Startup Development",
        "Event Technology"
      ],
      "founderOf": {
        "@type": "Organization",
        "name": "TickiSpot",
        "url": "https://tickispot.com"
      }
    },

    {
      "@type": "Organization",
      "name": "TickiSpot",
      "url": "https://tickispot.com",
      "logo": "https://tickispot.com/logo.png",
      "founders": [
        {
          "@type": "Person",
          "name": "Ibrahim Abdulmajeed"
        },
        {
          "@type": "Person",
          "name": "OLarenwaju Oluwashinnayomi"
        }
      ],
      "sameAs": [
        "https://tickispot.com"
      ]
    }
  ]
})}
</script>
    </Helmet>
  );
};

export default SEO;