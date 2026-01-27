"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="py-20 flex flex-col items-center text-center space-y-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Avatar className="w-32 h-32 border-4 border-white dark:border-zinc-800 shadow-2xl">
          <AvatarImage src="https://github.com/LvaaBoy.png" alt="Developer Avatar" />
          <AvatarFallback>MNG</AvatarFallback>
        </Avatar>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-2"
      >
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Hi, I&apos;m <span className="text-primary italic">Maulana Nauval Gunardy</span>
        </h1>
        <p className="text-xl text-muted-foreground font-medium">
          Web & Mobile Developer
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-[600px] text-lg text-muted-foreground leading-relaxed"
      >
        Building beautiful, high-performance web and mobile applications with
        modern technologies. Passionate about clean code and great user experiences.
      </motion.p>
    </section>
  );
}
