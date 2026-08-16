import Link from "next/link";
import { profile } from "@/data/works";

export function SiteHeader() {
  return (
    <header className="project-header">
      <Link href="/" className="project-home">
        Works
      </Link>
      <p>{profile.name}</p>
      <nav aria-label="Project navigation">
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  );
}
