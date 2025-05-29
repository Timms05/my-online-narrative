
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
                {/* TODO: Write about your family structure, where you grew up, etc. */}
                I come from a loving family of [number] members. I was born and raised in 
                [your birthplace/hometown]. My family has always been supportive of my 
                educational and career aspirations.
              </p>
              <p className="text-slate-600 leading-relaxed">
                {/* TODO: Add more details about your family background */}
                Growing up in [describe your environment], I learned the values of 
                [mention values like hard work, education, etc.] that have shaped who I am today. 
                My family background has significantly influenced my approach to life and work.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Family Members</h3>
              <div className="space-y-4">
                {/* TODO: Replace with information about your family members */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-slate-800">Parents</h4>
                  <p className="text-slate-600">
                    Father: [Father's name and occupation]<br/>
                    Mother: [Mother's name and occupation]
                  </p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-slate-800">Siblings</h4>
                  <p className="text-slate-600">
                    {/* Add information about your siblings or write "I am an only child" */}
                    [Sibling names, ages, and what they do]
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-slate-800">Family Values</h4>
                  <p className="text-slate-600">
                    {/* TODO: Describe values your family instilled in you */}
                    Education, hard work, integrity, and helping others are core values 
                    that my family has always emphasized.
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
