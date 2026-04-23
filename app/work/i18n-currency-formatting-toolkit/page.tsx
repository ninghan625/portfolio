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

export default function I18nDraftPage() {
  return (
    <div className={s.page}>
      <div className={s.hero}>
        <div className={s.heroInner}>
          <Image
            src="/images/Currency/Cover.jpg"
            alt="Building a systematic internationalization library and turning it into an AI callable Skill"
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
            Building a systematic i18n library, and turning it into a Skill that
            every role could use
          </PageTitle>
        </div>

        {/* ══ CONTEXT ══ */}
        <section id="context" className={s.section}>
          <Eyebrow>Context</Eyebrow>
          <SectionHeadline>
            Global expansion outpaced the quality of our internationalization
          </SectionHeadline>

          <div className={s.introBody}>
            <BodyText>
              <p>
                ByteDance was scaling globally, and internal tools had to keep
                up. The design team&apos;s mandate was to raise i18n quality
                across every product line.
              </p>
            </BodyText>
          </div>

          <div className={s.subBlock}>
            <Subheading>Every product line was making its own i18n calls</Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  Most English interfaces were direct translations from
                  Chinese. Currency formats, time formats, and terminology
                  choices were inconsistent across product lines, producing an
                  experience that visibly lagged international standards.
                </p>
              </BodyText>
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              I owned this project across two layers
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  As project owner, I coordinated designers across teams to
                  build a spec library covering currency, time, writing, and
                  terminology. <strong>The Currency spec is the piece I wrote myself.</strong>{" "}
                  The second layer, making the full library executable across
                  teams, is the one I drove end to end.
                </p>
              </BodyText>
            </div>
          </div>
        </section>

        {/* ══ DESIGN PROCESS ══ */}
        <section id="design-process" className={s.section}>
          <Eyebrow>Design Process</Eyebrow>

          {/* ── Part 1: Running the Project ── */}
          <SectionHeadline>
            The project ran on a repeatable mechanism, not a one-time delivery
          </SectionHeadline>

          <div className={s.subBlock}>
            <Subheading>
              I collected interface quality issues broadly from every product line
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  Many teams, many product lines, many problems. The first
                  step wasn&apos;t deciding what to fix, it was surfacing
                  everything.{" "}
                  <strong>
                    I systematically collected interface quality issues from
                    every product line before picking anything to work on.
                  </strong>
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/currency-new/1.png"
                alt="Raw issues collected across product lines"
                width={1784}
                height={960}
              />
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>Prioritized by frequency and impact</Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  With the raw issue list in hand, I ranked each by{" "}
                  <strong>how often it occurred</strong> and{" "}
                  <strong>how widely it affected users</strong>.
                </p>
              </BodyText>
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              Specs had to be treated as an iterative cycle, not one time
              deliverables
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  New scenarios keep surfacing, so a spec published once and
                  never updated goes stale fast. I ran the spec work as a loop:{" "}
                  <strong>
                    collect, define, socialize, embed into tools, and collect
                    again.
                  </strong>
                </p>
              </BodyText>
            </div>
          </div>

          {/* ── Part 2: Building the Currency Spec ── */}
          <div className={s.partDivider}>
            <SectionHeadline>
              As owner of the Currency track, I carried the design from
              research to shipped components
            </SectionHeadline>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              Step 1: Collect every currency scenario across product lines
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  Our portfolio spans B2B (procurement, finance, HR) and B2C
                  (travel, canteen), so one pattern couldn&apos;t cover
                  everything. I categorized scenarios first, so the spec was
                  grounded in real cases.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/currency-new/2.png"
                alt="Collected and categorized currency scenarios across product lines"
                width={1880}
                height={2480}
              />
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              Step 2: Benchmark against 50+ products and the CLDR international
              standard
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  We couldn&apos;t judge &ldquo;correct&rdquo; from internal
                  instinct alone. I surveyed{" "}
                  <strong>
                    over 50 products across B2B and B2C and referenced the
                    CLDR international standard
                  </strong>{" "}
                  to find common patterns.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/currency-new/3.png"
                alt="Competitive benchmark across 50+ products and CLDR reference"
                width={1784}
                height={933}
              />
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              Step 3: Validate the draft against real designers&apos; daily needs
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  I took the draft spec back to designers across teams to
                  confirm it covered their day to day needs, surfacing corner
                  cases before publishing.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/currency-new/4.png"
                alt="Validation sessions with designers across teams"
                width={1704}
                height={480}
              />
            </div>
          </div>
        </section>

        {/* ══ SOLUTION ══ */}
        <section id="solution" className={s.section}>
          <Eyebrow>Solution</Eyebrow>
          <SectionHeadline>
            What made the specs actually get used across the org
          </SectionHeadline>

          <div className={s.subBlock}>
            <Subheading>
              A good spec tells you which option to pick, not just what the
              options are
            </Subheading>

            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  <strong>Spec rules.</strong> The foundational layer defines
                  what&apos;s correct and what isn&apos;t for currency
                  formatting.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/currency-new/5.png"
                alt="Base spec rules for currency formatting"
                width={1784}
                height={743}
              />
            </div>

            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  <strong>Usage toolkit.</strong> On top of the rules, a
                  toolkit helps teams pick the right format (Short, Standard,
                  or Explicit) for each scenario.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/currency-new/6.png"
                alt="Usage toolkit guiding format choice by scenario"
                width={1784}
                height={2223}
              />
            </div>

            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  <strong>Core components.</strong> Ready-to-use UI components
                  including amount input, currency selector, and large amount
                  abbreviation, built directly on the spec.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/currency-new/7.png"
                alt="Core UI components: amount input, currency selector, large amount abbreviation"
                width={1501}
                height={641}
              />
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              A Figma plugin showed me that the spec needed to leave the design
              tool
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  My first attempt was a Figma plugin that auto checked design
                  files.{" "}
                  <strong>
                    It only caught issues at the design stage, but quality
                    problems happen across PRD, engineering, and QA too.
                  </strong>{" "}
                  Maintenance was also expensive, since every spec update
                  meant republishing.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/currency-new/8.gif"
                alt="Figma plugin auto checking against the spec"
                width={1928}
                height={1076}
              />
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              Packaging every spec into an AI Skill made them usable across
              design, engineering, and QA
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  I packaged all the specs, including currency, time, writing,
                  and the ~1,900 terminology entries, into{" "}
                  <strong>
                    a single Skill plugged into Claude Code, Cursor, and our
                    internal AI platform
                  </strong>
                  .
                </p>
                <p>
                  Usage was direct. Designers send a screenshot and get back a
                  diff of violations. Engineers check their implementation
                  against the same Skill. QA runs the check without waiting on
                  a designer.{" "}
                  <strong>
                    Maintenance cost dropped to editing a single Markdown
                    file.
                  </strong>
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/currency-new/9.png"
                alt="Skill integrated with Claude Code, Cursor, and internal AI platform"
                width={1142}
                height={1258}
              />
            </div>
          </div>
        </section>

        {/* ══ IMPACT ══ */}
        <section id="impact" className={s.section}>
          <Eyebrow>Impact</Eyebrow>
          <SectionHeadline>
            Adopted across 10+ design teams and 20+ product lines, with the
            Currency spec picked up beyond our org
          </SectionHeadline>

          <div className={s.introBody}>
            <BodyText>
              <p>
                The work shipped in two layers: the spec library itself, and
                the Skill that made it callable anywhere.
              </p>
            </BodyText>
          </div>

          <div className={s.statGrid}>
            <div className={s.statItem}>
              <div className={s.statLabel}>Spec Coverage</div>
              <div className={s.statValue}>4 areas + 1,900 terms</div>
              <div className={s.statNote}>
                Currency, time, English writing, and a terminology library of
                1,900+ entries
              </div>
            </div>
            <div className={s.statItem}>
              <div className={s.statLabel}>Skill Adoption</div>
              <div className={s.statValue}>10+ teams / 20+ product lines</div>
              <div className={s.statNote}>
                Packaged specs accessible via Claude Code, Cursor, and the
                internal AI platform
              </div>
            </div>
            <div className={s.statItem}>
              <div className={s.statLabel}>External Reach</div>
              <div className={s.statValue}>Douyin, Volcano Engine</div>
              <div className={s.statNote}>
                Currency spec referenced beyond our org
              </div>
            </div>
          </div>
        </section>

        {/* ══ REFLECTION ══ */}
        <section id="reflection" className={s.section}>
          <Eyebrow>Reflection</Eyebrow>
          <SectionHeadline>
            Two takeaways I keep coming back to
          </SectionHeadline>

          <div className={s.subBlock}>
            <Subheading>
              A good spec has to solve content and execution, or quality
              plateaus
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  Content that&apos;s too strict gets ignored; content
                  that&apos;s too loose means nothing. Execution that relies
                  on human memory breaks at scale.{" "}
                  <strong>
                    Both sides have to be solved together for quality to
                    actually move.
                  </strong>
                </p>
              </BodyText>
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              A designer&apos;s leverage grows when the work lands outside the
              design tool
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  Shipping the Skill meant my work ended up in engineering and
                  QA tools, not just Figma. That was the first time I felt the
                  scope of &ldquo;design&rdquo; widen beyond visual decisions.{" "}
                  <strong>
                    Once the specs were a platform capability, every role in
                    the product flow was using them.
                  </strong>
                </p>
              </BodyText>
            </div>
          </div>
        </section>
      </CaseStudyLayout>
    </div>
  );
}
