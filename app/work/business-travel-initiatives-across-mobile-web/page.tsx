import Image from "next/image";
import {
  CaseStudyLayout,
  PageTitle,
  Eyebrow,
  SectionHeadline,
  Subheading,
  BodyText,
  Figure,
  type TOCItem,
} from "@/components/case-study-v2";
import s from "./page.module.css";

const TOC_ITEMS: TOCItem[] = [
  { id: "context", label: "Context" },
  { id: "challenge", label: "Challenge" },
  { id: "mobile-trip-request", label: "Mobile Trip Request" },
  { id: "web-hotel-booking", label: "Web Hotel Booking" },
];

export default function BusinessTravelPage() {
  return (
    <div className={s.page}>
      <div className={s.hero}>
        <div className={s.heroInner}>
          <Image
            src="/images/travel/Cover.jpg"
            alt="Business travel initiatives across mobile and web"
            width={2400}
            height={1009}
            className={s.heroImg}
            priority
            unoptimized
          />
        </div>
      </div>

      <CaseStudyLayout tocItems={TOC_ITEMS}>
        <div className={s.titleBlock}>
          <PageTitle>
            Designing business travel initiatives across mobile and web
          </PageTitle>
        </div>

        {/* ══ CONTEXT ══ */}
        <section id="context" className={s.section}>
          <Eyebrow>Context</Eyebrow>
          <SectionHeadline>
            Bundled travel initiatives that show how I design enterprise
            workflows end to end
          </SectionHeadline>

          <div className={s.introBody}>
            <BodyText>
              <p>
                This case study summarizes the main{" "}
                <strong>business travel initiatives</strong> I designed on the
                ByteDance Travel team. They were delivered at different times
                under the same constraints:{" "}
                <strong>
                  policy compliance, approval efficiency, and travel decision
                  making
                </strong>
                .
              </p>
              <p>
                I&apos;ve grouped them to show how I design{" "}
                <strong>
                  end-to-end enterprise workflows across mobile and web
                </strong>
                , for both <strong>travelers (applicants)</strong> and{" "}
                <strong>approvers</strong>.
              </p>
            </BodyText>
          </div>
        </section>

        {/* ══ CHALLENGE ══ */}
        <section id="challenge" className={s.section}>
          <Eyebrow>Challenge</Eyebrow>
          <SectionHeadline>
            Three recurring patterns shaped every initiative on the travel team
          </SectionHeadline>

          <div className={s.subBlock}>
            <Subheading>
              Flexibility and compliance pull in opposite directions
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  Trips change often, but policy and approval rules have to stay
                  enforceable.
                </p>
              </BodyText>
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              Travelers and approvers operate on different mental models
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  Travelers optimize for <strong>speed and control</strong>.
                  Approvers optimize for{" "}
                  <strong>clarity and risk reduction</strong>. Every screen has
                  to satisfy both.
                </p>
              </BodyText>
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              Hotel booking carries high decision effort that needs spatial
              context
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  Hotel choice needs location context, but a default map UI can
                  be noisy and inconsistent inside an internal product.
                </p>
              </BodyText>
            </div>
          </div>
        </section>

        {/* ══ MOBILE TRIP REQUEST ══ */}
        <section id="mobile-trip-request" className={s.section}>
          <Eyebrow>Initiative One</Eyebrow>
          <SectionHeadline>
            Mobile Trip Request: structured itinerary planning with low editing
            friction
          </SectionHeadline>

          <div className={s.subBlock}>
            <Subheading>
              Travelers now specify a daily schedule per city, so approvers can
              judge necessity
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  Old request flow asked only for a date range and a generic
                  reason. Approvers had no view into what travelers actually
                  planned to do, and unnecessary trips slipped through.
                </p>
                <p>
                  The new flow requires{" "}
                  <strong>time and a work plan per city</strong>, so approvers
                  can judge whether the trip is necessary and reduce unneeded
                  spend.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/travel/travel%2001.jpg"
                alt="Structured per-city itinerary in the trip request flow"
                width={2013}
                height={1194}
              />
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              Drag-and-drop itinerary cards kept the added input fast and
              non-blocking
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  The added input was unavoidable, so I focused on making edits
                  fast. <strong>Drag-and-drop itinerary cards</strong> let
                  travelers reorder trip segments without re-entering details.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/travel/travel%2002.jpg"
                alt="Drag-and-drop itinerary cards for reordering trip segments"
                width={2256}
                height={1158}
              />
            </div>
          </div>

          <div className={s.statGrid}>
            <div className={s.statItem}>
              <div className={s.statLabel}>Adoption</div>
              <div className={s.statValue}>31.02% of employees</div>
              <div className={s.statNote}>22.68% of requests</div>
            </div>
            <div className={s.statItem}>
              <div className={s.statLabel}>Annual Savings</div>
              <div className={s.statValue}>146M RMB</div>
              <div className={s.statNote}>Estimated</div>
            </div>
            <div className={s.statItem}>
              <div className={s.statLabel}>Satisfaction</div>
              <div className={s.statValue}>4.98 / 5</div>
              <div className={s.statNote}>Post-launch survey</div>
            </div>
          </div>
        </section>

        {/* ══ WEB HOTEL BOOKING ══ */}
        <section id="web-hotel-booking" className={s.section}>
          <Eyebrow>Initiative Two</Eyebrow>
          <SectionHeadline>
            Web Hotel Booking: map-based decision support near the company
            location
          </SectionHeadline>

          <div className={s.subBlock}>
            <Subheading>
              A map plus list experience supports comparison and confidence, not
              just a map view
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  The goal was helping employees choose hotels faster by adding{" "}
                  <strong>spatial context</strong> to the booking flow. I
                  designed the map and list to work as one surface:{" "}
                  <strong>distance, price, and availability</strong> are
                  comparable in the same glance, instead of forcing the user to
                  toggle between two views.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/travel/travel%2003a.jpg"
                alt="Map and list together in the hotel booking flow"
                width={2082}
                height={2400}
              />
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/travel/travel%2003b.jpg"
                alt="Map and list interactions"
                width={2080}
                height={2400}
              />
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              Custom map styling made Google Maps feel first-party
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  Default Google Maps felt visually external and too dense. I
                  validated feasibility and applied{" "}
                  <strong>custom map styling</strong> as part of the product UI
                  system.
                </p>
                <p>
                  <strong>Decomposed map elements</strong> into points, lines,
                  and areas.{" "}
                  <strong>Decided what to keep and what to remove</strong> for
                  the &ldquo;near company site&rdquo; scenario. Then mapped the
                  remaining elements to the{" "}
                  <strong>internal color palette</strong> for consistency and
                  scanability.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/travel/travel%2004.jpg"
                alt="Map element decomposition into points, lines, and areas"
                width={2400}
                height={891}
              />
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/travel/travel%2005.jpg"
                alt="Color palette mapping for map elements"
                width={2400}
                height={744}
              />
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/travel/travel%2006.jpg"
                alt="Final styled map in the booking flow"
                width={1952}
                height={2400}
              />
            </div>
          </div>

          <div className={s.statGrid} style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            <div className={s.statItem}>
              <div className={s.statLabel}>Reach</div>
              <div className={s.statValue}>100K+ employees</div>
              <div className={s.statNote}>Web hotel map shipped 0 to 1</div>
            </div>
            <div className={s.statItem}>
              <div className={s.statLabel}>Map Influence</div>
              <div className={s.statValue}>24%</div>
              <div className={s.statNote}>of orders influenced by map search</div>
            </div>
            <div className={s.statItem}>
              <div className={s.statLabel}>Booking Time</div>
              <div className={s.statValue}>9% faster</div>
              <div className={s.statNote}>~9 seconds saved per booking</div>
            </div>
            <div className={s.statItem}>
              <div className={s.statLabel}>Satisfaction</div>
              <div className={s.statValue}>4.82 / 5</div>
              <div className={s.statNote}>Post-launch survey</div>
            </div>
          </div>
        </section>
      </CaseStudyLayout>
    </div>
  );
}
