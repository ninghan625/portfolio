import Image from "next/image";
import Link from "next/link";
import SupplierAnchorNav from "./_components/SupplierAnchorNav";
import s from "./supplier.module.css";

export default function SupplierCasePage() {
  return (
    <div className={s.page}>
      <div className={s.container}>

        {/* ── 8px top spacer (container gap-64px gives 72px total clearance below fixed header) ── */}
        <div style={{ height: 8 }} />

        {/* ── Hero cover image ── */}
        {/* Figma: aspect-[4096/1815] at full container width */}
        <div className={s.hero}>
          <Image
            src="/images/supplier/Cover.jpg"
            alt="Supplier Portal Sourcing Experience Optimization"
            width={1240}
            height={550}
            className={s.heroImg}
            priority
            unoptimized
          />
        </div>

        {/* ── Two-column: 108px sidebar + flex-1 article, gap 80px ── */}
        <div className={s.twoCol}>
          <aside className={s.sidebar}>
            <SupplierAnchorNav />
          </aside>

          <article className={s.article}>

            {/* ════════════════════════════════════════════════════
                Project Title — Helvetica 700 24px / normal #272E3B
                ════════════════════════════════════════════════════ */}
            <h1 className={s.title}>
              Supplier Portal Sourcing Experience Optimization
            </h1>

            {/* ════════════════════════════════════════════════════
                TL;DR — col gap-16px
                ════════════════════════════════════════════════════ */}
            <section id="tldr" className={s.section}>
              <span className={s.label}>TL;DR</span>

              {/* Summary card: bg #F7F9FC border #E5E8ED r12 col gap-8px p20 */}
              <div className={s.tldrSummaryCard}>
                <p className={s.hLg}>
                  Bring critical sourcing actions back into the system
                </p>
                <p className={s.tldrBody}>
                  I redesigned ByteDance&apos;s Supplier Portal sourcing experience,
                  focusing on the key moments where suppliers, buyers, and legal
                  teams needed critical information to act. The result{" "}
                  <strong>improved online sourcing adoption and reduced email back-and-forth</strong>
                  .
                </p>
              </div>

              {/* Problem — bg white border #E5E8ED r8 p21 gap-16 */}
              <div className={s.infoCard}>
                <div className={s.iconCircle} style={{ background: "#FFF4E6" }}>
                  <img src="/images/supplier/Icon 1.svg" alt="" width={20} height={20} />
                </div>
                <div className={s.infoTextCol}>
                  <p className={s.h}>Problem</p>
                  <p className={s.pSm}>
                    Critical info was hard to locate across a long, staged
                    workflow, so work kept leaking into email.
                  </p>
                </div>
              </div>

              {/* Solution — bg white border #E5E8ED r8 p21 gap-16 */}
              <div className={s.infoCard}>
                <div className={s.iconCircle} style={{ background: "#E6F4FF" }}>
                  <img src="/images/supplier/Icon 2.svg" alt="" width={20} height={20} />
                </div>
                <div className={s.infoTextCol}>
                  <p className={s.h}>Solution</p>
                  <div>
                    <p className={s.p} style={{ marginBottom: 0 }}>
                      Redesigned the workflow around 4 key moments where users
                      needed clarity to act:
                    </p>
                    <ul className={s.bulletList}>
                      <li><strong>Email:</strong>{" "}Make invites scannable</li>
                      <li><strong>Terms:</strong>{" "}Separate requirements from legal</li>
                      <li><strong>Participation:</strong>{" "}Clarify intent + reduce CTA ambiguity</li>
                      <li><strong>Progress:</strong>{" "}Make stages and deadlines trackable</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Impact — bg white border #E5E8ED r8 p21 gap-16 */}
              <div className={s.infoCard}>
                <div className={s.iconCircle} style={{ background: "#E6F9F0" }}>
                  <img src="/images/supplier/Icon 3.svg" alt="" width={20} height={20} />
                </div>
                <div className={s.infoTextCol}>
                  <p className={s.h}>Impact</p>
                  <p className={s.pSm}>
                    Online sourcing adoption (GGP Q4 pilot) 3.9% → 19.92%
                    (vs. 15% target); buyer validation 4.7–4.8/5.
                  </p>
                </div>
              </div>

            </section>

            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                Context — col gap-16px
                ════════════════════════════════════════════════════ */}
            <section id="context" className={s.section}>
              <span className={s.label}>Context</span>

              <div className={s.subSection}>
                <p className={s.hLg}>
                  Sourcing leaked into email because the portal wasn&apos;t reliable
                </p>
                <p className={s.p}>
                  Sourcing is a high-stakes workflow involving multiple roles
                  (buyers, suppliers, compliance, and legal). The process often
                  fell back to email because the portal was hard to use and
                  didn&apos;t feel reliable. As a result, status was unclear,
                  follow-ups were easy to miss, and audits were difficult.
                </p>
              </div>

              {/* image 1: aspect 4096/1815 ≈ 1052×467 */}
              <div className={s.mediaBlock}>
                <Image
                  src="/images/supplier/1.png"
                  alt="Buyer–supplier back-and-forth happens in email, making the workflow hard to track."
                  width={1052}
                  height={467}
                  className={s.img}
                  unoptimized
                />
                <p className={s.caption}>
                  Buyer–supplier back-and-forth happens in email, making the
                  workflow hard to track.
                </p>
              </div>
            </section>

            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                Goal — col gap-16px
                ════════════════════════════════════════════════════ */}
            <section id="goal" className={s.section}>
              <span className={s.label}>Goal</span>

              {/* Goal 1 */}
              <div className={s.goalItem}>
                <div className={s.goalBullet} />
                <div className={s.goalText}>
                  <p>Improve usability</p>
                  <p className={s.goalDesc}>
                    Reduce friction so suppliers can complete key steps without
                    workarounds.
                  </p>
                </div>
              </div>

              {/* Goal 2 */}
              <div className={s.goalItem}>
                <div className={s.goalBullet} />
                <div className={s.goalText}>
                  <p>Improve visibility and tracking</p>
                  <p className={s.goalDesc}>
                    Keep status, deadlines, and key actions visible in one place.
                  </p>
                </div>
              </div>

              {/* Goal 3 */}
              <div className={s.goalItem}>
                <div className={s.goalBullet} />
                <div className={s.goalText}>
                  <p>Build trust early</p>
                  <p className={s.goalDesc}>
                    Make each step clear and predictable so users rely on the
                    system status.
                  </p>
                </div>
              </div>
            </section>

            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                Approach — col gap-16px, steps cluster col gap-80px
                ════════════════════════════════════════════════════ */}
            <section id="design-process" className={s.section}>
              <span className={s.label}>Approach</span>

              <div className={s.stepsCluster}>

                {/* ── Step 1 ─────────────────────────────────────────── */}
                <div className={s.approachStepCard}>
                  <div className={s.subSection}>
                    <p className={s.hLg}>
                      Step 1: Cross-functional workshop to align on the real
                      problems
                    </p>
                  </div>

                  {/* Objective + Action side-by-side */}
                  <div className={s.objActionRow}>
                    <div className={s.objCard}>
                      <p className={s.h}>🎯 Objective</p>
                      <p className={s.p}>
                        Align stakeholders by{" "}
                        <strong>walking through the legacy supplier journey together</strong>{" "}
                        and clarifying why suppliers default to email.
                      </p>
                    </div>
                    <div className={s.actionCard}>
                      <p className={s.h}>💪 Action</p>
                      <p className={s.p}>
                        <strong>Ran a first-time-supplier walkthrough</strong>
                        , then logged and{" "}
                        <strong>tagged issues</strong>{" "}
                        by journey step and type to align on severity and effort.
                      </p>
                    </div>
                  </div>

                  {/* Output card */}
                  <div className={s.outputCard}>
                    <p className={s.h}>✅ Output</p>
                    <p className={s.p}>
                      A structured issue list with tags and priorities, used as
                      the baseline for design and engineering planning.
                    </p>
                  </div>

                  {/* image 47: aspect 3900/1482 ≈ 1052×400 */}
                  <div className={s.mediaBlock}>
                    <Image
                      src="/images/supplier/2.png"
                      alt="Issue log from workshop"
                      width={1052}
                      height={400}
                      className={s.img}
                      unoptimized
                    />
                    <p className={s.caption}>Issue log from workshop</p>
                  </div>
                </div>

                {/* ── Step 2 ─────────────────────────────────────────── */}
                <div className={s.approachStepCard}>
                  <div className={s.subSection}>
                    <p className={s.hLg}>
                      Step 2: Competitive analysis - Task Center as a common
                      entry
                    </p>
                    <p className={s.p}>
                      I benchmarked mainstream sourcing portals (e.g., Coupa and
                      Oracle), then prototyped a lightweight Task Center and ran
                      quick walkthroughs to gather early feedback before
                      committing engineering time.
                    </p>
                  </div>

                  {/* image 45: aspect 1052/611 ≈ 1052×612 */}
                  <div className={s.mediaBlock}>
                    <Image
                      src="/images/supplier/3.png"
                      alt="Task Center demo (explore direction, not final solution)"
                      width={1052}
                      height={612}
                      className={s.img}
                      unoptimized
                    />
                    <p className={s.captionLg}>
                      Task Center demo (explore direction, not final solution)
                    </p>
                  </div>
                </div>

                {/* ── Insight block ──────────────────────────────────── */}
                <div className={s.insightBlock}>
                  <p className={s.p}>
                    The concept helped us align on a possible direction, but it
                    also raised a key question:
                  </p>
                  <div className={s.insightCallout}>
                    <p className={s.insightText}>
                      💡 Would building the task center actually change supplier
                      behavior?
                    </p>
                  </div>
                </div>

                {/* ── Step 3 ─────────────────────────────────────────── */}
                <div className={s.approachStepCard}>
                  <div className={s.subSection}>
                    <p className={s.hLg}>
                      Step 3: Pressure-test the Task Center direction
                    </p>
                    <p className={s.p}>
                      Used the Task Center demo to prompt walkthroughs with
                      suppliers and buyers
                    </p>
                  </div>

                  {/* Pivot Point output card */}
                  <div className={s.outputCard}>
                    <p className={s.h}>⚡️ Pivot Point</p>
                    <p className={s.h}>
                      The task center wasn&apos;t the highest-leverage place to fix
                      first, email is.
                    </p>
                    <p className={s.p}>
                      Data showed ~70% of suppliers entered from email deep
                      links directly to the sourcing detail page, skipping the
                      portal homepage.
                    </p>
                  </div>

                  {/* image 50: aspect 4096/1214 ≈ 1052×312 */}
                  <div className={s.mediaBlock}>
                    <Image
                      src="/images/supplier/4.png"
                      alt="Most Suppliers Skip the Homepage"
                      width={1052}
                      height={312}
                      className={s.img}
                      unoptimized
                    />
                    <p className={s.caption}>Most Suppliers Skip the Homepage</p>
                  </div>
                </div>

                {/* ── What to fix: 4 key moments ─────────────────────── */}
                <div className={s.approachStepCard}>
                  <div className={s.subSection}>
                    <p className={s.hLg}>
                      What to fix: 4 key moments in the sourcing journey
                    </p>
                    <p className={s.p}>
                      Instead of scattered UI fixes, we focused on helping users
                      find critical info and take the right action—across email
                      + web.
                    </p>
                  </div>

                  {/* Row 1: Moments 1 & 2 */}
                  <div className={s.momentGrid}>
                    <div className={s.momentCard2}>
                      <div className={s.momentCardHeader}>
                        <p className={s.momentTitle}>
                          Moment 1: Invitation received (Email)
                        </p>
                        <p className={s.momentDesc}>
                          Essentials weren&apos;t scannable in the email, so buyers
                          resorted to manual follow-ups.
                        </p>
                      </div>
                      <div className={s.momentQuote}>
                        <p className={s.quoteText}>
                          &ldquo;I always end up manually re-sending the email to
                          suppliers just to double-check that they saw the
                          requirements.&rdquo;
                        </p>
                        <p className={s.momentAttrib}>— From Buyers</p>
                      </div>
                    </div>

                    <div className={s.momentCard2}>
                      <div className={s.momentCardHeader}>
                        <p className={s.momentTitle}>
                          Moment 2: Before participation (Legal terms)
                        </p>
                        <p className={s.momentDesc}>
                          Requirements were mixed into long legal text, making
                          key info hard to find—while legal still needed
                          explicit consent before suppliers could proceed.
                        </p>
                      </div>
                      <div className={s.momentQuote}>
                        <p className={s.quoteText}>
                          &ldquo;The legal terms always dominate the top of the page.
                          Can you separate the standard terms from the actual
                          project requirements?&rdquo;
                        </p>
                        <p className={s.momentAttrib}>— From Buyers</p>
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Moments 3 & 4 */}
                  <div className={s.momentGrid}>
                    <div className={s.momentCard2}>
                      <div className={s.momentCardHeader}>
                        <p className={s.momentTitle}>
                          Moment 3: Confirm participation (CTA)
                        </p>
                        <p className={s.momentDesc}>
                          Two CTAs compete（Confirm Participation vs
                          Respond/Quote）
                        </p>
                      </div>
                      <div className={s.momentQuote}>
                        <p className={s.quoteText}>
                          &ldquo;Do I need to quote now?&rdquo;
                        </p>
                        <p className={s.momentAttrib}>— From Buyers</p>
                      </div>
                    </div>

                    <div className={s.momentCard2}>
                      <div className={s.momentCardHeader}>
                        <p className={s.momentTitle}>
                          Moment 4: During participation (Progress)
                        </p>
                        <p className={s.momentDesc}>
                          Stage context unclear（&ldquo;what happens after
                          participation?&rdquo;）, causing hesitation and missed
                          actions.
                        </p>
                      </div>
                      <div className={s.momentQuote}>
                        <p className={s.quoteText}>
                          &ldquo;I clicked &lsquo;Participate&rsquo;, but nothing happened.
                          Did you get my intention?&rdquo;
                        </p>
                        <p className={s.momentAttrib}>— From Buyers</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                Solution — col gap-24px, cluster col gap-60px
                ════════════════════════════════════════════════════ */}
            <section id="solution" className={s.solutionSection}>
              <span className={s.label}>Solution</span>

              <div className={s.solutionCluster}>

                {/* ── Moment 1: Email ─────────────────────────────────── */}
                <div className={s.approachStepCard}>
                  <div className={s.subSection}>
                    <p className={s.hLg}>
                      Moment 1: Email as a clear starting point
                    </p>
                  </div>

                  {/* image 63: aspect 2532/3030 ≈ 1052×1259 */}
                  <Image
                    src="/images/supplier/5.png"
                    alt="Email redesign"
                    width={1052}
                    height={1259}
                    className={s.img}
                    unoptimized
                  />

                  {/* Bonus card */}
                  <div className={s.bonusCard}>
                    <p className={s.h}>🚀 Bonus - Build for scale</p>
                    <p className={s.p}>
                      Standardized the layout into a reusable email template
                      component for other procurement teams.
                    </p>
                    {/* image 64: aspect 4092/2050 ≈ 1012×507 */}
                    <div className={s.mediaBlock}>
                      <Image
                        src="/images/supplier/6.png"
                        alt="Email template for all types of emails and other procurement teams"
                        width={1012}
                        height={507}
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

                {/* ── Moment 2: Legal Terms ───────────────────────────── */}
                <div className={s.approachStepCard}>
                  <div className={s.subSection}>
                    <p className={s.momentTitle}>
                      Moment 2: Separate Legal Terms from Project Details
                    </p>
                  </div>

                  {/* image 65: aspect 1929/3250 ≈ 1052×1773 */}
                  <Image
                    src="/images/supplier/7.png"
                    alt="Separate Legal Terms from Project Details"
                    width={1052}
                    height={1773}
                    className={s.img}
                    unoptimized
                  />
                </div>

                {/* ── Moment 3: Participate CTA ───────────────────────── */}
                <div className={s.approachStepCard}>
                  <div className={s.subSection}>
                    <p className={s.hLg}>
                      Moment 3: Clarify the &ldquo;Participate&rdquo; intent
                    </p>
                  </div>

                  {/* image 71: aspect 3600/4060 ≈ 1052×1187 */}
                  <Image
                    src="/images/supplier/8.png"
                    alt="Clarify the Participate intent"
                    width={1052}
                    height={1187}
                    className={s.img}
                    unoptimized
                  />
                </div>

                {/* ── Moment 4: Journey ────────────────────────────────── */}
                <div className={s.approachStepCard}>
                  <div className={s.subSection}>
                    <p className={s.hLg}>
                      Moment 4: Visualize the sourcing journey
                    </p>
                  </div>

                  {/* image 70: aspect 3602/2414 ≈ 1052×706 */}
                  <Image
                    src="/images/supplier/9.png"
                    alt="Visualize the sourcing journey"
                    width={1052}
                    height={706}
                    className={s.img}
                    unoptimized
                  />
                </div>

              </div>
            </section>

            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                Impact — col gap-16px
                ════════════════════════════════════════════════════ */}
            <section id="impact" className={s.section}>
              <span className={s.label}>Impact</span>

              <p className={s.p}>
                Improved online sourcing adoption and earned strong buyer
                feedback.
              </p>

              <div className={s.statRow}>

                {/* Adoption */}
                <div className={s.statCard}>
                  <div className={s.statHeader}>
                    <div className={s.statIconCircle} style={{ background: "#F0FDF4" }}>
                      <img src="/images/supplier/icon 4.svg" alt="" width={16} height={16} />
                    </div>
                    <p className={s.h}>Adoption</p>
                  </div>
                  <div>
                    <div className={s.statNumRow}>
                      <span className={s.statNum}>3.9%</span>
                      <span className={s.statArrow}>→</span>
                      <span className={`${s.statNum} ${s.statNumGreen}`}>19.92%</span>
                    </div>
                    <p className={s.statSub}>Q4 pilot (GGP) vs. 15% target</p>
                  </div>
                </div>

                {/* Supplier Efficiency */}
                <div className={s.statCard}>
                  <div className={s.statHeader}>
                    <div className={s.statIconCircle} style={{ background: "#EFF6FF" }}>
                      <img src="/images/supplier/icon 5.svg" alt="" width={16} height={16} />
                    </div>
                    <p className={s.h}>Supplier Efficiency</p>
                  </div>
                  <div>
                    <p className={s.statNum}>~90%</p>
                    <p className={s.statSub}>
                      of buyers agreed the redesign would improve supplier
                      efficiency and reduce buyer–supplier back-and-forth
                    </p>
                  </div>
                </div>

                {/* Buyer Confidence */}
                <div className={s.statCard}>
                  <div className={s.statHeader}>
                    <div className={s.statIconCircle} style={{ background: "#FAF5FF" }}>
                      <img src="/images/supplier/icon 6.svg" alt="" width={16} height={16} />
                    </div>
                    <p className={s.h}>Buyer Confidence</p>
                  </div>
                  <div>
                    <p className={s.statNumLg}>All buyers</p>
                    <p className={s.statSub}>
                      reported higher confidence in the system and said they
                      were more willing to promote it to suppliers
                    </p>
                  </div>
                </div>

              </div>
            </section>

            <div className={s.divider} />

            {/* ════════════════════════════════════════════════════
                Reflection — col gap-16px
                ════════════════════════════════════════════════════ */}
            <section id="thoughts" className={s.section}>
              <span className={s.label}>Reflection</span>

              <div className={s.reflectionItem}>
                <p className={s.h}>
                  Reflection 1: Validate real pain points, not ideal assumptions
                </p>
                <p className={s.p}>
                  I started with a reasonable assumption (a Task Center entry),
                  but user walkthroughs showed the real friction lived elsewhere.
                  The key lesson was to stay close to users and validate pain
                  points with real behavior before scaling a direction.
                </p>
              </div>

              <div className={s.reflectionItem}>
                <p className={s.h}>
                  Reflection 2: Align early to avoid costly rework
                </p>
                <p className={s.p}>
                  A key takeaway was how much cross-functional coordination the
                  work required. With Legal, Compliance, Engineering, and Ops
                  all shaping the workflow, early alignment became critical. By
                  validating decisions before build, we avoided backtracking and
                  kept the project efficient for R&amp;D.
                </p>
              </div>
            </section>

            {/* ════════════════════════════════════════════════════
                CTA row — gap-20px
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
