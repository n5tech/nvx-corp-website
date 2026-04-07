export default function Footer({ onContact }) {
  return (
    <footer id="contact" className="border-t border-border">
      {/* Closing statement */}
      <div className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e6eaf2] mb-8 tracking-tight leading-tight">
            N5 is the infrastructure for how AI-native enterprises are built.
          </h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-8" />
          <div className="space-y-1 text-[#9aa3b2]">
            <p><span className="text-[#c09b2d]">Sutra</span> turns enterprise intent into system design.</p>
            <p><span className="text-[#5aadb1]">Rumi</span> turns system design into running systems.</p>
            <p className="text-[#e6eaf2] font-medium mt-4">Together, N5 turns enterprise intent into running systems.</p>
          </div>
          <button onClick={onContact}
            className="inline-flex mt-12 px-8 py-3.5 rounded-lg bg-accent text-[#e6eaf2] font-medium hover:bg-accent-light transition-all cursor-pointer">
            Talk to Us
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <span className="font-medium text-[#9aa3b2]">N5 Technologies</span>
          <span>&copy; {new Date().getFullYear()} N5 Technologies. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
