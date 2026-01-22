import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import SelectedWorks from "@/components/SelectedWorks";
import Container from "@/components/Container";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-[64px] bg-white pb-[120px] pt-[72px]">
      <Container>
        <main className="flex w-full flex-col items-start gap-[68px]">
          <Intro />
          <SelectedWorks />
          <Experience />
          <Footer />
        </main>
      </Container>
      <Container>
        <p className="w-full text-[16px] text-[#1f2329]">
          @ 2026 Claire Han
        </p>
      </Container>
    </div>
  );
}
