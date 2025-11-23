import uiuxdesignerData from "@/data/ui-ux-designer.json";
import HeaderSection from "@/components/ui-ux-designer/header/HeaderSection";
import EducationSection from "@/components/ui-ux-designer/education-experience/EducationSection";
import ExperienceSection from "@/components/ui-ux-designer/education-experience/ExperienceSection";
import SkillsSection from "@/components/ui-ux-designer/skills/SkillsSection";
import ServicesSection from "@/components/ui-ux-designer/services/ServicesSection";

export default function Home() {
  const { theme } = uiuxdesignerData;

  return (
    <div data-theme={theme} className="min-h-screen bg-background-primary">
      <HeaderSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ServicesSection />
    </div>
  );
}
