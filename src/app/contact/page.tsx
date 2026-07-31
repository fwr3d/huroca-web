import CalEmbed from '@/components/CalEmbed'
import ContactForm from '@/components/ContactForm'
export default function ContactPage() {
  return (
    <>
      {/* Hero + Contact form */}
      <section className="bg-dark pt-8 pb-16 px-6 md:pb-[100px] md:px-12">
        <div className="max-w-[1344px] mx-auto">
          <p className="text-gold text-base mb-1">Contact Us</p>
          <h1 className="font-heading text-gold text-4xl md:text-[64px] font-black leading-[1.1] mb-6">
            Let&apos;s Talk
          </h1>
          <p className="text-cream text-base max-w-[388px] mb-10 md:mb-14">
            Whether you&apos;re a rancher, investor, or potential partner we&apos;d love to hear
            from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-[1.7fr_1fr] gap-8">
            <ContactForm />

            {/* Map + Info */}
            <div>
              <div className="rounded-[32px] overflow-hidden h-[280px] mb-6">
                <iframe
                  title="Huroca HQ Location"
                  className="w-full h-full grayscale-[.2] contrast-[1.05]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Lethbridge,Alberta,Canada&output=embed"
                />
              </div>
              <h3 className="font-heading text-white font-bold text-2xl mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gold/15 shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[18px] h-[18px] text-gold">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <p className="text-white text-base">
                    <span className="text-white/35 font-extrabold">Email:</span>
                    <br />
                    Info@hurocatech.com
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gold/15 shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[18px] h-[18px] text-gold">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </span>
                  <p className="text-white text-base">
                    <span className="text-white/35 font-extrabold">HQ:</span>
                    <br />
                    Lethbridge, Alberta, Canada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a call */}
      <section className="bg-cream py-14 px-6 md:py-20 md:px-12">
        <div className="max-w-[1344px] mx-auto">
          <p className="text-gold text-base mb-3">Book a call</p>
          <h2 className="font-heading text-dark text-3xl md:text-[64px] font-black leading-[1.1] mb-4">Schedule a time with our team</h2>
          <p className="text-dark/60 text-base max-w-[336px] mb-10 md:mb-12">
            Pick a time that works for you. 30-minute intro, no commitment needed.
          </p>

          <CalEmbed />
        </div>
      </section>
    </>
  )
}
