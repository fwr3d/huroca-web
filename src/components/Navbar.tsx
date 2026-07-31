'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/investor-relations', label: 'Investor Relations' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="w-full bg-black/[.07] relative z-50">
      <div className="h-[73px] flex items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image src="/logo-full.svg" alt="Huroca" width={114} height={37} className="h-11 w-auto" />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-7 text-sm">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={
                    pathname === href
                      ? 'text-gold'
                      : 'text-cream/70 hover:text-cream transition-colors'
                  }
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative z-50 flex flex-col justify-center items-center gap-1.5 w-9 h-9 -mr-1"
        >
          <span
            className={`block h-[2px] w-6 bg-cream transition-transform duration-200 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span
            className={`block h-[2px] w-6 bg-cream transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-[2px] w-6 bg-cream transition-transform duration-200 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      <nav
        className={`md:hidden fixed inset-x-0 top-[73px] bottom-0 bg-dark transition-opacity duration-200 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8 text-2xl -mt-[73px]">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={
                  pathname === href
                    ? 'text-gold font-semibold'
                    : 'text-cream/80 hover:text-cream transition-colors font-semibold'
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
