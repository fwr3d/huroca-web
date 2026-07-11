import Link from 'next/link'

const stats = [
  { value: '50K+', label: 'Text info' },
  { value: '$250k', label: 'Text info' },
  { value: '20+', label: 'Text info' },
  { value: '86%', label: 'Text info' },
]

const stories = [
  {
    badge: 'Key metric label',
    type: 'Operation type',
    name: 'Ranch / Farm Name',
    body: 'Short description of the result this operation achieved using Huroca. Two to three sentences max.',
    location: 'Okotoks, AB',
  },
  {
    badge: '12mo ROI',
    type: 'Operation type',
    name: 'Ranch / Farm Name',
    body: 'A 3-person operation replaced overnight check-ins with automated alerts. The family now sleeps through the night.',
    location: 'Swift Current, SK',
  },
  {
    badge: '+XX%',
    type: 'Location · X,XXX head',
    name: 'Ranch / Farm Name',
    body: 'Key metric label',
    location: 'High River, AB',
  },
]

const testimonials = [
  {
    quote:
      'Placeholder testimonial quote from a rancher or farm manager. One to two sentences about their experience.',
    name: 'First Last',
    title: 'Title, Operation Name',
  },
  {
    quote:
      'Placeholder testimonial quote from a rancher or farm manager. One to two sentences about their experience.',
    name: 'First Last',
    title: 'Title, Operation Name',
  },
  {
    quote:
      'Placeholder testimonial quote from a rancher or farm manager. One to two sentences about their experience.',
    name: 'First Last',
    title: 'Title, Operation Name',
  },
  {
    quote:
      'Placeholder testimonial quote from a rancher or farm manager. One to two sentences about their experience.',
    name: 'First Last',
    title: 'Title, Operation Name',
  },
]

export default function SuccessStoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-[60px] pb-[52px] px-12">
        <div className="max-w-[1344px] mx-auto">
          <p className="text-cream text-[13px] font-semibold tracking-[0.5px] mb-3">Success Stories</p>
          <h1 className="font-heading text-gold text-[64px] font-bold leading-[70px] mb-3">
            Real Results
            <br />
            Real Ranchers
          </h1>
          <p className="text-cream text-[15px]">
            See how Huroca is achieving real results for ranchers across Western Canada.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream border-y border-white/10 py-9 px-12">
        <div className="max-w-[1344px] mx-auto grid grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.value} className={`text-center ${i < 3 ? 'border-r border-white/10' : ''}`}>
              <p className="text-dark text-[64px] font-bold">{s.value}</p>
              <p className="text-dark/60 text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Story */}
      <section className="bg-dark border-t border-white/[.08] py-16 px-12">
        <div className="max-w-[1344px] mx-auto">
          <p className="text-cream text-xs font-semibold tracking-[1px] mb-8">Featured Story</p>
          <div className="grid grid-cols-2 bg-card rounded-[20px] overflow-hidden">
            <div className="relative bg-deep px-12 py-10 flex flex-col justify-end min-h-[420px] gap-2.5">
              <span className="inline-flex items-center gap-1 text-cream text-[11px] font-bold">
                ★ Featured
              </span>
              <h3 className="font-heading text-cream font-bold text-[28px]">Ranch Name</h3>
              <p className="text-cream/60 text-[13px]">Location · X,XXX head</p>
            </div>
            <div className="px-12 py-10 flex flex-col justify-center gap-6">
              <p className="font-heading text-cream text-lg font-bold leading-normal">
                &ldquo;Placeholder quote from the rancher goes here. Describe the result they
                experienced with Huroca in one or two sentences.&rdquo;
              </p>
              <p className="text-cream/60 text-[13px]">Ranch Name</p>
              <div className="flex gap-4">
                <div className="bg-white/5 border border-white/[.08] rounded-[10px] px-5 py-4">
                  <p className="font-heading text-cream font-bold text-[28px]">xx%</p>
                  <p className="text-cream/50 text-[11px]">Stat Label</p>
                </div>
                <div className="bg-white/5 border border-white/[.08] rounded-[10px] px-5 py-4">
                  <p className="font-heading text-cream font-bold text-[28px]">xMo</p>
                  <p className="text-cream/50 text-[11px]">Time to ROI</p>
                </div>
                <div className="bg-white/5 border border-white/[.08] rounded-[10px] px-5 py-4">
                  <p className="font-heading text-cream font-bold text-[28px]">x</p>
                  <p className="text-cream/50 text-[11px]">Stat label</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Stories */}
      <section className="bg-cream border-t border-white/[.08] py-16 px-12">
        <div className="max-w-[1344px] mx-auto">
          <p className="text-dark text-sm font-semibold tracking-[1px] mb-4">More Stories</p>
          <h2 className="font-heading text-dark text-4xl font-bold mb-12">Across the Prairies</h2>
          <div className="grid grid-cols-3 gap-6">
            {stories.map((s, i) => (
              <div
                key={i}
                className="bg-card border border-white/[.08] rounded-2xl overflow-hidden"
              >
                <div className="relative bg-deep h-[140px] p-4 flex items-start">
                  <span className="text-white text-[11px] font-bold">{s.badge}</span>
                </div>
                <div className="px-6 pt-5 pb-6">
                  <p className="text-white text-[10px] font-semibold mb-2">{s.type}</p>
                  <h3 className="font-heading text-white font-bold text-base mb-2">{s.name}</h3>
                  <p className="text-cream/60 text-[13px] leading-5 mb-3">{s.body}</p>
                  <p className="text-cream/40 text-xs">{s.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-dark border-t border-white/[.08] py-16 px-12">
        <div className="max-w-[1344px] mx-auto">
          <p className="text-cream text-sm font-semibold mb-4">What Ranchers Say</p>
          <h2 className="font-heading text-gold text-4xl font-bold mb-12">In Their Own Words</h2>
          <div className="grid grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-card border border-white/[.08] rounded-[14px] p-7"
              >
                <span className="text-cream text-4xl font-bold leading-none mb-4 block">&ldquo;</span>
                <p className="text-cream/70 text-sm leading-[22px] mb-4">{t.quote}</p>
                <p className="text-cream font-bold text-[13px]">{t.name}</p>
                <p className="text-cream text-xs">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream border-t border-white/[.08] py-20 px-12 text-center">
        <div className="max-w-[1344px] mx-auto">
          <p className="text-dark text-xs font-semibold mb-4">Get Started</p>
          <h2 className="font-heading text-dark text-[44px] font-bold mb-4">Ready to see results?</h2>
          <p className="text-dark/60 text-[15px] mb-8">
            Book a 30-minute intro call. No commitment needed.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-gold text-dark font-bold text-sm rounded-[10px] hover:bg-gold/90 transition-colors"
            >
              Book a Demo
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-dark/[.08] border border-white/[.15] text-dark font-bold text-sm rounded-[10px] hover:bg-dark/15 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
