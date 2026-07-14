/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from "@/types";

/**
 * Assets
 */
import {
  Briefcase,
  Facebook,
  FileText,
  Home,
  Instagram,
  Mail,
  Rocket,
  User,
  Youtube,
  Linkedin,
  CloudCheck,
  SquareDashedBottomCode,
  MonitorCloud,
  Workflow,
  Github,
} from "lucide-react";

const navLinks: LinksType[] = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "About", href: "#about", icon: User },
  {
    label: "Projects",
    href: "#projects",
    icon: Briefcase,
  },

  // {
  //   label: 'Services',
  //   href: '#services',
  //   icon: KeyRound,
  // },
  { label: "Resume", href: "#resume", icon: FileText },
  { label: "Contact", href: "#contact", icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/xuanan.levu",
  },
  {
    icon: Linkedin,
    label: "Twitter",
    href: "https://www.linkedin.com/in/levuxuanan/",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/_xuanein/",
  },
  {
    icon: Github,
    label: "Github",
    href: "https://github.com/levuxuananit",
  },
  {
    icon: Youtube,
    label: "Youtube",
    href: "https://www.youtube.com/@thanhxuankhongngu",
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: "/images/chatify-lite.png",
    title: "Realtime Chatify Lite",
    desc: "A real-time chat application built with the MERN stack and Socket.io, supporting instant messaging and multi-user chat rooms.",
    tags: ["Javascript", "Node.js", "MongoDB", "React", "JWT", "Socket.io"],
    projectLink: "https://github.com/levuxuananit/mern-chatify",
    demoLink: "https://chatify-wb3i.onrender.com/",
  },
  {
    imgSrc: "/images/reatal-real-estate-website-project.png",
    title: "Rental Real Estate Website",
    desc: "A full-stack real estate platform featuring diverse property listings, flexible search filters, PayPal payment integration for listing renewals, and an admin dashboard for site monitoring and blocking false listings.",
    tags: ["Javascript", "Node.js", "MongoDB", "React", "JWT", "Paypal"],
    projectLink:
      "https://github.com/levuxuananit/mern-reatal-real-estate-website-project",
    demoLink: "https://nhaviet.onrender.com/",
  },
  {
    imgSrc: "/images/rag-chatbot.png",
    title: "Personalized RAG Chatbot",
    desc: "An AWS-powered RAG chatbot using Amazon Bedrock and Knowledge Base to deliver personalized, context-aware responses with generative AI.",
    tags: [
      "React",
      "AWS Amplify",
      "Amazon Bedrock",
      "AWS Lambda",
      "Amazon API Gateway",
      "Amazon Cognito",
      "Amazon S3",
    ],
    projectLink: "https://github.com/levuxuananit/aws-rag-chatbot",
    demoLink:
      "https://levuxuananit.github.io/aws-personalized-rag-chatbot-workshop/",
  },
  {
    imgSrc: "/images/white-cloud_docker-architect.png",
    title: "Deploying Dockerized Applications on AWS",
    desc: "A hands-on infrastructure project focused on containerizing a full-stack application (React/Node.js) and deploying it on AWS. The system utilizes Nginx as a reverse proxy/load balancer, hosts Docker images on Amazon ECR/Docker Hub, runs containerized workloads on Amazon EC2, and manages persistent data with Amazon RDS in a secure VPC environment.",
    tags: [
      "React",
      "Node.js",
      "Docker",
      "Amazon VPC",
      "Amazon EC2",
      "Amazon RDS",
      "Amazon ECR",
      "MySQL",
    ],
    projectLink: "https://github.com/levuxuananit/aws-table-cloud-pos",
    demoLink:
      "https://levuxuananit.github.io/aws-workshop-deploy-app-on-docker-with-aws/1-introduce/",
  },
  {
    imgSrc: "/images/my-portfolio.png",
    title: "My Portfolio",
    desc: "A personal portfolio website built with React and TypeScript, showcasing projects, skills, and experience with smooth animations.",
    tags: ["TypeScript", "React", "TailwindCSS"],
    projectLink: "https://github.com/levuxuananit/reactjs-my-portfolio",
    demoLink: "https://levuxuanan-portfolio.vercel.app/",
  },
];

const education: ExperienceType[] = [
  {
    year: "9/2021 - 9/2025",
    title: "Bachelor of Engineering in Information Technology",
    institute: "HCMC University of Technology & Education",
    desc: "Top 3 Outstanding Student Leaders at University Level. Founder & Leader of AWS Student Builder Group at HCMUTE. Exemplary Student with Significant Contributions to University Programs and Activities.",
  },
];

