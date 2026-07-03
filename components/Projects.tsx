"use client";

import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        subtitle="A mix of full-stack products, AI-powered tools, and backend services."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
