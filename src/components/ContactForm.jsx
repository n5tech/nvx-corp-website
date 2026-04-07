import { useState, useEffect } from 'react'

const FORMSPREE_URL = 'https://formspree.io/f/mzdkorgo'

export default function ContactForm({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!open) return
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  if (!open) return null

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    const form = e.target
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    }

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={onClose}>
      <div className="absolute inset-0 bg-midnight/80 backdrop-blur-sm" />
      <div className="relative w-full max-w-md bg-surface border border-border rounded-2xl p-8"
        onClick={(e) => e.stopPropagation()}>

        <button onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-[#e6eaf2] transition-colors text-lg">
          &times;
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <p className="text-xl font-semibold text-[#e6eaf2] mb-2">Thank you for reaching out.</p>
            <p className="text-[#9aa3b2]">We'll review your note and get back to you shortly.</p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold text-[#e6eaf2] mb-1">Talk to Us</h3>
            <p className="text-sm text-muted mb-6">Tell us about what you're building.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#9aa3b2] mb-1.5">Name</label>
                <input type="text" name="name" required
                  className="w-full px-3 py-2.5 rounded-lg bg-surface-light border border-border text-[#e6eaf2] text-sm placeholder-muted focus:outline-none focus:border-[#4a5568] transition-colors"
                  placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#9aa3b2] mb-1.5">Email</label>
                <input type="email" name="email" required
                  className="w-full px-3 py-2.5 rounded-lg bg-surface-light border border-border text-[#e6eaf2] text-sm placeholder-muted focus:outline-none focus:border-[#4a5568] transition-colors"
                  placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#9aa3b2] mb-1.5">Message</label>
                <textarea name="message" required rows={4}
                  className="w-full px-3 py-2.5 rounded-lg bg-surface-light border border-border text-[#e6eaf2] text-sm placeholder-muted focus:outline-none focus:border-[#4a5568] transition-colors resize-none"
                  placeholder="What are you looking to build?" />
              </div>
              {error && (
                <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
              )}
              <button type="submit" disabled={submitting}
                className="w-full py-2.5 rounded-lg bg-accent text-[#e6eaf2] font-medium text-sm hover:bg-accent-light transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                {submitting ? 'Sending...' : 'Send'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
