import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { works } from "@/data/works";

const pad = (n: number) => String(n).padStart(2, "0");

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
          <p>
            ({pad(work.no)}) {work.year} · {work.type}
          </p>
        </header>

        <div className="project-cover">
          <Image
            src={work.cover.src}
            alt={`${work.title} — cover`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <section className="project-receipt" aria-label="Project information">
          <div className="project-receipt-top">
            <div>
              <span>Project</span>
              <strong>{work.title}</strong>
            </div>
            <div>
              <span>Project ID</span>
              <strong>{pad(work.no)} — {work.year}</strong>
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

          <div className="project-links">
            <a href={work.artstation} target="_blank" rel="noreferrer">
              View on ArtStation ↗
            </a>
            {work.concept && (
              <a href={work.concept} target="_blank" rel="noreferrer">
                {work.slug === "weind-up" ? "Studio Gravitia ↗" : "Concept reference ↗"}
              </a>
            )}
          </div>
        </section>

        <nav className="project-image-index" aria-label="Jump to project image">
          <div className="project-image-index-heading">
            <span>Image index ({pad(work.images.length)})</span>
            <span>Scroll →</span>
          </div>
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
                  <span>{pad(imageIndex + 1)}</span>
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
