import Image from 'next/image'

const partners = [
  { src: '/partners/UFA.png', alt: 'UFA', width: 192, height: 96 },
  { src: '/partners/ACFA.png', alt: "Alberta Cattle Feeders' Association", width: 192, height: 96 },
  { src: '/partners/UOFL.png', alt: 'University of Lethbridge', width: 192, height: 96 },
]

export default function PartnersNetwork() {
  return (
    <section className="bg-cream border-t border-white/10 px-6 py-14 md:px-12 md:py-20">
      <div className="max-w-[1344px] mx-auto text-center">
        <p className="text-[#bc9347] text-base font-semibold tracking-[1px] mb-3">Our Network</p>
        <h2 className="font-heading text-dark text-3xl md:text-[40px] font-bold mb-10 md:mb-12">Backed By a Trusted Network</h2>
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-20">
          {partners.map((p) => (
            <div key={p.alt} className="relative h-20 w-40 sm:h-24 sm:w-48">
              <Image src={p.src} alt={p.alt} fill sizes="192px" className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
