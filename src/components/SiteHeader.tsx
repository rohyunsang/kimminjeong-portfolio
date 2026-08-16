import Link from "next/link";
import { profile } from "@/data/works";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader({ current }: { current?: string }) {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-2 items-center px-4 py-3 sm:px-6 md:grid-cols-12">
        <Link
          href="/"
          className="label md:col-span-3 flex items-center gap-2 !text-[0.75rem] font-medium tracking-[0.12em]"
        >
          <span className="inline-block size-2 rounded-full bg-accent" aria-hidden />
          {profile.name}
        </Link>
        <p className="label hidden text-muted md:col-span-5 md:block">
          {profile.headline} · {profile.location}
        </p>
        <nav className="justify-self-end md:col-span-4">
          <ul className="flex gap-5 sm:gap-8">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`label transition hover:text-foreground ${
                    current === n.label ? "text-foreground underline underline-offset-4" : "text-muted"
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
