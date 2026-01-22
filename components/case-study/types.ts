export interface MediaBlockData {
  type: "placeholder" | "image";
  caption: string;
  src?: string;
}

export type ContentItem = 
  | { type: "text"; content: string }
  | { type: "media"; data: MediaBlockData };

export interface SubSectionData {
  heading: string;
  body: string[];
  media?: MediaBlockData[];
  content?: ContentItem[];
}

export interface CalloutData {
  heading: string;
  body: string;
  pdfUrl?: string;
}

export interface SectionData {
  label: string;
  subSections: SubSectionData[];
  callout?: CalloutData;
}

export interface CaseStudyData {
  title: string;
  subtitle: string;
  anchors: string[];
  sections: SectionData[];
  cta: {
    secondary: string;
    primary: string;
  };
  footerText: string;
}
