import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationCertificatesSection from "@/components/EducationCertificatesSection";
import HobbiesSection from "@/components/HobbiesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SkillsSection />
        <ProjectsSection />
        <EducationCertificatesSection />
        <HobbiesSection />
      </main>
      <Footer />
    </>
  );
}
