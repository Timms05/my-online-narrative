
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
              {/* TODO: Replace with your actual profile photo */}
              {/* <img src="/path-to-your-photo.jpg" alt="Profile" className="w-28 h-28 rounded-full object-cover" /> */}
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">
            {/* TODO: Replace with your full name */}
            Your Full Name Here
          </CardTitle>
          <p className="text-blue-100 text-lg">
            {/* TODO: Replace with your professional title/role */}
            Laravel Developer & Web Development Enthusiast
          </p>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">About Me</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {/* TODO: Write a brief introduction about yourself */}
                I am a passionate web developer with expertise in Laravel framework. 
                I love creating innovative solutions and building applications that make a difference. 
                My journey in programming started [when you started] and I've been continuously 
                learning and growing in this field.
              </p>
              <p className="text-slate-600 leading-relaxed">
                {/* TODO: Add more details about your background, education, goals */}
                I am currently focused on mastering Laravel development and expanding my 
                skills in full-stack web development. I enjoy working on challenging projects 
                that push my boundaries and help me grow as a developer.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Contact Information</h3>
              <div className="space-y-3 text-slate-600">
                <div>
                  <strong>Email:</strong> 
                  {/* TODO: Replace with your email */}
                  <span className="ml-2">your.email@example.com</span>
                </div>
                <div>
                  <strong>Phone:</strong> 
                  {/* TODO: Replace with your phone number */}
                  <span className="ml-2">+1 (555) 123-4567</span>
                </div>
                <div>
                  <strong>Location:</strong> 
                  {/* TODO: Replace with your location */}
                  <span className="ml-2">Your City, Country</span>
                </div>
                <div>
                  <strong>LinkedIn:</strong> 
                  {/* TODO: Replace with your LinkedIn profile */}
                  <span className="ml-2">linkedin.com/in/yourprofile</span>
                </div>
                <div>
                  <strong>GitHub:</strong> 
                  {/* TODO: Replace with your GitHub profile */}
                  <span className="ml-2">github.com/yourusername</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 mt-6 text-slate-800">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {/* TODO: Replace with your actual skills */}
                <Badge variant="secondary">Laravel</Badge>
                <Badge variant="secondary">PHP</Badge>
                <Badge variant="secondary">MySQL</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">HTML/CSS</Badge>
                <Badge variant="secondary">Git</Badge>
                {/* Add more skills as needed */}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
