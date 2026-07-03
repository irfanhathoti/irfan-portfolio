"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles, Code2, Cpu } from "lucide-react";
import { personal } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Background: grid + glow + floating cards */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:42px_42px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_50%,transparent_100%)]" />
        <div className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute right-[10%] top-[30%] h-72 w-72 rounded-full bg-fuchsia-500/15 blur-[120px]" />
        <div className="absolute left-[8%] top-[55%] h-72 w-72 rounded-full bg-sky-500/15 blur-[120px]" />

        {/* Floating UI cards */}
        <motion.div
          aria-hidden
          className="absolute right-[8%] top-[24%] hidden lg:block"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
              <Code2 className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs font-semibold text-white">Next.js + TypeScript</p>
              <p className="text-[11px] text-slate-400">Production builds</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          aria-hidden
          className="absolute left-[6%] top-[60%] hidden lg:block"
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-fuchsia-500/20 text-fuchsia-300">
              <Cpu className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs font-semibold text-white">AI Integrations</p>
              <p className="text-[11px] text-slate-400">OpenAI · Claude</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-indigo-300 backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5" />
            Available for Full Stack Developer roles
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">
            Hi, I&apos;m <span className="gradient-text">{personal.name}</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-xl font-semibold text-slate-200 sm:text-2xl"
          >
            {personal.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {personal.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500"
          >
            {personal.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a href={personal.resume} download className="btn-ghost">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
