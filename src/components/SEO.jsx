import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Dcrony | Full-Stack Web Developer',
  description = 'Ibrahim Abdulmajeed (Dcrony) - Full-Stack Web Developer specializing in MERN stack, React, Node.js, and modern web applications. 3+ years experience building scalable solutions.',
  keywords = 'Dcrony, Ibrahim Abdulmajeed, Full-Stack Developer, MERN Stack, React Developer, Node.js Developer, Web Developer Nigeria, JavaScript Developer, Portfolio',
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
          "@type": "Person",
          "name": "Ibrahim Abdulmajeed",
          "alternateName": "Dcrony",
          "url": "https://dcrony.vercel.app",
          "jobTitle": "Full-Stack Web Developer",
          "description": description,
          "image": image,
          "email": "ibrahimabdulmajeed14@gmail.com",
          "telephone": "+234-903-949-2387",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abeokuta",
            "addressCountry": "NG"
          },
          "sameAs": [
            "https://github.com/Dcrony",
            "https://x.com/codewithdcrony",
            "https://linkedin.com/in/ibrahim-abdulmajeed"
          ],
          "knowsAbout": [
            "React.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "JavaScript",
            "Tailwind CSS",
            "PHP",
            "MySQL"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;