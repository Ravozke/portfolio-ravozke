import { ExternalLink, Code2, Clock } from "lucide-react";
import { useAccessibility } from "./AccessibilityProvider";
import gemuShopImage from "figma:asset/8846fcb0a77a66897cb841e184c359ff4158ae3a.png";

const projects = [
  {
    id: "gemushop",
    name: "GemuShop",
    description: "Boutique en ligne spécialisée dans la vente de produit sur un jeu nommé Brawlhalla. Interface moderne avec système de paiement sécurisé.",
    image: gemuShopImage,
    link: "https://gemucodes.mysellauth.com/",
    tags: ["E-commerce", "Gaming", "Web Design"],
    status: "En ligne",
    isLive: true
  },
  {
    id: "itchevitz",
    name: "Itchevitz",
    description: "Association proposant un site web de streaming musical. Principe fondamental : une expérience musicale totalement sans publicité pour les utilisateurs.",
    image: "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0cmVhbWluZyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzYzNzA1OTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "#",
    tags: ["Musique", "Streaming", "Association"],
    status: "En cours",
    isLive: false
  }
];

export function Projects() {
  const { highContrast, reducedMotion } = useAccessibility();

  return (
    <section
      id="projets"
      className={`min-h-screen py-20 px-4 border-t-2 border-primary ${
        highContrast ? "bg-background" : "bg-background"
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Code2 className="h-8 w-8 text-primary" />
            <h2 className="text-primary font-mono">
              <span className="text-muted-foreground">~/</span>projets
            </h2>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <p className="text-muted-foreground font-mono text-sm">
              [INFO] Projets réalisés et mis en ligne
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`group border-2 border-primary bg-card overflow-hidden ${
                reducedMotion ? "" : "hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              }`}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-background border-b-2 border-primary">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className={`w-full h-full object-cover ${
                    reducedMotion ? "" : "group-hover:scale-105 transition-transform duration-500"
                  }`}
                />
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 font-mono text-xs border-2 ${
                    project.isLive 
                      ? 'bg-primary text-primary-foreground border-primary-foreground' 
                      : 'bg-background text-primary border-primary'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${
                      project.isLive 
                        ? `bg-green-500 ${reducedMotion ? "" : "animate-pulse"}` 
                        : `bg-yellow-500 ${reducedMotion ? "" : "animate-pulse"}`
                    }`} />
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-mono text-primary mb-2">
                      <span className="text-muted-foreground">$</span> {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono border border-primary text-primary bg-background"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.isLive ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono border-2 border-primary ${
                      reducedMotion
                        ? ""
                        : "hover:bg-background hover:text-primary transition-colors"
                    }`}
                  >
                    <span>Visiter le site</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center gap-2 px-6 py-3 bg-background text-muted-foreground font-mono border-2 border-primary cursor-not-allowed opacity-60"
                  >
                    <Clock className="h-4 w-4" />
                    <span>En développement</span>
                  </button>
                )}
              </div>

              {/* Terminal-style footer */}
              <div className="border-t-2 border-primary bg-background/50 px-6 py-2">
                <p className="text-xs font-mono text-muted-foreground">
                  {project.isLive 
                    ? "[SUCCESS] Projet déployé et accessible en ligne" 
                    : "[PENDING] Projet en cours de développement"}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Terminal prompt */}
        <div className="mt-12 border-2 border-primary bg-card p-4">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">root@portfolio</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-primary">~/projets</span>
            <span className="text-muted-foreground"># </span>
            <span className={reducedMotion ? "" : "animate-pulse"}>_</span>
          </p>
        </div>
      </div>
    </section>
  );
}