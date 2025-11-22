import { GraduationCap, Briefcase, Terminal, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const professionalExperience = [
  {
    id: 1,
    title: "Designer Graphique",
    company: "GemuShop",
    period: "Mai 2024 - Présent",
    description:
      "Création de contenus visuels et design graphique pour une boutique en ligne. Développement de l'identité visuelle et des supports de communication.",
    achievements: [
      "Design de l'identité visuelle de la marque",
      "Création de supports marketing et promotionnels",
      "Optimisation de l'expérience utilisateur du site",
    ],
  },
];

const education = [
  {
    id: 1,
    degree: "BUT MMI - Métiers du Multimédia et de l'Internet",
    school: "IUT d'Angoulême",
    period: "2024 - Présent",
    description:
      "Formation en Création numérique comprenant l'audiovisuel, le graphisme et le développement web. Spécialisation en UX/UI Design et Graphisme.",
    honors: ["En formation"],
  },
  {
    id: 2,
    degree: "Baccalauréat STI2D ITEC",
    school: "Lycée Pierre de Coubertin, Bolbec",
    period: "2021 - 2024",
    description:
      "Spécialisation Innovation Technologique et Éco-Conception (ITEC). Formation technique orientée vers la conception et l'innovation.",
    honors: ["Obtenu"],
  },
];

export function Experience() {
  return (
    <section id="parcours" className="py-20 bg-background border-t-2 border-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Terminal-style header */}
          <div className="border-2 border-primary bg-card p-4 rounded-sm mb-12 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-primary">
              <Database className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-mono">query --history</span>
            </div>
            <p className="text-foreground font-mono">
              [LOADED] Historique professionnel & académique
            </p>
          </div>

          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 border-2 border-primary bg-card h-auto p-1">
              <TabsTrigger 
                value="education"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-mono"
              >
                <GraduationCap className="h-4 w-4 mr-2" />
                FORMATION
              </TabsTrigger>
              <TabsTrigger 
                value="professional"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-mono"
              >
                <Briefcase className="h-4 w-4 mr-2" />
                PROFESSIONNEL
              </TabsTrigger>
            </TabsList>

            <TabsContent value="education" className="mt-8">
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={edu.id} className="border-2 border-primary bg-card">
                    <CardHeader className="border-b-2 border-primary">
                      <div className="flex items-center gap-2 mb-2">
                        <Terminal className="h-3 w-3 text-primary" />
                        <span className="text-xs font-mono text-primary">education_{index + 1}.log</span>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <CardTitle className="text-primary font-mono">{edu.degree}</CardTitle>
                        <span className="text-sm text-muted-foreground font-mono">
                          [{edu.period}]
                        </span>
                      </div>
                      <p className="text-foreground font-mono text-sm">&gt; {edu.school}</p>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="mb-4 text-foreground">{edu.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.honors.map((honor, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 border-2 border-primary text-primary font-mono text-xs"
                          >
                            {honor}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="professional" className="mt-8">
              <div className="space-y-6">
                {professionalExperience.map((exp, index) => (
                  <Card key={exp.id} className="border-2 border-primary bg-card">
                    <CardHeader className="border-b-2 border-primary">
                      <div className="flex items-center gap-2 mb-2">
                        <Terminal className="h-3 w-3 text-primary" />
                        <span className="text-xs font-mono text-primary">experience_{index + 1}.log</span>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <CardTitle className="text-primary font-mono">{exp.title}</CardTitle>
                        <span className="text-sm text-muted-foreground font-mono">
                          [{exp.period}]
                        </span>
                      </div>
                      <p className="text-foreground font-mono text-sm">&gt; {exp.company}</p>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="mb-4 text-foreground">{exp.description}</p>
                      <div>
                        <p className="mb-2 text-primary font-mono text-sm">ACHIEVEMENTS:</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary font-mono">[+]</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}