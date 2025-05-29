
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export const WorkExperience = () => {
  return (
    <section id="work-experience" className="animate-fade-in">
      <Card className="max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-t-lg">
          <div className="flex items-center gap-3">
            <Briefcase size={32} />
            <CardTitle className="text-2xl font-bold">Work Experience</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-8">
            {/* TODO: Replace with your actual work experience */}
            
            {/* Experience 1 - Replace or remove if not applicable */}
            <div className="border-l-4 border-orange-500 pl-6 hover:bg-slate-50 p-4 rounded-r-lg transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">
                  {/* TODO: Job Title */}
                  Senior Laravel Developer
                </h3>
                <span className="text-slate-500 text-sm">
                  {/* TODO: Employment dates */}
                  Jan 2023 - Present
                </span>
              </div>
              <h4 className="text-lg text-orange-600 font-medium mb-2">
                {/* TODO: Company name */}
                Company Name Here
              </h4>
              <p className="text-slate-600 mb-3">
                {/* TODO: Job description */}
                Led development of multiple Laravel-based web applications serving over 10,000 users. 
                Implemented RESTful APIs, optimized database queries, and mentored junior developers.
              </p>
              <div className="flex flex-wrap gap-2">
                {/* TODO: Replace with technologies used in this role */}
                <Badge variant="outline">Laravel</Badge>
                <Badge variant="outline">PHP</Badge>
                <Badge variant="outline">MySQL</Badge>
                <Badge variant="outline">Vue.js</Badge>
              </div>
            </div>

            {/* Experience 2 - Replace or remove if not applicable */}
            <div className="border-l-4 border-red-500 pl-6 hover:bg-slate-50 p-4 rounded-r-lg transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">
                  {/* TODO: Job Title */}
                  Junior Web Developer
                </h3>
                <span className="text-slate-500 text-sm">
                  {/* TODO: Employment dates */}
                  Jun 2021 - Dec 2022
                </span>
              </div>
              <h4 className="text-lg text-red-600 font-medium mb-2">
                {/* TODO: Company name */}
                Previous Company Name
              </h4>
              <p className="text-slate-600 mb-3">
                {/* TODO: Job description */}
                Developed and maintained web applications using Laravel framework. 
                Collaborated with design team to implement responsive user interfaces.
              </p>
              <div className="flex flex-wrap gap-2">
                {/* TODO: Replace with technologies used in this role */}
                <Badge variant="outline">Laravel</Badge>
                <Badge variant="outline">HTML/CSS</Badge>
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">Bootstrap</Badge>
              </div>
            </div>

            {/* Experience 3 - Add more experiences as needed or remove if not applicable */}
            <div className="border-l-4 border-yellow-500 pl-6 hover:bg-slate-50 p-4 rounded-r-lg transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">
                  {/* TODO: Job Title or Internship */}
                  Web Development Intern
                </h3>
                <span className="text-slate-500 text-sm">
                  {/* TODO: Employment dates */}
                  Jan 2021 - May 2021
                </span>
              </div>
              <h4 className="text-lg text-yellow-600 font-medium mb-2">
                {/* TODO: Company name */}
                Internship Company
              </h4>
              <p className="text-slate-600 mb-3">
                {/* TODO: Internship description */}
                Gained hands-on experience in web development. Worked on small projects 
                and learned industry best practices.
              </p>
              <div className="flex flex-wrap gap-2">
                {/* TODO: Replace with technologies learned */}
                <Badge variant="outline">PHP</Badge>
                <Badge variant="outline">MySQL</Badge>
                <Badge variant="outline">Git</Badge>
              </div>
            </div>

            {/* TODO: If you don't have work experience yet, replace the above with: */}
            {/*
            <div className="text-center py-8">
              <p className="text-slate-600 text-lg">
                I am currently building my experience and looking for opportunities 
                to apply my Laravel skills in a professional environment.
              </p>
              <p className="text-slate-500 mt-2">
                I have completed several personal projects and am eager to start my career 
                in web development.
              </p>
            </div>
            */}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
