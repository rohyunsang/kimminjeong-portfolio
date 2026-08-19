import { profile } from "@/data/works";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span>{profile.headline}</span>
      <div>
        <a href={profile.artstation} target="_blank" rel="noreferrer">ArtStation ↗</a>
        <a href={profile.youtube} target="_blank" rel="noreferrer">YouTube ↗</a>
        <a href={`mailto:${profile.email}`}>Email ↗</a>
      </div>
    </footer>
  );
}
