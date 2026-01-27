"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="pt-24 pb-8 border-t border-border/40">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <a href="#" className="font-bold text-xl tracking-tighter hover:text-primary transition-colors">
                        MN<span className="text-primary">G.</span>
                    </a>
                    <p className="text-sm text-muted-foreground">
                        Building premium digital experiences.
                    </p>
                </div>

                <div className="flex items-center gap-6 text-muted-foreground">
                    <a href="https://github.com/LvaaBoy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/viel-nasgor-24217b3a5/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:maulananauvalg@gmail.com" className="hover:text-foreground transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Maulana Nauval Gunardy.
                </p>
            </div>
            <div className="mt-8 text-center text-[10px] text-muted-foreground/50 uppercase tracking-widest">
                Built with Next.js, TailwindCSS & shadcn/ui
            </div>
        </footer>
    );
}
