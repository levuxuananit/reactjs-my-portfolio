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
} from '@/types';

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
  Github
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home',
    href: '#hero',
    icon: Home
  },
  { label: 'About',
  href: '#about',
  icon: User
  },
  {
    label: 'Projects',
    href: '#projects',
    icon: Briefcase,
  },
  
  // {
  //   label: 'Services',
  //   href: '#services',
  //   icon: KeyRound,
  // },
  { label: 'Resume',
    href: '#resume',
    icon: FileText
  },
  { label: 'Contact',
    href: '#contact',
    icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/xuanan.levu',
  },
  {
    icon: Linkedin,
    label: 'Twitter',
    href: 'https://www.linkedin.com/in/levuxuanan/',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/_xuanein/',
  },
  {
    icon: Github,
    label: 'Github',
    href: 'https://github.com/levuxuananit',
  },
  {
    icon: Youtube,
    label: 'Youtube',
    href: 'https://www.youtube.com/@thanhxuankhongngu',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/my-portfolio.png',
    title: 'my-portfolio',
    tags: ['TypeScript', 'ReactJS'],
    projectLink: 'https://github.com/example/ecommerce',
    demoLink: 'https://github.com/example/ecommerce',
  },
  {
    imgSrc: '/images/chatify-lite.png',
    title: 'realtime-chatify-lite',
    tags: ['MERN Stack', 'Socket.io'],
    projectLink: 'https://github.com/levuxuananit/mern-realtime-chatify-lite-mtp-app',
    demoLink: 'https://chatify-lite.sevalla.app/',
  },
  {
    imgSrc: '/images/reatal-real-estate-website-project.png',
    title: 'reatal-real-estate-website-project',
    tags: ['MERN Stack', 'Paypal'],
    projectLink: 'https://github.com/levuxuananit/mern-reatal-real-estate-website-project',
    demoLink: 'https://github.com/levuxuananit/mern-reatal-real-estate-website-project',
  },
  {
    imgSrc: '/images/rag-chatbot.png',
    title: 'rag-chatbot',
    tags: ['AWS', 'GenAI'],
    projectLink: 'https://github.com/levuxuananit/aws-rag-chatbot',
    demoLink: 'https://levuxuananit.github.io/AWS-RAG-CHATBOT-WORKSHOP/',
  }
];

const education: ExperienceType[] = [
  {
    year: '2021 – 2025',
    title: 'Bachelor of Engineering in Information Technology',
    institute: 'HCMC University of Technology & Education',
    desc: 'Specialized in software engineering, databases, and modern web technologies with practical, project-based learning.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2024 – Present',
    title: 'Cloud Engineer Ambassador',
    institute: 'AWS First Cloud Journey / Internship / Hybrid',
    desc: 'Develop hands-on AWS workshops, speak at technical events, and work on real-world GenAI projects for AWS securities customers.',
  },
  {
    year: '11/2025 – 11/2026',
    title: 'AWS Cloud Club Captain',
    institute: 'AWS Cloud Club HCMUTE / Fulltime',
    desc: 'Directed club operations, developed cloud-focused workshops, and mentored members in AWS fundamentals and practical skills.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'Python',
    imgSrc: '/images/tools/python.svg',
  },
  {
    label: 'JavaScript',
    imgSrc: '/images/tools/javascript.svg',
  },
  {
    label: 'MongoDB',
    imgSrc: '/images/tools/mongodb.svg',
  },
  {
    label: 'React',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'Express.js',
    imgSrc: '/images/tools/expressjs.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/images/tools/nodejs.svg',
  },
  {
    label: 'Next.js',
    imgSrc: '/images/tools/nextjs.svg',
  },
  {
    label: 'AWS',
    imgSrc: '/images/tools/aws.svg',
  },
  {
    label: 'Docker',
    imgSrc: '/images/tools/docker.svg',
  },
  {
    label: 'Terraform',
    imgSrc: '/images/tools/terraform.svg',
  },
  {
    label: 'Kubernetes',
    imgSrc: '/images/tools/kubernetes.svg',
  },
  {
    label: 'Jenkins',
    imgSrc: '/images/tools/Jenkins.svg',
  },
  {
    label: 'Github',
    imgSrc: '/images/tools/github.svg',
  },
  {
    label: 'Gitlab',
    imgSrc: '/images/tools/gitlab.svg',
  },
  {
    label: 'Jira',
    imgSrc: '/images/tools/jira.svg',
  },
];

const services: ServiceType[] = [
  {
    title: 'Cloud Architecture',
    desc: 'Designing and implementing scalable, secure cloud infrastructures using AWS best practices.',
    // projects: '32 Projects',
    icon: <CloudCheck className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'CI/CD & Automation',
    desc: 'Creating reusable, automated infrastructure with Terraform, CloudFormation, and other IaC tools.',
    // projects: '47 Projects',
    icon: <Workflow className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Infrastructure as Code (IaC)',
    desc: 'Building high-performance, SEO-friendly websites using Next.js, Tailwind, and modern web technologies.',
    // projects: '58 Projects',
    icon: <SquareDashedBottomCode className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Monitoring & Performance Optimization',
    desc: 'Implementing logging, monitoring, and optimization strategies to ensure reliable system performance.',
    // projects: '21 Projects',
    icon: <MonitorCloud className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Technical Workshops & Mentorship',
    desc: 'Delivering hands-on cloud workshops and mentoring peers in AWS and DevOps best practices.',
    // projects: '15 Projects',
    icon: <Rocket className='h-6 w-6 text-green-400' />,
  },
];

const statsData: StatsType[] = [
  {
    number: '01+',
    label: 'Years Of Cloud Experience',
  },
  {
    number: '05+',
    label: 'Workshops & Events Led',
  },
  {
    number: '100+',
    label: 'members tech group lead',
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: 'Alex Tomato',
    role: 'Brand Manager at Instant Design',
    image: '/images/testimonials/alex.jpg',
    text: 'Working with David was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.',
    href: 'https://linkedin.com/in/alex-tomato',
  },
  {
    name: 'Sara Bloom',
    role: 'Founder at Bloom Agency',
    image: '/images/testimonials/sara.jpg',
    text: 'David brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.',
    href: 'https://linkedin.com/in/sara-bloom',
  },
  {
    name: 'John Park',
    role: 'CEO at PixelFlow',
    image: '/images/testimonials/john.jpg',
    text: 'From UI/UX design to front-end implementation, David handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.',
    href: 'https://linkedin.com/in/john-park',
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