const publications = [
  {
    title: 'Synthetic gene circuits for adaptive cellular behavior',
    journal: 'Nature Biotechnology',
    year: '2025',
    authors: 'Chen, M., Rivera, A., & Torres, K.',
  },
  {
    title: 'Ethical frameworks for genome editing in human embryos',
    journal: 'Science Ethics',
    year: '2024',
    authors: 'Patel, S., Wong, L., & Garcia, R.',
  },
  {
    title: 'Machine learning for protein folding prediction',
    journal: 'Cell Systems',
    year: '2024',
    authors: 'Kim, J., Okafor, E., & Schmidt, T.',
  },
  {
    title: 'Synthetic minimal genomes: design and assembly',
    journal: 'Nature Communications',
    year: '2023',
    authors: 'Liu, Y., Martinez, P., & Hassan, A.',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="scroll-mt-20 bg-slate-950 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
              Featured work
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Publications shaping the field.
            </h2>
          </div>
          <p className="text-sm text-slate-400">
            {publications.length} recent publications and studies
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {publications.map((pub, index) => (
            <article
              key={index}
              className="rounded-3xl border border-white/10 bg-slate-900/80 p-7 shadow-[0_20px_50px_rgba(2,6,23,0.25)] transition duration-200 hover:-translate-y-1 hover:border-brand/40"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                  Research
                </span>
                <span className="text-sm font-medium text-slate-400">{pub.year}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{pub.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {pub.authors}
              </p>
              <p className="mt-2 text-sm font-medium text-cyan-300">{pub.journal}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}