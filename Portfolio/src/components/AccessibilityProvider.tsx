import { createContext, useContext, useEffect, useState } from "react";

interface AccessibilityContextType {
  highContrast: boolean;
  toggleHighContrast: () => void;
  reducedMotion: boolean;
  toggleReducedMotion: () => void;
  fontSize: "small" | "normal" | "large";
  setFontSize: (size: "small" | "normal" | "large") => void;
  lineSpacing: "normal" | "increased";
  toggleLineSpacing: () => void;
  readingMode: boolean;
  toggleReadingMode: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(
  undefined
);

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      "useAccessibility must be used within AccessibilityProvider"
    );
  }
  return context;
}

export function AccessibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState<"small" | "normal" | "large">("normal");
  const [lineSpacing, setLineSpacing] = useState<"normal" | "increased">("normal");
  const [readingMode, setReadingMode] = useState(false);

  useEffect(() => {
    // Appliquer le mode contraste élevé
    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  }, [highContrast]);

  useEffect(() => {
    // Appliquer la réduction des animations
    if (reducedMotion) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }
  }, [reducedMotion]);

  useEffect(() => {
    // Appliquer la taille de police
    document.documentElement.classList.remove("font-small", "font-large");
    if (fontSize === "small") {
      document.documentElement.classList.add("font-small");
    } else if (fontSize === "large") {
      document.documentElement.classList.add("font-large");
    }
  }, [fontSize]);

  useEffect(() => {
    // Appliquer l'espacement des lignes
    if (lineSpacing === "increased") {
      document.documentElement.classList.add("line-spacing-increased");
    } else {
      document.documentElement.classList.remove("line-spacing-increased");
    }
  }, [lineSpacing]);

  useEffect(() => {
    // Appliquer le mode lecture
    if (readingMode) {
      document.documentElement.classList.add("reading-mode");
    } else {
      document.documentElement.classList.remove("reading-mode");
    }
  }, [readingMode]);

  const toggleHighContrast = () => setHighContrast(!highContrast);
  const toggleReducedMotion = () => setReducedMotion(!reducedMotion);
  const toggleLineSpacing = () =>
    setLineSpacing(lineSpacing === "normal" ? "increased" : "normal");
  const toggleReadingMode = () => setReadingMode(!readingMode);

  return (
    <AccessibilityContext.Provider
      value={{
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
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}