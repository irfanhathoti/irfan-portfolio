"use client";

import type { MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, FileText } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function linkIcon(label: string) {
  if (label.toLowerCase().includes("github")) return Github;
  if (label.toLowerCase().includes("case")) return FileText;
  return ExternalLink;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.article
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="gradient-border group flex h-full flex-col p-6 transition-shadow duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-300" />
        </div>

        <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => {
            const Icon = linkIcon(link.label);
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-white"
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </a>
            );
          })}
        </div>
      </motion.article>
    </motion.div>
  );
}
