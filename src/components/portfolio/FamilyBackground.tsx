
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

export const FamilyBackground = () => {
  return (
    <section id="family-background" className="animate-fade-in">
      <Card className="max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-t-lg">
          <div className="flex items-center gap-3">
            <Users size={32} />
            <CardTitle className="text-2xl font-bold">Family Background</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Family Overview</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                I have 1 sibling and a house keeping mother. My family has always been supportive of my 
                educational and career aspirations, providing me with the foundation I needed to pursue 
                my goals in web development.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Growing up in Macasandig Tibasak, Cagayan de Oro, I learned the values of 
                hard work, perseverance, and dedication that have shaped who I am today. 
                My family background has significantly influenced my approach to life and work.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Family Members</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-slate-800">Mother</h4>
                  <p className="text-slate-600">
                    House keeping mother who has been instrumental in supporting our family
                  </p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-slate-800">Siblings</h4>
                  <p className="text-slate-600">
                    I have 1 sibling who shares in our family journey
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-slate-800">Family Values</h4>
                  <p className="text-slate-600">
                    Hard work, education, integrity, and supporting each other through all challenges 
                    are core values that my family has always emphasized.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
