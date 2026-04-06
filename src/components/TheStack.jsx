const layers = [
  {
    id: 'intent',
    label: 'Intent Layer',
    tagline: 'Describe the enterprise',
    color: 'intent',
    description: 'Enterprise intent from business analysis, consulting workflows, or system discovery platforms. Processes, constraints, roles, inefficiencies, and opportunities — captured as ambiguous, human-readable intent.',
    outputs: ['Processes & workflows', 'Constraints & rules', 'Roles & responsibilities', 'AI/system opportunities'],
  },
  {
    id: 'sutra',
    label: 'Sutra',
    tagline: 'Design and compile systems',
    color: 'sutra',
    description: 'Sutra is our system design and compilation layer. It takes enterprise intent, refines it into structured system design through interactive dialogue — not blind code generation, but design through conversation.',
    outputs: ['Agents & services', 'State boundaries', 'Data models & schemas', 'Messaging flows'],
  },
  {
    id: 'rumi',
    label: 'Rumi',
    tagline: 'Execute and run systems',
    color: 'rumi',
    description: 'Rumi is our execution layer. Built for distributed systems, stateful architectures, real-time execution, and enterprise-grade reliability. It handles state, messaging, scaling, consistency, and performance.',
    outputs: ['Distributed execution', 'Stateful processing', 'Real-time messaging', 'Enterprise-grade scale'],
  },
]

const colorMap = {
  intent: {
    border: 'border-[#c09b2d]/20',
    bg: 'bg-[#c09b2d]/[0.03]',
    tag: 'bg-[#c09b2d]/10 text-[#c09b2d] border-[#c09b2d]/20',
    text: 'text-[#c09b2d]',
    dot: 'bg-[#c09b2d]',
    pill: 'bg-[#c09b2d]/8 text-[#c09b2d]/80',
  },
  sutra: {
    border: 'border-[#3a4f8a]/30',
    bg: 'bg-[#233263]/[0.08]',
    tag: 'bg-[#233263]/20 text-[#7b93cc] border-[#3a4f8a]/30',
    text: 'text-[#7b93cc]',
    dot: 'bg-[#3a4f8a]',
    pill: 'bg-[#233263]/15 text-[#7b93cc]/80',
  },
  rumi: {
    border: 'border-[#2f6f73]/25',
    bg: 'bg-[#2f6f73]/[0.05]',
    tag: 'bg-[#2f6f73]/15 text-[#5aadb1] border-[#2f6f73]/25',
    text: 'text-[#5aadb1]',
    dot: 'bg-[#2f6f73]',
    pill: 'bg-[#2f6f73]/10 text-[#5aadb1]/80',
  },
}

export default function TheStack() {
  return (
    <section id="stack" className="py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-mono tracking-widest uppercase text-muted mb-4">The N5 Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e6eaf2] mb-6 tracking-tight">
            Three layers. One system.
          </h2>
          <p className="text-lg text-[#9aa3b2] max-w-2xl mx-auto">
            From ambiguous enterprise intent to deterministic, running systems —
            each layer transforms and refines.
          </p>
        </div>

        <div className="space-y-6">
          {layers.map((layer, i) => {
            const c = colorMap[layer.color]
            return (
              <div key={layer.id}>
                <div className={`relative p-8 sm:p-10 rounded-2xl border ${c.border} ${c.bg}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-8">
                    <div className="flex-1">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-wide uppercase border rounded-full mb-4 ${c.tag}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                        {layer.label}
                      </div>
                      <h3 className={`text-2xl font-semibold mb-3 ${c.text}`}>
                        {layer.tagline}
                      </h3>
                      <p className="text-[#9aa3b2] leading-relaxed">
                        {layer.description}
                      </p>
                    </div>
                    <div className="sm:w-56 flex-shrink-0">
                      <div className="space-y-2">
                        {layer.outputs.map((out) => (
                          <div key={out} className={`text-xs px-3 py-2 rounded-lg ${c.pill} font-medium`}>
                            {out}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {i < layers.length - 1 && (
                  <div className="flex justify-center py-2">
                    <svg width="2" height="24" className="text-border">
                      <line x1="1" y1="0" x2="1" y2="24" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
