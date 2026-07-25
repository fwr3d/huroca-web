import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="bg-dark px-12 py-24">
        <div className="max-w-[1344px] mx-auto">
          <p className="text-gold text-base font-semibold tracking-[1px] mb-5">Cattle Robotics</p>
          <h1 className="font-heading text-gold text-[64px] font-bold leading-[1.1] max-w-[820px] mb-6">
          Automated Care for Every Head of Cattle
          </h1>
          <p className="text-cream/70 text-lg max-w-[640px] leading-relaxed">
          Huroca builds monitoring robotics that watch your herd around the clock so ranchers catch problems early and spend fewer nights in the barn.
          </p>
          <div className ="flex gap-4 mt-8">
            <Link href="/contact" className="px-7 py-3.5 bg-gold text-dark font-bold rounded-[10px] text-sm hover:bg-gold/90 transition-colors">
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream px-12 py-20">
        <div className="max-w-[1344px] mx-auto">
          <p className="text-[#bc9347] text-base font-semibold tracking-[1px] mb-3">What We Do</p>
          <h2 className="font-heading text-dark text-[40px] font-bold mb-12">Built for the Realities of Ranching</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-card border border-cream/[.08] rounded-2xl px-7 py-8">
              <span className="inline-block px-3 py-1 bg-gold/15 text-gold text-[11px] font-semibold rounded-full mb-4">
                [badge]
              </span>
              <h3 className="font-heading text-cream font-bold text-[22px] leading-[1.2] mb-4">[Placeholder: pillar title]</h3>
              <p className="text-cream/60 text-sm leading-relaxed">[Placeholder: pillar description]</p>
            </div>
            <div className="bg-card border border-cream/[.08] rounded-2xl px-7 py-8">
              <span className="inline-block px-3 py-1 bg-gold/15 text-gold text-[11px] font-semibold rounded-full mb-4">
                [badge]
              </span>
              <h3 className="font-heading text-cream font-bold text-[22px] leading-[1.2] mb-4">[Placeholder: pillar title]</h3>
              <p className="text-cream/60 text-sm leading-relaxed">[Placeholder: pillar description]</p>
            </div>
            <div className="bg-card border border-cream/[.08] rounded-2xl px-7 py-8">
              <span className="inline-block px-3 py-1 bg-gold/15 text-gold text-[11px] font-semibold rounded-full mb-4">
                [badge]
              </span>
              <h3 className="font-heading text-cream font-bold text-[22px] leading-[1.2] mb-4">[Placeholder: pillar title]</h3>
              <p className="text-cream/60 text-sm leading-relaxed">[Placeholder: pillar description]</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark px-12 py-24 text-center">
        <div className="max-w-[1344px] mx-auto">
          <p className="text-gold text-base font-semibold tracking-[1px] mb-4">Get Started</p>
          <h2 className="font-heading text-gold text-[44px] font-bold mb-4">See Huroca on Your Ranch</h2>
          <p className="text-cream text-[15px] max-w-[480px] mx-auto mb-8 leading-relaxed">
            Book a 30-minute intro call. No commitment needed.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="px-7 py-3.5 bg-gold text-dark font-bold rounded-[10px] text-sm hover:bg-gold/90 transition-colors">
              Book a Demo
            </Link>
            <Link href="/success-stories" className="px-7 py-3.5 bg-white/[.06] border border-white/[.15] text-cream font-bold text-sm rounded-[10px] hover:bg-white/10 transition-colors">
              Read Success Stories
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}