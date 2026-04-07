import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ConnectSection from "@/components/ConnectSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ConnectSection />
      <footer className="py-8 text-center border-t border-border">
        <p className="text-xs text-muted-foreground font-display tracking-wider">
          © 2024 · Built with AI & passion
        </p>
      </footer>
    </div>
  );
};

export default Index;
