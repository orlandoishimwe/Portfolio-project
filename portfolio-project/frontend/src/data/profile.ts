export const profile = {
  firstName: "Orlando",
  lastName: "Ishimwe Havugintwari",
  fullName: "Ishimwe Havugintwari Orlando",
  role: "Software Engineering student",
  location: "Kigali, Rwanda",
  email: "orlandoishimwe@gmail.com",
  phone: "+250789600091",
  github: "https://github.com/orlandoishimwe",
  linkedin: "https://linkedin.com/in/[your-username]",
  cvFile: "/Orlando_CV.pdf",
  tagline: "I build fast, no-nonsense websites for real businesses.",
  intro:
    "I'm a web developer and software engineering student in Kigali, building digital products for local businesses — bookstores, restaurants, barbershops, hotels, and nonprofits. I care about sites that load fast, work on the first try, and actually help solve business problems and make money.",
  aboutParagraphs: [
    "I work end to end: discovery calls with the business owner, wireframes, build, payment integration, and the follow-up support after launch. Most of my clients are Kigali-based hospitality, food & beverage, retail, and nonprofit organizations who need a site that does real work — bookings, checkout, donations — not just a brochure.",
    "Outside client work, I'm studying at Adventist University of Central Africa, where coursework in big data pipelines and software design patterns feeds directly back into how I structure and ship production code.",
  ],
};

export type Project = {
  name: string;
  client: string;
  sector: string;
  year: string;
  description: string;
  stack: string[];
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "MegaP House & Kiza Foundation",
    client: "MegaP Book House Ltd",
    sector: "Bookstore / Nonprofit",
    year: "2026",
    description:
      "A dual-purpose platform: an e-commerce bookstore (MegaP House) with full checkout, paired with a fully separate nonprofit site for the Kiza Foundation — programs, gallery, and a donation portal — built as its own routed sub-site rather than a scrolled section.",
    stack: ["Vue 3", "Vite", "Node.js", "Express", "Neon Postgres", "Pesapal"],
    href: "https://megapbookhouse.com",
    featured: true,
  },
  {
    name: "Kigali Clipper Zone",
    client: "Kigali Clipper Zone",
    sector: "Barbershop",
    year: "2026",
    description:
      "A booking-first site for a Kigali barbershop, with a protected admin dashboard for managing appointments and automated confirmation emails.",
    stack: ["Vue 3", "Vite", "Neon Postgres", "Resend"],
    featured: true,
  },
  {
    name: "Dontez Restaurant",
    client: "Dontez Restaurant",
    sector: "Restaurant",
    year: "2025",
    description:
      "A restaurant site built around motion: a scroll-driven pizza animation and a component-per-section architecture that keeps the build easy to extend.",
    stack: ["Vue 3", "Vite", "GSAP"],
    featured: true,
  },
  {
    name: "Cloud9",
    client: "Cloud9 Rooftop Restaurant",
    sector: "Restaurant",
    year: "2025",
    description: "Rooftop restaurant site built in phased delivery — discovery, design, build, review, launch.",
    stack: ["Vue 3", "Vite"],
  },
  {
    name: "Feels",
    client: "Feels Coffee & Restaurant",
    sector: "Café / Restaurant",
    year: "2025",
    description: "Coffee-and-restaurant hybrid site for a Kigali café.",
    stack: ["Vue 3", "Vite"],
  },
  {
    name: "Atelier du Vin",
    client: "Atelier du Vin",
    sector: "Wine bar",
    year: "2025",
    description: "Wine bar site with a focus on ambience-led visual design.",
    stack: ["Vue 3", "Vite"],
  },
  {
    name: "Chris Hotel",
    client: "Chris Hotel",
    sector: "Hospitality",
    year: "2025",
    description: "Hotel site covering rooms, amenities, and booking enquiries.",
    stack: ["Vue 3", "Vite"],
  },
  {
    name: "Indabo Café",
    client: "Indabo Café",
    sector: "Café",
    year: "2025",
    description: "Café site for a Kigali neighborhood spot.",
    stack: ["Vue 3", "Vite"],
  },
];

export const academicProjects: Project[] = [
  {
    name: "Internet Usage — Big Data Pipeline",
    client: "Coursework — Introduction to Big Data Using Python",
    sector: "Academic",
    year: "2026",
    description:
      "Full ETL, ML, and dashboarding pipeline built against the World Bank's individuals-using-the-internet indicator, from raw extraction through a Tableau dashboard and a small AI assistant layer.",
    stack: ["Python", "Pandas", "NumPy", "PostgreSQL", "Tableau"],
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Java", "Python", "SQL"] },
  { label: "Frontend", items: ["Vue 3", "Vite", "React", "GSAP"] },
  { label: "Backend", items: ["Node.js", "Express", "Spring Boot", "Neon Postgres"] },
  { label: "Tools & practice", items: ["Git/GitHub", "Design patterns", "Tableau", "Payment integration (Pesapal, DPO Pay)"] },
];

export const education = {
  school: "Adventist University of Central Africa",
  program: "Software Engineering",
  location: "Kigali, Rwanda",
  period: "[Start year] — Present",
  notes: [
    "Introduction to Big Data Using Python — ETL pipelines, Pandas/NumPy analysis, Tableau dashboarding",
    "SENG 8415, Best Programming Practices & Design Patterns — Singleton, Factory, Builder, Adapter, Decorator, Facade, Strategy",
  ],
};

export const experience = [
  {
    role: "Freelance Web Developer",
    org: "Independent — Kigali, Rwanda",
    period: "[Start year] — Present",
    points: [
      "Design, build, and deploy websites for local hospitality, food & beverage, retail, and nonprofit clients across Kigali.",
      "Run the full project lifecycle: discovery and pitching, wireframes, build, payment integration, and post-launch support.",
      "Consistent stack: Vue 3 + Vite frontends, Node.js/Express backends, Neon serverless Postgres.",
    ],
  },
];
