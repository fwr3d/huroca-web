import TeamCard from '@/components/TeamCard'
import { team } from '@/data/team'
export default function AboutPage() {
  return (
    <>

      <section className ="bg-dark px-12 py-24">
          <div className="max-w-[1344px] mx-auto">
            <p className="text-gold text-xs font-semibold tracking-[1px] mb-5">Our Story</p>
            <h1 className="font-heading text-gold text-[64px] font-bold leading-[1.1] max-w-[820px] mb-6">
            Built by Ranchers, Built for Ranchers
            </h1>
            <p className="text-cream/70 text-lg max-w-[640px] leading-relaxed">
            [Placeholder: founding story — why and how Huroca started in Lethbridge, Alberta.]
            </p>
          </div>
      </section>

      <section className="bg-cream border-t border-white/10 px-12 py-[88px]">
        <div className="max-w-[1344px] mx-auto grid grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#bc9347] text-xs font-semibold tracking-[1px] mb-3">Why Lethbridge</p>
            <h2 className="font-heading text-dark text-[40px] font-bold">
            [Placeholder: why Lethbridge headline]
            </h2>
          </div>
          <p className="text-dark text-base leading-relaxed mt-2">
          [Placeholder: why building in Lethbridge, Alberta matters — proximity to ranchers, feedlot conditions, local talent.]
          </p>
        </div>
      </section>

      <section className="bg-dark border-t border-white/[.08] px-12 py-[88px]">
        <div className="max-w-[1344px] mx-auto">

          <p className="text-gold text-xs font-semibold tracking-[1px] mb-3">Our Journey</p>
          <h2 className="font-heading text-gold text-[40px] font-bold mb-14">
          [Placeholder: timeline headline]
          </h2>

          <div className="grid grid-cols-4 gap-6">
            <div className="border-t-2 border-gold pt-5">
              <p className="text-gold text-[13px] font-bold mb-2">[Placeholder: date]</p>
              <p className="text-cream/70 text-sm leading-relaxed">[Placeholder: milestone]</p>
            </div>

            <div className="border-t-2 border-gold pt-5">
              <p className="text-gold text-[13px] font-bold mb-2">[Placeholder: date]</p>
              <p className="text-cream/70 text-sm leading-relaxed">[Placeholder: milestone]</p>
            </div>

            <div className="border-t-2 border-gold pt-5">
              <p className="text-gold text-[13px] font-bold mb-2">[Placeholder: date]</p>
              <p className="text-cream/70 text-sm leading-relaxed">[Placeholder: milestone]</p>
            </div>

            <div className="border-t-2 border-gold pt-5">
              <p className="text-gold text-[13px] font-bold mb-2">[Placeholder: date]</p>
              <p className="text-cream/70 text-sm leading-relaxed">[Placeholder: milestone]</p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-cream border-t border-white/10 px-12 py-[88px]">
        <div className="max-w-[1344px] mx-auto">
          <p className="text-[#bc9347] text-xs font-semibold tracking-[1px] mb-3">The Mission</p>
          <h2 className="font-heading text-dark text-[40px] font-bold mb-14">
          [Placeholder: mission headline]
          </h2>
          <div className="grid grid-cols-[1.1fr_1fr] gap-16">
            <p className="text-dark text-base leading-relaxed">
            [Placeholder: mission statement — how Huroca automates cattle care so ranchers can focus on what matters.]
            </p>

            <div className="flex flex-col gap-8">

              <div>
                <h3 className="font-heading text-dark text-xl font-bold mb-2">Precision</h3>
                <p className="text-dark/65 text-sm leading-relaxed">[Placeholder: one-line description]</p>
              </div>

              <div>
                <h3 className="font-heading text-dark text-xl font-bold mb-2">Reliability</h3>
                <p className="text-dark/65 text-sm leading-relaxed">[Placeholder: one-line description]</p>
              </div>

              <div>
                <h3 className="font-heading text-dark text-xl font-bold mb-2">Simplicity</h3>
                <p className="text-dark/65 text-sm leading-relaxed">[Placeholder: one-line description]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark border-t border-white/[.08] py-20 px-12">
              <div className="max-w-[1344px] mx-auto">
                <p className="text-[#bc9347] text-xs font-semibold tracking-[1px] mb-3">The Team</p>
                <h2 className="font-heading text-dark text-[40px] font-bold mb-14">The People Behind Huroca</h2>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-6">
                    {team.slice(0, 3).map((member) => (
                      <TeamCard key={member.name} {...member} />
                    ))}
                  </div>
                  <div className="flex gap-6">
                    {team.slice(3, 6).map((member) => (
                      <TeamCard key={member.name} {...member} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
    </>
      
  
  )
}
