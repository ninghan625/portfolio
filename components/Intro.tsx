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
        <div className="flex flex-1 flex-col gap-0 text-[18px] text-[#1f2329]">
          <p>Hi, I’m Claire Han</p>
          <p>Product Designer @ByteDance, based in Dubai</p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-[20px]">
        <p className="font-['Heiti_SC','PingFang_SC','Helvetica',sans-serif] text-[15px] text-[#8f959e]">
          About me
        </p>
        <div className="flex flex-col gap-[16px] text-[16px] text-[#1f2329]">
          <p className="font-normal">
          A product designer with 6 years of experience building B2B and enterprise platforms.
          </p>
          <p className="font-normal">
           I specialize in turning complex, high-stakes workflows into clear, scalable experiences. I explore AI tools and vibe coding to improve design efficiency and quality.
          </p>
          <p className="font-normal">
            When I’m offline, I run 🏃🏻‍♀️. I completed my first Hong Kong half
            marathon and I’m training for the next one.
          </p>
        </div>
      </div>
    </section>
  );
}
