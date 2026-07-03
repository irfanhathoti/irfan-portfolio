import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:42px_42px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_40%,transparent_100%)]" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />
      </div>

      <div className="text-center">
        <p className="gradient-text text-7xl font-bold sm:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary mt-8">
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
