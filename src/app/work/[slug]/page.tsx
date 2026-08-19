import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { works, type Work } from "@/data/works";

const pad = (n: number) => String(n).padStart(2, "0");

function ProjectReceipt({ work, className = "" }: { work: Work; className?: string }) {
  return (
    <section className={`project-receipt ${className}`} aria-label="Project information">
      <div className="project-receipt-top">
        <div>
          <span>Project</span>
          <strong>{work.title}</strong>
        </div>
        <div className="project-receipt-meta">
          <div>
            <span>Period</span>
            <strong>{work.period ?? work.year}</strong>
          </div>
          <div className="project-links">
            {work.artstation && (
              <a href={work.artstation} target="_blank" rel="noreferrer">
                View on ArtStation ↗
              </a>
            )}
            {work.concept && (
              <a href={work.concept} target="_blank" rel="noreferrer">
                {work.slug === "weind-up" ? "Studio Gravitia ↗" : "Concept reference ↗"}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-receipt-main">
        <div className="project-receipt-description">
          <span>Description</span>
          <p>{work.summary}</p>
        </div>

        <div className="project-receipt-items">
          <div className="project-receipt-head">
            <span>Item</span>
            <span>Details</span>
          </div>
          <dl>
            <div>
              <dt>Role</dt>
              <dd>{work.role}</dd>
            </div>
            <div>
              <dt>Engine</dt>
              <dd>{work.engine}</dd>
            </div>
            <div>
              <dt>Duration</dt>
              <dd>{work.duration}</dd>
            </div>
            <div>
              <dt>Type</dt>
              <dd>{work.type}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="project-receipt-total">
        <div>
          <span>Tools</span>
          <strong>{work.software.join(", ")}</strong>
        </div>
        <div>
          <span>Output</span>
          <strong>{pad(work.images.length)} images</strong>
        </div>
      </div>

      {work.summaryKo && <p className="project-summary-ko">{work.summaryKo}</p>}
    </section>
  );
}

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);
  if (!work) return {};

  return {
    title: work.title,
    description: work.summary,
    openGraph: {
      title: work.title,
      description: work.summary,
      images: [work.cover.src],
    },
  };
}

export default async function WorkPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const index = works.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const work = works[index];
  const previous = works[(index - 1 + works.length) % works.length];
  const next = works[(index + 1) % works.length];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="project-shell">
        <header className="project-title-bar">
          <h1>{work.title}</h1>
          <div className="project-title-controls">
            <nav className="project-title-nav" aria-label="Browse portfolio projects">
              <Link
                href={`/work/${previous.slug}`}
                aria-label={`Previous project: ${previous.title}`}
                title={`Previous: ${previous.title}`}
              >
                ◀
              </Link>
              <Link
                href={`/work/${next.slug}`}
                aria-label={`Next project: ${next.title}`}
                title={`Next: ${next.title}`}
              >
                ▶
              </Link>
            </nav>
            <p>
              ({pad(work.no)}) {work.year} · {work.type}
            </p>
          </div>
        </header>

        <div className="project-cover">
          <Image
            src={work.cover.src}
            alt={`${work.title} — cover`}
            fill
            priority
            sizes="100vw"
            className="object-cover project-cover-image"
          />
          <div className="project-cover-overlay">
            <ProjectReceipt work={work} className="project-receipt-overlay" />
          </div>
        </div>

        <ProjectReceipt work={work} className="project-receipt-static" />

        <nav className="project-image-index" aria-label="Jump to project image">
          <ol>
            {work.images.map((image, imageIndex) => (
              <li key={image.src}>
                <a
                  href={`#frame-${pad(imageIndex + 1)}`}
                  aria-label={`Jump to frame ${pad(imageIndex + 1)}`}
                >
                  <div className="project-image-index-thumb">
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      sizes="(min-width: 900px) 18vw, 55vw"
                      className="object-cover"
                      unoptimized={image.src.endsWith(".gif")}
                    />
                  </div>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <ol className="project-gallery">
          {work.images.map((image, imageIndex) => {
            const isGif = image.src.endsWith(".gif");
            return (
              <li key={image.src} id={`frame-${pad(imageIndex + 1)}`}>
                <div className="project-gallery-label">
                  <span>Frame {pad(imageIndex + 1)}</span>
                  <span>{image.w} × {image.h}</span>
                </div>
                <div className="project-gallery-image">
                  <Image
                    src={image.src}
                    alt={`${work.title} — image ${pad(imageIndex + 1)}`}
                    width={image.w}
                    height={image.h}
                    sizes="100vw"
                    className="h-auto w-full"
                    unoptimized={isGif}
                  />
                </div>
              </li>
            );
          })}
        </ol>

        <nav className="project-pagination" aria-label="Browse projects">
          <Link href={`/work/${previous.slug}`}>
            <span>← Previous</span>
            <p>{previous.short}</p>
          </Link>
          <Link href={`/work/${next.slug}`}>
            <span>Next →</span>
            <p>{next.short}</p>
          </Link>
        </nav>
      </main>

      <SiteFooter />
    </div>
  );
}
