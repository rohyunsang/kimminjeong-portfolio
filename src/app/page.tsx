const works = [
  { title: "Abandoned Station", tag: "Game Environment" },
  { title: "Harbor at Dusk", tag: "Cinematic Set" },
  { title: "Old Town Alley", tag: "Modular Kit" },
  { title: "Forest Shrine", tag: "Game Environment" },
  { title: "Rooftop Garden", tag: "Concept to 3D" },
  { title: "Desert Outpost", tag: "Modular Kit" },
];

const skills = [
  "Blender",
  "Maya",
  "ZBrush",
  "Substance 3D Painter",
  "Substance 3D Designer",
  "Unreal Engine 5",
  "Unity",
  "Marmoset Toolbag",
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b border-line bg-background/80 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm tracking-widest uppercase">
            Kim Minjeong
          </a>
          <ul className="flex gap-6 text-sm text-muted">
            <li>
              <a href="#works" className="hover:text-foreground">
                Works
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-foreground">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-foreground">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-6xl flex-1 px-6">
        {/* Hero */}
        <section className="flex min-h-[70vh] flex-col justify-center py-24">
          <p className="mb-4 font-mono text-xs tracking-[0.3em] text-accent uppercase">
            3D Environment Artist
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
            Building worlds,
            <br />
            one scene at a time.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
            게임과 영상 배경을 위한 3D 환경 모델링, 텍스처링, 씬 구성 작업을 합니다.
            분위기와 스토리가 느껴지는 공간을 만드는 것을 좋아합니다.
          </p>
          <div className="mt-10 flex gap-4">
            <a
              href="#works"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
            >
              View Works
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-foreground transition hover:border-muted"
            >
              Contact
            </a>
          </div>
        </section>

        {/* Works */}
        <section id="works" className="scroll-mt-24 border-t border-line py-24">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="text-3xl font-semibold tracking-tight">Selected Works</h2>
            <span className="font-mono text-xs text-muted">{works.length} projects</span>
          </div>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((w, i) => (
              <li key={w.title} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-gradient-to-br from-zinc-800 to-zinc-950">
                  <span className="absolute inset-0 flex items-center justify-center font-mono text-xs text-muted transition group-hover:text-foreground">
                    Image {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <h3 className="font-medium">{w.title}</h3>
                  <span className="font-mono text-xs text-muted">{w.tag}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 border-t border-line py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <h2 className="text-3xl font-semibold tracking-tight">About</h2>
            <div className="md:col-span-2">
              <p className="max-w-2xl leading-8 text-muted">
                안녕하세요, 배경 모델러 김민정입니다. 컨셉 아트를 바탕으로 모듈러 에셋을
                설계하고, PBR 텍스처링과 라이팅까지 이어지는 환경 제작 파이프라인 전반을
                다룹니다. 최적화와 비주얼 퀄리티 사이의 균형을 중요하게 생각합니다.
              </p>
              <h3 className="mt-10 mb-4 font-mono text-xs tracking-[0.3em] text-accent uppercase">
                Tools
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-line px-3 py-1 text-sm text-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 border-t border-line py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
            <div className="md:col-span-2">
              <p className="max-w-2xl leading-8 text-muted">
                프로젝트 협업, 채용 문의는 아래 이메일로 연락 주세요.
              </p>
              <a
                href="mailto:hello@example.com"
                className="mt-6 inline-block text-2xl font-medium underline-offset-8 hover:underline"
              >
                hello@example.com
              </a>
              <ul className="mt-8 flex gap-6 text-sm text-muted">
                <li>
                  <a href="#" className="hover:text-foreground">
                    ArtStation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 font-mono text-xs text-muted">
          <span>© {new Date().getFullYear()} Kim Minjeong</span>
          <span>Environment Artist</span>
        </div>
      </footer>
    </div>
  );
}
