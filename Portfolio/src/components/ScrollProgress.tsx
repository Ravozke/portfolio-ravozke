import { useEffect, useState } from "react";
import { useAccessibility } from "./AccessibilityProvider";
import { Home, User, GraduationCap, FolderOpen, Code2, Mail } from "lucide-react";

const sections = [
  { id: "accueil", label: "Accueil", icon: Home, position: 0 },
  { id: "a-propos", label: "À propos", icon: User, position: 16.67 },
  { id: "parcours", label: "Parcours", icon: GraduationCap, position: 33.33 },
  { id: "projets", label: "Projets", icon: FolderOpen, position: 50 },
  { id: "competences", label: "Compétences", icon: Code2, position: 66.67 },
  { id: "contact", label: "Contact", icon: Mail, position: 83.33 },
];

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const { reducedMotion } = useAccessibility();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Determine active section based on scroll
      const sectionIndex = Math.floor((progress / 100) * sections.length);
      setActiveSection(Math.min(Math.max(0, sectionIndex), sections.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:left-[280px]">
      {/* Progress bar background */}
      <div className="relative h-2 bg-background border-t-2 border-primary">
        {/* Progress fill */}
        <div
          className={`h-full bg-gradient-to-r from-primary via-primary to-primary relative ${
            reducedMotion ? "" : "transition-all duration-300"
          }`}
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Animated glow effect */}
          {!reducedMotion && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          )}
        </div>

        {/* Checkpoints */}
        <div className="absolute inset-0 flex items-center justify-between px-2">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isCompleted = scrollProgress >= section.position;
            const isActive = activeSection === index;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all group ${
                  isCompleted
                    ? "bg-primary border-primary"
                    : "bg-background border-primary/50"
                } ${
                  isActive && !reducedMotion
                    ? "scale-125 shadow-lg shadow-primary/50"
                    : "hover:scale-110"
                }`}
                aria-label={`Aller à ${section.label}`}
              >
                <Icon
                  className={`h-4 w-4 ${
                    isCompleted ? "text-primary-foreground" : "text-primary/50"
                  }`}
                />
                
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 hidden group-hover:block">
                  <div className="bg-card border-2 border-primary px-3 py-1 rounded-sm whitespace-nowrap">
                    <p className="text-xs font-mono text-primary">{section.label}</p>
                    <p className="text-xs font-mono text-muted-foreground">
                      {section.position}% +
                    </p>
                  </div>
                </div>

                {/* Active pulse effect */}
                {isActive && !reducedMotion && (
                  <span className="absolute inset-0 rounded-full border-2 border-primary animate-ping" />
                )}
              </a>
            );
          })}
        </div>
      </div>

      {/* Stats display */}
      <div className="bg-background/95 backdrop-blur border-t border-primary/50 px-4 py-1">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <p className="text-xs font-mono text-primary">
              PROGRESS: <span className="text-foreground">{Math.round(scrollProgress)}%</span>
            </p>
            <p className="text-xs font-mono text-primary hidden sm:block">
              SECTION: <span className="text-foreground">{sections[activeSection]?.label || "..."}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {sections.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index <= activeSection ? "bg-primary" : "bg-primary/30"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs font-mono text-muted-foreground hidden md:block">
              [{activeSection + 1}/{sections.length}]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}