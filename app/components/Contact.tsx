export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Connect with us
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Let’s discuss research, collaboration, and impact.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_12px_45px_rgba(2,6,23,0.06)]">
            <h3 className="mb-6 text-2xl font-semibold text-slate-900">Contact information</h3>
            <div className="space-y-5">
              {[
                {
                  title: 'Address',
                  value: '123 Innovation Drive, BioTech Campus\nCambridge, MA 02142',
                  icon: '📍',
                },
                {
                  title: 'Email',
                  value: 'contact@lifelesslab.org',
                  icon: '✉️',
                  href: 'mailto:contact@lifelesslab.org',
                },
                {
                  title: 'Phone',
                  value: '+1 (555) 234-5678',
                  icon: '📞',
                },
                {
                  title: 'Social',
                  value: 'Twitter · LinkedIn · GitHub',
                  icon: '🌐',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="mt-1 text-sm text-brand transition hover:text-cyan-600">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 whitespace-pre-line text-sm text-slate-600">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_12px_45px_rgba(2,6,23,0.06)]">
            <h3 className="mb-6 text-2xl font-semibold text-slate-900">Send a message</h3>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand focus:bg-white"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand focus:bg-white"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand focus:bg-white"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand focus:bg-white"
              />
              <button
                type="submit"
                className="w-full rounded-2xl bg-brand px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}