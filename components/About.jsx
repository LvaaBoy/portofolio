"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skills = [
    "React", "Next.js", "Flutter", "Node.js",
    "PostgreSQL", "WebSocket", "TailwindCSS", "shadcn/ui"
];

export function About() {
    return (
        <section id="about" className="py-16 space-y-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
            >
                <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    I am a dedicated developer with a strong focus on building scalable and
                    efficient applications. My expertise spans across frontend and backend
                    development, with a deep love for the React ecosystem and Flutter
                    for mobile solutions.
                </p>
            </motion.div>

            <div className="space-y-6">
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xl font-semibold"
                >
                    Skills & Technologies
                </motion.h3>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                                {skill}
                            </Badge>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
