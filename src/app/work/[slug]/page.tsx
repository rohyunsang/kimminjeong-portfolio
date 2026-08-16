import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { works } from "@/data/works";

const pad = (n: number) => String(n).padStart(2, "0");
const circled = (n: number) =>
  n >= 1 && n <= 20 ? String.fromCodePoint(0x2460 + n - 1) : `(${n})`;

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) return {};
  return {
    title: work.title,
    description: work.summary,
    openGraph: { title: work.title, description: work.summary, images: [work.cover.src] },
  };
}

export default async function WorkPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const index = works.findIndex((w) => w.slug === slug);
  if (index === -1) notFound();
  const work = works[index];
  const prev = works[(index - 1 + works.length) % works.length];
  const next = works[(index + 1) % works.length];

  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader current="Work" />

      <main className="mx-auto w-full max-w-[1400px] flex-1 px-4 sm:px-6">
        {/* Title bar */}
        <div className="grid grid-cols-12 items-end gap-x-6 border-b border-line py-6 md:py-8">
          <div className="col-span-12 flex items-baseline gap-4 md:col-span-9">
            <span className="font-mono text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-tighter">
              {work.no}
            </span>
            <h1 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-tight">
              {work.title}
            </h1>
          </div>
          <p className="label col-span-12 mt-3 text-muted md:col-span-3 md:mt-0 md:text-right">
            {work.year} · {work.type}
          </p>
        </div>

        {/* Cover */}
        <div className="relative aspect-video w-full overflow-hidden bg-paper">
          <Image
            src={work.cover.src}
            alt={`${work.title} — cover`}
            fill
            priority
            sizes="(min-width: 1400px) 1400px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Catalog: images left, sticky info right */}
        <div className="grid grid-cols-1 gap-x-10 border-t border-line md:grid-cols-12">
          <section className="order-2 md:order-1 md:col-span-8 lg:col-span-9">
            <ol className="grid grid-cols-1 gap-x-4 gap-y-8 py-8 sm:grid-cols-2">
              {work.images.map((img, i) => {
                const isGif = img.src.endsWith(".gif");
                return (
                  <li key={img.src}>
                    <span className="label mb-2 block text-muted">{circled(i + 1)}</span>
                    <div className="relative overflow-hidden bg-paper">
                      <Image
                        src={img.src}
                        alt={`${work.title} — image ${pad(i + 1)}`}
                        width={img.w}
                        height={img.h}
                        sizes="(min-width: 1024px) 40vw, (min-width: 640px) 45vw, 100vw"
                        className="h-auto w-full"
                        unoptimized={isGif}
                      />
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>

          <aside className="order-1 md:order-2 md:col-span-4 lg:col-span-3">
            <div className="border-b border-line py-8 md:sticky md:top-14 md:border-b-0 md:border-l md:pl-6">
              <p className="text-sm leading-6">{work.summary}</p>

              <dl className="mt-8 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
                <dt className="label text-muted">Role</dt>
                <dd className="text-xs leading-5">{work.role}</dd>
                <dt className="label text-muted">Engine</dt>
                <dd className="text-xs leading-5">{work.engine}</dd>
                <dt className="label text-muted">Time</dt>
                <dd className="text-xs leading-5">{work.duration}</dd>
                <dt className="label text-muted">Tools</dt>
                <dd className="text-xs leading-5">{work.software.join(", ")}</dd>
                <dt className="label text-muted">Images</dt>
                <dd className="text-xs leading-5">{pad(work.images.length)}</dd>
              </dl>

              <ul className="label mt-8 flex flex-col gap-2">
                <li>
                  <a
                    href={work.artstation}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent"
                  >
                    View on ArtStation ↗
                  </a>
                </li>
                {work.concept && (
                  <li>
                    <a
                      href={work.concept}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted hover:text-accent"
                    >
                      {work.slug === "weind-up" ? "Studio Gravitia ↗" : "Concept reference ↗"}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </aside>
        </div>

        {/* Prev / next */}
        <nav className="grid grid-cols-2 border-t border-line">
          <Link
            href={`/work/${prev.slug}`}
            className="group border-r border-line py-6 pr-4 hover:text-accent"
          >
            <span className="label text-muted">← Previous</span>
            <p className="mt-2 text-sm">
              <span className="font-mono">{pad(prev.no)}</span> {prev.short}
            </p>
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="group py-6 pl-4 text-right hover:text-accent"
          >
            <span className="label text-muted">Next →</span>
            <p className="mt-2 text-sm">
              <span className="font-mono">{pad(next.no)}</span> {next.short}
            </p>
          </Link>
        </nav>
      </main>

      <SiteFooter />
    </div>
  );
}
