import EventHorizonSection from "@/Components/EventHorizonSection";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-[#09090b]">
        <Navbar />
        <HeroSection />
        <EventHorizonSection />
        <Footer />
      </div>
    </>
  );
}
