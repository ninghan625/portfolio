import Image from "next/image";
import Link from "next/link";
import CurrencyAnchorNav from "./_components/CurrencyAnchorNav";
import s from "./currency.module.css";

export default function CurrencyCasePage() {
  return (
    <div className={s.page}>
      <div className={s.container}>

        {/* Header spacer */}
        <div style={{ height: 8 }} />

        {/* ── Hero ─────────────────────────────────────────────── */}
        <div className={s.hero}>
          <Image
            src="/images/Currency/Cover.jpg"
            alt="Owning Internationalization at CIS"
            width={1080}
            height={454}
            className={s.heroImg}
            priority
            unoptimized
          />
        </div>

        {/* ── Two-column ───────────────────────────────────────── */}
        <div className={s.twoCol}>
          <aside className={s.sidebar}>
            <CurrencyAnchorNav />
          </aside>

          <article className={s.article}>

            {/* ════════════════════════════════════════════════════
                TITLE
                ════════════════════════════════════════════════════ */}
            <h1 className={s.title}>
              Internationalization at CIS: Mechanism, Specs, and an AI Skill
            </h1>

            {/* ════════════════════════════════════════════════════
                TL;DR
                ════════════════════════════════════════════════════ */}
            <section id="tldr" className={s.section}>
              <span className={s.label}>TL;DR</span>

              <div className={s.tldrSummaryCard}>
                <p className={s.h2}>
                  Build the foundation of internationalization at CIS
                </p>
                <p className={s.p}>
                  I own CIS&apos;s internationalization initiative, a company-level OKR covering
                  20+ product lines and 200K+ global employees. My work spans three pillars:
                  running the spec lifecycle, maintaining the full spec library (with Currency as
                  a deep case), and shipping i18n-checker, an AI Skill that turns specs into
                  executable QA across design, R&amp;D, and QA.
                </p>
              </div>

              {/* Problem */}
              <div className={s.infoCard}>
                <div className={s.iconCircle} style={{ background: "#FFF4E6" }}>
                  <img src="/images/Currency/Icon 1.svg" alt="Problem" width={20} height={20} />
                </div>
                <div className={s.infoTextCol}>
                  <p className={s.h}>Problem</p>
                  <p className={s.pSm}>
                    Specs existed but were scattered across wikis, applied manually, and
                    incomplete in coverage. Design, R&amp;D, and QA all felt the pain, but none
                    had a shared system of record or a way to enforce it at scale.
                  </p>
                </div>
              </div>

              {/* Solution */}
              <div className={s.infoCard}>
                <div className={s.iconCircle} style={{ background: "#E6F4FF" }}>
                  <img src="/images/Currency/Icon 2.svg" alt="Solution" width={20} height={20} />
                </div>
                <div className={s.infoTextCol}>
                  <p className={s.h}>Solution: three pillars</p>
                  <ul className={s.bulletList} style={{ fontSize: 15, color: "#4E5969" }}>
                    <li><strong>Mechanism:</strong> a Collect → Iterate → Publish lifecycle so the spec system keeps improving itself</li>
                    <li><strong>Specs:</strong> led the Currency standard end-to-end; maintain the full library (Currency, Date/Time, Writing Style, Glossary)</li>
                    <li><strong>Skill:</strong> shipped i18n-checker, an AI Skill covering 4 dimensions and 1,939 glossary terms, running across Claude Code / Cursor / Mira</li>
                  </ul>
                </div>
              </div>

              {/* Impact */}
              <div className={s.infoCard}>
                <div className={s.iconCircle} style={{ background: "#E6F9F0" }}>
                  <img src="/images/Currency/Icon 3.svg" alt="Impact" width={20} height={20} />
                </div>
                <div className={s.infoTextCol}>
                  <p className={s.h}>Impact</p>
                  <p className={s.pSm}>
                    Currency toolkit adopted by 10+ design teams across 20+ product lines.
                    i18n-checker shipped as a distributable Skill, now running across design,
                    R&amp;D, and QA: one source of truth, enforced where the work happens.
                  </p>
                </div>
              </div>
            </section>

            <div className={s.dividerShort} />

            {/* ════════════════════════════════════════════════════
                CONTEXT
                ════════════════════════════════════════════════════ */}
            <section id="context" className={s.section}>
              <span className={s.label}>Context</span>

              <div className={s.subSection}>
                <p className={s.h2}>
                  i18n became an ownership area because specs alone weren&apos;t moving the needle
                </p>
                <p className={s.p}>
                  CIS (Corporate Information Systems) serves <strong>200K+ global employees</strong> across
                  <strong> 20+ product lines</strong> such as Travel, Procurement, Contract, Finance,
                  and ByteCanteen. As non-China-region employee share kept growing, i18n experience
                  became a company-level OKR.
                </p>
              </div>

              <div className={s.contextCard}>
                <p className={s.contextCardTitle}>State of i18n when I took ownership</p>
                <div className={s.contextItemsCluster}>
                  <div className={s.contextItem}>
                    <p className={s.p}>
                      <strong>Specs existed but were scattered.</strong> A 2023–2024 push built
                      the first generation of specs (Currency, Date/Time, English Writing). They
                      worked, but lived across different wiki pages with no single entry point.
                    </p>
                  </div>
                  <div className={s.contextDivider} />
                  <div className={s.contextItem}>
                    <p className={s.p}>
                      <strong>Enforcement was fully manual.</strong> Designers had to read the
                      specs, apply them by hand, and cross-reference glossary entries when naming
                      things. Coverage was inconsistent, and review churn was high.
                    </p>
                  </div>
                  <div className={s.contextDivider} />
                  <div className={s.contextItem}>
                    <p className={s.p}>
                      <strong>Coverage was incomplete.</strong> Key modules such as multilingual
                      typesetting, names, addresses, numbers, and RTL had no specs at all, and it
                      wasn&apos;t clear whether the specs we did have actually reached every product line.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                FRAMEWORK: 3 pillars
                ════════════════════════════════════════════════════ */}
            <section id="framework" className={s.section}>
              <span className={s.label}>Framework</span>

              <div className={s.subSection}>
                <p className={s.h2}>My approach: three pillars</p>
                <p className={s.p}>
                  A spec document, by itself, doesn&apos;t change behavior. To own i18n at CIS scale,
                  I built three things in parallel: a mechanism that keeps the spec system
                  evolving, the specs themselves, and an AI Skill that turns specs into
                  enforcement.
                </p>
              </div>

              <div className={s.pillarGrid}>
                {/* Pillar 1 */}
                <div className={s.pillarCard}>
                  <div className={s.pillarHeader}>
                    <span className={`${s.pillarChip}`}>Pillar 1</span>
                    <p className={s.h}>Mechanism</p>
                  </div>
                  <p className={s.pillarBody}>
                    A Collect → Iterate → Publish lifecycle that keeps the spec system
                    improving itself, driven by real problems rather than guesses.
                  </p>
                  <p className={s.pillarAnswer}>
                    Answers: how does the spec system sustain itself?
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className={s.pillarCard}>
                  <div className={s.pillarHeader}>
                    <span className={`${s.pillarChip} ${s.pillarChipGreen}`}>Pillar 2</span>
                    <p className={s.h}>Specs</p>
                  </div>
                  <p className={s.pillarBody}>
                    Led the Currency standard end-to-end as the showcase of the methodology.
                    Maintain the full library: Currency, Date/Time, Writing, Glossary.
                  </p>
                  <p className={s.pillarAnswer}>
                    Answers: what does a great spec look like?
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className={s.pillarCard}>
                  <div className={s.pillarHeader}>
                    <span className={`${s.pillarChip} ${s.pillarChipPurple}`}>Pillar 3</span>
                    <p className={s.h}>Skill</p>
                  </div>
                  <p className={s.pillarBody}>
                    i18n-checker, an AI Skill that runs the specs as executable QA across
                    design, R&amp;D, and QA, in whatever tool people already work in.
                  </p>
                  <p className={s.pillarAnswer}>
                    Answers: how do specs actually land in the product?
                  </p>
                </div>
              </div>
            </section>

            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                PILLAR 1: MECHANISM
                ════════════════════════════════════════════════════ */}
            <section id="mechanism" className={s.section}>
              <span className={s.label}>Pillar 1 · Mechanism</span>

              <div className={s.subSection}>
                <p className={s.h2}>A lifecycle loop, not a one-time publish</p>
                <p className={s.p}>
                  Specs don&apos;t execute themselves, and a spec that ships once and never
                  updates rots fast. I designed the spec system as a continuous loop:
                  problems flow in, specs are iterated, and updates flow out into the Skill
                  where they get enforced. Every round raises the floor.
                </p>
              </div>

              {/* Loop diagram */}
              <div className={s.lifecycleLoop}>
                <div className={s.loopNode}>
                  <span className={s.loopNodeNum}>Step 1</span>
                  <p className={s.loopNodeTitle}>Collect</p>
                  <p className={s.loopNodeBody}>
                    Walkthroughs, reviews, and daily feedback flow into a unified problem log.
                    Priority is <strong>data-driven</strong>: the shape of the problems decides
                    what specs to build or revise next.
                  </p>
                </div>
                <div className={s.loopArrow}>→</div>
                <div className={s.loopNode}>
                  <span className={s.loopNodeNum}>Step 2</span>
                  <p className={s.loopNodeTitle}>Iterate</p>
                  <p className={s.loopNodeBody}>
                    Each spec goes through audit, synthesize, validate. Currency is the
                    showcase of this flow (see Pillar 2). The same methodology applies to
                    every spec I own.
                  </p>
                </div>
                <div className={s.loopArrow}>→</div>
                <div className={s.loopNode}>
                  <span className={s.loopNodeNum}>Step 3</span>
                  <p className={s.loopNodeTitle}>Publish</p>
                  <p className={s.loopNodeBody}>
                    Specs publish to a single entry point <em>and</em> ship into i18n-checker
                    the same day. Team sync happens via Bot pushes or focused sessions, so
                    updates actually reach practitioners.
                  </p>
                </div>
              </div>
              <p className={s.loopReturnArrow}>
                ↺ Every round: new problems → new/updated specs → updated Skill → better i18n quality
              </p>
            </section>

            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                PILLAR 2: SPECS (Currency deep case)
                ════════════════════════════════════════════════════ */}
            <section id="specs" className={s.section}>
              <span className={s.label}>Pillar 2 · Specs</span>

              <div className={s.subSection}>
                <p className={s.h2}>Currency, as the showcase of how I build specs</p>
                <p className={s.p}>
                  Currency was the first spec I took from audit to production as owner. Same
                  methodology now runs across Date/Time, Writing Style, and Glossary. Below is
                  the Currency build, in full, so the method is legible.
                </p>
              </div>

              {/* Currency inconsistencies */}
              <div className={s.contextCard}>
                <p className={s.contextCardTitle}>The problems I was solving</p>
                <div className={s.contextItemsCluster}>

                  <div className={s.contextItem}>
                    <ol className={s.numberedList} start={1}>
                      <li>Inconsistent ISO code placement (e.g., USD 1,000 vs 1,000 USD)</li>
                    </ol>
                    <Image
                      src="/images/Currency/1.webp"
                      alt="Inconsistent ISO code placement"
                      width={1704}
                      height={271}
                      className={s.img}
                      unoptimized
                    />
                  </div>

                  <div className={s.contextDivider} />

                  <div className={s.contextItem}>
                    <ol className={s.numberedList} start={2}>
                      <li>Mixed currency format ($ / USD / US$)</li>
                    </ol>
                    <Image
                      src="/images/Currency/2.webp"
                      alt="Mixed currency format"
                      width={860}
                      height={281}
                      className={s.imgFixed}
                      style={{ width: 430, height: "auto" }}
                      unoptimized
                    />
                  </div>

                  <div className={s.contextDivider} />

                  <div className={s.contextItem}>
                    <ol className={s.numberedList} start={3}>
                      <li>Unclear large-number formatting (K / M / B)</li>
                    </ol>
                    <Image
                      src="/images/Currency/3.webp"
                      alt="Unclear large-number formatting"
                      width={850}
                      height={175}
                      className={s.imgFixed}
                      style={{ width: 425, height: "auto" }}
                      unoptimized
                    />
                  </div>

                  <div className={s.contextDivider} />

                  <div className={s.contextItem}>
                    <ol className={s.numberedList} start={4}>
                      <li>Inconsistent currency picker options</li>
                    </ol>
                    <Image
                      src="/images/Currency/4.png"
                      alt="Inconsistent currency picker options"
                      width={892}
                      height={108}
                      className={s.img}
                      unoptimized
                    />
                  </div>

                  <div className={s.contextDivider} />

                  <div className={s.contextItem}>
                    <ol className={s.numberedList} start={5}>
                      <li>Undefined visual hierarchy for totals</li>
                    </ol>
                    <Image
                      src="/images/Currency/5.jpg"
                      alt="Define visual hierarchy rules for totals"
                      width={892}
                      height={449}
                      className={s.img}
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* ─────────────────────────────────────────────────
                  PROCESS: compact 3-step strip
                  ───────────────────────────────────────────────── */}
              <p className={s.subLabel}>Process</p>

              <div className={s.lifecycleLoop}>
                <div className={s.loopNode}>
                  <span className={s.loopNodeNum}>Step 1</span>
                  <p className={s.loopNodeTitle}>Audit</p>
                  <p className={s.loopNodeBody}>
                    Audited key products and surfaces; tagged recurring formatting problems
                    to build a complete picture of today&apos;s patterns.
                  </p>
                </div>
                <div className={s.loopArrow}>→</div>
                <div className={s.loopNode}>
                  <span className={s.loopNodeNum}>Step 2</span>
                  <p className={s.loopNodeTitle}>Synthesize</p>
                  <p className={s.loopNodeBody}>
                    Reviewed 50+ B2B/B2C references and design systems; distilled durable
                    currency display conventions that hold up under real UI constraints.
                  </p>
                </div>
                <div className={s.loopArrow}>→</div>
                <div className={s.loopNode}>
                  <span className={s.loopNodeNum}>Step 3</span>
                  <p className={s.loopNodeTitle}>Validate</p>
                  <p className={s.loopNodeBody}>
                    Aligned the 3-format model with design teams across business lines;
                    locked edge cases and rollout expectations.
                  </p>
                </div>
              </div>

              {/* Bridge: Process output → Output intro */}
              <div className={s.processBridge}>
                <Image
                  src="/images/Currency/8.png"
                  alt="Draft 3-format framework (Short / Standard / Explicit)"
                  width={2991}
                  height={841}
                  className={s.img}
                  unoptimized
                />
                <p className={s.processBridgeCaption}>
                  From the audit and 50+ references, I drafted this 3-format framework
                  (Short / Standard / Explicit), then validated and expanded it into the full
                  spec below.
                </p>
              </div>

              {/* ─────────────────────────────────────────────────
                  WHAT SHIPPED: 3 parts, full depth
                  ───────────────────────────────────────────────── */}
              <p className={s.subLabel} style={{ paddingTop: 24 }}>What shipped</p>

              <div className={s.solutionCluster}>

                <div className={s.subSection}>
                  <p className={s.h2}>A toolkit, not just formatting rules</p>
                  <p className={s.p}>
                    A 3-format framework, decision rules, and reusable components, so teams
                    display and implement money consistently by default.
                  </p>
                </div>

                {/* Part 1 */}
                <div className={s.solutionStep}>
                  <div className={s.subSection}>
                    <p className={s.h2}>Part 1 · Format rules teams can implement</p>
                    <p className={s.p}>
                      Locked the &quot;how to format&quot; rules (ISO, spacing, separators) into a
                      single source of truth.
                    </p>
                  </div>
                  <div className={s.whatCard}>
                    <p className={s.h}>❇️ What teams get</p>
                    <ul className={s.bulletList}>
                      <li>Exact formatting rules (ISO and number placement, spacing, separators)</li>
                      <li>Correct vs incorrect examples for quick QA</li>
                      <li>Implementation-ready for design + engineering</li>
                    </ul>
                  </div>
                  <div className={s.mediaBlock}>
                    <Image
                      src="/images/Currency/9.png"
                      alt="Format rules teams can implement"
                      width={892}
                      height={719}
                      className={s.img}
                      unoptimized
                    />
                    <p className={s.caption}>Format rules for Short and Standard formats (USD)</p>
                  </div>
                </div>

                {/* Part 2 */}
                <div className={s.solutionStep}>
                  <div className={s.subSection}>
                    <p className={s.h2}>Part 2 · Decision guidance for choosing formats</p>
                    <p className={s.p}>
                      Defined decision rules so teams pick Short / Standard / Explicit
                      consistently across scenarios.
                    </p>
                  </div>
                  <div className={s.whatCard}>
                    <p className={s.h}>❇️ What teams get</p>
                    <ul className={s.bulletList}>
                      <li>Decision rules: how to choose Short vs Standard vs Explicit</li>
                      <li>Accepted exceptions: when variations are allowed</li>
                      <li>Surface examples: table / card / form / detail</li>
                    </ul>
                  </div>
                  <div className={s.mediaBlock}>
                    <Image
                      src="/images/Currency/10.png"
                      alt="Decision guidance for choosing formats"
                      width={1623}
                      height={4934}
                      className={s.img}
                      unoptimized
                    />
                    <p className={s.caption}>Decision guidance for Standard formats</p>
                  </div>
                </div>

                {/* Part 3 */}
                <div className={s.solutionStep}>
                  <div className={s.subSection}>
                    <p className={s.h2}>Part 3 · Components &amp; patterns for money workflows</p>
                    <p className={s.p}>
                      Turned the standard into reusable components, so teams ship money
                      workflows consistently, not just format text.
                    </p>
                  </div>
                  <div className={s.whatCard}>
                    <p className={s.h}>❇️ What teams get</p>
                    <ul className={s.bulletList}>
                      <li>Large-number shorthand (estimate + full value)</li>
                      <li>Patterns for conversion (original vs converted)</li>
                      <li>Currency selector + amount input (defaults, validation, formatting states)</li>
                    </ul>
                  </div>
                  <Image
                    src="/images/Currency/11.png"
                    alt="Components and patterns for money workflows"
                    width={886}
                    height={2400}
                    className={s.img}
                    unoptimized
                  />
                  <div className={s.blueCallout}>
                    <p className={s.h}>❇️ Read the full guideline</p>
                    <p className={s.p}>
                      Full specification (format rules, scenario examples, component usage):{" "}
                      <a
                        href="/images/Currency/Currency%20Amount%20Formatting%20Guidelines.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={s.pdfLink}
                      >
                        Currency Amount Formatting Guidelines.pdf
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Transition to Pillar 3 */}
              <p className={s.transitionQuote}>
                Currency proved the methodology. But specs alone don&apos;t scale: teams can&apos;t
                memorize every rule across Currency, Date/Time, Writing Style, and 1,939
                glossary entries. That&apos;s what Pillar 3 is for.
              </p>
            </section>

            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                PILLAR 3: SKILL (i18n-checker)
                ════════════════════════════════════════════════════ */}
            <section id="skill" className={s.section}>
              <span className={s.label}>Pillar 3 · Skill</span>

              <div className={s.subSection}>
                <p className={s.h2}>From a Figma plugin to i18n-checker: a Skill that follows the work</p>
                <p className={s.p}>
                  This tool evolved through a deliberate re-architecture. The story matters as
                  much as the product: the plugin proved AI-assisted i18n QA worked; the Skill
                  made it scale to where the work actually happens.
                </p>
              </div>

              {/* Evolution: 3 acts */}
              <div className={s.evolutionActs}>

                {/* Act 1 */}
                <div className={s.actCard}>
                  <span className={s.actLabel}>Act 1 · V1 · Figma QA plugin</span>
                  <p className={s.h}>The prototype</p>
                  <p className={s.p}>
                    I first built this as a Figma plugin (coded with Cursor + GPT). It scanned
                    frames for i18n issues and supported one-click fixes. It worked, but only
                    inside Figma, only for designers, only at the design stage.
                  </p>
                  <div className={s.mediaBlock} style={{ marginTop: 8 }}>
                    <Image
                      src="/images/Currency/12.gif"
                      alt="V1: Figma QA plugin"
                      width={1408}
                      height={774}
                      className={s.img}
                      unoptimized
                    />
                    <p className={s.caption}>V1 · Figma QA plugin (Cursor + GPT)</p>
                  </div>
                  <div className={s.outputCard}>
                    <p className={s.h}>What it proved</p>
                    <p className={s.p}>AI-assisted i18n QA is viable: specs can drive a checker that people actually use.</p>
                  </div>
                </div>

                {/* Act 2: Shift */}
                <div className={s.actCard}>
                  <span className={`${s.actLabel} ${s.actLabelShift}`}>Act 2 · The organizational shift</span>
                  <p className={s.h}>The plugin stopped fitting the work</p>
                  <p className={s.p}>
                    Three things happened at once:
                  </p>
                  <ul className={s.bulletList}>
                    <li><strong>Designers started vibe coding:</strong> shipping production code themselves via Claude Code / Cursor, often bypassing Figma entirely for iteration.</li>
                    <li><strong>Engineers wanted i18n checks on code,</strong> not just designs, as they owned more of the shipping surface.</li>
                    <li><strong>QA wanted pre-release validation:</strong> the ability to drop a screenshot and get a structured issue list.</li>
                  </ul>
                  <p className={s.p}>
                    A tool locked inside Figma couldn&apos;t follow the work. The delivery model had
                    to change.
                  </p>
                </div>

                {/* Act 3 */}
                <div className={`${s.actCard} ${s.actCardHighlight}`}>
                  <span className={`${s.actLabel} ${s.actLabelHighlight}`}>Act 3 · V2 · i18n-checker Skill</span>
                  <p className={s.h}>Rebuilt as an AI Skill that meets people where they already work</p>
                  <p className={s.p}>
                    One zip. One install. Same structured output across every tool, so design,
                    R&amp;D, and QA all share the same source of truth.
                  </p>

                  {/* Coverage table */}
                  <div className={s.coverageTable} style={{ marginTop: 4 }}>
                    <div className={s.coverageHead}>Stage</div>
                    <div className={s.coverageHead}>Who uses it</div>
                    <div className={s.coverageHead}>Where it runs</div>

                    <div className={s.coverageStage}>Design</div>
                    <div>Designers</div>
                    <div>Figma export → Mira / Cursor</div>

                    <div className={s.coverageStage}>R&amp;D</div>
                    <div>Engineers (incl. vibe-coding designers)</div>
                    <div>Claude Code / Cursor / Trae</div>

                    <div className={s.coverageStage}>QA</div>
                    <div>PM / QA</div>
                    <div>Mira (screenshot upload)</div>
                  </div>
                </div>
              </div>

              {/* 4 dimensions */}
              <div className={s.subSection} style={{ marginTop: 12 }}>
                <p className={s.h2}>What it checks: 4 dimensions</p>
                <p className={s.p}>
                  Four spec families, unified into one Skill. The Glossary alone contains 1,939
                  terms across 6 product lines (Common, Procurement, Contract, Spend, Travel,
                  ByteCanteen), beyond what any human can keep in their head.
                </p>
              </div>

              <div className={s.dimensionGrid}>
                <div className={s.dimensionCard}>
                  <span className={s.dimensionEmoji}>💰</span>
                  <p className={s.dimensionTitle}>Currency &amp; Amount</p>
                  <p className={s.dimensionBody}>
                    Symbol/ISO position, thousands &amp; decimal separators, negative amounts,
                    large-number abbreviation, format consistency.
                  </p>
                </div>
                <div className={s.dimensionCard}>
                  <span className={s.dimensionEmoji}>✍️</span>
                  <p className={s.dimensionTitle}>Writing Style</p>
                  <p className={s.dimensionBody}>
                    Title vs Sentence case, CN/EN punctuation mixing, spacing, hyphen/en-dash
                    usage, line wrapping, abbreviations.
                  </p>
                </div>
                <div className={s.dimensionCard}>
                  <span className={s.dimensionEmoji}>🕐</span>
                  <p className={s.dimensionTitle}>Date &amp; Time</p>
                  <p className={s.dimensionBody}>
                    Month abbreviations, 12/24-hour format, time ranges, time differences,
                    timezone display, info density.
                  </p>
                </div>
                <div className={s.dimensionCard}>
                  <span className={s.dimensionEmoji}>📖</span>
                  <p className={s.dimensionTitle}>Glossary</p>
                  <p className={s.dimensionBody}>
                    1,939-term CN/EN glossary across 6 product lines. Checks for incorrect or
                    inconsistent translations within a single screen.
                  </p>
                </div>
              </div>

              {/* I/O spec */}
              <div className={s.outputCard}>
                <p className={s.h}>How it works</p>
                <dl className={s.kvRow}>
                  <dt>Input</dt>
                  <dd>Screenshots, UI text, Figma exports</dd>
                  <dt>Output</dt>
                  <dd>Structured table per dimension (Location / Current / Expected / Rule / Severity), with a summary count</dd>
                  <dt>Installs in</dt>
                  <dd>Claude Code · Cursor · Trae · Mira</dd>
                </dl>
              </div>

              <p className={s.transitionQuote}>
                Why this matters: 4 spec families plus 1,939 glossary entries exceed anyone&apos;s
                memory. An AI Skill is the only scalable enforcement layer, and by delivering
                it as a Skill (not a plugin), it meets people where they already work.
              </p>
            </section>

            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                IMPACT
                ════════════════════════════════════════════════════ */}
            <section id="impact" className={s.section}>
              <span className={s.label}>Impact</span>

              <div className={s.subSection}>
                <p className={s.h2}>Three pillars, three kinds of leverage</p>
              </div>

              <div className={s.outputCard}>
                <p className={s.h}>Currency (Pillar 2)</p>
                <p className={s.p}>
                  Adopted by <strong>10+ design teams</strong> across <strong>20+ product lines</strong>.
                  Code-backed components shipped into the central design system library.
                  Referenced by other orgs (Douyin, Volcano Engine) as a reusable best practice.
                </p>
              </div>

              <div className={s.outputCard}>
                <p className={s.h}>i18n-checker (Pillar 3)</p>
                <p className={s.p}>
                  Shipped as a distributable Skill with the <strong>1,939-term glossary</strong> built in.
                  Runs across <strong>Claude Code · Cursor · Trae · Mira</strong>, covering design,
                  R&amp;D, and QA from one source of truth.
                </p>
              </div>

              <div className={s.outputCard}>
                <p className={s.h}>Mechanism (Pillar 1)</p>
                <p className={s.p}>
                  Lifecycle loop running across CIS: problems continuously flow in, specs
                  iterate, and updates land in the Skill. The spec system is now a living
                  asset, not a one-time publish.
                </p>
              </div>
            </section>

            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                REFLECTION
                ════════════════════════════════════════════════════ */}
            <section id="reflection" className={s.section}>
              <span className={s.label}>Reflection</span>

              <div className={s.subSection}>
                <p className={s.h2}>Two lessons from owning i18n at scale</p>
              </div>

              <div className={s.outputCard}>
                <p className={s.h}>1 · Specs ≠ enforcement</p>
                <p className={s.p}>
                  A spec document, no matter how well written, doesn&apos;t change behavior by
                  itself. To actually ship i18n quality, you need <strong>mechanism</strong>
                  {" "}(how specs evolve) and <strong>tooling</strong> (how specs execute) as
                  co-equals with the spec. Specs without a loop rot; specs without tooling
                  live on wikis no one reads.
                </p>
              </div>

              <div className={s.outputCard}>
                <p className={s.h}>2 · AI is the scalable leverage for i18n</p>
                <p className={s.p}>
                  At 4 spec families plus 1,939 glossary terms, human memory fails: no designer
                  or engineer can carry all that context. Reframing i18n QA as an AI Skill was
                  the unlock. And it only worked because the Skill distributes across wherever
                  people already work (design, R&amp;D, QA), not just where designers happen
                  to work.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className={s.ctaRow}>
              <Link href="/" className={s.ctaOutlined}>
                Take Me Home
              </Link>
              <Link href="/work/cloudtower-task-center-redesign" className={s.ctaFilled}>
                Next Project
              </Link>
            </div>

          </article>
        </div>

      </div>
    </div>
  );
}
