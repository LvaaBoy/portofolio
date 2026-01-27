"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Send } from "lucide-react";

import { motion } from "framer-motion";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Message sent! (Demo only)");
            e.target.reset();
        }, 1000);
    };

    return (
        <section id="contact" className="py-16 space-y-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
            >
                <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Have a project in mind or just want to say hi? Feel free to reach out
                    through the form below or via my social links.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>Send a Message</CardTitle>
                            <CardDescription>
                                Expect a response within 24-48 hours.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <Input id="name" placeholder="Your Name" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" type="email" placeholder="your@email.com" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <Textarea id="message" placeholder="Tell me about your project..." rows={4} required />
                                </div>
                                <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    {!isSubmitting && <Send className="w-4 h-4" />}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="space-y-8 flex flex-col justify-center"
                >
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Connect with me</h3>
                        <div className="grid gap-4">
                            <a
                                href="https://github.com/LvaaBoy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:border-primary/50 hover:shadow-md transition-all group"
                            >
                                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                <div>
                                    <div className="font-medium">GitHub</div>
                                    <div className="text-sm text-muted-foreground">LvaaBoy</div>
                                </div>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/viel-nasgor-24217b3a5/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:border-primary/50 hover:shadow-md transition-all group"
                            >
                                <Linkedin className="w-6 h-6 text-[#0077b5] group-hover:scale-110 transition-transform" />
                                <div>
                                    <div className="font-medium">LinkedIn</div>
                                    <div className="text-sm text-muted-foreground">Maulana Nauval Gunardy</div>
                                </div>
                            </a>
                            <a
                                href="mailto:maulananauvalg@gmail.com"
                                className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:border-primary/50 hover:shadow-md transition-all group"
                            >
                                <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                                <div>
                                    <div className="font-medium">Email</div>
                                    <div className="text-sm text-muted-foreground">maulananauvalg@gmail.com</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
