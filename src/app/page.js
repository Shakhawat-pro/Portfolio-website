import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar></Navbar>
      <div className="container mx-auto w-11/12 mt-24">
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <ProjectSection></ProjectSection>
        <EmailSection></EmailSection>
      </div>
      <Footer></Footer>
    </main>
  );
}
