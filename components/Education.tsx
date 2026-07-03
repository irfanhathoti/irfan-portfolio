"use client";

import { GraduationCap, Languages as LangIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education, languages } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <SectionHeading eyebrow="Education" title="Education & Languages" />

      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="gradient-border h-full p-7">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 text-indigo-300 ring-1 ring-white/10">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-white">Education</h3>
            </div>
            <p className="text-base font-medium text-slate-200">{education.degree}</p>
            <p className="mt-1.5 text-sm text-slate-400">{education.institution}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-fuchsia-300">
                {education.detail}
              </span>
              <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-400">
                {education.duration}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="gradient-border h-full p-7">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 text-indigo-300 ring-1 ring-white/10">
                <LangIcon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-white">Languages</h3>
            </div>
            <p className="mb-4 text-sm text-slate-400">
              Comfortable communicating across multiple languages.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-indigo-400/40 hover:text-white"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
