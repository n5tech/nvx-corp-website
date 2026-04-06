export default function TheShift() {
  return (
    <section id="shift" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-mono tracking-widest uppercase text-muted mb-4">The Shift</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#e6eaf2] mb-16 tracking-tight">
          Code was the first step.<br />
          <span className="text-[#9aa3b2]">Systems are the real problem.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Old Way */}
          <div className="relative p-8 rounded-2xl border border-border bg-surface/50">
            <div className="absolute -top-3 left-6 px-3 py-1 text-xs font-mono tracking-wide uppercase bg-surface border border-border rounded-full text-muted">
              Yesterday
            </div>
            <div className="flex items-center gap-4 mt-2">
              <Step label="Requirements" />
              <Arrow />
              <Step label="Code" />
              <Arrow />
              <Step label="Systems" />
            </div>
            <p className="mt-6 text-sm text-muted leading-relaxed">
              AI improved one part of this chain: it learned how to write code.
              But the real bottleneck remained untouched.
            </p>
          </div>

          {/* New Way */}
          <div className="relative p-8 rounded-2xl border border-gold/20 bg-gold/[0.03]">
            <div className="absolute -top-3 left-6 px-3 py-1 text-xs font-mono tracking-wide uppercase bg-midnight border border-gold/20 rounded-full text-gold">
              N5
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Step label="Intent" active />
              <Arrow active />
              <Step label="Design" active />
              <Arrow active />
              <Step label="Compile" active />
              <Arrow active />
              <Step label="Execute" active />
            </div>
            <p className="mt-6 text-sm text-[#9aa3b2] leading-relaxed">
              Enterprises should be described, not programmed.
              And once described, compiled into running systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Step({ label, active }) {
  return (
    <span className={`text-sm font-medium px-3 py-1.5 rounded-lg ${
      active
        ? 'bg-gold/10 text-gold'
        : 'bg-surface-light text-muted'
    }`}>
      {label}
    </span>
  )
}

function Arrow({ active }) {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none"
      className={active ? 'text-gold/40' : 'text-border'}>
      <path d="M0 6h14M10 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
