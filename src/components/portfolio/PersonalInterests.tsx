
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
                {/* TODO: Replace with your actual hobbies and interests */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-slate-800">Programming & Technology</h4>
                  <p className="text-slate-600">
                    I love exploring new programming languages, frameworks, and staying 
                    updated with the latest technology trends. I enjoy building side projects 
                    and contributing to open-source communities.
                  </p>
                </div>
                
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-slate-800">[Your Interest 2]</h4>
                  <p className="text-slate-600">
                    {/* TODO: Describe another interest/hobby */}
                    Add description of your second interest here. For example: 
                    photography, sports, music, reading, etc.
                  </p>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-slate-800">[Your Interest 3]</h4>
                  <p className="text-slate-600">
                    {/* TODO: Describe another interest/hobby */}
                    Add description of your third interest here.
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
                    {/* TODO: Replace with what you're currently learning */}
                    <Badge variant="secondary">Advanced Laravel</Badge>
                    <Badge variant="secondary">Vue.js</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">AWS</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Want to Learn</h4>
                  <div className="flex flex-wrap gap-2">
                    {/* TODO: Replace with technologies/skills you want to learn */}
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Machine Learning</Badge>
                    <Badge variant="outline">DevOps</Badge>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Personal Goals</h3>
              <ul className="space-y-2 text-slate-600">
                {/* TODO: Replace with your personal goals */}
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  Become a senior Laravel developer within 2 years
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  Contribute to open-source Laravel packages
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  Build a successful SaaS application
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  {/* Add your personal goal here */}
                  [Add your personal goal here]
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
