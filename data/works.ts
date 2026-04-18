export type IconType = "toolkit" | "procurement" | "travel" | "task";

export interface WorkItem {
  title: string;
  subtitle: string;
  slug: string;
  iconType: IconType;
  previewImage: string;
  previewObjectPosition?: string;
  company: string;
  companyLogo: string;
  tags: string[];
}

export const works: WorkItem[] = [
  {
    title: "Supplier Portal Sourcing Experience Optimization",
    subtitle: "Increased online sourcing adoption by redesigning the supplier email + portal workflows end-to-end.",
    slug: "supplier-portal-sourcing-experience-optimization",
    iconType: "procurement",
    previewImage: "/images/supplier/hero.jpg",
    previewObjectPosition: "40% 50%",
    company: "ByteDance",
    companyLogo: "/icons/Bytedance.png",
    tags: ["Enterprise UX", "Redesign", "User Research", "Design Strategy"],
  },
  {
    title: "Internationalization at CIS: Mechanism, Specs, and an AI Skill",
    subtitle: "Led CIS's internationalization initiative end-to-end: running the spec lifecycle, delivering the currency standard, and shipping i18n-checker, an AI Skill that brings spec enforcement into design, R&D, and QA.",
    slug: "i18n-currency-formatting-toolkit",
    iconType: "toolkit",
    previewImage: "/images/Currency/hero.jpg",
    company: "ByteDance",
    companyLogo: "/icons/Bytedance.png",
    tags: ["i18n", "Design System", "AI Skill", "Vibe Coding", "Design Ops"],
  },
  {
    title: "CloudTower Task Center Redesign",
    subtitle: "Redesigned the Task Center to simplify complex status tracking and created a standardized component library to boost development efficiency.",
    slug: "cloudtower-task-center-redesign",
    iconType: "task",
    previewImage: "/images/task/hero.jpg",
    company: "SmartX",
    companyLogo: "/icons/smartx.png",
    tags: ["Infrastructure", "Redesign"],
  },
  {
    title: "Business Travel Initiatives Across Mobile & Web",
    subtitle: "Designed travel request and hotel selection flows acrossmobile and web.",
    slug: "business-travel-initiatives-across-mobile-web",
    iconType: "travel",
    previewImage: "/images/travel/hero.jpg",
    company: "ByteDance",
    companyLogo: "/icons/Bytedance.png",
    tags: ["0-1", "Map Design", "Enterprise Platform"],
  },
];

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return works.find((work) => work.slug === slug);
}

export function getNextWork(currentSlug: string): WorkItem | undefined {
  const currentIndex = works.findIndex((work) => work.slug === currentSlug);
  
  // If this is the last project, return undefined (no next project)
  if (currentIndex === works.length - 1) {
    return undefined;
  }
  
  const nextIndex = currentIndex + 1;
  return works[nextIndex];
}
