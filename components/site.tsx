'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowUpRight01Icon,
  ArrowRight01Icon,
  ChevronDownIcon,
  Menu01Icon,
  Cancel01Icon,
  Leaf01Icon,
  Call02Icon,
  Mail01Icon,
  Location01Icon,
  JarIcon,
  Honey01Icon,
  DropletIcon,
  PepperIcon,
} from '@hugeicons/core-free-icons'
import { categories, categoryCopy, imageSizes, Product, products, productHref } from '@/data/products'
import { contactDetails, whatsapp } from '@/data/contact'

const contactIcons = { phone: Call02Icon, email: Mail01Icon, address: Location01Icon }

const categoryIcons: Record<string, typeof JarIcon> = {
  ghee: JarIcon,
  honey: Honey01Icon,
  'edible-oils': DropletIcon,
  spices: PepperIcon,
}

export const categoryAccents: Record<string, string> = {
  ghee: 'from-[#C9A227]/0 via-[#C9A227] to-[#8B8748]',
  honey: 'from-orange/0 via-orange to-[#F0A324]',
  'edible-oils': 'from-forest/0 via-forest to-[#3f8a5c]',
  spices: 'from-red/0 via-red to-orange',
}

const reveal = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }
export function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function HeroImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      initial={{ scale: 1.08, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover" />
    </motion.div>
  )
}

export function ImageReveal({
  src,
  alt,
  sizes = '50vw',
  className = '',
  fromX,
}: {
  src: string
  alt: string
  sizes?: string
  className?: string
  fromX?: number
}) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={fromX !== undefined ? { opacity: 0, x: fromX } : { opacity: 0, scale: 1.04 }}
      whileInView={fromX !== undefined ? { opacity: 1, x: 0 } : { opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </motion.div>
  )
}

/**
 * Product shots are square with the pack centred. In wide or tall boxes `object-cover` would crop the pack and
 * `object-contain` would leave empty bars, so show the whole shot and fill the rest with a blurred copy of itself.
 * The parent must be `relative overflow-hidden`.
 */
