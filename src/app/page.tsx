import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import EducationCertificatesSection from "@/components/EducationCertificatesSection";
import HobbiesSection from "@/components/HobbiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SkillsSection />
        <EducationCertificatesSection />
        <HobbiesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
