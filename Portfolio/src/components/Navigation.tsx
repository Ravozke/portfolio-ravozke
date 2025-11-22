import { Menu, X, Settings } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { AccessibilityMenu } from "./AccessibilityMenu";
import { useAccessibility } from "./AccessibilityProvider";
import { MatrixBackground } from "./MatrixBackground";
import logoImage from "figma:asset/70b55a81536cb834f463bf06928fb5257ecef723.png";
import logoHighContrast from "figma:asset/50eac773b0353f8c7d2d190cdc890684741623bf.png";

export function Navigation() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { highContrast } = useAccessibility();

  const navItems = [
    { id: 'accueil', name: 'ACCUEIL', href: '#accueil' },
    { id: 'a-propos', name: 'À PROPOS', href: '#a-propos' },
    { id: 'parcours', name: 'PARCOURS', href: '#parcours' },
    { id: 'projets', name: 'PROJETS', href: '#projets' },
    { id: 'competences', name: 'COMPÉTENCES', href: '#competences' },
    { id: 'contact', name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      {/* Desktop Sidebar - Only visible on large screens */}
      <nav 
        className="hidden lg:flex fixed left-0 top-0 h-screen w-[280px] border-r-2 border-primary flex-col z-50 overflow-hidden bg-background"
      >
        {/* Animated Matrix Background */}
        <MatrixBackground />
        
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1a1a1a]/70 to-[#0a0a0a]/70" />
        
        {/* Content with higher z-index */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-8 flex flex-col items-center justify-center">
            <img 
              src={highContrast ? logoHighContrast : logoImage}
              alt="Portfolio Logo" 
              className="w-40 h-40 object-contain"
            />
            <h1 className="text-primary mt-4 text-3xl" style={{ fontFamily: 'Anton, Impact, sans-serif', letterSpacing: '-0.02em' }}>
              RIMBERT
            </h1>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 py-4 px-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                className={`block w-full p-3 border-2 transition-all ${
                  activeSection === item.id
                    ? 'border-primary bg-primary/20 text-primary'
                    : 'border-primary/50 bg-card/50 text-muted-foreground hover:border-primary hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    activeSection === item.id ? 'bg-primary' : 'bg-primary/50'
                  }`} />
                  <span className="font-mono text-sm">{item.name}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Settings/Accessibility at bottom */}
          <div className="p-4">
            <AccessibilityMenu />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden sticky top-0 z-50 border-b-2 border-primary bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={highContrast ? logoHighContrast : logoImage}
                alt="Portfolio Logo" 
                className="h-12 w-12 object-contain"
              />
              <h1 className="text-primary text-2xl" style={{ fontFamily: 'Anton, Impact, sans-serif', letterSpacing: '-0.02em' }}>
                RIMBERT
              </h1>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="border-t-2 border-primary py-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`p-3 border-2 transition-all ${
                      activeSection === item.id
                        ? 'border-primary bg-primary/20 text-primary'
                        : 'border-primary/50 bg-card/50 text-muted-foreground'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        activeSection === item.id ? 'bg-primary' : 'bg-primary/50'
                      }`} />
                      <span className="font-mono text-sm">{item.name}</span>
                    </div>
                  </a>
                ))}
                <div className="border-t-2 border-primary pt-4 mt-2">
                  <AccessibilityMenu />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}