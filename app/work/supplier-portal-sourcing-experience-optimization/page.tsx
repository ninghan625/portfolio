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
  { id: "design-process", label: "Design Process" },
  { id: "solution", label: "Solution" },
  { id: "impact", label: "Impact" },
  { id: "reflection", label: "Reflection" },
];

export default function SupplierDraftPage() {
  return (
    <div className={s.page}>
      <div className={s.hero}>
        <div className={s.heroInner}>
          <Image
            src="/images/supplier/Cover.jpg"
            alt="Redesigning the supplier portal so sourcing stops falling back to email"
            width={956}
            height={425}
            className={s.heroImg}
            priority
            unoptimized
          />
        </div>
      </div>

      <CaseStudyLayout tocItems={TOC_ITEMS}>
        <div className={s.titleBlock}>
          <PageTitle>
            Redesigning the supplier portal so sourcing stops falling back to email
          </PageTitle>
        </div>

        {/* ══ CONTEXT ══ */}
        <section id="context" className={s.section}>
          <Eyebrow>Context</Eyebrow>
          <SectionHeadline>
            Sourcing was quietly leaking out of the supplier portal
          </SectionHeadline>

          <div className={s.introBody}>
            <BodyText>
              <p>
                The Supplier Portal is ByteDance&apos;s internal product for
                suppliers to complete the full procurement process with buyers.
                Its only users are suppliers; buyers work in a separate internal
                system.
              </p>
            </BodyText>
          </div>

          <div className={s.subBlock}>
            <Subheading>In sourcing, the flow kept falling back to email</Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  Suppliers barely used the system for sourcing, which created
                  three concrete problems.
                </p>
                <p>
                  <strong>No audit trail.</strong> Quoting and negotiation
                  records lived in email, leaving compliance audits with no
                  system of record.
                </p>
                <p>
                  <strong>No data to build on.</strong> Without system records,
                  there was no foundation for a price library or historical
                  benchmarking.
                </p>
                <p>
                  <strong>Manual overhead for buyers.</strong> Batch-sending
                  emails and tracking suppliers manually was pure human cost.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/supplier-new/1.png"
                alt="Buyer's email workspace showing scattered sourcing threads"
                width={2104}
                height={933}
              />
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              The project&apos;s core goal was to increase online adoption of
              the sourcing flow
            </Subheading>
          </div>
        </section>

        {/* ══ DESIGN PROCESS ══ */}
        <section id="design-process" className={s.section}>
          <Eyebrow>Design Process</Eyebrow>
          <SectionHeadline>
            Research that overturned my Task Center hypothesis and reframed
            where to start
          </SectionHeadline>

          <div className={s.subBlock}>
            <Subheading>
              Sourcing was the loudest complaint across the entire procurement
              system
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  A broader study of the full procurement platform surfaced{" "}
                  <strong>sourcing as the area with the most complaints</strong>.
                  But &ldquo;bad experience&rdquo; is a symptom, not a
                  designable problem, so I went a layer deeper.
                </p>
              </BodyText>
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>A workshop narrowed the issues down to four areas</Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  The team split into groups playing buyers and suppliers,
                  walked through the full sourcing flow, and logged every
                  friction point. I tagged and clustered the issues, and they
                  converged on four areas:{" "}
                  <strong>
                    Quote Form, Negotiation Form, Homepage, Detail Page
                  </strong>
                  .
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/supplier-new/2.png"
                alt="Tagged and clustered issues from the workshop"
                width={2104}
                height={800}
              />
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              My hypothesis was that a homepage Task Center was the only entry
              point that could cover the full flow
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  End-of-flow issues had limited reach.{" "}
                  <strong>
                    The homepage was the supplier&apos;s first landing point
                  </strong>
                  . A Task Center there could surface every stage, so suppliers
                  would know exactly where they were the moment they logged in.
                  Coupa and Oracle both take this approach.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/supplier-new/3.png"
                alt="Task Center demo with Coupa and Oracle references"
                width={2004}
                height={1298}
              />
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              Validating with a demo revealed that most suppliers never reach
              the homepage
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  While walking suppliers through the demo, I found an
                  unexpected fact:{" "}
                  <strong>
                    most suppliers log in via temporary accounts, which land
                    directly on the sourcing detail page
                  </strong>
                  . The homepage is skipped entirely. The page we were
                  optimizing was invisible to the majority of users.
                </p>
                <p>The entry point had to be reframed.</p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/supplier-new/4.png"
                alt="Real login paths and temporary account share"
                width={2104}
                height={624}
              />
            </div>
          </div>
        </section>

        {/* ══ SOLUTION ══ */}
        <section id="solution" className={s.section}>
          <Eyebrow>Solution</Eyebrow>
          <SectionHeadline>
            Refocused on four decision moments in the supplier journey
          </SectionHeadline>

          <div className={s.introBody}>
            <BodyText>
              <p>
                After re-mapping the supplier journey, I identified four moments
                that actually drive participation:{" "}
                <strong>
                  email, detail page, participation CTA, and progress feedback
                </strong>
                . Together these moments shape whether a supplier decides to
                engage at all.
              </p>
            </BodyText>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              Moment 1: The supplier&apos;s first touchpoint is the email, not
              the homepage
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  The old invitation email was plain text, with key information
                  buried in paragraphs and looking like spam.
                </p>
                <p>
                  I did three things to fix the email itself:{" "}
                  <strong>rebuilt the information architecture</strong> to
                  surface the essentials,{" "}
                  <strong>refined the visual hierarchy</strong> so the primary
                  action was obvious, and{" "}
                  <strong>reviewed every subject line</strong> for clarity and
                  scannability.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/supplier-new/5.png"
                alt="New vs. old email redesign"
                width={2104}
                height={2537}
              />
            </div>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  Then I turned the redesigned email into a{" "}
                  <strong>reusable template</strong> covering different email
                  types and procurement teams, so every future communication
                  starts from the same foundation.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/supplier-new/6.png"
                alt="Reusable email template system"
                width={2024}
                height={1014}
              />
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              Moment 2: &ldquo;Scroll-to-unlock&rdquo; let legal compliance and
              information hierarchy coexist
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  The detail page had to show both sourcing info and legal
                  terms, and legal required the full terms to be visible. I
                  separated the two so sourcing info came first, and{" "}
                  <strong>
                    legal terms had to be scrolled to 100% before the checkbox
                    could be ticked
                  </strong>
                  . The design satisfies compliance while keeping sourcing
                  content from being buried.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/supplier-new/7.png"
                alt="New detail page and the scroll-to-unlock interaction"
                width={2104}
                height={1219}
              />
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              Moment 3: &ldquo;Confirm participation&rdquo; goes before
              &ldquo;submit quote&rdquo; to help buyers plan ahead
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  The old page exposed two CTAs side by side (Confirm
                  Participation, Submit Quote). Suppliers didn&apos;t know which
                  to click and often clicked neither. But there was a real
                  business need behind this:{" "}
                  <strong>
                    buyers needed to know how many suppliers intended to
                    participate early, so they could decide whether to expand
                    the invite pool
                  </strong>
                  .
                </p>
                <p>
                  I hid the Quote button until after the participation deadline
                  and added context telling suppliers that confirming intent
                  does not lock in their quote, lowering the cost of action.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/supplier-new/8.png"
                alt="Old buttons vs. new buttons and the confirm participation flow"
                width={2104}
                height={2373}
              />
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              Moment 4: A new progress bar made the full sourcing flow visible
              to suppliers
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  Drawing a progress bar sounds simple, but the{" "}
                  <strong>prep work was real</strong>. I mapped the full
                  sourcing flow from scratch so the bar could accurately reflect
                  where each supplier stood.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/supplier-new/9.png"
                alt="Progress bar UI and the sourcing flow map behind it"
                width={2104}
                height={1411}
              />
            </div>
          </div>
        </section>

        {/* ══ IMPACT ══ */}
        <section id="impact" className={s.section}>
          <Eyebrow>Impact</Eyebrow>
          <SectionHeadline>
            Adoption beat the target, and buyers went from reluctant to actively
            recommending the system
          </SectionHeadline>

          <div className={s.introBody}>
            <BodyText>
              <p>
                Piloted in Q4 2025 within a standalone business unit. The data
                and qualitative feedback both validated the new direction.
              </p>
            </BodyText>
          </div>

          <div className={s.statGrid}>
            <div className={s.statItem}>
              <div className={s.statLabel}>Adoption</div>
              <div className={s.statValue}>3.9% → 19.92%</div>
              <div className={s.statNote}>Against a 15% target</div>
            </div>
            <div className={s.statItem}>
              <div className={s.statLabel}>Supplier Satisfaction</div>
              <div className={s.statValue}>4.91 / 5</div>
              <div className={s.statNote}>
                Based on 80+ post-launch surveys
              </div>
            </div>
            <div className={s.statItem}>
              <div className={s.statLabel}>Buyer Confidence</div>
              <div className={s.statValue}>~10 buyers interviewed</div>
              <div className={s.statNote}>
                Went from worrying about support load and avoiding the portal,
                to actively recommending it to suppliers
              </div>
            </div>
          </div>
        </section>

        {/* ══ REFLECTION ══ */}
        <section id="reflection" className={s.section}>
          <Eyebrow>Reflection</Eyebrow>
          <SectionHeadline>
            Two project calls I keep coming back to
          </SectionHeadline>

          <div className={s.subBlock}>
            <Subheading>
              Hypotheses need to be validated with real data, not just logic
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  The Task Center framing was logically sound and the ROI
                  analysis held up, but the actual user path looked nothing like
                  what I&apos;d reasoned out. It&apos;s easy to substitute your
                  own mental model for the user&apos;s.{" "}
                  <strong>
                    Validate with real data as early as possible.
                  </strong>
                </p>
              </BodyText>
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>Walking through a demo beats pure interviews</Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  Users often can&apos;t articulate what they want, but once
                  they see a real design in front of them, they&apos;ll
                  immediately tell you what&apos;s wrong.{" "}
                  <strong>It&apos;s a habit we got right on this project.</strong>
                </p>
              </BodyText>
            </div>
          </div>
        </section>
      </CaseStudyLayout>
    </div>
  );
}
