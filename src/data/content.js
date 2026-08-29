// ============================================
// PORTFOLIO CONTENT — Single Source of Truth
// Edit this file to update all sections.
// ============================================

export const personalInfo = {
  name: "Ali Khan",
  firstName: "Ali",
  lastName: "Khan",
  title: "Backend AI Engineer",
  email: "alikhan9931786@gmail.com",
  phone: "+91 8434030815",
  location: "Lucknow, India",
  social: {
    github: "https://github.com/onlyhope1",
    linkedin: "https://www.linkedin.com/in/alikaujla/",
    instagram: "#",                                // ← UPDATE or remove
    youtube: "#",                                  // ← UPDATE or remove
  },
  resumeFile: "/resume.pdf",                      // Place your resume PDF in /public/resume.pdf
};

export const homeSection = {
  badge: "Available for work",
  greeting: "Hi, I'm",
  tagline: "I build intelligent backend systems and AI-powered applications with modern technologies.",
  stats: [
    { value: "1+", label: "Years Experience" },
    { value: "5+", label: "Projects Done" },
    { value: "50+", label: "Problems Solved" },
  ],
};

export const aboutSection = {
  badge: "ABOUT ME",
  headingLine1: "Turning Ideas Into",
  headingLine2: "Digital Reality",
  bio: "I'm a passionate Backend AI Engineer dedicated to building intelligent, scalable systems. With a strong foundation in Python, REST API design, and Generative AI, I transform complex problems into elegant, production-ready solutions. From RAG pipelines to full-stack MERN applications, I bring a fast learning curve and a love for clean, efficient code to every project I tackle.",
};

export const skills = [
  { name: "Python", percentage: 90, color: "#ef4444" },
  { name: "FastAPI", percentage: 85, color: "#06b6d4" },
  { name: "React", percentage: 75, color: "#10b981" },
  { name: "JavaScript", percentage: 88, color: "#eab308" },
  { name: "PostgreSQL", percentage: 80, color: "#ef4444" },
  { name: "MongoDB", percentage: 78, color: "#06b6d4" },
  { name: "Node.js", percentage: 72, color: "#10b981" },
  { name: "Redis", percentage: 82, color: "#eab308" },
];

export const certificates = [
  // [PLACEHOLDER] — Replace with your actual certifications
  {
    title: "Python for Data Science",
    issuer: "Coursera",
    year: "2024",
    verifyLink: "#",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Coding Spoon",
    year: "2024",
    verifyLink: "#",
  },
  {
    title: "Machine Learning Fundamentals",
    issuer: "Google",
    year: "2023",
    verifyLink: "#",
  },
  {
    title: "REST API Design",
    issuer: "Udemy",
    year: "2023",
    verifyLink: "#",
  },
];

export const projects = [
  {
    title: "AI-Powered Customer Support",
    description:
      "RESTful backend API using Python (FastAPI) with RAG pipeline and LLM integration, reducing manual query resolution by ~40%.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "LLM APIs"],
    github: "#",   // ← UPDATE with actual GitHub repo link
    demo: "#",     // ← UPDATE with actual live demo link
    image: null,   // Will use gradient placeholder
  },
  {
    title: "Zomato Clone (MERN)",
    description:
      "Full-stack food delivery app clone using the MERN stack with frontend UI, backend REST APIs, and database integration.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "#",
    demo: "#",
    image: null,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, carousel-style personal portfolio built with React, Tailwind CSS, and Framer Motion featuring dark/light theming.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#",
    image: null,
  },
];

export const contactSection = {
  badge: "Contact",
  heading: "Let's Build Something",
  headingAccent: "Great",
  subtitle: "Have a project in mind? Let's connect and bring your ideas to life.",
  formAction: `mailto:${personalInfo.email}`,
  // Or use Formspree: "https://formspree.io/f/YOUR_FORM_ID"
};
