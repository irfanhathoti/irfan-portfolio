"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, CalendarDays } from "lucide-react";
import type { Experience } from "@/lib/data";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export default function ExperienceCard({
  experience,
  index,
  isLast,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-10 sm:pl-14"
    >
      {/* Timeline line */}
      {!isLast && (
        <span className="absolute left-[14px] top-10 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-indigo-500/50 to-transparent sm:left-[18px]" />
      )}
      {/* Timeline dot */}
      <span className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 ring-1 ring-white/15 sm:h-9 sm:w-9">
        <Briefcase className="h-4 w-4 text-indigo-300" />
      </span>

      <div className="gradient-border mb-8 p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-semibold text-white">{experience.role}</h3>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-indigo-300">
            <CalendarDays className="h-3.5 w-3.5" />
            {experience.duration}
          </span>
        </div>

        <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-400">
          <span className="font-medium text-fuchsia-300">{experience.company}</span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {experience.location}
          </span>
        </div>

        {experience.project && (
          <p className="mt-3 text-sm font-medium text-slate-300">
            Project: <span className="text-white">{experience.project}</span>
          </p>
        )}

        <ul className="mt-4 space-y-2.5">
          {experience.points.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-400">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
