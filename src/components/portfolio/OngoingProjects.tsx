
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Folder, Projector } from "lucide-react";

export const OngoingProjects = () => {
  return (
    <section id="ongoing-projects" className="animate-fade-in">
      <Card className="max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-t-lg">
          <div className="flex items-center gap-3">
            <Projector size={32} />
            <CardTitle className="text-2xl font-bold">Ongoing Projects</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-8">
            <div className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-lg">
                  <Folder className="text-cyan-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-semibold text-slate-800">
                      Learning to Code - One Step Forward
                    </h3>
                    <span className="text-slate-500 text-sm">
                      In Progress
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4">
                    The project I'm working on for now is making a one step forward learning to code more. 
                    This involves continuously improving my programming skills, learning new technologies, 
                    and building practical projects to strengthen my development abilities.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Laravel</Badge>
                    <Badge variant="secondary">PHP</Badge>
                    <Badge variant="secondary">Web Development</Badge>
                    <Badge variant="secondary">Self Learning</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Progress
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center py-8 bg-slate-50 rounded-lg">
              <p className="text-slate-600 text-lg mb-4">
                I'm focused on continuous learning and improvement in web development, 
                taking it one step at a time to build a strong foundation in programming.
              </p>
              <p className="text-slate-500">
                I'm open to collaborating on beginner-friendly Laravel projects or 
                learning opportunities that can help me grow as a developer.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
