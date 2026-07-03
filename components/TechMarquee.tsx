"use client";

const techs = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "GraphQL",
  "Tailwind CSS",
  "Firebase",
  "MongoDB",
  "Neo4j",
  "OpenAI",
  "Anthropic Claude",
  "Redux",
  "Zustand",
  "Apollo",
  "Vercel",
];

export default function TechMarquee() {
  // Duplicated once so the -50% translate loops seamlessly.
  const items = [...techs, ...techs];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-6">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="flex w-max animate-marquee items-center gap-4 hover:[animation-play-state:paused]">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-medium text-slate-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
