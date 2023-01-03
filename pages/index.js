import { MainLayout } from "../components/Layout";
import { SectionHero, SectionTechnology, Wave } from "../components/ui";
import { SectionProjects } from "../components/ui/SectionProjects";

export default function Home() {
  return (
    <MainLayout>
      <SectionHero />
      <SectionTechnology />
      <SectionProjects />
    </MainLayout>
  );
}
