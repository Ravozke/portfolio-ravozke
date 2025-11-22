import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { ScrollProgress } from "./components/ScrollProgress";
import { AccessibilityProvider } from "./components/AccessibilityProvider";

export default function App() {
  return (
    <AccessibilityProvider>
      <div className="min-h-screen bg-background pb-16">
        <Navigation />
        <ScrollProgress />
        {/* Main content with left margin for desktop sidebar on large screens */}
        <main className="lg:ml-[280px]">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <footer className="border-t-2 border-primary py-8 lg:ml-[280px]">
          <div className="container mx-auto px-4 text-center">
            <p className="font-mono text-primary text-sm">
              © RIMBERT ENZO | Portfolio | v1.0.0
            </p>
          </div>
        </footer>
      </div>
    </AccessibilityProvider>
  );
}