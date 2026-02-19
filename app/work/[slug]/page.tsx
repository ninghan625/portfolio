import AnchorNav from "@/components/case-study/AnchorNav";
import CaseHeader from "@/components/case-study/CaseHeader";
import CaseSection from "@/components/case-study/CaseSection";
import CaseCTA from "@/components/case-study/CaseCTA";
import { getWorkBySlug, getNextWork } from "@/data/works";
import { getCaseStudyBySlug } from "@/lib/markdown";
import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";

// Map slug to hero image path with cache-busting version
function getHeroImagePath(slug: string): string {
  const heroImageMap: Record<string, { path: string; version: string }> = {
    "i18n-currency-formatting-toolkit": { 
      path: "/images/Currency/Cover.jpg",
      version: "202501220844"
    },
    "supplier-portal-sourcing-experience-optimization": { 
      path: "/images/supplier/Cover.jpg",
      version: "202501222126" // Updated Jan 22, 21:26
    },
    "cloudtower-task-center-redesign": { 
      path: "/images/task/Cover.jpg",
      version: "202501220845"
    },
    "business-travel-initiatives-across-mobile-web": { 
      path: "/images/travel/Cover.jpg",
      version: "202501222126"
    },
  };
  
  const hero = heroImageMap[slug];
  return hero ? `${hero.path}?v=${hero.version}` : "";
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  // Get case study data from markdown file
  const caseStudyData = getCaseStudyBySlug(slug);

  // If no markdown file exists, show 404
  if (!caseStudyData) {
    notFound();
  }

  const nextWork = getNextWork(slug);
  const heroImagePath = getHeroImagePath(slug);

  return (
    <div className="flex min-h-screen flex-col items-center bg-white pb-[120px]">
      {/* Single container — matches Supplier layout exactly */}
      <div className="flex w-full max-w-[1080px] flex-col gap-[64px] px-[60px]">

        {/* 8px spacer + 64px container gap = 72px header clearance */}
        <div style={{ height: 8 }} />

        {/* Hero cover image */}
        {heroImagePath && (
          <div className="w-full">
            <Image
              src={heroImagePath}
              alt={caseStudyData.title}
              width={1080}
              height={0}
              className="h-auto w-full"
              priority
              unoptimized
            />
          </div>
        )}

        {/* Two-column layout: 108px sidebar + article */}
        <div className="flex w-full flex-row items-stretch gap-[80px] max-[839px]:flex-col max-[839px]:gap-[32px]">

          {/* Left: Anchor Navigation (sticky) */}
          <div className="hidden w-[108px] flex-shrink-0 min-[840px]:block">
            <AnchorNav items={caseStudyData.anchors} />
          </div>

          {/* Right: Article Content */}
          <article className={`${styles.caseStudyContent} flex min-w-0 flex-1 flex-col gap-[60px]`} data-slug={slug}>
            <CaseHeader
              title={caseStudyData.title}
              subtitle={caseStudyData.subtitle}
            />
            {caseStudyData.sections.map((section, index) => (
              <CaseSection key={index} data={section} />
            ))}
            <CaseCTA
              secondary={caseStudyData.cta.secondary}
              primary={nextWork ? caseStudyData.cta.primary : undefined}
              secondaryHref="/"
              primaryHref={nextWork ? `/work/${nextWork.slug}` : undefined}
            />
            <p className="text-[16px] leading-[24px] text-[#272e3b]">
              {caseStudyData.footerText}
            </p>
          </article>

        </div>
      </div>
    </div>
  );
}
