
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
            <div className="border-l-4 border-orange-500 pl-6 hover:bg-slate-50 p-4 rounded-r-lg transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">
                  Side Jobs & Family Work
                </h3>
                <span className="text-slate-500 text-sm">
                  Ongoing
                </span>
              </div>
              <h4 className="text-lg text-orange-600 font-medium mb-2">
                Family Business & Krusty Krab
              </h4>
              <p className="text-slate-600 mb-3">
                My work experience is helping my parent do side jobs and work on the Krusty Krab. 
                This experience has taught me valuable skills in responsibility, teamwork, and 
                customer service while supporting my family.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Customer Service</Badge>
                <Badge variant="outline">Teamwork</Badge>
                <Badge variant="outline">Responsibility</Badge>
                <Badge variant="outline">Work Ethic</Badge>
              </div>
            </div>

            <div className="text-center py-4 bg-slate-50 rounded-lg">
              <p className="text-slate-600 text-lg">
                I am currently building my professional experience while learning Laravel development 
                and looking for opportunities to apply my programming skills in a professional environment.
              </p>
              <p className="text-slate-500 mt-2">
                I am eager to start my career in web development and bring my dedication and 
                learning mindset to a development team.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
