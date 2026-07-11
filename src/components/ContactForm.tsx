'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setError(false)
    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch('https://formspree.io/f/mrbjenoe', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        router.push('/thank-you')
      } else {
        setIsSubmitting(false)
        setError(true)
      }
    } catch {
      setIsSubmitting(false)
      setError(true)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/[.03] rounded-[24px] p-8">
      <h2 className="font-heading text-cream font-black text-base mb-6">Send us a message</h2>
      <div className="grid grid-cols-2 gap-5 mb-5">
        <label className="block">
          <span className="text-cream/65 text-sm mb-2 block">Your Name</span>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-white/[.02] border-[0.5px] border-white/25 rounded-lg px-4 py-3 text-cream text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold/50"
          />
        </label>
        <label className="block">
          <span className="text-cream/65 text-sm mb-2 block">Company/Ranch</span>
          <input
            type="text"
            name="company"
            className="w-full bg-white/[.02] border-[0.5px] border-white/25 rounded-lg px-4 py-3 text-cream text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold/50"
          />
        </label>
      </div>
      <label className="block mb-5">
        <span className="text-cream/65 text-sm mb-2 block">Email Address</span>
        <input
          type="email"
          name="email"
          required
          className="w-full bg-white/[.02] border-[0.5px] border-white/25 rounded-lg px-4 py-3 text-cream text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold/50"
        />
      </label>
      <label className="block mb-6">
        <span className="text-gold text-sm mb-2 block">How Can we help</span>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full bg-white/[.02] border-[0.5px] border-white/25 rounded-lg px-4 py-3 text-cream text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold/50 resize-none"
        />
      </label>

      {error && (
        <p className="text-red-400 text-sm mb-4">
          Something went wrong sending your message. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`px-7 py-3.5 bg-gold text-deep font-bold rounded-[10px] text-sm hover:bg-gold/90 transition-colors flex items-center gap-2 ${
          isSubmitting ? 'opacity-70 cursor-wait' : ''
        }`}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4Z"
              />
            </svg>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
}
