"use client";

import { ArrowUp } from "lucide-react";
import { personal, socials, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-sm font-bold text-white">
                IH
              </span>
              <span className="text-base font-semibold text-white">{personal.name}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {personal.role} based in {personal.location}, building modern web apps and
              AI-powered products.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Navigate</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Connect</h4>
              <ul className="space-y-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {personal.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {2026} {personal.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition-all hover:border-white/30 hover:text-white"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
