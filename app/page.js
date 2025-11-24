import uiuxdesignerData from "@/data/ui-ux-designer.json";
import HeaderSection from "@/components/ui-ux-designer/header/HeaderSection";
import EducationSection from "@/components/ui-ux-designer/education-experience/EducationSection";
import ExperienceSection from "@/components/ui-ux-designer/education-experience/ExperienceSection";
import SkillsSection from "@/components/ui-ux-designer/skills/SkillsSection";
import ServicesSection from "@/components/ui-ux-designer/services/ServicesSection";
import PortfolioSection from "@/components/ui-ux-designer/portfolio/PortfolioSection";

export default function Home() {
  const data = uiuxdesignerData;

  return (
    <div data-theme={data.theme} className="min-h-screen bg-background-primary">
      <HeaderSection data={data} />
      <EducationSection data={data} />
      <ExperienceSection data={data} />
      <SkillsSection data={data} />
      <ServicesSection data={data} />
      <PortfolioSection data={data} />
    </div>
  );
}
