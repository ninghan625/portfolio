import AnchorNav from "@/components/case-study/AnchorNav";
import CaseHeader from "@/components/case-study/CaseHeader";
import CaseSection from "@/components/case-study/CaseSection";
import CaseCTA from "@/components/case-study/CaseCTA";
import Container from "@/components/Container";
import { getWorkBySlug, getNextWork } from "@/data/works";
import { getCaseStudyBySlug } from "@/lib/markdown";
import { notFound } from "next/navigation";
import Image from "next/image";

// Map slug to hero image path with cache-busting version
function getHeroImagePath(slug: string): string {
  const heroImageMap: Record<string, { path: string; version: string }> = {
    "i18n-currency-formatting-toolkit": { 
      path: "/images/Currency/hero.jpg",
      version: "202501220844"
    },
    "supplier-portal-sourcing-experience-optimization": { 
      path: "/images/supplier/hero.jpg",
      version: "202501222126" // Updated Jan 22, 21:26
    },
    "cloudtower-task-center-redesign": { 
      path: "/images/task/hero.jpg",
      version: "202501220845"
    },
    "business-travel-initiatives-across-mobile-web": { 
      path: "/images/travel/hero.jpg",
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
    <div className="min-h-screen bg-white pb-[120px]">
      {/* Hero Image - Full width at the top, 56px space below header */}
      {heroImagePath && (
        <Container maxWidth="868px" className="mb-[64px] pt-[56px]">
          <div className="w-full">
            <Image
              src={heroImagePath}
              alt={caseStudyData.title}
              width={852}
              height={0}
              className="h-auto w-full"
              priority
              unoptimized
            />
          </div>
        </Container>
      )}

      {/* Two-column layout: TOC + Content */}
      <Container maxWidth="868px">
        <div className="relative flex min-[840px]:gap-[64px]">
          {/* Left Column: Anchor Navigation (Sticky) */}
          <div className="hidden min-[840px]:block min-[840px]:w-[108px] min-[840px]:flex-shrink-0">
            <AnchorNav items={caseStudyData.anchors} />
          </div>

          {/* Right Column: Article Content */}
          <article className="mx-auto flex w-full max-w-[680px] flex-col gap-[60px] min-[840px]:mx-0">
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
      </Container>
    </div>
  );
}
