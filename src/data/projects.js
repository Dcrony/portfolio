import tickispotImage from "../assets/images/Tickispot.png";
import portfolioImage from "../assets/images/porfolio.png";
import kridImage from "../assets/images/krid.png";
import dashboardImage from "../assets/images/scripess.png";
import posImage from "../assets/images/rcBxw.jpg";
import ecommerceImage from "../assets/images/wura.png";
import beautyImage from "../assets/images/ZEGNs.jpg";

const projects = [
  {
    title: "TickiSpot",
    slug: "tickispot",
    category: "SaaS",
    featured: true,

    image: tickispotImage,

    description:
      "A modern event ticketing and management platform that enables organizers to create events, sell tickets, manage attendees and monitor business performance.",

    summary:
      "Founder-led SaaS platform built using the MERN stack with secure authentication, analytics, payment integration and organizer dashboards.",

    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "REST API"
    ],

    demo: "https://tickispot.com",

    repo: "https://github.com/Dcrony/tickispot",

    problem:
      "Most event organizers rely on multiple disconnected tools for ticketing, attendee management and reporting, making event management unnecessarily difficult.",

    features: [
      "Authentication & Authorization",
      "Organizer Dashboard",
      "Ticket Purchase",
      "Analytics Dashboard",
      "Event Management",
      "Role Based Access",
      "Image Upload",
      "Payment Integration",
      "Responsive Design",
      "Community Features"
    ],

    architecture:
      "React frontend communicating with an Express REST API backed by MongoDB. Authentication handled with JWT while media uploads are managed through Cloudinary.",

    challenges:
      "Designing scalable APIs while maintaining a seamless experience across event creation, ticket purchases and dashboard analytics.",

    lessons:
      "Building TickiSpot strengthened my understanding of scalable backend architecture, authentication, API design and product development."
  },

  {
    title: "AI Voice Calling Platform",

    slug: "ai-voice-platform",

    category: "AI",

    featured: true,

    image: kridImage,

    description:
      "A secure AI-powered voice communication platform featuring authentication, real-time calling and intelligent call management.",

    summary:
      "Developed as a technical assessment to demonstrate full-stack architecture, authentication and scalable API development.",

    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "WebRTC"
    ],

    demo: "https://kridtech-ai.vercel.app/",

    repo: "#",

    problem:
      "Businesses require secure communication platforms that combine modern interfaces with reliable real-time communication.",

    features: [
      "Secure Authentication",
      "Call Management",
      "Real-time Communication",
      "Dashboard",
      "Session Tracking",
      "REST API"
    ],

    architecture:
      "Frontend built in React with Express backend, MongoDB storage and JWT authentication supporting secure communication workflows.",

    challenges:
      "Synchronizing real-time application state while maintaining secure authentication across multiple sessions.",

    lessons:
      "Improved my understanding of scalable backend architecture and real-time application development."
  },

  {
    title: "Developer Portfolio",

    slug: "portfolio",

    category: "Frontend",

    featured: true,

    image: portfolioImage,

    description:
      "A premium portfolio showcasing software engineering projects, technical expertise and case studies.",

    summary:
      "Responsive portfolio focused on performance, SEO and recruiter-friendly presentation.",

    tags: [
      "React",
      "JavaScript",
      "CSS",
      "SEO"
    ],

    demo: "https://dcrony.vercel.app",

    repo: "https://github.com/Dcrony/portfolio",

    problem:
      "Needed a professional platform capable of presenting software engineering work with technical depth rather than simple screenshots.",

    features: [
      "Project Showcase",
      "Case Studies",
      "SEO",
      "Responsive Design",
      "Resume Download"
    ],

    architecture:
      "React application with reusable components, routing and optimized asset loading.",

    challenges:
      "Balancing strong visual presentation with technical storytelling.",

    lessons:
      "Learned the importance of branding, developer experience and product storytelling."
  },

  {
    title: "Stripe Dashboard Clone",

    slug: "stripe-dashboard",

    category: "Dashboard",

    featured: false,

    image: dashboardImage,

    description:
      "A responsive analytics dashboard inspired by Stripe with modern layouts and financial reporting components.",

    summary:
      "Focused on responsive UI, reusable components and dashboard design systems.",

    tags: [
      "HTML",
      "Tailwind CSS",
      "JavaScript"
    ],

    demo: "https://stripedashboardclone.pxxl.click/",

    repo: "https://github.com/Dcrony/stripe_dashboard_clone",

    problem:
      "Demonstrate dashboard UI engineering skills with clean layouts and reusable components.",

    features: [
      "Responsive Dashboard",
      "Cards",
      "Charts",
      "Sidebar Navigation",
      "Modern Layout"
    ],

    architecture:
      "Responsive frontend developed with modular UI components.",

    challenges:
      "Maintaining responsiveness while preserving information hierarchy.",

    lessons:
      "Improved dashboard layout techniques and responsive design patterns."
  },

  {
    title: "Supermarket POS",

    slug: "supermarket-pos",

    category: "Business",

    featured: false,

    image: posImage,

    description:
      "Retail Point of Sale application supporting inventory management, checkout and reporting.",

    summary:
      "Full-stack PHP application built for retail businesses.",

    tags: [
      "PHP",
      "MySQL",
      "CSS"
    ],

    demo: "https://supermarketpos.pxxl.click/",

    repo: "https://github.com/Dcrony/supermarket",

    problem:
      "Retail businesses needed an affordable inventory and sales management solution.",

    features: [
      "Inventory",
      "Sales",
      "Receipts",
      "Reporting",
      "Authentication"
    ],

    architecture:
      "PHP backend connected to MySQL with server-rendered pages.",

    challenges:
      "Maintaining accurate stock while supporting fast checkout.",

    lessons:
      "Strengthened CRUD application architecture and relational database design."
  },

  {
    title: "Organic Skincare Store",

    slug: "organic-skincare",

    category: "E-Commerce",

    featured: false,

    image: ecommerceImage,

    description:
      "Premium e-commerce storefront for natural skincare products.",

    summary:
      "Responsive shopping experience focused on branding and product presentation.",

    tags: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript"
    ],

    demo: "https://oyeskin-natural.vercel.app/",

    repo: "https://github.com/Dcrony/Oyeskin-EC",

    problem:
      "Create an engaging online shopping experience for a skincare brand.",

    features: [
      "Responsive Design",
      "Product Pages",
      "Shopping Cart",
      "Brand Storytelling"
    ],

    architecture:
      "Frontend-only responsive application built with Bootstrap.",

    challenges:
      "Creating a premium shopping experience without backend services.",

    lessons:
      "Improved frontend performance and UI design."
  },

  {
    title: "Wuraola House of Beauty",

    slug: "wuraola",

    category: "Frontend",

    featured: false,

    image: beautyImage,

    description:
      "Marketing website promoting beauty services with modern branding and responsive layouts.",

    summary:
      "Designed to improve online presence and customer engagement.",

    tags: [
      "Tailwind CSS",
      "JavaScript",
      "Figma"
    ],

    demo: "https://wuraolahouseofbeauty.vercel.app/",

    repo: "https://github.com/Dcrony/Wuraolahouseofbeauty",

    problem:
      "Increase online visibility and improve customer acquisition.",

    features: [
      "Landing Pages",
      "Services",
      "Booking CTA",
      "Responsive Design"
    ],

    architecture:
      "Responsive frontend with reusable sections and optimized performance.",

    challenges:
      "Creating a premium brand experience using limited assets.",

    lessons:
      "Strengthened UI design and marketing-focused development."
  }
];

export default projects;