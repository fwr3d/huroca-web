import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <section className="bg-dark py-32 px-12 text-center">
      <div className="max-w-[1344px] mx-auto">
        <p className="text-gold text-base font-semibold tracking-[1px] mb-4">Message Sent</p>
        <h1 className="font-heading text-gold text-5xl font-bold mb-4">Thanks for reaching out</h1>
        <p className="text-cream/60 text-lg max-w-md mx-auto mb-10 leading-relaxed">
          We&apos;ve received your message and will get back to you shortly.
        </p>
        <Link
          href="/"
          className="inline-block px-7 py-3.5 bg-gold text-deep font-bold rounded-[10px] text-sm hover:bg-gold/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}
