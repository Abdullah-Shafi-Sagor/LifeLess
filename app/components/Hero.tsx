import Image from "next/image";

const stats = [
  { value: '50+', label: 'Publications' },
  { value: '15', label: 'Researchers' },
  { value: '8', label: 'Active Grants' },
  { value: '20+', label: 'Collaborators' },
];

const tags = [
  'AI Intelligence',
  'BCI Interfaces',
  'XAI Transparency',
  'Smart Systems',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.24),_transparent_35%)]" />
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.95fr] items-center">
        <div className="relative z-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.34em] text-brand">
            Vision · Data analytics · Sports · AI · BCI · XAI
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Advancing intelligent systems with real-world impact,
            <span className="mt-3 block bg-gradient-to-r from-brand via-cyan-300 to-slate-100 bg-clip-text text-transparent">
              and turning research into intelligent action.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
            We build intelligent systems, explainable AI, and brain-computer interfaces that solve real-world problems with scientific rigor and social impact.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#publications"
              className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 hover:shadow-[0_16px_40px_rgba(34,211,238,0.25)]"
            >
              View Research
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-brand/40 hover:bg-white/10"
            >
              Collaborate with us
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-12 grid max-w-xl gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-[0_18px_60px_rgba(2,6,23,0.25)] backdrop-blur-sm">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/80 shadow-[0_30px_80px_rgba(2,6,23,0.35)]">
            <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-r from-brand/40 via-transparent to-cyan-300/30" />
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/logo/Hero.png"
                alt="Computer vision and AI research dashboard"
                fill
                loading="eager"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 rounded-b-[2.5rem] border-t border-white/10 bg-slate-950/90 px-6 py-5 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-brand">Live research dashboard</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="font-semibold text-white">Active models</p>
                  <p className="mt-1 text-slate-400">18 experiments</p>
                </div>
                <div className="rounded-full bg-white/5 px-3 py-1 text-brand self-start text-center">
                  Realtime
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
