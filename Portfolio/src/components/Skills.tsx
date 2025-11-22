import { Palette, Film, Terminal, Cpu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const skillCategories = [
  {
    id: 1,
    title: "Design",
    icon: Palette,
    skills: ["Figma", "Illustrator", "Photoshop"],
  },
  {
    id: 2,
    title: "Audiovisuel",
    icon: Film,
    skills: ["DaVinci Resolve", "Aegisub", "After Effects"],
  },
];

export function Skills() {
  return (
    <section id="competences" className="py-20 bg-background border-t-2 border-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Terminal-style header */}
          <div className="border-2 border-primary bg-card p-4 rounded-sm mb-12 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-primary">
              <Cpu className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-mono">show --skills --all</span>
            </div>
            <p className="text-foreground font-mono">
              [OUTPUT] Stack technique & compétences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.id} className="border-2 border-primary bg-card">
                  <CardHeader className="border-b-2 border-primary">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-sm bg-primary/20 border border-primary">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-primary font-mono">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-background border-2 border-primary/50 text-foreground font-mono text-sm hover:border-primary hover:text-primary transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}