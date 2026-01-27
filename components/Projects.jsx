"use client";

import { ProjectCard } from "./ProjectCard";

const projects = [
    {
        name: "UKK Inventory",
        description: "Fullstack management system with real-time tracking and reporting.",
        techStack: ["Next.js", "Neon DB", "TailwindCSS"],
        liveDemo: "https://ukk-five.vercel.app/login",
        image: "/projects/ukk.png",
    },
    {
        name: "Qurani Hafidz",
        description: "Comprehensive platform for Quran memorization and spiritual tracking.",
        techStack: ["Next.js", "Supabase", "TailwindCSS"],
        liveDemo: "https://qurani-hafidz-user.vercel.app",
        image: "/projects/qurani.png",
    },
    {
        name: "BIEE",
        description: "Modern landing page focused on personal stories and sleek aesthetics.",
        techStack: ["Next.js", "TailwindCSS", "shadcn/ui"],
        liveDemo: "https://biee.vercel.app/",
        image: "/projects/biee.png",
    },
    {
        name: "Biblioteca",
        description: "Digital library system for modern book collection management.",
        techStack: ["Next.js", "TailwindCSS"],
        liveDemo: "https://biblioteca-web-ten.vercel.app",
        image: "/projects/biblioteca.png",
    },
    {
        name: "Ebook App",
        description: "Mobile-first digital reading experience with cloud sync.",
        techStack: ["Flutter", "Supabase"],
        liveDemo: "https://www.mediafire.com/file/h47xem1st7b8cz5/Biblioteca.apk/file",
        image: "/projects/ebook.png",
    },
];

import { motion } from "framer-motion"

export function Projects() {
    return (
        <section id="projects" className="py-16 space-y-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
            >
                <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
                <p className="text-lg text-muted-foreground">
                    A showcase of some of my recent work across web and mobile platforms.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={project.name} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}
