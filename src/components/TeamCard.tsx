'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

interface TeamCardProps {
  name: string
  role: string
  bio: string
  photo: string | null
}

export default function TeamCard({ name, role, bio, photo }: TeamCardProps) {
  const [display, setDisplay] = useState(bio)
  const [hovered, setHovered] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  function handleEnter() {
    setHovered(true)
    if (intervalRef.current) clearInterval(intervalRef.current)
    setDisplay('')
    let i = 0
    intervalRef.current = setInterval(() => {
      i += 2
      setDisplay(bio.slice(0, i))
      if (i >= bio.length) {
        clearInterval(intervalRef.current!)
        intervalRef.current = null
      }
    }, 12)
  }

  function handleLeave() {
    setHovered(false)
  }

  const typing = display.length < bio.length

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ flexGrow: hovered ? 2.4 : 1 }}
      className={`basis-0 min-w-0 bg-card border border-cream/[.08] rounded-2xl transition-all duration-300 ease-out overflow-hidden ${
        hovered ? 'px-8 py-9' : 'px-6 py-7'
      }`}
    >
      {photo ? (
        <Image
          src={photo}
          alt={name}
          width={96}
          height={96}
          className={`rounded-full object-cover mb-4 transition-all duration-300 ease-out ${
            hovered ? 'w-24 h-24' : 'w-16 h-16'
          }`}
        />
      ) : (
        <div
          className={`rounded-full bg-dark/50 mb-4 transition-all duration-300 ease-out ${
            hovered ? 'w-24 h-24' : 'w-16 h-16'
          }`}
        />
      )}
      <h3
        className={`font-heading text-white font-bold mb-1 whitespace-nowrap transition-all duration-300 ease-out ${
          hovered ? 'text-xl' : 'text-base'
        }`}
      >
        {name}
      </h3>
      <p
        className={`text-white font-semibold mb-4 whitespace-nowrap transition-all duration-300 ease-out ${
          hovered ? 'text-sm' : 'text-xs'
        }`}
      >
        {role}
      </p>
      <p
        className={`text-white/60 leading-relaxed transition-all duration-300 ease-out ${
          hovered ? 'text-[15px]' : 'text-[13px]'
        }`}
      >
        {hovered ? display : bio}
        {hovered && typing && <span className="animate-pulse">|</span>}
      </p>
    </div>
  )
}
