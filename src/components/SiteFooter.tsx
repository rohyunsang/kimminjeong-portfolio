import { profile } from "@/data/works";

export function SiteFooter() {
  return (
    <footer className="border-t border-line-strong">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-2 gap-4 px-4 py-6 sm:px-6 md:grid-cols-12">
        <span className="label md:col-span-3">© {new Date().getFullYear()} {profile.name}</span>
        <span className="label hidden text-muted md:col-span-5 md:block">{profile.headline}</span>
        <div className="label flex justify-end gap-6 md:col-span-4">
          <a href={profile.artstation} target="_blank" rel="noreferrer" className="hover:text-accent">
            ArtStation ↗
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-accent">
            Email ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
