'use client'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 shadow-[0_8px_30px_rgba(2,6,23,0.45)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo/LifeLess LOGo.png" alt="LifeLess Lab logo" className="h-11 w-11 rounded-2xl border border-white/10 bg-slate-950 object-cover shadow-lg shadow-brand/20" />
          <div>
            <p className="text-lg font-semibold tracking-tight text-white">LifeLess</p>
            <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
              Something about AI and research
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#publications" className="text-sm font-medium text-slate-300 transition hover:text-brand">
            Publications
          </a>
          <a href="#team" className="text-sm font-medium text-slate-300 transition hover:text-brand">
            Team
          </a>
          <a href="#contact" className="text-sm font-medium text-slate-300 transition hover:text-brand">
            Contact
          </a>
          <a
            href="#contact"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.35)]"
          >
            Join Us
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-brand/40 hover:text-brand md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <a href="#publications" className="text-sm font-medium text-slate-300 transition hover:text-brand">
              Publications
            </a>
            <a href="#team" className="text-sm font-medium text-slate-300 transition hover:text-brand">
              Team
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-300 transition hover:text-brand">
              Contact
            </a>
            <a
              href="#contact"
              className="mt-2 inline-flex w-fit rounded-full bg-brand px-4 py-2 text-sm font-semibold text-slate-950"
            >
              Join Us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}