export function FitImage({
  src,
  alt,
  sizes,
  className = '',
  priority = false,
}: {
  src: string
  alt: string
  sizes: string
  className?: string
  priority?: boolean
}) {
  return (
    <>
      <Image src={src} alt="" aria-hidden fill sizes="25vw" className="scale-125 object-cover opacity-90 blur-2xl saturate-125" />
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-contain ${className}`} />
    </>
  )
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products', menu: true },
  { label: 'Manufacturing', href: '/about#manufacturing' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const productsRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openProducts = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setProductsOpen(true)
  }
  const scheduleCloseProducts = () => {
    closeTimer.current = setTimeout(() => setProductsOpen(false), 150)
  }

  const isActive = (href: string) => {
    if (href.includes('#')) return false
    return href === '/' ? pathname === '/' : pathname.startsWith(href)
  }

  useEffect(() => {
    setOpen(false)
    setProductsOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!productsOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) setProductsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [productsOpen])

  const linkClass = (active: boolean) =>
    `relative flex items-center gap-1.5 py-[10px] text-[11px] font-bold tracking-[.14em] uppercase transition-colors duration-300 ${
      active ? 'text-forest' : 'text-[#2b3a30] hover:text-forest'
    }`

  return (
    <motion.header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-[18px] transition-shadow duration-300 ${
        scrolled ? 'border-line shadow-[0_10px_30px_-18px_rgba(16,36,27,0.35)]' : 'border-line/70'
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="from-orange to-red absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r" />
      <div className="mx-auto flex h-[70px] max-w-[1400px] items-center justify-between gap-6 px-[18px] sm:h-[86px] sm:px-10">
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
          className="relative flex h-[42px] w-[150px] flex-none items-center sm:h-[52px] sm:w-[190px]"
        >
          <Image src="/reconn-logo.png" alt="Reconn Agro India Pvt. Ltd." fill priority className="object-contain object-left" />
        </Link>

        <nav className="hidden items-center gap-9 min-[900px]:flex" aria-label="Primary navigation">
          {navLinks.map((l) =>
            l.menu ? (
              <div key={l.label} className="relative" ref={productsRef} onMouseEnter={openProducts} onMouseLeave={scheduleCloseProducts}>
                <button className={linkClass(isActive(l.href))} onClick={() => setProductsOpen((v) => !v)} aria-expanded={productsOpen}>
                  {l.label}
                  <HugeiconsIcon
                    icon={ChevronDownIcon}
                    size={14}
                    className={`transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`}
                  />
                  <span
                    className={`bg-orange absolute bottom-px left-0 h-[2px] transition-[width] duration-300 ${isActive(l.href) || productsOpen ? 'w-full' : 'w-0'}`}
                  />
                </button>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="border-line absolute top-full left-1/2 w-[560px] -translate-x-1/2 border bg-white p-3 shadow-[0_30px_60px_-20px_rgba(16,36,27,0.4)]"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      {categories.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/products/${c.slug}`}
                          onClick={() => setProductsOpen(false)}
                          className="group border-line hover:border-forest bg-off-white relative flex h-[128px] overflow-hidden border transition-colors duration-300"
                        >
                          <span className="flex min-w-0 flex-1 flex-col justify-between p-3.5">
                            <span
                              className="text-[11px] font-extrabold tracking-[.14em] text-[var(--a)]"
                              style={{ ['--a' as string]: categoryCopy[c.slug].accentHex }}
                            >
                              {c.number}
                            </span>
                            <span className="text-ink flex items-center gap-2 text-[15px] leading-[1.15] font-extrabold tracking-[-.01em]">
                              {c.name}
                              <HugeiconsIcon
                                icon={ArrowRight01Icon}
                                size={15}
                                className="flex-none transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </span>
                          </span>
                          <span className="relative aspect-square h-full flex-none overflow-hidden">
                            <Image
                              src={c.image}
                              alt={`${c.name} product`}
                              fill
                              sizes="128px"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </span>
                          <span className="bg-orange absolute bottom-0 left-0 h-[3px] w-0 transition-[width] duration-500 group-hover:w-full" />
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/products"
                      onClick={() => setProductsOpen(false)}
                      className="text-forest hover:bg-light-green mt-3 flex items-center justify-between px-4 py-3 text-[11px] font-bold tracking-[.14em] uppercase transition-colors"
                    >
                      View all products
                      <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
                    </Link>
                  </motion.div>
                )}
              </div>
            ) : (
              <Link key={l.label} href={l.href} className={linkClass(isActive(l.href))}>
                {l.label}
                <span
                  className={`bg-orange absolute bottom-px left-0 h-[2px] transition-[width] duration-300 ${isActive(l.href) ? 'w-full' : 'w-0'}`}
                />
              </Link>
            ),
          )}
        </nav>

        <div className="hidden flex-none items-center gap-3 min-[900px]:flex">
          <a
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat on WhatsApp ${whatsapp.display}`}
            className="border-line group text-ink flex items-center gap-2.5 border bg-white px-4 py-[11px] text-[11px] font-bold tracking-[.12em] uppercase transition-colors duration-300 hover:border-[#25D366]"
          >
            <Image
              src="/whatsapp.png"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
            />
            WhatsApp
          </a>
          <Link
            href="/contact"
            className="bg-forest hover:bg-orange group flex flex-none items-center justify-center gap-3 px-[22px] py-4 text-[11px] font-bold tracking-[.12em] text-white uppercase transition-colors duration-300"
          >
            Business Enquiry
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="flex flex-none items-center gap-2 min-[900px]:hidden">
          <a
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="border-line flex h-11 w-11 items-center justify-center border bg-white"
          >
            <Image src="/whatsapp.png" alt="" width={26} height={26} className="h-[26px] w-[26px]" />
          </a>
          <button
            className="bg-forest flex h-11 w-11 flex-none items-center justify-center border-0 text-white"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <HugeiconsIcon icon={open ? Cancel01Icon : Menu01Icon} size={22} />
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          className="bg-charcoal absolute top-full right-0 left-0 z-40 flex h-[calc(100svh-71px)] flex-col overflow-y-auto text-white min-[900px]:hidden sm:h-[calc(100svh-87px)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <div className="from-orange to-red pointer-events-none absolute -top-10 -right-16 h-[260px] w-[260px] bg-gradient-to-br opacity-[0.22] blur-[100px]" />
          <div className="relative flex flex-1 flex-col px-6 pt-8 pb-8 sm:px-10">
            <p className="m-0 text-[11px] font-bold tracking-[.18em] text-white/50 uppercase">Menu</p>
            <nav className="mt-6 flex flex-col">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.06 }}
                  className="border-b border-white/12"
                >
                  <Link href={l.href} onClick={() => setOpen(false)} className="group flex items-center gap-4 py-4 sm:py-5">
                    <span className="text-orange w-7 text-[12px] font-extrabold tracking-[.1em]">0{i + 1}</span>
                    <span
                      className={`flex-1 text-[30px] leading-none font-extrabold tracking-[-.03em] sm:text-[40px] ${isActive(l.href) ? 'text-orange' : ''}`}
                    >
                      {l.label}
                    </span>
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      size={22}
                      className="text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                  {l.menu && (
                    <div className="flex flex-wrap gap-2 pb-4 pl-11">
                      {categories.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/products/${c.slug}`}
                          onClick={() => setOpen(false)}
                          className="hover:border-orange hover:text-orange border border-white/25 px-3 py-2 text-[11px] font-bold tracking-[.1em] text-white/85 uppercase transition-colors"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto pt-10">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="bg-orange hover:bg-red flex items-center justify-center gap-3 px-8 py-[18px] text-[13px] font-bold tracking-[.1em] text-white uppercase transition-colors"
              >
                Business Enquiry
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={19} />
              </Link>
              <p className="m-0 mt-5 text-center text-[12px] text-white/55">Building quality from agriculture to industry.</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

