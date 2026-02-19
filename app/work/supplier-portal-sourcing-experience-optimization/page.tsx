import Image from "next/image";
import Link from "next/link";
import SupplierAnchorNav from "./_components/SupplierAnchorNav";
import s from "./supplier.module.css";

export default function SupplierCasePage() {
  return (
    <div className={s.page}>
      <div className={s.container}>

        {/* ── Header spacer: 8px + 64px container gap = 72px header clearance ── */}
        <div style={{ height: 8 }} />

        {/* ── Hero cover image (1080px wide in Figma) ─────────── */}
        <div className={s.hero}>
          <Image
            src="/images/supplier/Cover.jpg"
            alt="Supplier Portal Sourcing Experience Optimization"
            width={1080}
            height={454}
            className={s.heroImg}
            priority
            unoptimized
          />
        </div>

        {/* ── Two-column: 108px sidebar + flex article ─────────── */}
        <div className={s.twoCol}>
          <aside className={s.sidebar}>
            <SupplierAnchorNav />
          </aside>

          <article className={s.article}>

            {/* ════════════════════════════════════════════════════
                Project Title
                style_3YXEYS: Helvetica 700 24px / 1.15em #272E3B
                ════════════════════════════════════════════════════ */}
            <h1 className={s.title}>
              Supplier Portal Sourcing Experience Optimization
            </h1>

            {/* ════════════════════════════════════════════════════
                TL;DR
                ════════════════════════════════════════════════════ */}
            <section id="tldr" className={s.section}>
              <span className={s.label}>TL;DR</span>

              {/* Summary card — #F7F9FC bg, border, r12, col gap 8 pad 20 */}
              <div className={s.tldrSummaryCard}>
                <p className={s.h}>
                  Bring critical sourcing actions back into the system
                </p>
                <p className={s.p}>
                  I redesigned ByteDance&apos;s Supplier Portal sourcing experience,
                  focusing on the key moments where suppliers, buyers, and legal
                  teams needed critical information to act. The result improved
                  online sourcing adoption and reduced email back-and-forth.
                </p>
              </div>

              {/* Problem info card — row, icon #FFF4E6, border r8 */}
              <div className={s.infoCard}>
                <div className={s.iconCircle} style={{ background: "#FFF4E6" }}>
                  <img src="/images/supplier/Icon 1.svg" alt="Problem" width={20} height={20} />
                </div>
                <div className={s.infoTextCol}>
                  <p className={s.h}>Problem</p>
                  <p className={s.pSm}>
                    Critical info was hard to locate across a long, staged
                    workflow, so work kept leaking into email.
                  </p>
                </div>
              </div>

              {/* Solution info card — row, icon #E6F4FF */}
              <div className={s.infoCard}>
                <div className={s.iconCircle} style={{ background: "#E6F4FF" }}>
                  <img src="/images/supplier/Icon 2.svg" alt="Solution" width={20} height={20} />
                </div>
                <div className={s.infoTextCol}>
                  <p className={s.h}>Solution</p>
                  <p className={s.p}>
                    Fix the 3 key moments—Email → Terms → Progress.
                  </p>
                </div>
              </div>

              {/* Impact info card — row, icon #E6F9F0 */}
              <div className={s.infoCard}>
                <div className={s.iconCircle} style={{ background: "#E6F9F0" }}>
                  <img src="/images/supplier/Icon 3.svg" alt="Impact" width={20} height={20} />
                </div>
                <div className={s.infoTextCol}>
                  <p className={s.h}>Impact</p>
                  <p className={s.p}>
                    Online sourcing adoption (Global General Procurement Team Q4 pilot) 3.9% → 19.92%
                    (vs. 15% target); buyer validation 4.7–4.8/5.
                  </p>
                </div>
              </div>
            </section>

            {/* divider */}
            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                Context
                ════════════════════════════════════════════════════ */}
            <section id="context" className={s.section}>
              <span className={s.label}>Context</span>

              <div className={s.subSection}>
                <p className={s.h}>Why sourcing adoption stayed low</p>
                <p className={s.p}>
                  Sourcing is a high-stakes workflow involving multiple roles
                  (buyers, suppliers, compliance, legal). But the process often
                  fell back to email because the portal was hard to use and felt
                  unreliable—making status unclear, follow-ups easy to miss, and
                  audits difficult.
                </p>
              </div>

              {/* image 1 — Sourcing Journey */}
              <div className={s.mediaBlock}>
                <Image
                  src="/images/supplier/1.png"
                  alt="Sourcing Journey"
                  width={1080}
                  height={400}
                  className={s.img}
                  unoptimized
                />
                <p className={s.caption}>Sourcing Journey</p>
              </div>
            </section>

            {/* divider */}
            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                Goal
                ════════════════════════════════════════════════════ */}
            <section id="goal" className={s.section}>
              <span className={s.label}>Goal</span>

              {/* Goal item 1 */}
              <div className={s.goalItem}>
                <div className={s.goalBullet} />
                <p className={s.h}>
                  Improve usability
                  <br />
                  <span style={{ fontWeight: 400 }}>
                    Reduce friction so suppliers can complete key steps without
                    workarounds.
                  </span>
                </p>
              </div>

              {/* Goal item 2 */}
              <div className={s.goalItem}>
                <div className={s.goalBullet} />
                <p className={s.h}>
                  Improve visibility and tracking
                  <br />
                  <span style={{ fontWeight: 400 }}>
                    Keep status, deadlines, and key actions visible in one place.
                  </span>
                </p>
              </div>

              {/* Goal item 3 */}
              <div className={s.goalItem}>
                <div className={s.goalBullet} />
                <p className={s.h}>
                  Build trust early
                  <br />
                  <span style={{ fontWeight: 400 }}>
                    Make each step clear and predictable so users rely on the
                    system status.
                  </span>
                </p>
              </div>
            </section>

            {/* divider */}
            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                Design Process  (section label: Approach)
                4 step cards stacked with gap 32px
                ════════════════════════════════════════════════════ */}
            <section id="design-process" className={s.section}>
              <span className={s.label}>Approach</span>

              <div className={s.stepsCluster}>

                {/* ── Step 1 ─────────────────────────────────────── */}
                <div className={s.approachStepCard}>
                  <div className={s.subSection}>
                    <p className={s.h}>
                      Step 1: Cross-functional workshop to align on the real
                      problems
                    </p>
                    <p className={s.p}>
                      Align the team and quickly surface obvious usability
                      blockers in a legacy system.
                    </p>
                  </div>

                  <div className={s.objActionRow}>
                    <div className={s.objCard}>
                      <p className={s.h}>🎯 Objective</p>
                      <p className={s.p}>
                        Get multiple stakeholders on the same page by walking
                        through the legacy supplier journey together.
                      </p>
                      <p className={s.p}>
                        Build a shared understanding of why suppliers avoid the
                        portal and default to email.
                      </p>
                    </div>
                    <div className={s.actionCard}>
                      <p className={s.h}>💪 Action</p>
                      <p className={s.p}>
                        Ran a guided walkthrough as &quot;first-time suppliers&quot; to
                        spot issues we didn&apos;t need external testing to validate.
                      </p>
                      <p className={s.p}>
                        Logged and tagged each issue by journey step and problem
                        type, then aligned on severity and effort.
                      </p>
                    </div>
                  </div>

                  {/* image 47 — Issue log from workshop */}
                  <div className={s.mediaBlock}>
                    <Image
                      src="/images/supplier/2.png"
                      alt="Issue log from workshop"
                      width={1080}
                      height={320}
                      className={s.img}
                      unoptimized
                    />
                    <p className={s.caption}>Issue log from workshop</p>
                  </div>

                  <div className={s.outputCard}>
                    <p className={s.h}>✅ Output</p>
                    <p className={s.p}>
                      A structured issue list with tags and priorities, used as
                      the baseline for design and engineering planning.
                    </p>
                  </div>
                </div>

                {/* ── Step 2 ─────────────────────────────────────── */}
                <div className={s.approachStepCard}>
                  <div className={s.subSection}>
                    <p className={s.h}>Step 2: Explore a task center as entry</p>
                    <p className={s.p}>
                      Competitor patterns suggested a task hub—so I prototyped
                      it to see if it could solve discoverability.
                    </p>
                  </div>

                  <div className={s.objActionRow}>
                    <div className={s.objCard}>
                      <p className={s.h}>🎯 Objective</p>
                      <p className={s.p}>
                        Explore whether a &quot;Task Center&quot; homepage could address
                        the common feedback: suppliers couldn&apos;t find where to
                        start.
                      </p>
                    </div>
                    <div className={s.actionCard}>
                      <p className={s.h}>💪 Action</p>
                      <p className={s.p}>
                        Benchmarked competitor sourcing portals and found many
                        use a clear homepage task hub to guide users to next
                        actions.
                      </p>
                      <p className={s.p}>
                        Built a lightweight Task Center demo and ran quick
                        walkthroughs to gather early feedback before committing
                        engineering time.
                      </p>
                    </div>
                  </div>

                  {/* image 46 — Competitor pattern */}
                  <div className={s.mediaBlock}>
                    <Image
                      src="/images/supplier/3.png"
                      alt="Competitor pattern"
                      width={1080}
                      height={500}
                      className={s.img}
                      unoptimized
                    />
                    <p className={s.caption}>Competitor pattern</p>
                  </div>

                  {/* image 45 — Task Center demo */}
                  <div className={s.mediaBlock}>
                    <Image
                      src="/images/supplier/4.png"
                      alt="Task Center demo (explore direction, not final solution)"
                      width={1080}
                      height={533}
                      className={s.img}
                      unoptimized
                    />
                    <p className={s.caption}>
                      Task Center demo (explore direction, not final solution)
                    </p>
                  </div>

                  <div className={s.outputCard}>
                    <p className={s.h}>✅ Output</p>
                    <p className={s.p}>
                      The concept helped us align on a possible direction, but
                      it also raised a key question:
                    </p>
                    <p className={s.h}>
                      Would changing the homepage actually change supplier
                      behavior?
                    </p>
                    <p className={s.p}>
                      This led to the next step—validating the real entry point.
                    </p>
                  </div>
                </div>

                {/* ── Step 3 ─────────────────────────────────────── */}
                <div className={s.approachStepCard}>
                  <div className={s.subSection}>
                    <p className={s.h}>
                      Step 3: Pressure-test the Task Center direction
                    </p>
                    <p className={s.p}>
                      Walkthroughs + data helped us pivot.
                    </p>
                  </div>

                  <div className={s.objActionRow}>
                    <div className={s.objCard}>
                      <p className={s.h}>🎯 Objective</p>
                      <p className={s.p}>
                        Validate whether a task center would solve suppliers&apos;
                        biggest pain points—and pinpoint the biggest blockers
                        before scaling any redesign.
                      </p>
                    </div>
                    <div className={s.actionCard}>
                      <p className={s.h}>💪 Action</p>
                      <p className={s.p}>
                        Used the Task Center demo to prompt walkthroughs with
                        suppliers and buyers: where they started, what info they
                        looked for, and where they got stuck.
                      </p>
                      <p className={s.p}>
                        Cross-checked product data to validate the entry path we
                        observed.
                      </p>
                    </div>
                  </div>

                  <div className={s.outputCard}>
                    <p className={s.h}>⚡️ Pivot Point</p>
                    <p className={s.h}>
                      The task center wasn&apos;t the highest-leverage place to fix
                      first.
                    </p>
                    <p className={s.p}>
                      Data showed ~70% of suppliers entered from email deep
                      links directly to the sourcing detail page, skipping the
                      portal homepage.
                    </p>
                  </div>

                  {/* image 50 — Most Suppliers Skip the Homepage */}
                  <div className={s.mediaBlock}>
                    <Image
                      src="/images/supplier/5.png"
                      alt="Most Suppliers Skip the Homepage"
                      width={1080}
                      height={250}
                      className={s.img}
                      unoptimized
                    />
                    <p className={s.caption}>Most Suppliers Skip the Homepage</p>
                  </div>
                </div>

                {/* ── Step 4 ─────────────────────────────────────── */}
                <div className={s.approachStepCard}>
                  <div className={s.subSection}>
                    <p className={s.h}>
                      Step 4: Map the key moments where users needed critical
                      info
                    </p>
                    <p className={s.p}>
                      We synthesized cross-role feedback into a clear &quot;what to
                      fix&quot; map.
                    </p>
                  </div>

                  <div className={s.objActionRow}>
                    <div className={s.objCard}>
                      <p className={s.h}>🎯 Objective</p>
                      <p className={s.p}>
                        Turn scattered feedback from suppliers, buyers, and legal
                        into a clear set of high-impact moments to fix—so the
                        workflow is easy to follow and trustable.
                      </p>
                    </div>
                    <div className={s.actionCard}>
                      <p className={s.h}>💪 Action</p>
                      <p className={s.p}>
                        Synthesized findings across suppliers / buyers / legal,
                        mapped them to the sourcing journey, then prioritized by
                        impact and feasibility.
                      </p>
                    </div>
                  </div>

                  {/* Output card with 3 moments */}
                  <div className={s.outputCardLg}>
                    <div className={s.subSection}>
                      <p className={s.h}>✅ Output</p>
                      <p className={s.p}>
                        These three moments became the structure of the final
                        solution (Email → Terms → Progress).
                      </p>
                    </div>

                    <div className={s.momentsCol}>

                      {/* Moment 1 */}
                      <div className={s.momentItem}>
                        <div className={s.momentCard}>
                          <p className={s.h}>Moment 1</p>
                          <p className={s.p}>
                            <strong>Invitation received (Email)</strong>
                          </p>
                          <ul className={s.bulletList}>
                            <li>Essentials weren&apos;t scannable in the email, so buyers resorted to manual follow-ups.</li>
                            <li>Deadline buried in paragraph</li>
                            <li>No clear primary action</li>
                          </ul>
                        </div>
                        <Image
                          src="/images/supplier/6.png"
                          alt="Moment 1 — Email invitation"
                          width={1080}
                          height={400}
                          className={s.img}
                          unoptimized
                        />
                      </div>

                      <div className={s.momentDivider} />

                      {/* Moment 2 */}
                      <div className={s.momentItem}>
                        <div className={s.momentCard}>
                          <p className={s.h}>Moment 2</p>
                          <p className={s.p}>
                            <strong>Before participation (Legal terms)</strong>
                            <br />
                            Requirements were mixed into long legal text, making
                            key info hard to find—while legal still needed
                            explicit consent before suppliers could proceed.
                          </p>
                        </div>
                        <Image
                          src="/images/supplier/7.png"
                          alt="Moment 2 — Legal terms"
                          width={804}
                          height={737}
                          className={s.img}
                          unoptimized
                        />
                      </div>

                      <div className={s.momentDivider} />

                      {/* Moment 3 */}
                      <div className={s.momentItem}>
                        <div className={s.momentCard}>
                          <p className={s.h}>Moment 3</p>
                          <p className={s.p}>
                            <strong>During participation (Progress)</strong>
                          </p>
                          <ul className={s.bulletList}>
                            <li>Status, deadlines, and next steps weren&apos;t clear on the detail page, causing hesitation and missed actions.</li>
                            <li>Two CTAs compete（Confirm Participation vs Respond/Quote）</li>
                            <li>Stage context unclear（&quot;what happens after participation?&quot;）</li>
                          </ul>
                        </div>
                        <Image
                          src="/images/supplier/8.png"
                          alt="Moment 3 — Progress page"
                          width={1080}
                          height={206}
                          className={s.img}
                          unoptimized
                        />
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* divider */}
            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                Solution
                Outer: col gap 24px (layout_RYU7JT)
                ════════════════════════════════════════════════════ */}
            <section id="solution" className={s.solutionSection}>

              {/* Intro block */}
              <div className={s.section} style={{ scrollMarginTop: 0 }}>
                <span className={s.label}>Solution</span>
                <div className={s.subSection}>
                  <p className={s.h}>
                    Design for the 3 key moments in the sourcing journey
                  </p>
                  <p className={s.p}>
                    Instead of scattered UI fixes, we focused on helping users
                    find critical info and take the right action—across email +
                    web.
                  </p>
                </div>
              </div>

              {/* 3 solution sub-sections — col gap 24px */}
              <div className={s.solutionCluster}>

                {/* ── Solution 1 ─────────────────────────────────── */}
                <div className={s.approachStepCard}>
                  <p className={s.h}>
                    Solution 1: Email as a clear starting point
                  </p>

                  <div className={s.objActionRow}>
                    <div className={s.actionCard}>
                      <p className={s.h}>🛠️ Problem</p>
                      <p className={s.p}>
                        <strong>Invitation received (Email)</strong>
                      </p>
                      <ul className={s.bulletList}>
                        <li>Essentials weren&apos;t scannable in the email, so buyers resorted to manual follow-ups.</li>
                        <li>Deadline buried in paragraph</li>
                        <li>No clear primary action</li>
                      </ul>
                    </div>
                    <div className={s.objCard}>
                      <p className={s.h}>❇️ What changed</p>
                      <p className={s.p}>
                        Put the essentials up front: deadline / key changes /
                        required action
                        <br />
                        Used a consistent card layout for fast scanning
                        <br />
                        Deep-link to the sourcing detail page
                      </p>
                    </div>
                  </div>

                  {/* image 54 — Email redesign */}
                  <div className={s.mediaBlock}>
                    <Image
                      src="/images/supplier/9.png"
                      alt="Email redesign"
                      width={1080}
                      height={689}
                      className={s.img}
                      unoptimized
                    />
                  </div>

                  <div className={s.whyCard}>
                    <p className={s.h}>💡 Why it matters</p>
                    <p className={s.p}>
                      Clear emails reduce missed updates and manual
                      follow-ups—and bring actions back into the system.
                    </p>
                  </div>

                  <div className={s.whyCard}>
                    <p className={s.h}>🚀 Bonus — Build for scale</p>
                    <p className={s.p}>
                      Standardized the layout into a reusable email template
                      component for other procurement teams.
                    </p>
                    {/* image 55 — Email template */}
                    <div className={s.mediaBlock}>
                      <Image
                        src="/images/supplier/10.png"
                        alt="Email template for all types of emails and other procurement teams"
                        width={1080}
                        height={372}
                        className={s.img}
                        unoptimized
                      />
                      <p className={s.caption}>
                        Email template for all types of emails and other
                        procurement teams
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── Solution 2 ─────────────────────────────────── */}
                <div className={s.approachStepCard}>
                  <p className={s.h}>
                    Solution 2: Compliance at the moment of commitment
                  </p>

                  <div className={s.objActionRow}>
                    <div className={s.actionCard}>
                      <p className={s.h}>🛠️ Problem</p>
                      <p className={s.p}>
                        <strong>Before participation (Legal terms)</strong>
                        <br />
                        Requirements were mixed into long legal text, making key
                        info hard to find—while legal still needed explicit
                        consent before suppliers could proceed.
                      </p>
                    </div>
                    <div className={s.objCard}>
                      <p className={s.h}>❇️ What changed</p>
                      <p className={s.p}>
                        Separated project requirements from long legal terms
                        <br />
                        Added an explicit consent checkbox right before
                        submission
                      </p>
                    </div>
                  </div>

                  {/* image 57 — Compliance */}
                  <div className={s.mediaBlock}>
                    <Image
                      src="/images/supplier/11.png"
                      alt="Compliance redesign"
                      width={1080}
                      height={847}
                      className={s.img}
                      unoptimized
                    />
                  </div>

                  <div className={s.whyCard}>
                    <p className={s.h}>💡 Why it matters</p>
                    <p className={s.p}>
                      Legal requirements are met without burying the information
                      suppliers need to act.
                    </p>
                  </div>
                </div>

                {/* ── Solution 3 ─────────────────────────────────── */}
                <div className={s.approachStepCard}>
                  <p className={s.h}>
                    Solution 3: Progress you can follow on the detail page
                  </p>

                  <div className={s.objActionRow}>
                    <div className={s.actionCard}>
                      <p className={s.h}>🛠️ Problem</p>
                      <p className={s.p}>
                        <strong>During participation (Progress)</strong>
                      </p>
                      <ul className={s.bulletList}>
                        <li>Status, deadlines, and next steps weren&apos;t clear on the detail page, causing hesitation and missed actions.</li>
                        <li>Two CTAs compete（Confirm Participation vs Respond/Quote）</li>
                        <li>Stage context unclear（&quot;what happens after participation?&quot;）</li>
                      </ul>
                    </div>
                    <div className={s.objCard}>
                      <p className={s.h}>❇️ What changed</p>
                      <p className={s.p}>
                        Added a stage-based timeline: stage / deadline / next
                        step
                        <br />
                        Showed one primary action per stage to avoid competing
                        CTAs
                        <br />
                        Made participation signals visible earlier to reduce
                        buyer uncertainty
                      </p>
                    </div>
                  </div>

                  {/* image 61 — Stage model / Progress */}
                  <div className={s.mediaBlock}>
                    <Image
                      src="/images/supplier/12.png"
                      alt="Stage-based progress view"
                      width={1080}
                      height={970}
                      className={s.img}
                      unoptimized
                    />
                  </div>

                  <div className={s.whyCard}>
                    <p className={s.h}>💡 Why it matters</p>
                    <p className={s.p}>
                      When progress is easy to see, users spend less time
                      guessing and more time completing tasks.
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* divider */}
            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                Impact
                style_Z82JZ9: regular 16px / 1.5em #272E3B
                ════════════════════════════════════════════════════ */}
            <section id="impact" className={s.section}>
              <span className={s.label}>Impact</span>
              <p className={s.p}>
                Improved online sourcing adoption and earned strong buyer
                feedback.
              </p>
              <p className={s.p}>
                Adoption (Q4 pilot, Global General Procurement Team): 3.9% → 19.92% (vs. 15% target)
              </p>
              <p className={s.p}>
                Usability validation (buyers): 4.7–4.8 / 5 across key questions
              </p>
            </section>

            {/* divider */}
            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                Reflection  (anchor label: Thoughts)
                style_7GS763: bold 16px / 1.5em #272E3B
                ════════════════════════════════════════════════════ */}
            <section id="thoughts" className={s.section}>
              <span className={s.label}>Reflection</span>
              <p className={s.hLight}>
                Simple UI changes can still require complex cross-functional
                alignment.
              </p>
              <p className={s.hLight}>
                Align early across roles: translated buyer / supplier / legal
                needs into one shared stage model and clear priorities.
              </p>
              <p className={s.hLight}>
                Balance usability and compliance: kept the main flow
                task-focused while meeting compliance requirements.
              </p>
            </section>

            {/* ════════════════════════════════════════════════════
                CTA — layout_78K8HE: row gap 20px hug
                ════════════════════════════════════════════════════ */}
            <div className={s.ctaRow}>
              <Link href="/" className={s.ctaOutlined}>
                Take Me Home
              </Link>
              <Link
                href="/work/i18n-currency-formatting-toolkit"
                className={s.ctaFilled}
              >
                Next Project
              </Link>
            </div>

          </article>
        </div>

      </div>
    </div>
  );
}
