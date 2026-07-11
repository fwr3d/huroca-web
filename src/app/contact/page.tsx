'use client'

import { useState } from 'react'

const days = ['Sun', 'Mon', 'Tues', 'Wens', 'Thurs', 'Fri', 'Sat']

// July 2026 starts on a Wednesday
const julyCells: (number | null)[] = [
  null, null, null, 1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31,
]

const disabledDays = [1, 2, 3, 6, 15, 16]

const times = [
  '9:00 AM',
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '3:30 PM',
]

export default function ContactPage() {
  const [selectedDay, setSelectedDay] = useState(7)
  const [selectedTime, setSelectedTime] = useState('9:00 AM')

  return (
    <>
      {/* Hero + Contact form */}
      <section className="bg-dark pt-8 pb-[100px] px-12">
        <div className="max-w-[1344px] mx-auto">
          <p className="text-gold text-base mb-1">Contact Us</p>
          <h1 className="font-heading text-gold text-[64px] font-black leading-[1.1] mb-6">
            Let&apos;s Talk
          </h1>
          <p className="text-cream text-base max-w-[388px] mb-14">
            Whether you&apos;re a rancher, investor, or potential partner we&apos;d love to hear
            from you.
          </p>

          <div className="grid grid-cols-[1.7fr_1fr] gap-8">
            {/* Form card */}
            <div className="bg-white/[.03] rounded-[24px] p-8">
              <h2 className="font-heading text-cream font-black text-base mb-6">Send us a message</h2>
              <div className="grid grid-cols-2 gap-5 mb-5">
                <label className="block">
                  <span className="text-cream/65 text-sm mb-2 block">Your Name</span>
                  <input
                    type="text"
                    className="w-full bg-white/[.02] border-[0.5px] border-white/25 rounded-lg px-4 py-3 text-cream text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold/50"
                  />
                </label>
                <label className="block">
                  <span className="text-cream/65 text-sm mb-2 block">Company/Ranch</span>
                  <input
                    type="text"
                    className="w-full bg-white/[.02] border-[0.5px] border-white/25 rounded-lg px-4 py-3 text-cream text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold/50"
                  />
                </label>
              </div>
              <label className="block mb-5">
                <span className="text-cream/65 text-sm mb-2 block">Email Address</span>
                <input
                  type="email"
                  className="w-full bg-white/[.02] border-[0.5px] border-white/25 rounded-lg px-4 py-3 text-cream text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold/50"
                />
              </label>
              <label className="block">
                <span className="text-gold text-sm mb-2 block">How Can we help</span>
                <textarea
                  rows={5}
                  className="w-full bg-white/[.02] border-[0.5px] border-white/25 rounded-lg px-4 py-3 text-cream text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold/50 resize-none"
                />
              </label>
            </div>

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
                  <span className="text-xl leading-none">📧</span>
                  <p className="text-white text-base">
                    <span className="text-white/35 font-extrabold">Email:</span>
                    <br />
                    Info@hurocatech.com
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-xl leading-none">📍</span>
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
      <section className="bg-cream py-20 px-12">
        <div className="max-w-[1344px] mx-auto">
          <p className="text-gold text-base mb-3">Book a call</p>
          <h2 className="font-heading text-dark text-[64px] font-black leading-[1.1] mb-4">Schedule a time with our team</h2>
          <p className="text-dark/60 text-base max-w-[336px] mb-12">
            Pick a time that works for you. 30-minute intro, no commitment needed.
          </p>

          <div className="bg-dark rounded-[32px] p-8 grid grid-cols-[1.3fr_1fr] gap-10">
            {/* Calendar */}
            <div>
              <h3 className="font-heading text-cream font-bold text-2xl mb-6">July 2026</h3>
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {days.map((d) => (
                  <span key={d} className="text-cream/65 text-[10px] py-2">
                    {d}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center">
                {julyCells.map((day, i) => {
                  if (day === null) return <span key={i} />
                  const disabled = disabledDays.includes(day)
                  const selected = day === selectedDay
                  return (
                    <button
                      key={i}
                      type="button"
                      disabled={disabled}
                      onClick={() => setSelectedDay(day)}
                      className={`aspect-square rounded-full text-[10px] flex items-center justify-center transition-colors ${
                        selected
                          ? 'bg-gold text-black font-semibold'
                          : disabled
                            ? 'text-cream/20 cursor-default'
                            : 'text-cream hover:bg-cream/10'
                      }`}
                    >
                      {day}
                    </button>
                  )
                })}
              </div>
              <p className="text-cream/40 text-[11px] mt-6 flex items-center gap-2">
                <span>🌐</span> Mountain Time – Edmonton (MDT)
              </p>
            </div>

            {/* Time slots */}
            <div>
              <h3 className="text-cream font-bold text-[15px]">Tuesday, July {selectedDay}</h3>
              <p className="text-cream/40 text-xs mb-4">Select a time</p>
              <div className="space-y-3">
                {times.map((t) => {
                  const selected = t === selectedTime
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTime(t)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border text-sm font-semibold transition-colors ${
                        selected
                          ? 'bg-gold/[.12] border-gold/30 text-white'
                          : 'border-white/[.08] text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{t}</span>
                      {selected && (
                        <span className="px-3.5 py-1.5 bg-gold text-[#051a07] text-xs font-bold rounded-md">
                          Confirm
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
