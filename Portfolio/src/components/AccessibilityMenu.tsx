import { Settings, Contrast, Pause, Play, Type, AlignLeft, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { useAccessibility } from "./AccessibilityProvider";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function AccessibilityMenu() {
  const { 
    highContrast, 
    toggleHighContrast, 
    reducedMotion, 
    toggleReducedMotion,
    fontSize,
    setFontSize,
    lineSpacing,
    toggleLineSpacing,
    readingMode,
    toggleReadingMode,
  } = useAccessibility();

  return (
    <Sheet>
      <SheetTrigger className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono text-sm justify-start bg-transparent px-4 py-2 inline-flex items-center rounded-md transition-colors">
        <Settings className="h-4 w-4 mr-2" />
        PARAMÈTRES
      </SheetTrigger>
      <SheetContent className="border-l-2 border-primary bg-card">
        <SheetHeader className="border-b-2 border-primary pb-4">
          <SheetTitle className="text-primary font-mono">ACCESSIBILITÉ</SheetTitle>
          <SheetDescription className="font-mono text-xs">
            Options d'accessibilité et de confort
          </SheetDescription>
        </SheetHeader>
        <div className="py-6 space-y-4">
          <Button
            variant="outline"
            onClick={toggleHighContrast}
            className="w-full justify-start border-2 border-primary/50 hover:border-primary font-mono"
          >
            <Contrast className="h-4 w-4 mr-2" />
            {highContrast ? "Contraste normal" : "Contraste élevé"}
          </Button>
          
          <Button
            variant="outline"
            onClick={toggleReducedMotion}
            className="w-full justify-start border-2 border-primary/50 hover:border-primary font-mono"
          >
            {reducedMotion ? (
              <Play className="h-4 w-4 mr-2" />
            ) : (
              <Pause className="h-4 w-4 mr-2" />
            )}
            {reducedMotion ? "Activer animations" : "Réduire animations"}
          </Button>

          <div className="space-y-2">
            <p className="text-sm text-primary font-mono">Taille du texte</p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setFontSize("small")}
                className={`flex-1 border-2 font-mono ${fontSize === "small" ? "border-primary bg-primary/20 text-primary" : "border-primary/50"}`}
              >
                A-
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setFontSize("normal")}
                className={`flex-1 border-2 font-mono ${fontSize === "normal" ? "border-primary bg-primary/20 text-primary" : "border-primary/50"}`}
              >
                A
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setFontSize("large")}
                className={`flex-1 border-2 font-mono ${fontSize === "large" ? "border-primary bg-primary/20 text-primary" : "border-primary/50"}`}
              >
                A+
              </Button>
            </div>
          </div>

          <Button
            variant="outline"
            onClick={toggleLineSpacing}
            className="w-full justify-start border-2 border-primary/50 hover:border-primary font-mono"
          >
            <AlignLeft className="h-4 w-4 mr-2" />
            {lineSpacing === "increased" ? "Espacement normal" : "Augmenter espacement"}
          </Button>

          <Button
            variant="outline"
            onClick={toggleReadingMode}
            className="w-full justify-start border-2 border-primary/50 hover:border-primary font-mono"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            {readingMode ? "Désactiver mode lecture" : "Mode lecture"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}