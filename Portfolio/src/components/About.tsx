import { ImageWithFallback } from "./figma/ImageWithFallback";
import { User, Terminal } from "lucide-react";
import whereiwork from "figma:asset/0a4eb47e0e5d5d349e5a27deb17765e44327a877.png";

export function About() {
  return (
    <section id="a-propos" className="py-20 bg-background border-t-2 border-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Terminal-style header */}
          <div className="border-2 border-primary bg-card p-4 rounded-sm mb-12 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-primary">
              <User className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-mono">cat ~/about/bio.txt</span>
            </div>
            <p className="text-foreground font-mono">
              [INFO] Chargement du profil utilisateur...
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="border-2 border-primary bg-card p-6 rounded-sm">
                <div className="flex items-center gap-2 mb-4 text-primary font-mono text-sm">
                  <Terminal className="h-3 w-3" />
                  <span>Section_01.log</span>
                </div>
                <p className="text-foreground leading-relaxed">
                  Je suis un UX/UI designer passionné, avec un œil attentif pour créer
                  des expériences utilisateur fluides. Avec une
                  expertise dans les technologies web modernes, je donne vie aux idées
                  grâce à un design propre, et une conception réfléchie.
                </p>
              </div>
              
              <div className="border-2 border-primary bg-card p-6 rounded-sm">
                <div className="flex items-center gap-2 mb-4 text-primary font-mono text-sm">
                  <Terminal className="h-3 w-3" />
                  <span>Section_02.log</span>
                </div>
                <p className="text-foreground leading-relaxed">
                  Mon parcours dans le UX/UI design a commencé par le dessin, et a évolué
                  vers une carrière dédiée aux designs mordernes. Je crois en l'apprentissage
                  continu, et aux critiques pour évoluer mon expérience dans ce domaine
                  tout en me tenant au courant des dernières tendances des site webs.
                </p>
              </div>
              
              <div className="border-2 border-primary bg-card p-6 rounded-sm">
                <div className="flex items-center gap-2 mb-4 text-primary font-mono text-sm">
                  <Terminal className="h-3 w-3" />
                  <span>Section_03.log</span>
                </div>
                <p className="text-foreground leading-relaxed">
                  Quand je ne design pas, je continu à trouver des alternatives, de contribuer à des projets open-source, ou de
                  partager mes connaissances avec la communauté des développeurs.
                </p>
              </div>
            </div>
            
            <div className="relative aspect-square rounded-sm overflow-hidden border-2 border-primary">
              <ImageWithFallback
                src={whereiwork}
                alt="Espace de travail professionnel avec ordinateur et équipement"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
              />
              <div className="absolute top-0 left-0 right-0 bg-card/90 border-b-2 border-primary p-2">
                <p className="text-xs font-mono text-primary">whereiwork.jpg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}