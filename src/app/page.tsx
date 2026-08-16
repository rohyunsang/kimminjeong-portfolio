import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { works, profile } from "@/data/works";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  const totalImages = works.reduce((n, w) => n + w.images.length, 0);

  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-[1400px] flex-1 px-4 sm:px-6">
        {/* Intro strip */}
        <section className="grid grid-cols-1 gap-6 border-b border-line py-10 md:grid-cols-12 md:py-14">
          <div className="md:col-span-3">
            <p className="label text-muted">Index</p>
          </div>
          <div className="md:col-span-6">
            <h1 className="text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.1] tracking-tight">
              Game-ready environments, modular kits and props — built in Unreal Engine.
            </h1>
          </div>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 self-end md:col-span-3">
            <dt className="label text-muted">Projects</dt>
            <dd className="label text-right md:text-left">{pad(works.length)}</dd>
            <dt className="label text-muted">Images</dt>
            <dd className="label text-right md:text-left">{pad(totalImages)}</dd>
            <dt className="label text-muted">Based in</dt>
            <dd className="label text-right md:text-left">{profile.location}</dd>
          </dl>
        </section>

        {/* Work index */}
        <section id="work" className="scroll-mt-16">
          <div className="grid grid-cols-12 border-b border-line py-2">
            <span className="label col-span-6 text-muted md:col-span-3">Project</span>
            <span className="label hidden text-muted md:col-span-3 md:block">Details</span>
            <span className="label col-span-6 text-right text-muted md:col-span-6 md:text-left">
              Selected frames
            </span>
          </div>

          <ol>
            {works.map((w) => (
              <li key={w.slug} className="border-b border-line">
                <Link
                  href={`/work/${w.slug}`}
                  className="group grid grid-cols-12 gap-x-4 py-6 md:gap-x-6 md:py-8"
                >
                  {/* Number + title */}
                  <div className="col-span-12 flex gap-4 md:col-span-3">
                    <span className="font-mono text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-tighter">
                      {w.no}
                    </span>
                    <div className="pt-1">
                      <h2 className="text-lg leading-tight tracking-tight group-hover:text-accent sm:text-xl">
                        {w.title}
                      </h2>
                      <p className="label mt-2 text-muted">
                        {w.year} · {w.type}
                      </p>
                    </div>
                  </div>

                  {/* Meta table */}
                  <dl className="col-span-12 mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 self-start md:col-span-3 md:mt-1">
                    <dt className="label text-muted">Role</dt>
                    <dd className="text-xs leading-5">{w.role}</dd>
                    <dt className="label text-muted">Engine</dt>
                    <dd className="text-xs leading-5">{w.engine}</dd>
                    <dt className="label text-muted">Time</dt>
                    <dd className="text-xs leading-5">{w.duration}</dd>
                    <dt className="label text-muted">Tools</dt>
                    <dd className="text-xs leading-5">{w.software.join(", ")}</dd>
                  </dl>

                  {/* Thumbnails */}
                  <div className="col-span-12 mt-4 grid grid-cols-3 gap-2 md:col-span-6 md:mt-0 md:gap-3">
                    {[w.cover, ...w.images.slice(0, 2)].map((img, i) => (
                      <div
                        key={img.src}
                        className="relative aspect-video overflow-hidden bg-paper"
                      >
                        <Image
                          src={img.src}
                          alt={`${w.title} — frame ${pad(i + 1)}`}
                          fill
                          sizes="(min-width: 768px) 22vw, 33vw"
                          className="object-cover transition duration-500 group-hover:scale-[1.02]"
                          priority={w.no === 1}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="col-span-12 mt-3 flex items-center justify-between md:mt-2">
                    <span className="label text-muted">
                      {pad(w.images.length)} images
                    </span>
                    <span className="label text-muted transition group-hover:text-foreground">
                      Details →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        {/* About */}
        <section
          id="about"
          className="grid scroll-mt-16 grid-cols-1 gap-6 border-b border-line py-12 md:grid-cols-12 md:py-16"
        >
          <p className="label text-muted md:col-span-3">About</p>
          <div className="md:col-span-6">
            <p className="text-lg leading-8 tracking-tight sm:text-xl">
              {profile.nameKo} — {profile.headline} based in {profile.location}. I build
              game-ready environments from concept to final lighting: modular kits,
              props, texturing and scene composition in Unreal Engine. I care about
              atmosphere, readable space and the balance between visual quality and
              real-time performance.
            </p>
            <p className="mt-6 text-sm leading-6 text-muted">
              컨셉 아트를 바탕으로 모듈러 에셋과 프랍을 제작하고, 텍스처링·라이팅·씬 구성까지
              이어지는 환경 제작 파이프라인 전반을 다룹니다.
            </p>
          </div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 self-start md:col-span-3">
            <dt className="label text-muted">Tools</dt>
            <dd className="text-xs leading-5">{profile.tools.join(", ")}</dd>
            <dt className="label text-muted">Focus</dt>
            <dd className="text-xs leading-5">
              Environment art, modular kits, props, lighting
            </dd>
            <dt className="label text-muted">Status</dt>
            <dd className="text-xs leading-5">Open to opportunities</dd>
          </dl>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="grid scroll-mt-16 grid-cols-1 gap-6 py-12 md:grid-cols-12 md:py-16"
        >
          <p className="label text-muted md:col-span-3">Contact</p>
          <div className="md:col-span-6">
            <a
              href={`mailto:${profile.email}`}
              className="text-[clamp(1.5rem,3vw,2.5rem)] leading-tight tracking-tight underline decoration-line underline-offset-8 hover:decoration-accent"
            >
              {profile.email}
            </a>
          </div>
          <ul className="label flex flex-col gap-2 self-start md:col-span-3">
            <li>
              <a
                href={profile.artstation}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                ArtStation ↗
              </a>
            </li>
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
