import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { profile, works } from "@/data/works";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="catalog-heading">
        <Link href="/" className="catalog-title" aria-label="Portfolio home">
          Portfolio
        </Link>
        <p className="catalog-count">({works.length})</p>
        <nav className="catalog-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href={profile.artstation} target="_blank" rel="noreferrer">
            ArtStation ↗
          </a>
          <a href={profile.youtube} target="_blank" rel="noreferrer">
            YouTube ↗
          </a>
        </nav>
        <p className="catalog-name">{profile.name}</p>
      </header>

      <main>
        <section className="home-showreel" aria-label="Medieval Village portfolio showreel">
          <video
            className="home-showreel-video"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            poster="/works/forgotten-breath/cover.webp"
          >
            <source src="/videos/medieval-village-portfolio.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </section>

        <section id="work" className="work-grid" aria-label="Selected works">
          {works.map((work) => (
            <article key={work.slug} className="work-card">
              <Link href={`/work/${work.slug}`} className="work-card-link group">
                <div className="work-image-frame">
                  <Image
                    src={work.cover.src}
                    alt={`${work.title} — cover`}
                    fill
                    sizes="(min-width: 900px) 34vw, (min-width: 560px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                    priority={work.no === 1}
                  />
                  <span className="work-number" aria-hidden>
                    {String(work.no).padStart(2, "0")}
                  </span>
                </div>

                <dl className="work-specs">
                  <div>
                    <dt>Year</dt>
                    <dd>{work.year}</dd>
                  </div>
                  <div>
                    <dt>Engine</dt>
                    <dd>{work.engine}</dd>
                  </div>
                  <div>
                    <dt>Type</dt>
                    <dd>{work.type}</dd>
                  </div>
                </dl>

                <h2 className="work-title">{work.title}</h2>
                <p className="work-summary">{work.summary}</p>
              </Link>
            </article>
          ))}
        </section>

        <section id="about" className="info-grid">
          <h2>About</h2>
          <div className="info-lead">
            <p>
              <span className="info-tagline">
                3D Environment Artist creating immersive spaces through atmosphere and storytelling
              </span>
            </p>
          </div>
          <div className="info-copy">
            <p>
              컨셉 아트를 바탕으로 모듈러 에셋과 프랍을 제작하고, 텍스처링·라이팅·씬
              구성까지 이어지는 환경 제작 파이프라인 전반을 다룹니다.
            </p>
            <div className="info-details">
              <p>
                <strong>EXPERTISE</strong>
                <br />
                Environment Modeling · Modular Assets · Prop Production
                <br />
                PBR Texturing · Scene Dressing · Lighting · Optimization
              </p>
              <p>
                <strong>TOOLS</strong>
                <br />
                Unreal Engine 5 · 3ds Max · ZBrush · Substance 3D Painter
                <br />
                Maya · Blender · Marvelous Designer · Marmoset Toolbag · Photoshop
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-grid">
          <h2>Contact</h2>
          <a href={`mailto:${profile.email}`} className="contact-email">
            {profile.email}
          </a>
          <div className="contact-links">
            <a href={profile.artstation} target="_blank" rel="noreferrer" className="contact-link">
              ArtStation ↗
            </a>
            <a href={profile.youtube} target="_blank" rel="noreferrer" className="contact-link">
              YouTube ↗
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
