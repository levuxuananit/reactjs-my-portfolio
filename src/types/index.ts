import type { LucideIcon } from 'lucide-react';

export interface LinksType {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface ProjectType {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink: string;
  demoLink: string;
}

export interface ExperienceType {
  year: string;
  title: string;
  institute: string;
  desc: string;
}

export interface ToolsType {
  label: string;
  imgSrc: string;
}

export interface ServiceType {
  title: string;
  desc: string;
  // projects: string;
  icon: React.ReactNode;
}

export interface StatsType {
  number: string;
  label: string;
}

export interface TestimonialsType {
  name: string;
  role: string;
  image: string;
  text: string;
  href: string;
}