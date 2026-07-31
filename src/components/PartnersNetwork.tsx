import Image from 'next/image'

const partners = [
  { src: '/partners/UFA.png', alt: 'UFA', width: 128, height: 64 },
  { src: '/partners/ACFA.png', alt: "Alberta Cattle Feeders' Association", width: 128, height: 64 },
  { src: '/partners/UOFL.png', alt: 'University of Lethbridge', width: 128, height: 64 },
]

export default function PartnersNetwork() {
  return (
    <section className="bg-cream border-t border-white/10 px-6 py-14 md:px-12 md:py-20">
      <div className="max-w-[1344px] mx-auto text-center">
        <p className="text-[#bc9347] text-base font-semibold tracking-[1px] mb-3">Our Network</p>
        <h2 className="font-heading text-dark text-3xl md:text-[40px] font-bold mb-10 md:mb-12">Backed By a Trusted Network</h2>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {partners.map((p) => (
            <div key={p.alt} className="relative h-16 w-32">
              <Image src={p.src} alt={p.alt} fill sizes="128px" className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
