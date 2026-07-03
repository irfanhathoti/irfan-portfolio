"use client";

import SectionHeading from "./SectionHeading";
import SkillCard from "./SkillCard";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I work with"
        subtitle="A full-stack toolkit spanning frontend, backend, AI integrations, databases, and cloud infrastructure."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <SkillCard key={group.category} group={group} index={i} />
        ))}
      </div>
    </section>
  );
}
