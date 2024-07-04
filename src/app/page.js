import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar></Navbar>
      <div className="container mx-auto w-11/12 mt-24">
        <HeroSection></HeroSection>
      </div>
    </main>
  );
}
