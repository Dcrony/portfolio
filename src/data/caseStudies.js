const caseStudies = [
  {
    title: "TickiSpot",
    slug: "tickispot",

    summary:
      "Building a modern SaaS platform that simplifies event creation, ticket sales and attendee management for organizers across Africa.",

    problem:
      "Many event organizers relied on multiple disconnected tools for ticket sales, attendee management, marketing and reporting. This increased costs, reduced efficiency and created a poor experience for both organizers and attendees.",

    research:
      "I analyzed leading event platforms such as Eventbrite, Ticketmaster and several African ticketing products to understand their strengths and shortcomings. I also interviewed organizers to understand their workflow before designing the solution.",

    planning:
      "The platform was divided into authentication, organizer dashboard, event management, ticketing, analytics, payments and community engagement. Every module was designed independently to improve scalability.",

    architecture:
      "TickiSpot follows a MERN architecture with a React frontend, Express.js backend and MongoDB database. JWT authentication secures protected resources while Cloudinary manages media uploads. REST APIs connect all application services.",

    database:
      "MongoDB collections were designed for users, organizers, events, ticket orders, transactions, analytics and notifications. Relationships were optimized for quick event retrieval and dashboard reporting.",

    authentication:
      "JWT authentication with role-based authorization ensures organizers and attendees access only the resources they own. Passwords are securely hashed and protected routes validate user sessions.",

    backend:
      "The Express backend exposes REST APIs for event creation, ticket purchases, organizer analytics, profile management, notifications and administrative operations.",

    frontend:
      "React components provide responsive event browsing, organizer dashboards, secure checkout flows and profile management with reusable UI architecture.",

    challenges:
      "The biggest challenge was maintaining a clean architecture while supporting different user roles, event management workflows and future scalability.",

    solution:
      "The application was built using reusable components, modular Express controllers, middleware-based authentication and optimized MongoDB queries.",

    results:
      "TickiSpot evolved into a production-ready SaaS platform capable of supporting organizers through the complete event lifecycle.",

    lessons:
      "This project significantly improved my skills in product architecture, authentication, REST API design, database modeling and scalable frontend development.",

    future:
      "Future versions will include AI event recommendations, QR code ticket validation, native mobile applications, organizer CRM features, live streaming and advanced analytics.",

    metrics: [
      "Production-ready SaaS Architecture",
      "Secure JWT Authentication",
      "Responsive User Experience",
      "Role-based Authorization",
      "Scalable REST APIs"
    ],

    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "REST API"
    ],

    repo: "https://github.com/Dcrony/tickispot",

    demo: "https://tickispot.com"
  },

  {
    title: "AI Voice Calling Platform",

    slug: "ai-voice-platform",

    summary:
      "Building a secure communication platform with AI-assisted voice interactions and scalable backend services.",

    problem:
      "Businesses increasingly require communication platforms that are secure, reliable and capable of supporting intelligent workflows.",

    research:
      "I studied WebRTC architecture, authentication models, signaling servers and AI integration patterns before beginning implementation.",

    planning:
      "Separated the application into authentication, communication services, dashboard management and session handling to improve maintainability.",

    architecture:
      "React frontend communicating with an Express backend using REST APIs and JWT authentication. WebRTC handles real-time communication.",

    database:
      "MongoDB stores user profiles, communication history and session information while temporary signaling remains in memory.",

    authentication:
      "JWT authentication protects communication endpoints and validates user sessions before establishing calls.",

    backend:
      "Express APIs coordinate authentication, session lifecycle, communication permissions and AI service integration.",

    frontend:
      "Modern React interface with responsive layouts, participant management and real-time communication controls.",

    challenges:
      "Keeping communication stable while synchronizing authentication state and application state across multiple users.",

    solution:
      "Application responsibilities were separated into modular services, improving scalability and reducing coupling.",

    results:
      "Delivered a robust prototype demonstrating modern backend architecture and real-time communication principles.",

    lessons:
      "Improved understanding of distributed application design and secure communication systems.",

    future:
      "AI voice assistants, automatic meeting summaries, speech transcription and multilingual translation.",

    metrics: [
      "Secure Authentication",
      "REST Architecture",
      "Real-time Communication",
      "Scalable Backend"
    ],

    techStack: [
      "React",
      "Express",
      "Node.js",
      "MongoDB",
      "JWT",
      "WebRTC"
    ],

    repo: "#",

    demo: "#"
  }
];

export default caseStudies;