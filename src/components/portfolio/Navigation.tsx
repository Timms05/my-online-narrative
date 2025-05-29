
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('personal-info')}
            className="text-sm hover:bg-slate-100"
          >
            About Me
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('family-background')}
            className="text-sm hover:bg-slate-100"
          >
            Family
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('work-experience')}
            className="text-sm hover:bg-slate-100"
          >
            Experience
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('personal-interests')}
            className="text-sm hover:bg-slate-100"
          >
            Interests
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('ongoing-projects')}
            className="text-sm hover:bg-slate-100"
          >
            Projects
          </Button>
        </div>
      </div>
    </nav>
  );
};