const footerBusiness = ['Business Enquiry', 'Distribution', 'Dealership']

/** Floating WhatsApp chat button, fixed bottom-right on every page. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp ${whatsapp.display}`}
      className="group fixed right-4 bottom-4 z-40 flex items-center gap-3 sm:right-6 sm:bottom-6"
    >
      <span className="bg-charcoal pointer-events-none hidden translate-x-2 px-4 py-2.5 text-[12px] font-bold tracking-[.08em] whitespace-nowrap text-white uppercase opacity-0 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
      <span className="relative flex h-[58px] w-[58px] items-center justify-center sm:h-16 sm:w-16">
        <span className="absolute inset-1 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <Image
          src="/whatsapp.png"
          alt=""
          width={64}
          height={64}
          className="relative h-full w-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-110"
        />
      </span>
    </a>
  )
}

export function Footer() {
  return (
    <footer className="bg-forest-dark relative overflow-hidden text-white">
      <div className="from-orange to-red pointer-events-none absolute -top-24 -right-20 h-[340px] w-[340px] bg-gradient-to-br opacity-[0.16] blur-[120px]" />
      <div className="from-blue to-purple pointer-events-none absolute bottom-10 -left-24 h-[300px] w-[300px] bg-gradient-to-br opacity-[0.12] blur-[120px]" />

      {/* CTA band */}
      <div className="relative border-b border-white/12 px-5 py-14 sm:px-[7vw] sm:py-20">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="m-0 text-[36px] leading-[1] font-extrabold tracking-[-.03em] sm:text-[clamp(44px,5.4vw,80px)]">
            LET&apos;S BUILD
            <br />
            SOMETHING <span className="text-gradient-orange-red">DEPENDABLE.</span>
          </h2>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              className="bg-orange hover:bg-red group inline-flex items-center justify-center gap-3 px-8 py-[18px] text-[13px] font-bold tracking-[.1em] whitespace-nowrap text-white uppercase transition-colors duration-300"
            >
              Send an Enquiry
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={19}
                className="flex-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-3 border border-white/35 px-8 py-[18px] text-[13px] font-bold tracking-[.1em] whitespace-nowrap text-white uppercase transition-colors duration-300 hover:bg-white/10"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-2 gap-x-6 gap-y-12 px-5 py-14 sm:px-[7vw] sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-[4vw]">
        <div className="col-span-2 lg:col-span-1">
          <div className="relative h-[60px] w-[190px] sm:h-[70px] sm:w-[220px]">
            <Image src="/reconn-logo.png" alt="Reconn Agro India Pvt. Ltd." fill sizes="220px" className="bg-white object-contain p-2" />
          </div>
          <p className="m-0 mt-6 text-[13px] font-extrabold tracking-[.14em] text-white uppercase">Reconn Agro India Pvt. Ltd.</p>
          <p className="m-0 mt-3 max-w-[340px] text-[14px] leading-[1.75] text-white/65">
            Quality-focused agro and food products across Ghee, Honey, Edible Oils and Spices.
          </p>
          <address className="mt-6 flex flex-col gap-4 text-[13px] leading-[1.7] text-white/70 not-italic">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-start gap-3">
                <HugeiconsIcon icon={contactIcons[detail.kind]} size={18} className="text-orange mt-1 flex-none" />
                <div className="min-w-0">
                  <span className="block text-[11px] font-bold tracking-[.1em] text-white/45 uppercase">{detail.label}</span>
                  {'href' in detail ? (
                    <a href={detail.href} className="hover:text-orange break-words transition-colors">
                      {detail.value}
                    </a>
                  ) : (
                    <span>{detail.value}</span>
                  )}
                </div>
              </div>
            ))}
          </address>
        </div>

        <div className="flex flex-col gap-4">
          <p className="m-0 mb-2 text-[11px] font-bold tracking-[.16em] text-white/45 uppercase">Company</p>
          {[
            { l: 'Home', h: '/' },
            { l: 'About', h: '/about' },
            { l: 'Manufacturing', h: '/about#manufacturing' },
            { l: 'Contact', h: '/contact' },
          ].map((x) => (
            <Link
              key={x.l}
              href={x.h}
              className="group hover:text-orange flex w-fit items-center gap-2 text-[14px] text-white/85 transition-all duration-300 hover:translate-x-1"
            >
              {x.l}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <p className="m-0 mb-2 text-[11px] font-bold tracking-[.16em] text-white/45 uppercase">Products</p>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}`}
              className="hover:text-orange w-fit text-[14px] text-white/85 transition-all duration-300 hover:translate-x-1"
            >
              {c.name}
            </Link>
          ))}
        </div>

        <div className="col-span-2 flex flex-col gap-4 sm:col-span-1">
          <p className="m-0 mb-2 text-[11px] font-bold tracking-[.16em] text-white/45 uppercase">Business</p>
          {footerBusiness.map((b) => (
            <Link
              key={b}
              href="/contact"
              className="hover:text-orange w-fit text-[14px] text-white/85 transition-all duration-300 hover:translate-x-1"
            >
              {b}
            </Link>
          ))}
          <Link
            href="/contact"
            className="hover:text-orange mt-2 flex items-center gap-[9px] text-[13px] font-bold text-white transition-colors"
          >
            Send an enquiry <HugeiconsIcon icon={ArrowUpRight01Icon} size={15} className="text-orange" />
          </Link>
        </div>
      </div>

      {/* Big wordmark */}
      <div className="relative select-none">
        <p
          aria-hidden
          className="m-0 px-2 text-center text-[clamp(64px,19vw,300px)] leading-[0.8] font-extrabold tracking-[-.05em] text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.3)]"
        >
          RECONN
        </p>
      </div>

      <div className="relative border-t border-white/12 px-5 py-5 sm:px-[7vw]">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-2 text-[11px] tracking-[.08em] text-white/50 uppercase sm:flex-row">
          <span>© 2026 Reconn Agro India Pvt. Ltd. All Rights Reserved.</span>
          <span>Agriculture. Manufacturing. Quality.</span>
          <span>
            Design by{' '}
            <a
              href="https://groxmedia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange font-bold text-white/80 transition-colors duration-300"
            >
              Grox Media
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export function Button({
  href,
  children,
  light = false,
  large = false,
}: {
  href: string
  children: React.ReactNode
  light?: boolean
  large?: boolean
}) {
  return (
    <Link
      className={`group inline-flex items-center justify-center gap-3 rounded-[3px] font-bold tracking-[.1em] uppercase transition-colors duration-[250ms] ${
        large ? 'px-8 py-[18px] text-[13px]' : 'px-[26px] py-[16px] text-[12px]'
      } ${light ? 'border-forest text-forest hover:bg-forest border bg-white hover:text-white' : 'bg-forest hover:bg-forest-dark text-white'}`}
      href={href}
    >
      {children}
      <HugeiconsIcon
        icon={ArrowUpRight01Icon}
        size={large ? 19 : 17}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  )
}

export function SectionTitle({
  eyebrow,
  title,
  copy,
  align = 'left',
}: {
  eyebrow: string
  title: React.ReactNode
  copy?: string
  align?: 'left' | 'center'
}) {
  return (
    <Reveal className={`max-w-[760px] ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <span
        className={`text-forest inline-flex items-center gap-2 text-[13px] font-bold tracking-[.16em] uppercase ${align === 'center' ? 'justify-center' : ''}`}
      >
        <HugeiconsIcon icon={Leaf01Icon} size={14} /> {eyebrow}
      </span>
      <h2 className="[&_i]:text-forest my-6 text-[40px] leading-[1.02] font-extrabold tracking-[-.03em] sm:text-[clamp(48px,5.6vw,72px)] [&_i]:font-normal">
        {title}
      </h2>
      {copy && <p className="text-muted m-0 max-w-[600px] text-[17px] leading-[1.7] sm:text-[18px]">{copy}</p>}
    </Reveal>
  )
}