const experience: ExperienceType[] = [
  {
    year: "11/2025 – Present",
    title: "Software Developer",
    institute: "R2S Joint Stock Company",
    desc: "Collaborated in an Agile/Scrum team to develop REST APIs with Spring Boot/Node.js. Used JUnit 5 and Mockito for Unit/Integration testing to get >85% test coverage and fix 90% of logic bugs before handover.",
  },
  {
    year: "1/2025 – 7/2026",
    title: "Cloud Engineer Ambassador",
    institute: "AWS Vietnam Company Limited",
    desc: "Collaborated as a developer on an ACBS GenAI PoC, building AWS Lambda and Bedrock integrations that convert natural language into SQL queries with >90% accuracy, enabling secure AWS Redshift retrieval and saving 30% in processing time.",
  },
];

const tools: ToolsType[] = [
  {
    label: "Java",
    imgSrc: "/images/tools/java.svg",
  },
  {
    label: "JavaScript",
    imgSrc: "/images/tools/javascript.svg",
  },
  {
    label: "Springboot",
    imgSrc: "/images/tools/springboot.svg",
  },
  {
    label: "Node.js",
    imgSrc: "/images/tools/nodejs.svg",
  },
  {
    label: "React",
    imgSrc: "/images/tools/react.svg",
  },
  {
    label: "PostgreSQL",
    imgSrc: "/images/tools/postgresql.svg",
  },
  {
    label: "MongoDB",
    imgSrc: "/images/tools/mongodb.svg",
  },
  {
    label: "Oracle",
    imgSrc: "/images/tools/oracle.svg",
  },
  {
    label: "AWS",
    imgSrc: "/images/tools/aws.svg",
  },
  {
    label: "Docker",
    imgSrc: "/images/tools/docker.svg",
  },
  {
    label: "Terraform",
    imgSrc: "/images/tools/terraform.svg",
  },
  {
    label: "Jenkins",
    imgSrc: "/images/tools/Jenkins.svg",
  },
  {
    label: "Github",
    imgSrc: "/images/tools/github.svg",
  },
  {
    label: "Gitlab",
    imgSrc: "/images/tools/gitlab.svg",
  },
  {
    label: "Jira",
    imgSrc: "/images/tools/jira.svg",
  },
];

const services: ServiceType[] = [
  {
    title: "Cloud Architecture",
    desc: "Designing and implementing scalable, secure cloud infrastructures using AWS best practices.",
    // projects: '32 Projects',
    icon: <CloudCheck className="h-6 w-6 text-green-400" />,
  },
  {
    title: "CI/CD & Automation",
    desc: "Creating reusable, automated infrastructure with Terraform, CloudFormation, and other IaC tools.",
    // projects: '47 Projects',
    icon: <Workflow className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Infrastructure as Code (IaC)",
    desc: "Building high-performance, SEO-friendly websites using Next.js, Tailwind, and modern web technologies.",
    // projects: '58 Projects',
    icon: <SquareDashedBottomCode className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Monitoring & Performance Optimization",
    desc: "Implementing logging, monitoring, and optimization strategies to ensure reliable system performance.",
    // projects: '21 Projects',
    icon: <MonitorCloud className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Technical Workshops & Mentorship",
    desc: "Delivering hands-on cloud workshops and mentoring peers in AWS and DevOps best practices.",
    // projects: '15 Projects',
    icon: <Rocket className="h-6 w-6 text-green-400" />,
  },
];

const statsData: StatsType[] = [
  {
    number: "01+",
    label: "Years Of Cloud Experience",
  },
  {
    number: "05+",
    label: "Workshops & Events Led",
  },
  {
    number: "100+",
    label: "members tech group lead",
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: "Alex Tomato",
    role: "Brand Manager at Instant Design",
    image: "/images/testimonials/alex.jpg",
    text: "Working with David was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.",
    href: "https://linkedin.com/in/alex-tomato",
  },
  {
    name: "Sara Bloom",
    role: "Founder at Bloom Agency",
    image: "/images/testimonials/sara.jpg",
    text: "David brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.",
    href: "https://linkedin.com/in/sara-bloom",
  },
  {
    name: "John Park",
    role: "CEO at PixelFlow",
    image: "/images/testimonials/john.jpg",
    text: "From UI/UX design to front-end implementation, David handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.",
    href: "https://linkedin.com/in/john-park",
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  testimonials,
};
