import uiuxdesignerData from "@/data/ui-ux-designer.json";
import HeaderSection from "@/components/ui-ux-designer/header/HeaderSection";

export default function Home() {
  const { theme } = uiuxdesignerData;

  return (
    <div data-theme={theme} className="min-h-screen bg-background-primary">
      <HeaderSection />
    </div>
  );
}
