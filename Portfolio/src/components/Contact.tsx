import { Mail, MapPin, Send, Terminal, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Traitement du formulaire
    console.log("Formulaire soumis:", formData);
    alert("Merci pour votre message ! Je vous répondrai dans les plus brefs délais.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Terminal-style header */}
          <div className="border-2 border-primary bg-card p-4 rounded-sm mb-12 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-primary">
              <Terminal className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-mono">./contact.sh --init</span>
            </div>
            <p className="text-foreground font-mono">
              [READY] Système de contact activé | Réponse sous 24h
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-6">
              <Card className="border-2 border-primary bg-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-sm bg-primary/20 border border-primary">
                      <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono mb-1">EMAIL</p>
                      <a
                        href="mailto:ravozke@gmail.com"
                        className="text-primary hover:underline font-mono text-sm"
                      >
                        ravozke@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary bg-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-sm bg-primary/20 border border-primary">
                      <Linkedin className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono mb-1">LINKEDIN</p>
                      <a
                        href="https://www.linkedin.com/in/enzo-rimbert-ba88b138a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-mono text-sm break-all"
                      >
                        /enzo-rimbert
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary bg-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-sm bg-primary/20 border border-primary">
                      <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono mb-1">LOCALISATION</p>
                      <p className="font-mono text-sm text-foreground">Angoulême, France</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="md:col-span-2 border-2 border-primary bg-card">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-mono text-primary">NOM</Label>
                    <Input
                      id="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      aria-required="true"
                      className="border-2 border-primary bg-background font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-mono text-primary">EMAIL</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      aria-required="true"
                      className="border-2 border-primary bg-background font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-mono text-primary">MESSAGE</Label>
                    <Textarea
                      id="message"
                      placeholder="Parlez-moi de votre projet..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      aria-required="true"
                      className="border-2 border-primary bg-background font-mono"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 font-mono"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    ENVOYER MESSAGE
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}