"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle, Copy, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { contactCards, socials, personal } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <SectionHeading
        eyebrow="Contact"
        title="Let's work together"
        subtitle="Have a role or project in mind? Send a message and I'll get back to you."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Contact cards */}
        <Reveal className="lg:col-span-2">
          <div className="flex h-full flex-col gap-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const isEmail = card.label === "Email";
              return (
                <div
                  key={card.label}
                  className="gradient-border flex items-center gap-4 p-5 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 text-indigo-300 ring-1 ring-white/10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <a href={card.href} className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      {card.label}
                    </p>
                    <p className="truncate text-sm font-medium text-slate-200">
                      {card.value}
                    </p>
                  </a>
                  {isEmail && (
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:border-indigo-400/50 hover:text-white"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>
              );
            })}

            <div className="gradient-border p-5">
              <p className="mb-3 text-xs uppercase tracking-wider text-slate-500">
                Find me online
              </p>
              <div className="flex gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-white"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1} className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="gradient-border h-full p-7">
            <div className="grid gap-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-indigo-400/60 focus:outline-none focus:ring-2 focus:ring-indigo-400/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-indigo-400/60 focus:outline-none focus:ring-2 focus:ring-indigo-400/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-indigo-400/60 focus:outline-none focus:ring-2 focus:ring-indigo-400/20"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </motion.button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  Thanks! Your message has been sent successfully.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-rose-400">
                  <AlertCircle className="h-4 w-4" />
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
