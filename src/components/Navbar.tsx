'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/technology', label: 'Technology' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/investor-relations', label: 'Investor Relations' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="w-full h-[73px] bg-black/[.07] flex items-center justify-between px-12">
      <Link href="/" className="flex items-center">
        <Image src="/logo-full.svg" alt="Huroca" width={114} height={37} className="h-6 w-auto" />
      </Link>
      <nav>
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
    </header>
  )
}
