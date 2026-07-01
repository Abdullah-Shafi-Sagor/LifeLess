export default function Stats() {
  const stats = [
    { number: '50+', label: 'Peer-Reviewed Papers', icon: '📄' },
    { number: '15', label: 'Team Members', icon: '👥' },
    { number: '8', label: 'Active Research Grants', icon: '💰' },
    { number: '20+', label: 'Global Collaborators', icon: '🌍' },
    { number: '10', label: 'Years of Excellence', icon: '🏆' },
    { number: '5', label: 'Patent Filings', icon: '🔬' },
  ];

  return (
    <section className="bg-slate-50 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Impact at a glance
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Measurable progress, grounded in research excellence.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_10px_40px_rgba(2,6,23,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(2,6,23,0.12)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-2xl">
                {stat.icon}
              </div>
              <div className="text-4xl font-semibold tracking-tight text-slate-900">
                {stat.number}
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}