import Link from 'next/link'
import TeamCard from '@/components/TeamCard'
import PartnersNetwork from '@/components/PartnersNetwork'
import { team } from '@/data/team'
const stats = [
  { value: '70.5%', label: "of Canada's fed cattle raised in Alberta" },
  { value: '1.7M', label: 'head of cattle produced per year' },
]

const opportunities = [
  {
    badge: 'Market',
    title: 'A Repetitive, High-Risk Process',
    body: 'Feedlot cattle are handled two to four times for routine procedures like injections, creating worker injury risk, animal stress, and inconsistent records — manual, repetitive work built for automation.',
  },
  {
    badge: 'Technology',
    title: 'Autonomous Precision at the Chute',
    body: "Huroca's robotic system automates restraint-chute procedures with vision-guided precision, reducing manual handling while improving accuracy and animal welfare.",
  },
  {
    badge: 'Traction',
    title: 'From Lab to Field Pilots',
    body: "We're moving from provisional patent filing and in-lab testing toward in-field pilot studies with feedlot partners over the next year.",
  },
]



const press = [
  {
    publication: 'Publication Name',
    date: 'Month YYYY',
    headline: 'Placeholder headline or pull quote from the article goes here.',
  },
  {
    publication: 'Publication Name',
    date: 'Month YYYY',
    headline: 'Placeholder headline or pull quote from the article goes here.',
  },
  {
    publication: 'Publication Name',
    date: 'Month YYYY',
    headline: 'Placeholder headline or pull quote from the article goes here.',
  },
]

export default function InvestorRelationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-14 pb-12 px-6 md:pt-20 md:pb-[72px] md:px-12">
        <div className="max-w-[1344px] mx-auto">
          <p className="text-gold text-base font-semibold tracking-[1px] mb-5">Investor Relations</p>
          <h1 className="font-heading text-gold text-4xl md:text-[64px] font-bold leading-[1.1] max-w-3xl mb-4">
            Building the Future of<br />Cattle Ranching
          </h1>
          <p className="text-cream/60 text-base max-w-[620px] mb-8 leading-relaxed">
            Huroca builds autonomous robotics that automate routine cattle procedures,
            cutting labor, injury risk, and stress out of the feedlot. We&apos;re raising a
            seed round to take our system from the lab to in-field pilots.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-14">
            <Link
              href="/huroca-pitch-deck.pptx"
              target="_blank"
              className="px-7 py-3.5 bg-gold text-dark font-bold rounded-[10px] text-sm hover:bg-gold/90 transition-colors text-center"
            >
              View Pitch Deck
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-white/[.06] border border-white/[.15] text-cream font-bold text-sm rounded-[10px] hover:bg-white/10 transition-colors text-center"
            >
              Contact our Team
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-gold text-4xl font-bold mb-1">{s.value}</p>
                <p className="text-cream/60 text-sm max-w-[220px] sm:max-w-[160px] leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pitch Video */}
      <section className="bg-cream border-t border-white/[.08] py-14 px-6 md:py-20 md:px-12">
        <div className="max-w-[1344px] mx-auto">
          <p className="text-[#bc9347] text-base font-semibold tracking-[1px] mb-3">Watch Our Pitch</p>
          <h2 className="font-heading text-dark text-3xl md:text-[40px] font-bold mb-8">See Huroca in Action</h2>
          <div className="rounded-[32px] overflow-hidden aspect-video max-w-[900px]">
            <iframe
              title="Huroca Pitch Video"
              className="w-full h-full"
              src="https://www.youtube.com/embed/Bka4rMnpHUA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="bg-dark border-t border-white/[.08] py-14 px-6 md:py-20 md:px-12">
        <div className="max-w-[1344px] mx-auto">
          <p className="text-gold text-base font-semibold tracking-[1px] mb-3">The Opportunity</p>
          <h2 className="font-heading text-gold text-3xl md:text-[40px] font-bold mb-3">Why Huroca, Why Now</h2>
          <p className="text-cream text-[15px] max-w-[600px] mb-10 md:mb-12">
            Alberta alone raises 70.5% of Canada&apos;s fed cattle, producing 1.7 million head
            a year, almost all still handled by hand for routine procedures.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {opportunities.map((o) => (
              <div
                key={o.badge}
                className="bg-card border border-cream/[.08] rounded-2xl px-7 py-8"
              >
                <span className="inline-block px-3 py-1 bg-gold/15 text-gold text-[11px] font-semibold rounded-full mb-4">
                  {o.badge}
                </span>
                <h3 className="font-heading text-cream font-bold text-[22px] leading-[1.2] mb-4">{o.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="bg-cream border-t border-white/[.08] py-14 px-6 md:py-20 md:px-12">
        <div className="max-w-[1344px] mx-auto">
          <p className="text-[#bc9347] text-base font-semibold tracking-[1px] mb-3">The Team</p>
          <h2 className="font-heading text-dark text-3xl md:text-[40px] font-bold mb-10 md:mb-14">The People Behind Huroca</h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              {team.slice(0, 3).map((member) => (
                <TeamCard key={member.name} {...member} />
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              {team.slice(3, 6).map((member) => (
                <TeamCard key={member.name} {...member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <PartnersNetwork />

      {/* Press */}
      <section className="bg-dark border-t border-white/[.08] py-14 px-6 md:py-20 md:px-12">
        <div className="max-w-[1344px] mx-auto">
          <p className="text-gold text-base font-semibold tracking-[1px] mb-3">Press</p>
          <h2 className="font-heading text-gold text-3xl md:text-[40px] font-bold mb-10 md:mb-14">In The News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {press.map((article, i) => (
              <div
                key={i}
                className="bg-card border border-cream/[.08] rounded-2xl p-7"
              >
                <div className="flex justify-between items-start mb-5">
                  <span className="text-gold text-[13px] font-bold">{article.publication}</span>
                  <span className="text-cream/40 text-xs">{article.date}</span>
                </div>
                <p className="font-heading text-cream font-bold text-lg leading-[1.3] mb-8">
                  {article.headline}
                </p>
                <a href="#" className="text-gold text-[13px] font-semibold hover:text-gold/70 transition-colors">
                  Read article →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream border-t border-white/[.08] py-16 px-6 md:py-24 md:px-12 text-center">
        <div className="max-w-[1344px] mx-auto">
          <p className="text-[#bc9347] text-base font-semibold tracking-[1px] mb-4">Get In Touch</p>
          <h2 className="font-heading text-[#124531] text-3xl md:text-[44px] font-bold mb-4">Interested in Investing?</h2>
          <p className="text-dark text-[15px] max-w-[560px] mx-auto mb-8 leading-relaxed">
            We&apos;re raising funding and looking for industry mentors, pilot partners,
            and students eager to help build the future of cattle care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-gold/[.83] text-dark font-bold text-sm rounded-[10px] hover:bg-gold transition-colors"
            >
              Contact our team
            </Link>
            <Link
              href="/huroca-pitch-deck.pptx"
              download
              className="px-8 py-3.5 bg-white/[.06] border border-dark/15 text-dark font-bold text-sm rounded-[10px] hover:bg-dark/5 transition-colors"
            >
              Download Deck
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
