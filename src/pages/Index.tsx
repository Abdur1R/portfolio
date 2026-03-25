import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import DockNav from "@/components/DockNav";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <HeroSection />
    <div className="mx-auto max-w-4xl px-6">
      <div className="h-px bg-border/50" />
    </div>
    <AboutSection />
    <div className="mx-auto max-w-4xl px-6">
      <div className="h-px bg-border/50" />
    </div>
    <ExperienceSection />
    <div className="mx-auto max-w-4xl px-6">
      <div className="h-px bg-border/50" />
    </div>
    <ProjectsSection />
    <div className="mx-auto max-w-4xl px-6">
      <div className="h-px bg-border/50" />
    </div>
    <SkillsSection />
    <div className="mx-auto max-w-4xl px-6">
      <div className="h-px bg-border/50" />
    </div>
    <EducationSection />
    <div className="mx-auto max-w-4xl px-6">
      <div className="h-px bg-border/50" />
    </div>
    <ContactSection />

    {/* Footer */}
    <footer className="py-16 pb-24 text-center">
      <p className="font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Abdur Rahman Shaik — Built with React & Tailwind
      </p>
    </footer>

    <DockNav />
  </div>
);

export default Index;
