'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { categories, categoryCopy, categorySlug, products, productHref } from '@/data/products'

/** Hero: four image panels; the hovered one expands (desktop), 2x2 grid on mobile. */
export function CategoryPanels() {
  const [active, setActive] = useState(0)
  return (
    <div className="grid h-full min-h-[300px] grid-cols-2 gap-2 sm:gap-3 lg:flex lg:gap-3">
      {categories.map((c, i) => {
        const hex = categoryCopy[c.slug].accentHex
        const on = active === i
        return (
          <Link
            key={c.slug}
            href={`/products/${c.slug}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            style={{ ['--accent' as string]: hex }}
            className={`group bg-charcoal relative min-h-[150px] overflow-hidden text-white transition-[flex-grow] duration-700 ease-[cubic-bezier(.22,1,.36,1)] lg:min-h-0 ${
              on ? 'lg:flex-[3.2]' : 'lg:flex-[1]'
            }`}
          >
            <Image
              src={c.image}
              alt={c.name}
              fill
              sizes="(min-width:1024px) 40vw, 50vw"
              className={`object-cover transition-transform duration-[1200ms] ease-out ${on ? 'lg:scale-105' : 'lg:scale-100'}`}
            />
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${on ? 'lg:opacity-60' : 'lg:opacity-90'} bg-gradient-to-t from-[#10241b] via-[#10241b]/30 to-transparent`}
            />
            <div className="absolute top-0 left-0 h-[4px] w-full bg-[var(--accent)]" />
            <span className="absolute top-4 left-4 text-[12px] font-extrabold tracking-[.14em] text-white/85">{c.number}</span>
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
              <h3 className="m-0 text-[20px] leading-none font-extrabold tracking-[-.02em] sm:text-[26px] lg:text-[30px]">{c.name}</h3>
              <p
                className={`m-0 mt-2 hidden max-w-[280px] text-[14px] leading-[1.55] text-white/80 transition-all duration-500 lg:block ${
                  on ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {c.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[.1em] text-[var(--accent)] uppercase">
                Explore
                <HugeiconsIcon icon={ArrowRight01Icon} size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

/** Filter tabs + animated product grid. */
export function ProductCatalog() {
  const [filter, setFilter] = useState('All')
  const items = filter === 'All' ? products : products.filter((p) => p.category === filter)
  const tabs = ['All', ...categories.map((c) => c.name)]
  const count = (t: string) => (t === 'All' ? products.length : products.filter((p) => p.category === t).length)

  return (
    <div>
      <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`flex flex-none items-center gap-2 border px-5 py-3 text-[11px] font-bold tracking-[.12em] uppercase transition-colors duration-300 ${
              filter === t ? 'border-forest bg-forest text-white' : 'border-line hover:border-forest hover:text-forest text-muted bg-white'
            }`}
          >
            {t}
            <span className={`text-[10px] ${filter === t ? 'text-orange' : 'text-muted/70'}`}>{String(count(t)).padStart(2, '0')}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((p) => {
            const hex = categoryCopy[categorySlug(p.category)].accentHex
            return (
              <motion.div
                layout
                key={p.slug}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ ['--accent' as string]: hex }}
              >
                <Link href={productHref(p)} className="group bg-charcoal relative block h-[400px] overflow-hidden text-white sm:h-[460px]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,#10241bf2_100%)]" />
                  <div className="absolute top-0 left-0 h-[5px] w-24 bg-[var(--accent)] transition-[width] duration-500 group-hover:w-full" />
                  <span className="absolute top-5 left-5 border border-white/30 bg-white/10 px-3 py-1.5 text-[11px] font-bold tracking-[.14em] uppercase backdrop-blur-md">
                    {p.category}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <h3 className="m-0 text-[26px] leading-[1.05] font-extrabold tracking-[-.02em] sm:text-[30px]">{p.name}</h3>
                    <p className="m-0 mt-2 text-[14px] leading-[1.6] text-white/75 sm:text-[15px]">{p.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold tracking-[.06em] text-[var(--accent)] uppercase">
                      Product Enquiry
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
