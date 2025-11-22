import { ArrowDown, Mail, Download, Code2, Terminal, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { useAccessibility } from "./AccessibilityProvider";
import cvImage from "figma:asset/45e7d7788dda749fb6cb993988e5db34112c6433.png";

export function Hero() {
  const { reducedMotion } = useAccessibility();

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Terminal-style header */}
          <div className="border-2 border-primary bg-card p-6 rounded-sm">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-primary">
              <Terminal className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary">terminal_info.sh</span>
            </div>
            <div className="space-y-2 font-mono">
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> whoami
              </p>
              <h1 className="text-4xl md:text-6xl text-primary">
                &gt; RIMBERT ENZO
              </h1>
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> cat role.txt
              </p>
              <h2 className="text-xl md:text-2xl text-foreground">
                UX/UI Design | Graphiste
              </h2>
            </div>
          </div>
          
          {/* Description box */}
          <div className="border-2 border-primary bg-card p-6 rounded-sm">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-primary">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary">description.log</span>
            </div>
            <p className="text-foreground font-mono leading-relaxed">
              [INFO] Création numérique en website avec Figma.
              Spécialisation en graphisme moderne et modélisation.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 justify-start">
            <Button 
              asChild 
              className="border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="#contact" className="font-mono">
                <Terminal className="h-4 w-4 mr-2" />
                ./contact.sh
              </a>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono"
            >
              <a href={cvImage} download="CV_RIMBERT_ENZO.png">
                <Download className="h-4 w-4 mr-2" />
                download CV
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              asChild
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="mailto:ravozke@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              asChild
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="https://www.linkedin.com/in/enzo-rimbert-ba88b138a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <a
        href="#a-propos"
        className={reducedMotion ? "" : "animate-bounce"}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)" }}
        aria-label="Défiler vers la section À propos"
      >
        <ArrowDown className="h-6 w-6 text-primary" />
      </a>
    </section>
  );
}