export function CategoryCard({ category, className = '' }: { category: (typeof categories)[number]; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden text-white ${className}`}
    >
      <Link href={`/products/${category.slug}`} className="block h-full">
        <FitImage
          src={category.image}
          alt={`${category.name} agro category`}
          sizes={imageSizes}
          className="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div className="from-charcoal/95 absolute inset-0 bg-gradient-to-t via-black/10 to-transparent" />
        <div
          className={`absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r transition-[width] duration-500 ease-out group-hover:w-full ${categoryAccents[category.slug] ?? 'from-orange/0 via-orange to-red'}`}
        />
        <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between gap-4 transition-transform duration-500 ease-out group-hover:-translate-y-1 sm:right-6 sm:bottom-6 sm:left-6">
          <div>
            <span className="text-[11px] font-bold tracking-[.12em] text-white/70">
              {category.number} / {category.name.toUpperCase()}
            </span>
            <h3 className="mt-1 text-[26px] leading-[1.05] font-extrabold tracking-[-.02em] sm:text-[30px]">{category.name}</h3>
            <p className="m-0 mt-1 max-w-[220px] text-[12.5px] leading-[1.5] text-white/80">{category.description}</p>
          </div>
          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            size={20}
            className="flex-none transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </Link>
    </motion.div>
  )
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="border-line group border bg-white transition-shadow duration-300 hover:shadow-[0_20px_45px_#0a382314]">
      <Link href={productHref(product)} className="bg-off-white relative block aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes={imageSizes}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="text-forest absolute top-4 left-4 bg-white px-[10px] py-2 text-[9px] font-bold tracking-[.12em] uppercase">
          {product.category}
        </span>
      </Link>
      <div className="p-[22px]">
        <div>
          <h3 className="mt-0 mb-[6px] text-[25px] font-bold">{product.name}</h3>
          <p className="text-muted mt-0 mb-[18px] text-[13px] leading-[1.6]">{product.description}</p>
        </div>
        <Link
          href={productHref(product)}
          className="text-forest inline-flex items-center gap-[7px] text-[10px] font-bold tracking-[.1em] uppercase"
          aria-label={`Request information about ${product.name}`}
        >
          Product Enquiry
          <HugeiconsIcon icon={ArrowUpRight01Icon} size={17} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  )
}

export function ProductGrid({ items = products }: { items?: Product[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
      {items.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  )
}

export function ContactForm() {
  const [sent, setSent] = useState(false)
  return (
    <form
      className="border-line flex flex-col gap-5 border bg-white px-[18px] py-[25px] shadow-[0_20px_50px_#0a382310] sm:mx-0 sm:p-[35px]"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      {sent ? (
        <div className="text-forest px-[10px] py-[45px] text-center">
          <HugeiconsIcon icon={Leaf01Icon} size={28} />
          <h3 className="text-ink text-[28px] font-bold">Thank you for reaching out.</h3>
          <p className="text-muted text-[13px] leading-[1.6]">
            This enquiry form is ready to connect to your preferred email or CRM service.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
            <label className="text-ink flex flex-col gap-2 text-[11px] font-bold tracking-[.04em]">
              Full Name *
              <input
                required
                name="name"
                placeholder="Your name"
                className="border-line text-ink focus:border-forest border-0 border-b bg-white py-3 text-sm font-normal outline-none"
              />
            </label>
            <label className="text-ink flex flex-col gap-2 text-[11px] font-bold tracking-[.04em]">
              Company Name
              <input
                name="company"
                placeholder="Company name"
                className="border-line text-ink focus:border-forest border-0 border-b bg-white py-3 text-sm font-normal outline-none"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
            <label className="text-ink flex flex-col gap-2 text-[11px] font-bold tracking-[.04em]">
              Business Email *
              <input
                required
                type="email"
                name="email"
                placeholder="you@company.com"
                className="border-line text-ink focus:border-forest border-0 border-b bg-white py-3 text-sm font-normal outline-none"
              />
            </label>
            <label className="text-ink flex flex-col gap-2 text-[11px] font-bold tracking-[.04em]">
              Phone Number *
              <input
                required
                name="phone"
                placeholder="Your phone number"
                className="border-line text-ink focus:border-forest border-0 border-b bg-white py-3 text-sm font-normal outline-none"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
            <label className="text-ink flex flex-col gap-2 text-[11px] font-bold tracking-[.04em]">
              Enquiry Type *
              <select
                required
                name="type"
                defaultValue=""
                className="border-line text-ink focus:border-forest border-0 border-b bg-white py-3 text-sm font-normal outline-none"
              >
                <option value="" disabled>
                  Select one
                </option>
                <option>Product Enquiry</option>
                <option>Bulk Requirement</option>
                <option>Distribution</option>
                <option>Dealership</option>
                <option>General Enquiry</option>
              </select>
            </label>
            <label className="text-ink flex flex-col gap-2 text-[11px] font-bold tracking-[.04em]">
              Product Category
              <select
                name="category"
                defaultValue=""
                className="border-line text-ink focus:border-forest border-0 border-b bg-white py-3 text-sm font-normal outline-none"
              >
                <option value="">Select category</option>
                {categories.map((c) => (
                  <option key={c.slug}>{c.name}</option>
                ))}
                <option>Other</option>
              </select>
            </label>
          </div>
          <label className="text-ink flex flex-col gap-2 text-[11px] font-bold tracking-[.04em]">
            Message *
            <textarea
              required
              name="message"
              placeholder="Tell us about your requirement"
              rows={5}
              className="border-line text-ink focus:border-forest resize-y border-0 border-b bg-white py-3 text-sm font-normal outline-none"
            />
          </label>
          <button
            className="bg-forest hover:bg-forest-dark group inline-flex items-center justify-center gap-3 self-start rounded-[3px] px-[22px] py-4 text-[11px] font-bold tracking-[.12em] text-white uppercase transition-colors duration-[250ms]"
            type="submit"
          >
            Send Enquiry
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
          <small className="text-muted text-[10px]">Frontend enquiry form — ready for email or CRM integration.</small>
        </>
      )}
    </form>
  )
}

export function ProductFilters() {
  const [filter, setFilter] = useState('All')
  const items = filter === 'All' ? products : products.filter((p) => p.category === filter)
  return (
    <>
      <div className="my-[30px] mt-[50px] flex flex-wrap gap-[10px]">
        {['All', ...categories.map((c) => c.name)].map((item) => (
          <button
            key={item}
            className={`border px-4 py-[11px] text-[10px] font-semibold tracking-[.1em] uppercase transition-colors duration-200 ${
              filter === item
                ? 'border-forest bg-forest text-white'
                : 'border-line text-muted hover:border-forest hover:bg-forest bg-white hover:text-white'
            }`}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <ProductGrid items={items} />
    </>
  )
}

export function ContactDetails() {
  return (
    <div className="mt-[35px] flex flex-col gap-[22px] sm:mt-[55px]">
      {contactDetails.map((detail) => (
        <div key={detail.label} className="text-forest flex items-start gap-[14px]">
          <HugeiconsIcon icon={contactIcons[detail.kind]} size={18} className="flex-none" />
          <span className="text-muted min-w-0 text-xs leading-[1.6]">
            {detail.label}
            <br />
            {'href' in detail ? (
              <a href={detail.href} className="text-ink text-[13px] font-bold break-words">
                {detail.value}
              </a>
            ) : (
              <b className="text-ink text-[13px]">{detail.value}</b>
            )}
          </span>
        </div>
      ))}
    </div>
  )
}

export function ArrowRightIcon({ size = 14, className = '' }: { size?: number; className?: string }) {
  return <HugeiconsIcon icon={ArrowRight01Icon} size={size} className={className} />
}
