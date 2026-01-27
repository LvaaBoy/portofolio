"use client";

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
            {/* Subtle Background Elements */}
            <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] opacity-20 pointer-events-none dark:hidden" />
            <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-20 pointer-events-none hidden dark:block" />

            <main className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-12 space-y-24">
                <Hero />
                <About />
                <Projects />
                <Contact />

                <Footer />
                <ScrollToTop />
            </main>
        </div>
    );
}
