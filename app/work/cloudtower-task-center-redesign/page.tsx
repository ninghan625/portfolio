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
];

export default function CloudTowerTaskCenterPage() {
  return (
    <div className={s.page}>
      <div className={s.hero}>
        <div className={s.heroInner}>
          <Image
            src="/images/task/Cover.jpg"
            alt="Redesigning the Task Center to simplify complex status tracking"
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
            Redesigning the Task Center to simplify complex status tracking
          </PageTitle>
        </div>

        {/* ══ CONTEXT ══ */}
        <section id="context" className={s.section}>
          <Eyebrow>Context</Eyebrow>
          <SectionHeadline>
            The Task Center couldn&apos;t keep up with CloudTower&apos;s growing
            complexity
          </SectionHeadline>

          <div className={s.introBody}>
            <BodyText>
              <p>
                I led the end-to-end redesign of CloudTower&apos;s{" "}
                <strong>Task Center (Web)</strong>, and built a{" "}
                <strong>standardized component library</strong> by componentizing
                task cards as Figma variants, giving future iterations a single
                source of truth.
              </p>
            </BodyText>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              Most data center operations are asynchronous, so users need a place
              to track them
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  In data center management, most operations are{" "}
                  <strong>asynchronous</strong>. They don&apos;t finish
                  immediately. Users initiate a task and switch to other work
                  while waiting for the result.
                </p>
                <p>
                  The <strong>Task Center</strong> acts as a unified hub,
                  letting users track the status and outcome of all background
                  operations in one place.
                </p>
              </BodyText>
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              As CloudTower added more complex features, the legacy Task Center
              hit its limits
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  As <strong>CloudTower</strong> introduced more complex
                  features, the legacy Task Center design could no longer handle
                  the increasing data density and complexity. We needed a
                  scalable solution capable of displaying intricate task details
                  and supporting the platform&apos;s future growth.
                </p>
              </BodyText>
            </div>
          </div>
        </section>

        {/* ══ DESIGN PROCESS ══ */}
        <section id="design-process" className={s.section}>
          <Eyebrow>Design Process</Eyebrow>
          <SectionHeadline>
            Mapping task states and user behavior before any UI work
          </SectionHeadline>

          <div className={s.subBlock}>
            <Subheading>
              I started by understanding task types, user behaviors, and real
              needs
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  Through user interviews, competitive analysis, and UI
                  walkthroughs, I identified the current task types, user
                  behaviors, and needs.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/task/Task%2001.jpg"
                alt="Task types, user behaviors, and needs"
                width={2400}
                height={1105}
              />
            </div>
          </div>

          <div className={s.subBlock}>
            <Subheading>
              Then I mapped out the task state machine end to end
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  A task transitions through various states from initiation by
                  the user to completion. Different task states influence the
                  actions a user can perform and vary in importance to the user.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/task/Task%2002.jpg"
                alt="Task transitions between states"
                width={1674}
                height={808}
              />
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/task/Task%2003.jpg"
                alt="Operations available in different states and user feedback"
                width={2400}
                height={830}
              />
            </div>
          </div>
        </section>

        {/* ══ SOLUTION ══ */}
        <section id="solution" className={s.section}>
          <Eyebrow>Solution</Eyebrow>
          <SectionHeadline>
            Five focused improvements that compound into a clearer Task Center
          </SectionHeadline>

          {/* Part 1 */}
          <div className={s.subBlock}>
            <Subheading>
              Part 1: Distinct icons replaced the generic spinner so progress is
              legible
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  <strong>Before.</strong> Whether it was a step-based task or a
                  data transfer task, the same generic &ldquo;In Progress&rdquo;
                  icon was used. For most non-data-transfer tasks, users had{" "}
                  <strong>no visibility</strong> into the specific step. Just a
                  spinning loop.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/task/Task%2004.jpg"
                alt="Old generic In Progress icon with no step visibility"
                width={1766}
                height={478}
              />
            </div>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  <strong>After.</strong> I designed distinct icons for each of
                  the three states to help users visualize progress and prompt
                  the actions they need to take.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/task/Task05.jpg"
                alt="New distinct icons for each task state"
                width={1264}
                height={725}
              />
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/task/Task%2006.jpg"
                alt="Showcase: task status transitions in cross-cluster VM migration"
                width={2400}
                height={1422}
              />
            </div>
          </div>

          {/* Part 2 */}
          <div className={s.subBlock}>
            <Subheading>
              Part 2: Status-based sorting kept paused tasks visible
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  <strong>Before.</strong> Sorting strictly by &ldquo;Start
                  Time&rdquo; pushed critical &ldquo;Paused&rdquo; tasks (the
                  ones that need user action) out of the viewport. Users had to
                  scroll extensively to locate them.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/task/Task%2007.jpg"
                alt="Old chronological sorting buried paused tasks"
                width={1530}
                height={878}
              />
            </div>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  <strong>After.</strong> Sorting is no longer strictly
                  chronological. I implemented <strong>status-based sorting</strong>
                  : tasks requiring user attention are prioritized at the top, so
                  critical items aren&apos;t pushed out of the viewport by new
                  incoming tasks.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/task/Task%2008.jpg"
                alt="New status-based sorting prioritizes paused tasks"
                width={1990}
                height={1716}
              />
            </div>
          </div>

          {/* Part 3 */}
          <div className={s.subBlock}>
            <Subheading>
              Part 3: Persistent task history removed the unstable disappearance
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  <strong>Before.</strong> Completed tasks vanished immediately
                  after the panel was closed (marked as &ldquo;Read&rdquo;). If
                  a user closed the panel by mistake, they had to navigate to
                  the full &ldquo;All Tasks&rdquo; page to find the task again.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/task/Task%2009.jpg"
                alt="Old behavior: completed tasks vanished after closing the panel"
                width={1492}
                height={688}
              />
            </div>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  <strong>After.</strong> I removed the volatile Read/Unread
                  states. Recently completed tasks are{" "}
                  <strong>persistently displayed</strong> in the panel, giving
                  users a stable reference.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/task/Task%2010.jpg"
                alt="New persistent task history in the panel"
                width={1824}
                height={1102}
              />
            </div>
          </div>

          {/* Part 4 */}
          <div className={s.subBlock}>
            <Subheading>
              Part 4: A dynamic panel height showed more tasks at once
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  <strong>Before.</strong> The panel&apos;s fixed maximum height
                  severely limited how many tasks were visible. During
                  high-volume operations, users scrolled repeatedly within a
                  small window to track their tasks.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/task/Task%2011.jpg"
                alt="Old fixed-height panel limited visible tasks"
                width={1094}
                height={550}
              />
            </div>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  <strong>After.</strong> I removed the fixed height. The panel
                  now maintains a fixed 64px gap from the bottom of the screen,
                  maximizing the available space to show more tasks.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/task/Task%2012.jpg"
                alt="New dynamic panel height fills available viewport"
                width={2144}
                height={1238}
              />
            </div>
          </div>

          {/* Part 5 */}
          <div className={s.subBlock}>
            <Subheading>
              Part 5: A dynamic icon surfaced task progress without opening the
              panel
            </Subheading>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  <strong>Before.</strong> The Task Center button didn&apos;t
                  reflect any status changes. Users had to click the icon to see
                  any details about task execution.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/task/Task%2013.jpg"
                alt="Old static Task Center icon with no status indication"
                width={2400}
                height={730}
              />
            </div>
            <div className={s.bodyBlock}>
              <BodyText>
                <p>
                  <strong>After.</strong> Status combinations on the icon now
                  inform task progress at a glance, surfacing changes without
                  the user having to open the panel.
                </p>
              </BodyText>
            </div>
            <div className={s.figureBlock}>
              <Figure
                src="/images/task/Task%2014.jpg"
                alt="New dynamic icon with status combinations"
                width={2400}
                height={1278}
              />
            </div>
          </div>
        </section>

        {/* ══ IMPACT ══ */}
        <section id="impact" className={s.section}>
          <Eyebrow>Impact</Eyebrow>
          <SectionHeadline>
            Componentized task cards became a single source of truth across
            teams
          </SectionHeadline>

          <div className={s.introBody}>
            <BodyText>
              <p>
                By encapsulating the task cards into{" "}
                <strong>Figma Components with Variants</strong>, I created a
                single source of truth for all task states. This reduced design
                redundancy and improved the{" "}
                <strong>consistency and efficiency</strong> of future design
                iterations.
              </p>
            </BodyText>
          </div>
          <div className={s.figureBlock}>
            <Figure
              src="/images/task/Task%2015.jpg"
              alt="Componentized task cards as Figma variants"
              width={2400}
              height={677}
            />
          </div>
        </section>
      </CaseStudyLayout>
    </div>
  );
}
