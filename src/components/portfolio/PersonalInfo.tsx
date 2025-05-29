
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

export const PersonalInfo = () => {
  return (
    <section id="personal-info" className="animate-fade-in">
      <Card className="max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <div className="flex justify-center mb-4">
            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
              <User size={48} />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">
            Timothy Gerald B. Fortes
          </CardTitle>
          <p className="text-blue-100 text-lg">
            Laravel Developer & Web Development Enthusiast
          </p>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">About Me</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                I am a passionate web developer with expertise in Laravel framework. 
                I love creating innovative solutions and building applications that make a difference. 
                Born on September 5, 2005, I've been continuously learning and growing in this field.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I am currently focused on mastering Laravel development and expanding my 
                skills in full-stack web development. I enjoy working on challenging projects 
                that push my boundaries and help me grow as a developer.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Contact Information</h3>
              <div className="space-y-3 text-slate-600">
                <div>
                  <strong>Date of Birth:</strong>
                  <span className="ml-2">September 5, 2005</span>
                </div>
                <div>
                  <strong>Location:</strong>
                  <span className="ml-2">Macasandig Tibasak, Cagayan de Oro</span>
                </div>
                <div>
                  <strong>Email:</strong>
                  <span className="ml-2">timothy.fortes@example.com</span>
                </div>
                <div>
                  <strong>Phone:</strong>
                  <span className="ml-2">+63 xxx xxx xxxx</span>
                </div>
                <div>
                  <strong>LinkedIn:</strong>
                  <span className="ml-2">linkedin.com/in/timothyfortes</span>
                </div>
                <div>
                  <strong>GitHub:</strong>
                  <span className="ml-2">github.com/timothyfortes</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 mt-6 text-slate-800">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Laravel</Badge>
                <Badge variant="secondary">PHP</Badge>
                <Badge variant="secondary">MySQL</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">HTML/CSS</Badge>
                <Badge variant="secondary">Git</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
