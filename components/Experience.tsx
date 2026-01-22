const bytedanceIcon = "/icons/Product Designer @ByteDance.png";
const smartxIcon = "/icons/Product Designer @SmartX.png";
const ccaIcon = "/icons/California College of the Arts.png";
const umnIcon = "/icons/University of Minnesota, Twin Cities.png";

const items = [
  {
    title: "Product Designer @ByteDance",
    subtitle: "Dubai, United Arab Emirates",
    icon: bytedanceIcon,
  },
  {
    title: "Product Designer @SmartX",
    subtitle: "Beijing, China",
    icon: smartxIcon,
  },
  {
    title: "California College of the Arts 🎓",
    subtitle: "Interaction Design, MDes",
    icon: ccaIcon,
  },
  {
    title: "University of Minnesota, Twin Cities 🎓",
    subtitle: "Retail Merchandising, BS",
    icon: umnIcon,
  },
];

export default function Experience() {
  return (
    <section className="flex w-full flex-col gap-[20px]">
      <p className="font-['Heiti_SC','PingFang_SC','Helvetica',sans-serif] text-[15px] text-[#8f959e]">
        Experience
      </p>
      <div className="flex w-full flex-col gap-[24px]">
        {items.map((item) => (
          <div key={item.title} className="flex w-full items-center gap-[12px]">
            <div className="flex flex-1 flex-col gap-[4px] text-[#1f2329]">
              <p className="text-[16px]">{item.title}</p>
              <p className="text-[14px] font-light leading-normal text-[rgba(100,106,115,1)]">
                {item.subtitle}
              </p>
            </div>
            <div className="flex h-[40px] w-[40px] shrink-0">
              <img
                src={item.icon}
                alt=""
                className="h-[40px] w-[40px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
