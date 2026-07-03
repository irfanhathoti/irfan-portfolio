"use client";

import SectionHeading from "./SectionHeading";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        subtitle="3+ years building and shipping production applications across the stack."
      />

      <div className="mx-auto max-w-3xl">
        {experiences.map((exp, i) => (
          <ExperienceCard
            key={`${exp.company}-${i}`}
            experience={exp}
            index={i}
            isLast={i === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
