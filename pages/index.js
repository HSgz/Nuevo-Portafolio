import { MainLayout } from "../components/Layout";
import { SectionHero, SectionTechnology, Wave } from "../components/ui";


export default function Home() {
  return (
    <MainLayout>
      <SectionHero/>
      <SectionTechnology/>
    </MainLayout>
  );
}
