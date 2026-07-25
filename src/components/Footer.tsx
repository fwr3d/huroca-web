import Image from 'next/image'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/investor-relations', label: 'Investor Relations' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-black/[.07] px-20 py-10">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex flex-col gap-1.5">
          <Image src="/logo-full.svg" alt="Huroca" width={100} height={31} className="h-[50px] w-auto" />
          <p className="text-white/40 text-xs">Cattle Robotics · Lethbridge, Alberta</p>
        </div>
        <ul className="flex gap-7 text-[13px] text-white/40">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="hover:text-white/70 transition-colors">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-5 text-[13px] text-gold">
            <a href="https://www.linkedin.com/company/huroca/" target="_blank" rel="noopener noreferrer" className="hover:text-gold/70 transition-colors">LinkedIn</a>
            <a href="https://github.com/huroca" target="_blank" rel="noopener noreferrer" className="hover:text-gold/70 transition-colors">GitHub</a>
          </div>
          <p className="text-white/25 text-xs">© 2026 Huroca Technologies Inc. · Privacy · Terms</p>
        </div>
      </div>
    </footer>
  )
}
