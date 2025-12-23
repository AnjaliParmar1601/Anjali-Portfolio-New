
import { Experience, Project, Education, SkillCategory, Service } from './types';

export const SOCIAL_LINKS = {
  email: "anjaliparmar2433@gmail.com",
  linkedin: "https://linkedin.com/in/anjali-parmar161",
  github: "https://github.com/AnjaliParmar1601",
  phone: "+91 7874048186",
  whatsapp: "https://wa.me/917874048186?text=Hi%20Anjali,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
  resume: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" // Placeholder for actual resume file
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "exp-1",
    company: "Tenup Software Services",
    role: "Frontend Engineer",
    period: "09/2023 - Present",
    location: "Vadodara",
    description: [
      "Architecting and engineering high-performance client-side applications tailored to complex specifications.",
      "Spearheading the development of the 'DAP' SIM card services portal using Angular, designing seamless user workflows for activation services.",
      "Developing the 'Lender Finance Widget Tool' utilizing ReactJS and Bootstrap, creating a plug-and-play finance model integrator.",
      "Enhancing e-commerce financial capabilities by enabling seamless widget integration into Shopify and various other platforms."
    ]
  },
  {
    id: "exp-2",
    company: "Commerce Pundit Technologies Pvt. Ltd",
    role: "Frontend Developer",
    period: "05/2021 - 05/2023",
    location: "Ahmedabad",
    description: [
      "Led frontend development for 'Canvaschamp', a multi-domain gifting platform serving six major global markets (India, USA, UK, Australia, NZ, Canada).",
      "Engineered responsive, scalable interfaces using HTML, CSS, LESS, React, and Magento.",
      "Collaborated extensively with backend teams and designers to optimize UI/UX performance.",
      "Implemented rigorous code standards and performance optimizations, working closely with QA to ensure defect-free deployments."
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    title: "DAP (Digital Activation Portal)",
    description: "A comprehensive SIM card services portal designed to streamline telecommunication workflows.",
    techStack: ["Angular", "TypeScript", "SCSS", "RxJS"],
    features: [
      "Seamless service navigation workflows",
      "Reusable Angular component library",
      "Real-time SIM activation processing",
      "Client-specific architecture adaptation"
    ]
  },
  {
    id: "proj-2",
    title: "Lender Finance Widget",
    description: "A modular financial integration tool designed for e-commerce scalability.",
    techStack: ["ReactJS", "Bootstrap", "JavaScript", "REST APIs"],
    features: [
      "Plug-and-play Shopify integration",
      "Cross-platform e-commerce support",
      "Real-time finance calculation logic",
      "Responsive finance modeling interface"
    ]
  },
  {
    id: "proj-3",
    title: "Canvaschamp Global",
    description: "Multi-domain e-commerce platform for personalized gifting across 6 countries.",
    techStack: ["React", "Magento", "LESS", "HTML5"],
    features: [
      "Multi-region domain management",
      "High-performance responsive layout",
      "Complex product customization UI",
      "Optimized newsletter delivery systems"
    ]
  },
  {
    id: "proj-4",
    title: "Cloud E-Learning System",
    description: "Academic cloud-based educational platform for device-agnostic video tutorials.",
    techStack: ["Python", "MySQL", "Bootstrap 4", "HTML5"],
    features: [
      "Device-independent access",
      "Cloud-based video streaming",
      "Secure backend data handling",
      "Responsive student interface"
    ]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: "edu-1",
    institution: "L.D College of Engineering",
    degree: "Bachelor of Engineering",
    period: "06/2018 – 06/2021",
    location: "Ahmedabad",
    grade: "CGPA: 8.34"
  },
  {
    id: "edu-2",
    institution: "R.C Technical Institute Sola",
    degree: "Diploma in Information Technology",
    period: "06/2015 – 06/2018",
    location: "Ahmedabad",
    grade: "CGPA: 8.47"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Core & Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Python", "SQL"]
  },
  {
    title: "Frontend Frameworks",
    skills: ["ReactJS", "Angular", "Redux", "RxJS", "jQuery"]
  },
  {
    title: "UI Engineering",
    skills: ["Tailwind CSS", "Bootstrap", "SCSS/LESS", "Responsive Design", "GSAP"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "JIRA", "Bitbucket", "VS Code", "Webpack"]
  },
  {
    title: "Design & CMS",
    skills: ["Figma", "Magento", "Shopify", "WordPress", "Photoshop"]
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "serv-1",
    title: "Single Page Application",
    description: "Developing fast, responsive, and seamless single-page applications using React or Angular for enhanced user experience.",
    icon: "Layout"
  },
  {
    id: "serv-2",
    title: "UI/UX Development",
    description: "Transforming design mockups into pixel-perfect, interactive, and accessible user interfaces with modern styling.",
    icon: "Palette"
  },
  {
    id: "serv-3",
    title: "Performance Optimization",
    description: "Analyzing and optimizing web applications for maximum speed, scalability, and efficiency across all devices.",
    icon: "Zap"
  }
];
