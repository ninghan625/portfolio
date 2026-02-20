import Image from "next/image";
import Link from "next/link";
import CurrencyAnchorNav from "./_components/CurrencyAnchorNav";
import s from "./currency.module.css";

export default function CurrencyCasePage() {
  return (
    <div className={s.page}>
      <div className={s.container}>

        {/* ── Header spacer: 8px + 64px container gap = 72px header clearance ── */}
        <div style={{ height: 8 }} />

        {/* ── Hero cover image (node 534:6997) ─────────────────────────── */}
        {/* Figma: w-1080px h-453.901px → we render full-width, natural ratio */}
        <div className={s.hero}>
          <Image
            src="/images/Currency/Cover.jpg"
            alt="Internationalization Quality: Currency Amount Formatting Toolkit"
            width={1080}
            height={454}
            className={s.heroImg}
            priority
            unoptimized
          />
        </div>

        {/* ── Two-column: 108px sidebar + flex-1 article ───────────────── */}
        <div className={s.twoCol}>
          <aside className={s.sidebar}>
            <CurrencyAnchorNav />
          </aside>

          <article className={s.article}>

            {/* ════════════════════════════════════════════════════
                Project Title — node 534:5782
                Helvetica 700 24px / normal #272E3B
                ════════════════════════════════════════════════════ */}
            <h1 className={s.title}>
              Internationalization Quality: Currency Amount Formatting Toolkit
            </h1>

            {/* ════════════════════════════════════════════════════
                TL;DR — node 534:5783
                col gap-16: label + summary card + 3 info cards
                ════════════════════════════════════════════════════ */}
            <section id="tldr" className={s.section}>
              <span className={s.label}>TL;DR</span>

              {/* Summary card — node 534:5785: bg #F7F9FC, border, r12, col gap-8, pad 20 */}
              <div className={s.tldrSummaryCard}>
                <p className={s.h2}>
                  Scale currency consistency across a global product suite
                </p>
                <p className={s.p}>
                  I led a currency formatting standard for a worldwide employee-facing system—turning
                  fragmented patterns into a practical toolkit (rules + examples + components) that
                  teams could ship consistently across products and surfaces.
                </p>
              </div>

              {/* Problem info card — node 534:5788: white bg, border, r8, gap-16, pad 21 */}
              <div className={s.infoCard}>
                <div className={s.iconCircle} style={{ background: "#FFF4E6" }}>
                  <img src="/images/Currency/Icon 1.svg" alt="Problem" width={20} height={20} />
                </div>
                <div className={s.infoTextCol}>
                  <p className={s.h}>Problem</p>
                  <p className={s.pSm}>
                    Currency UI was inconsistent across products (format, symbol/ISO usage,
                    abbreviation, hierarchy), creating design churn, review friction, and avoidable
                    implementation rework.
                  </p>
                </div>
              </div>

              {/* Solution info card — node 534:5797: icon bg #E6F4FF */}
              <div className={s.infoCard}>
                <div className={s.iconCircle} style={{ background: "#E6F4FF" }}>
                  <img src="/images/Currency/Icon 2.svg" alt="Solution" width={20} height={20} />
                </div>
                <div className={s.infoTextCol}>
                  <p className={s.h}>Solution</p>
                  <p className={s.pSm}>
                    A flexible toolkit: 3 formats (Short / Standard / Explicit) with decision rules +
                    accepted exceptions, plus code-backed components (estimates/abbreviations,
                    conversion, currency selector, amount input) and a Figma QA plugin to catch i18n
                    issues early.
                  </p>
                </div>
              </div>

              {/* Impact info card — node 534:5806: icon bg #E6F9F0 */}
              <div className={s.infoCard}>
                <div className={s.iconCircle} style={{ background: "#E6F9F0" }}>
                  <img src="/images/Currency/Icon 3.svg" alt="Impact" width={20} height={20} />
                </div>
                <div className={s.infoTextCol}>
                  <p className={s.h}>Impact</p>
                  <p className={s.pSm}>
                    Online sourcing adoption (GGP Q4 pilot) 3.9% → 19.92% (vs. 15% target); buyer
                    validation 4.7–4.8/5.
                  </p>
                </div>
              </div>
            </section>

            {/* Divider 680px — node 534:5814 */}
            <div className={s.dividerShort} />

            {/* ════════════════════════════════════════════════════
                Context — node 534:5815
                col gap-16: label + sub-section cluster (gap-24)
                ════════════════════════════════════════════════════ */}
            <section id="context" className={s.section}>
              <span className={s.label}>Context</span>

              <div className={s.subSectionCluster}>

                {/* Intro text — node 534:5818 */}
                <div className={s.subSection}>
                  <p className={s.h2}>
                    Currency formatting was inconsistent—and expensive to maintain
                  </p>
                  <p className={s.p}>
                    As our products scaled globally, currency amounts showed up everywhere—travel,
                    procurement, contracts, finance. But teams used different formats and precision,
                    leading to inconsistent UI and slow, repetitive reviews.
                  </p>
                </div>

                {/* Context item 1 — node 536:7530: numbered heading + image 64 */}
                {/* image 64: aspect-[2883/458], full width */}
                <div className={s.subSection}>
                  <ol className={s.numberedList} start={1}>
                    <li>Inconsistent ISO code placement (e.g., USD 1,000 vs 1,000 USD)</li>
                  </ol>
                  <div className={s.mediaBlock}>
                    <Image
                      src="/images/Currency/1.png"
                      alt="Inconsistent ISO code placement"
                      width={2883}
                      height={458}
                      className={s.img}
                      unoptimized
                    />
                  </div>
                </div>

                {/* Context item 2 — node 536:7586: numbered heading + image 65 */}
                {/* image 65: h-140.123px w-430px fixed size */}
                <div className={s.subSection}>
                  <ol className={s.numberedList} start={2}>
                    <li>Mixed currency format（$ / USD / US$）</li>
                  </ol>
                  <Image
                    src="/images/Currency/2.png"
                    alt="Mixed currency format"
                    width={430}
                    height={140}
                    className={s.imgFixed}
                    style={{ width: 430, height: "auto" }}
                    unoptimized
                  />
                </div>

                {/* Context item 3 — node 536:7642: numbered heading + image 66 */}
                {/* image 66: h-87.5px w-425px fixed size */}
                <div className={s.subSection}>
                  <ol className={s.numberedList} start={3}>
                    <li>Unclear large-number formatting (K / M / B)</li>
                  </ol>
                  <Image
                    src="/images/Currency/3.png"
                    alt="Unclear large-number formatting"
                    width={425}
                    height={88}
                    className={s.imgFixed}
                    style={{ width: 425, height: "auto" }}
                    unoptimized
                  />
                </div>

                {/* Context item 4 — node 536:7711: numbered heading + image 70 */}
                {/* image 70: h-108px w-892px → effectively full-width of article */}
                <div className={s.subSection}>
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

                {/* Context item 5 — node 536:7719: numbered heading + image 69 */}
                {/* image 69: h-449px w-892px → effectively full-width of article */}
                <div className={s.subSection}>
                  <ol className={s.numberedList} start={5}>
                    <li>Define visual hierarchy rules for totals</li>
                  </ol>
                  <Image
                    src="/images/Currency/5.png"
                    alt="Define visual hierarchy rules for totals"
                    width={892}
                    height={449}
                    className={s.img}
                    unoptimized
                  />
                </div>

              </div>
            </section>

            {/* Divider full — node 534:5825 */}
            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                Goal — node 534:5826
                col gap-16: label + sub-section (gap-8)
                ════════════════════════════════════════════════════ */}
            <section id="goal" className={s.section}>
              <span className={s.label}>Goal</span>

              <div className={s.subSection}>
                <p className={s.h2}>One standard, global by default</p>
                <div>
                  <p className={s.p}>
                    Define a{" "}
                    <strong>global-by-default currency standard</strong>{" "}
                    that works across:
                  </p>
                  <ul className={s.bulletList}>
                    <li>
                      <strong>Products</strong>{" "}(travel / procurement / finance)
                    </li>
                    <li>
                      <strong>Surface</strong>{" "}(card / table / form)
                    </li>
                    <li>
                      <strong>Intent</strong>{" "}(scan / compare / verify)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Divider full — node 534:5840 */}
            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                Approach — node 534:5841
                col gap-16: label + steps cluster (gap-80)
                ════════════════════════════════════════════════════ */}
            <section id="approach" className={s.section}>
              <span className={s.label}>Approach</span>

              <div className={s.stepsCluster}>

                {/* ── Step 1 ──────────────────────────────────────── */}
                <div className={s.approachStep}>
                  <p className={s.h2}>Step 1: Audit current patterns and tag issues</p>

                  <div className={s.objActionRow}>
                    <div className={s.objCard}>
                      <p className={s.h}>🎯 Objective</p>
                      <p className={s.p}>
                        Create a complete picture of today&apos;s currency formats—and pinpoint the
                        inconsistencies.
                      </p>
                    </div>
                    <div className={s.actionCard}>
                      <p className={s.h}>💪 Action</p>
                      <p className={s.p}>
                        Audited key products/surfaces and tagged recurring formatting problems.
                      </p>
                    </div>
                  </div>

                  {/* image 73: aspect-[4096/2204], full width — "Formatting Problems Collection" */}
                  <div className={s.mediaBlock}>
                    <Image
                      src="/images/Currency/6.png"
                      alt="Formatting Problems Collection"
                      width={4096}
                      height={2204}
                      className={s.img}
                      unoptimized
                    />
                    <p className={s.caption}>Formatting Problems Collection</p>
                  </div>

                  <div className={s.outputCard}>
                    <p className={s.h}>✅ Output</p>
                    <p className={s.p}>A format inventory + a prioritized issue list.</p>
                  </div>
                </div>

                {/* ── Step 2 ──────────────────────────────────────── */}
                <div className={s.approachStep}>
                  <p className={s.h2}>Step 2: Synthesize from 50+ industry references</p>

                  <div className={s.objActionRow}>
                    <div className={s.objCard}>
                      <p className={s.h}>🎯 Objective</p>
                      <p className={s.p}>
                        Extract scalable patterns that work under real UI constraints.
                      </p>
                    </div>
                    <div className={s.actionCard}>
                      <p className={s.h}>💪 Action</p>
                      <p className={s.p}>
                        Reviewed 50+ references and summarized durable currency display conventions.
                      </p>
                    </div>
                  </div>

                  {/* image 74: aspect-[4096/2141], full width — "References from different industries" */}
                  <div className={s.mediaBlock}>
                    <Image
                      src="/images/Currency/7.png"
                      alt="References from different industries"
                      width={4096}
                      height={2141}
                      className={s.img}
                      unoptimized
                    />
                    <p className={s.caption}>References from different industries</p>
                  </div>

                  {/* Output card contains nested image 75 */}
                  <div className={s.outputCard}>
                    <p className={s.h}>✅ Output</p>
                    <p className={s.p}>
                      A draft 3-format framework, synthesized from internal audit + 50+ benchmarks,
                      to validate with business lines.
                    </p>
                    {/* image 75: aspect-[2991/841] — "Format framework (initial framework—not final rules)" */}
                    <div className={s.mediaBlock}>
                      <Image
                        src="/images/Currency/8.png"
                        alt="Format framework (initial framework—not final rules)"
                        width={2991}
                        height={841}
                        className={s.img}
                        unoptimized
                      />
                      <p className={s.caption}>Format framework (initial framework—not final rules)</p>
                    </div>
                  </div>
                </div>

                {/* ── Step 3 ──────────────────────────────────────── */}
                <div className={s.approachStep}>
                  <p className={s.h2}>Step 3: Validate the 3-format model with real business needs</p>

                  <div className={s.objActionRow}>
                    <div className={s.objCard}>
                      <p className={s.h}>🎯 Objective</p>
                      <p className={s.p}>
                        Confirm the 3-format draft works across major business scenarios—and is
                        feasible to implement as a shared component.
                      </p>
                    </div>
                    <div className={s.actionCard}>
                      <p className={s.h}>💪 Action</p>
                      <p className={s.p}>
                        Reviewed the draft with multiple design teams, and partnered with the
                        component engineers to assess implementation effort.
                      </p>
                    </div>
                  </div>

                  <div className={s.outputCard}>
                    <p className={s.h}>✅ Output</p>
                    <p className={s.p}>
                      Aligned on a draft guideline that teams can apply consistently—covering edge
                      cases, cross–business line needs, and rollout expectations.
                    </p>
                    <ul className={s.bulletList}>
                      <li>Decision rules (Short vs Standard vs Explicit)</li>
                      <li>Edge-case alignment</li>
                      <li>Examples by surface + adoption agreement across business lines</li>
                    </ul>
                  </div>
                </div>

              </div>
            </section>

            {/* Divider 680px — node 534:5941 */}
            <div className={s.dividerShort} />

            {/* ════════════════════════════════════════════════════
                Solution — node 534:5942
                Outer: col gap-24 (intro gap-16 + sub-sections cluster gap-60)
                ════════════════════════════════════════════════════ */}
            <div id="solution" className={s.solutionSection}>

              {/* Intro: label + section heading/body */}
              <div className={s.section} style={{ scrollMarginTop: 0 }}>
                <span className={s.label}>Solution</span>
                <div className={s.subSection}>
                  <p className={s.h2}>Deliver a toolkit, not just formatting rules</p>
                  <p className={s.p}>
                    A 3-format framework + decision rules + reusable components—so teams can display
                    and implement money consistently by default.
                  </p>
                </div>
              </div>

              {/* Sub-sections cluster: col gap-60 */}
              <div className={s.solutionCluster}>

                {/* ── Part 1: Format rules ──────────────────────── */}
                <div className={s.solutionStep}>
                  <div className={s.subSection}>
                    <p className={s.h2}>Part 1: Format rules teams can implement</p>
                    <p className={s.p}>
                      Locked the &quot;how to format&quot; rules (ISO, spacing, separators) into a single
                      source of truth.
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

                  {/* image 77: aspect-[1997/4096] tall portrait, full width */}
                  <Image
                    src="/images/Currency/9.png"
                    alt="Format rules teams can implement"
                    width={1997}
                    height={4096}
                    className={s.img}
                    unoptimized
                  />
                </div>

                {/* ── Part 2: Decision guidance ─────────────────── */}
                <div className={s.solutionStep}>
                  <div className={s.subSection}>
                    <p className={s.h2}>Part 2: Decision guidance for choosing formats</p>
                    <p className={s.p}>
                      Defined decision rules so teams can pick Short / Standard / Explicit
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

                  {/* image 10 (img111111): aspect-[1347/4096] very tall portrait, full width */}
                  <Image
                    src="/images/Currency/10.png"
                    alt="Decision guidance for choosing formats"
                    width={1347}
                    height={4096}
                    className={s.img}
                    unoptimized
                  />
                </div>

                {/* ── Part 3: Components & patterns ────────────── */}
                <div className={s.solutionStep}>
                  <div className={s.subSection}>
                    <p className={s.h2}>Part 3: Components &amp; patterns for money workflows</p>
                    <p className={s.p}>
                      Turned the standard into reusable components—so teams ship money workflows
                      consistently, not just format text.
                    </p>
                  </div>

                  <div className={s.whatCard}>
                    <p className={s.h}>❇️ What teams get</p>
                    <ul className={s.bulletList}>
                      <li>Large-number shorthand (estimate + full value)</li>
                      <li>Patterns for conversion (original vs converted)</li>
                      <li>
                        Currency selector + amount input (defaults, validation, formatting states)
                      </li>
                    </ul>
                  </div>

                  {/* image 89: aspect-[1513/4096] tall portrait, full width */}
                  <Image
                    src="/images/Currency/11.png"
                    alt="Components and patterns for money workflows"
                    width={1513}
                    height={4096}
                    className={s.img}
                    unoptimized
                  />

                  {/* Blue callout — node 549:9087: bg #E6F4FF, border #D1E9FC, r12 */}
                  <div className={s.blueCallout}>
                    <p className={s.h}>❇️ Read the full guideline</p>
                    <p className={s.p}>
                      If you&apos;re interested in the full specification (format rules, scenario
                      examples, and component usage), you can view the document here:{" "}
                      <span className={s.pdfLink}>Currency Amount Formatting Guidelines.pdf</span>
                    </p>
                  </div>
                </div>

                {/* ── Bonus: Figma QA plugin ────────────────────── */}
                <div className={s.solutionStep}>
                  <div className={s.subSection}>
                    <p className={s.h2}>Bonus: Figma QA plugin to reduce i18n review churn</p>
                    <p className={s.p}>
                      Designers can&apos;t realistically memorize every i18n rule (currency, date/time,
                      English copy). To catch issues earlier, I built a lightweight Figma QA plugin
                      (Cursor + GPT) that brings i18n checks into the design workflow.
                    </p>
                  </div>

                  <div className={s.whatCard}>
                    <p className={s.h}>❇️ What teams get</p>
                    <ul className={s.bulletList}>
                      <li>Scans frames and flags non-compliant patterns</li>
                      <li>Gives clear, fixable guidance (what&apos;s wrong + what to change)</li>
                      <li>Enables one-click apply for safe fixes</li>
                    </ul>
                  </div>

                  {/* image 90: aspect-[1408/774] landscape, full width */}
                  <Image
                    src="/images/Currency/12.gif"
                    alt="Figma QA plugin to reduce i18n review churn"
                    width={1408}
                    height={774}
                    className={s.img}
                    unoptimized
                  />
                </div>

              </div>
            </div>

            {/* Divider full — node 534:6001 */}
            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                Impact — node 534:6002
                col gap-16, w-892px (= full article width)
                ════════════════════════════════════════════════════ */}
            <section id="impact" className={s.section}>
              <span className={s.label}>Impact</span>

              {/* "Adoption at scale" paragraph — node 534:6004 */}
              <p className={s.p}>
                <strong>Adoption at scale: </strong>
                Rolled out the currency guideline across multiple ByteDance design teams (e.g.,
                Finance, Procurement, Contracts, Business Travel), and it has been{" "}
                <strong>reused as a reference by other orgs</strong>{" "}
                (e.g., Douyin - the China version of TikTok / Volcano Engine).
              </p>

              {/* "Faster ship" paragraph — node 551:9108 */}
              <p className={s.p}>
                <strong>Faster ship, fewer review loops: </strong>
                By shipping{" "}
                <strong>code-backed currency components</strong>, teams could implement consistently
                by default—reducing design review churn and design–dev back-and-forth.
              </p>

              {/* "Earlier issue detection" paragraph — node 551:9110 */}
              <p className={s.p}>
                <strong>Earlier issue detection: </strong>
                A lightweight Figma QA plugin helped designers{" "}
                <strong>catch i18n issues earlier in the workflow</strong>, lowering avoidable
                rework.
              </p>
            </section>

            {/* Divider full — node 534:6005 */}
            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                Reflection — node 534:6006
                col gap-16: label + body paragraph
                ════════════════════════════════════════════════════ */}
            <section id="reflection" className={s.section}>
              <span className={s.label}>Reflection</span>
              <p className={s.p}>
                I realized a global format fails when it&apos;s too strict—teams will resist or work
                around it. A toolkit approach worked better: a clear default, lightweight guidance on
                when to use each format, and documented exceptions that keep flexibility without
                losing consistency.
              </p>
            </section>

            {/* ════════════════════════════════════════════════════
                CTA — node 91:1069
                row gap-20: outlined "Take Me Home" + filled "Next Project"
                ════════════════════════════════════════════════════ */}
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
