
import { PersonalInfo } from "@/components/portfolio/PersonalInfo";
import { FamilyBackground } from "@/components/portfolio/FamilyBackground";
import { WorkExperience } from "@/components/portfolio/WorkExperience";
import { PersonalInterests } from "@/components/portfolio/PersonalInterests";
import { OngoingProjects } from "@/components/portfolio/OngoingProjects";
import { Navigation } from "@/components/portfolio/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      <div className="container mx-auto px-4 py-8 space-y-16">
        <PersonalInfo />
        <FamilyBackground />
        <WorkExperience />
        <PersonalInterests />
        <OngoingProjects />
      </div>
    </div>
  );
};

export default Index;
