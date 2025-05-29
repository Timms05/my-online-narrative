
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book } from "lucide-react";

export const PersonalInterests = () => {
  return (
    <section id="personal-interests" className="animate-fade-in">
      <Card className="max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
          <div className="flex items-center gap-3">
            <Book size={32} />
            <CardTitle className="text-2xl font-bold">Personal Interests</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Hobbies & Activities</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-slate-800">Gaming</h4>
                  <p className="text-slate-600">
                    I enjoy playing various games which help me relax and also improve my 
                    problem-solving skills and strategic thinking.
                  </p>
                </div>
                
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-slate-800">Chess</h4>
                  <p className="text-slate-600">
                    Chess is one of my favorite strategic games. It helps me develop logical 
                    thinking and planning skills that are valuable in programming as well.
                  </p>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-slate-800">Reading</h4>
                  <p className="text-slate-600">
                    I love reading books and articles, especially those related to technology, 
                    programming, and personal development. Reading keeps me informed and inspired.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-slate-800">Sleeping</h4>
                  <p className="text-slate-600">
                    I value good rest and sleep as it's essential for maintaining focus and 
                    productivity, especially when learning and working on coding projects.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Skills & Learning</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Currently Learning</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Laravel</Badge>
                    <Badge variant="secondary">PHP</Badge>
                    <Badge variant="secondary">Web Development</Badge>
                    <Badge variant="secondary">MySQL</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Want to Learn</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Advanced Laravel</Badge>
                    <Badge variant="outline">Vue.js</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Node.js</Badge>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Personal Goals</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  Master Laravel framework and become proficient in web development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  Build meaningful projects that showcase my skills
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  Find opportunities to apply my programming knowledge professionally
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  Continue learning and growing as a developer
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
