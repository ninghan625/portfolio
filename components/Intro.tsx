import Highlight from "@/components/Highlight";

const avatarUrl = "/images/IMG_6527 1.png";

export default function Intro() {
  return (
    <section className="flex w-full flex-col gap-[68px]">
      <div className="flex items-center gap-[16px]">
        <div className="h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full">
          <img
            src={avatarUrl}
            alt="Claire Han"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-0 text-[18px] text-[#00122E]">
          <p>Hi, I’m Claire Han</p>
          <p>Product Designer @ByteDance</p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-[20px]">
        <p className="text-[15px] text-[#8f959e]">
          About me
        </p>
        <div className="flex flex-col gap-[16px] text-[16px] text-[#00122E]">
          <p className="font-normal">
          A product designer with 6 years of experience building <Highlight>B2B and enterprise platforms</Highlight>.
          </p>
          <p className="font-normal">
          I turn <Highlight>high-stakes workflows</Highlight> into clear systems—grounded in research, constraints, and measurable outcomes. I also <Highlight>experiment with AI tools</Highlight> for faster synthesis, documentation, and early prototyping.
          </p>
          <p className="font-normal">
          📍 Based in Dubai, open to relocate
          </p>
        </div>
      </div>
    </section>
  );
}
