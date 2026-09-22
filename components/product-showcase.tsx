'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform, MotionValue } from 'framer-motion'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { categories, categoryCopy } from '@/data/products'

type Category = (typeof categories)[number]

function StackCard({ c, i, total }: { c: Category; i: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const last = i === total - 1
  const scale: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [1, last ? 1 : 0.92])
  const dim: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, last ? 0 : 0.45])
  const hex = categoryCopy[c.slug].accentHex

  return (
    <div ref={ref} className="sticky pb-4 sm:pb-6" style={{ top: `${88 + i * 18}px`, ['--accent' as string]: hex }}>
      <motion.article
        style={{ scale, transformOrigin: 'top center' }}
        className="group bg-charcoal relative isolate h-[480px] overflow-hidden text-white shadow-[0_30px_70px_-30px_rgba(16,36,27,0.65)] sm:h-[560px]"
      >
        <Image
          src={c.image}
          alt={`${c.name} product`}
          fill
          sizes="(min-width:1024px) 55vw, 100vw"
          className="-z-10 object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(16,36,27,0.4)_0%,rgba(16,36,27,0.05)_35%,rgba(16,36,27,0.9)_100%)]" />
        <div className="absolute top-0 left-0 h-[5px] w-28 bg-[var(--accent)] transition-[width] duration-500 group-hover:w-full" />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-8">
          <span className="border border-white/30 bg-white/10 px-4 py-2 text-[12px] font-bold tracking-[.16em] uppercase backdrop-blur-md">
            {c.number} / 0{total}
          </span>
          <span
            aria-hidden
            className="text-[64px] leading-none font-extrabold tracking-[-.05em] text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.6)] sm:text-[110px]"
          >
            {c.number}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
          <div className="border border-white/20 bg-white/10 p-5 backdrop-blur-xl sm:p-7">
            <h3 className="m-0 text-[34px] leading-none font-extrabold tracking-[-.03em] sm:text-[48px]">{c.name}</h3>
            <p className="m-0 mt-3 max-w-[460px] text-[14px] leading-[1.6] text-white/80 sm:text-[16px]">{c.description}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={`/products/${c.slug}`}
                className="text-forest-dark group/btn inline-flex items-center justify-center gap-2 bg-white px-6 py-3.5 text-[12px] font-bold tracking-[.06em] uppercase transition-colors duration-300 hover:bg-[var(--accent)] hover:text-white"
              >
                View Product
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={16}
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/40 px-6 py-3.5 text-[12px] font-bold tracking-[.06em] uppercase transition-colors duration-300 hover:bg-white/15"
              >
                Business Enquiry
              </Link>
            </div>
          </div>
        </div>

        <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-[#10241b]" />
      </motion.article>
    </div>
  )
}

export function ProductShowcase() {
  const listRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 60%', 'end 70%'] })
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(categories.length - 1, Math.max(0, Math.floor(v * categories.length))))
  })
  const hex = categoryCopy[categories[active].slug].accentHex

  return (
    <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-[5vw]">
      {/* Left: sticky text */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <span className="text-forest inline-flex items-center gap-2 text-[13px] font-bold tracking-[.16em] uppercase">
          Product showcase
        </span>
        <h2 className="my-5 text-[40px] leading-[1] font-extrabold tracking-[-.03em] sm:text-[clamp(48px,5.2vw,60px)]">
          OUR PRODUCT
          <br />
          <span className="text-gradient-orange-red">RANGE.</span>
        </h2>
        <p className="text-muted m-0 max-w-[460px] text-[15px] leading-[1.75] sm:text-[18px]">
          Explore our core categories and connect with the Reconn team for product information and business enquiries.
        </p>

        <div className="mt-8 hidden lg:block">
          <div className="border-line border-t">
            {categories.map((c, i) => (
              <div key={c.slug} className="border-line flex items-center gap-4 border-b py-4">
                <span
                  className={`w-8 text-[13px] font-extrabold tracking-[.1em] transition-colors duration-300 ${active === i ? 'text-[var(--a)]' : 'text-muted/60'}`}
                  style={{ ['--a' as string]: hex }}
                >
                  {c.number}
                </span>
                <span
                  className={`text-[22px] font-extrabold tracking-[-.02em] transition-all duration-300 ${active === i ? 'text-ink translate-x-1' : 'text-muted/50'}`}
                >
                  {c.name}
                </span>
                <span className="ml-auto h-[3px] transition-all duration-500" style={{ width: active === i ? 56 : 0, background: hex }} />
              </div>
            ))}
          </div>
          <Link
            href="/products"
            className="bg-forest hover:bg-orange group mt-8 inline-flex items-center gap-3 px-8 py-[18px] text-[13px] font-bold tracking-[.1em] text-white uppercase transition-colors duration-300"
          >
            View All Products
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Right: stacking cards */}
      <div>
        <div ref={listRef}>
          {categories.map((c, i) => (
            <StackCard key={c.slug} c={c} i={i} total={categories.length} />
          ))}
        </div>
        <Link
          href="/products"
          className="bg-forest hover:bg-orange group mt-4 inline-flex w-full items-center justify-center gap-3 px-8 py-[18px] text-[13px] font-bold tracking-[.1em] text-white uppercase transition-colors duration-300 lg:hidden"
        >
          View All Products
          <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
        </Link>
      </div>
    </div>
  )
}
