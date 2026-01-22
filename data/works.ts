export type IconType = "toolkit" | "procurement" | "travel" | "task";

export interface WorkItem {
  title: string;
  subtitle: string;
  slug: string;
  iconType: IconType;
  previewImage: string;
  previewObjectPosition?: string;
}

export const works: WorkItem[] = [
  {
    title: "i18n Currency Formatting Toolkit",
    subtitle: "Guidelines + Figma plugin for consistent multi-currency UI.",
    slug: "i18n-currency-formatting-toolkit",
    iconType: "toolkit",
    previewImage: "/images/Currency/hero.jpg",
  },
  {
    title: "Supplier Portal Sourcing Experience Optimization",
    subtitle: "Boosted adoption with an email-first, transparent workflow.",
    slug: "supplier-portal-sourcing-experience-optimization",
    iconType: "procurement",
    previewImage: "/images/supplier/hero.jpg",
    previewObjectPosition: "40% 50%",
  },
  {
    title: "CloudTower Task Center Redesign",
    subtitle: "Simplified status tracking with reusable components.",
    slug: "cloudtower-task-center-redesign",
    iconType: "task",
    previewImage: "/images/task/hero.jpg",
  },
  {
    title: "Business Travel Initiatives Across Mobile & Web",
    subtitle: "Design contributions across request, booking, and in-trip management",
    slug: "business-travel-initiatives-across-mobile-web",
    iconType: "travel",
    previewImage: "/images/travel/hero.jpg",
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
