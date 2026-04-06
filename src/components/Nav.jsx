import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-midnight/90 backdrop-blur-md border-b border-border' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tight text-[#e6eaf2]">
          N5
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#shift" className="hover:text-[#e6eaf2] transition-colors">The Shift</a>
          <a href="#stack" className="hover:text-[#e6eaf2] transition-colors">The Stack</a>
          <a href="#how" className="hover:text-[#e6eaf2] transition-colors">How It Works</a>
          <a href="#why" className="hover:text-[#e6eaf2] transition-colors">Why It Matters</a>
        </div>
        <a href="#contact"
          className="text-sm px-4 py-2 rounded-lg border border-border text-[#9aa3b2] hover:border-[#4a5568] hover:text-[#e6eaf2] transition-all">
          Talk to Us
        </a>
      </div>
    </nav>
  )
}
