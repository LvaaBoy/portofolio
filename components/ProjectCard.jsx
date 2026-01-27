"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download } from "lucide-react";

import { motion } from "framer-motion";

export function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            <Card className="group overflow-hidden border-muted-foreground/20 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl bg-card/50 backdrop-blur-sm">
                <div className="aspect-video bg-muted relative overflow-hidden">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.name}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-medium italic bg-linear-to-br from-muted to-muted-foreground/10 group-hover:scale-110 transition-transform duration-700">
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-2xl opacity-20 not-italic">🚀</span>
                                <span className="group-hover:text-primary transition-colors">{project.name}</span>
                            </div>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.name}</CardTitle>
                    <CardDescription className="line-clamp-2 min-h-[40px]">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-[10px] px-2 py-0 border-primary/20 bg-primary/5">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="flex gap-2 pt-4">
                    <Button variant="outline" size="sm" className="w-full gap-2 rounded-full group/btn" asChild>
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" /> Live Demo
                        </a>
                    </Button>
                    {project.apkLink && (
                        <Button variant="secondary" size="sm" className="w-full gap-2 rounded-full" asChild>
                            <a href={project.apkLink} target="_blank" rel="noopener noreferrer">
                                <Download className="w-4 h-4" /> APK
                            </a>
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    );
}
