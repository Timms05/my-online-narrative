
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
            {/* TODO: Replace with your actual ongoing projects */}
            
            {/* Project 1 */}
            <div className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-lg">
                  <Folder className="text-cyan-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-semibold text-slate-800">
                      {/* TODO: Project name */}
                      E-commerce Laravel Application
                    </h3>
                    <span className="text-slate-500 text-sm">
                      {/* TODO: Project status */}
                      In Development
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4">
                    {/* TODO: Project description */}
                    Building a full-featured e-commerce platform using Laravel. 
                    Features include user authentication, product management, shopping cart, 
                    payment integration, and admin dashboard.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {/* TODO: Replace with technologies used */}
                    <Badge variant="secondary">Laravel</Badge>
                    <Badge variant="secondary">MySQL</Badge>
                    <Badge variant="secondary">Bootstrap</Badge>
                    <Badge variant="secondary">Stripe API</Badge>
                  </div>
                  <div className="flex gap-2">
                    {/* TODO: Add actual links to your project */}
                    <Button variant="outline" size="sm">
                      View Demo
                    </Button>
                    <Button variant="outline" size="sm">
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Folder className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-semibold text-slate-800">
                      {/* TODO: Project name */}
                      Task Management System
                    </h3>
                    <span className="text-slate-500 text-sm">
                      {/* TODO: Project status */}
                      Planning Phase
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4">
                    {/* TODO: Project description */}
                    Developing a comprehensive task management system for teams. 
                    Will include project tracking, team collaboration, time tracking, 
                    and reporting features.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {/* TODO: Replace with technologies planned */}
                    <Badge variant="secondary">Laravel</Badge>
                    <Badge variant="secondary">Vue.js</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">Redis</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Folder className="text-green-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-semibold text-slate-800">
                      {/* TODO: Project name */}
                      [Your Project Name Here]
                    </h3>
                    <span className="text-slate-500 text-sm">
                      {/* TODO: Project status */}
                      [Project Status]
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4">
                    {/* TODO: Project description */}
                    [Describe your project here. What problem does it solve? 
                    What features are you planning to implement?]
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {/* TODO: Replace with your technologies */}
                    <Badge variant="secondary">[Tech 1]</Badge>
                    <Badge variant="secondary">[Tech 2]</Badge>
                    <Badge variant="secondary">[Tech 3]</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      {/* TODO: Add appropriate button text */}
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* TODO: If you don't have ongoing projects yet, replace the above with: */}
            {/*
            <div className="text-center py-8">
              <p className="text-slate-600 text-lg mb-4">
                I'm currently planning my next Laravel project and exploring ideas 
                that will help me grow as a developer.
              </p>
              <p className="text-slate-500">
                I'm open to collaborating on interesting Laravel projects or 
                contributing to open-source initiatives.
              </p>
            </div>
            */}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
