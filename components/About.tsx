"use client";

import { MapPin, Briefcase, Cloud, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { aboutText, personal } from "@/lib/data";

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Shipped", value: "10+" },
  { label: "Core Stack", value: "MERN / Next" },
];

const highlights = [
  {
    icon: Sparkles,
    title: "AI-Powered Products",
    text: "Integrating OpenAI & Anthropic Claude into real production workflows.",
  },
  {
    icon: Cloud,
    title: "Ship to Production",
    text: "From responsive UI to REST/GraphQL APIs to cloud deployments.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <SectionHeading eyebrow="About" title="A bit about me" />

      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="gradient-border h-full p-7">
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              {aboutText}
            </p>

            <div className="mt-7 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center"
                >
                  <p className="gradient-text text-xl font-bold sm:text-2xl">{s.value}</p>
                  <p className="mt-1 text-xs text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-indigo-300" />
                {personal.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-indigo-300" />
                {personal.role}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="flex h-full flex-col gap-6">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.title} className="gradient-border flex-1 p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 text-indigo-300 ring-1 ring-white/10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                    {h.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
