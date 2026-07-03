"use client";

import { motion } from "framer-motion";
import type { SkillGroup } from "@/lib/data";

interface SkillCardProps {
  group: SkillGroup;
  index: number;
}

export default function SkillCard({ group, index }: SkillCardProps) {
  const Icon = group.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="gradient-border group h-full p-6 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 text-indigo-300 ring-1 ring-white/10">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-semibold text-white">{group.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300 transition-colors duration-200 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
