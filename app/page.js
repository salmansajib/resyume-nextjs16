import uiuxdesignerData from "@/data/ui-ux-designer.json";
import HeaderSection from "@/components/ui-ux-designer/header/HeaderSection";
import EducationSection from "@/components/ui-ux-designer/education-experience/EducationSection";
import ExperienceSection from "@/components/ui-ux-designer/education-experience/ExperienceSection";
import SkillsSection from "@/components/ui-ux-designer/skills/SkillsSection";
import ServicesSection from "@/components/ui-ux-designer/services/ServicesSection";
import PortfolioSection from "@/components/ui-ux-designer/portfolio/PortfolioSection";
import InterestsSection from "@/components/ui-ux-designer/interests/InterestsSection";
import ReferenceSection from "@/components/ui-ux-designer/reference/ReferenceSection";
import FooterSection from "@/components/ui-ux-designer/footer/FooterSection";

export const metadata = {
  title: "Rezyume — Resume Templates for Every Profession",
  description:
    "Rezyume is a collection of beautifully crafted Next.js 16 resume templates for professionals across different industries.",
};

export default function Home() {
  const data = uiuxdesignerData;

  return (
    <div
      data-theme={data.theme}
      className="min-h-screen bg-background-primary font-poppins"
    >
      <HeaderSection data={data} />
      <main>
        <EducationSection data={data} />
        <ExperienceSection data={data} />
        <SkillsSection data={data} />
        <ServicesSection data={data} />
        <PortfolioSection data={data} />
        <InterestsSection data={data} />
        <ReferenceSection data={data} />
      </main>
      <FooterSection />
    </div>
  );
}
