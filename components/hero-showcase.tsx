'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Cat = { name: string; slug: string; image: string; number: string }

// Desktop collage: position / size / tilt per card
const layout = [
  { pos: 'top-0 left-[8%]', size: 'h-[40%] w-[40%]', rot: -6, delay: 0, dur: 6 },
  { pos: 'top-[10%] right-0', size: 'h-[46%] w-[44%]', rot: 5, delay: 0.8, dur: 7 },
  { pos: 'bottom-[2%] left-0', size: 'h-[43%] w-[43%]', rot: 4, delay: 0.4, dur: 6.5 },
  { pos: 'right-[6%] bottom-[-2%]', size: 'h-[38%] w-[37%]', rot: -5, delay: 1.2, dur: 5.5 },
]

function Tile({ c, className = '' }: { c: Cat; className?: string }) {
  return (
    <Link
      href={`/products/${c.slug}`}
      className={`group bg-charcoal relative block overflow-hidden rounded-[22px] border border-white/25 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ${className}`}
    >
      <Image
        src={c.image}
        alt={`${c.name} product`}
        fill
        sizes="240px"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <span className="absolute top-3 left-3 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md">
        {c.number}
      </span>
      <span className="absolute inset-x-3 bottom-3 text-[15px] font-extrabold tracking-[-.01em] text-white">{c.name}</span>
    </Link>
  )
}

export function HeroShowcase({ categories }: { categories: Cat[] }) {
  return (
    <>
      {/* Desktop floating collage */}
      <div className="relative hidden aspect-[5/6] h-[min(600px,calc(100svh-87px-100px))] justify-self-end lg:block">
        <div className="from-orange to-red absolute top-1/2 left-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br opacity-30 blur-[100px]" />
        {categories.slice(0, 4).map((c, i) => {
          const l = layout[i]
          return (
            <motion.div
              key={c.slug}
              className={`absolute ${l.pos} ${l.size}`}
              initial={{ opacity: 0, y: 60, rotate: l.rot * 2 }}
              animate={{ opacity: 1, y: 0, rotate: l.rot }}
              transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="h-full w-full"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: l.dur, delay: l.delay, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.06, rotate: 0 }}
              >
                <Tile c={c} className="h-full w-full" />
              </motion.div>
            </motion.div>
          )
        })}
        <motion.div
          className="absolute top-[42%] left-[38%] z-10 rounded-2xl border border-white/25 bg-white/15 px-5 py-4 text-white backdrop-blur-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <p className="m-0 text-[28px] leading-none font-extrabold">4</p>
          <p className="m-0 mt-1 text-[11px] font-bold tracking-[.14em] text-white/75 uppercase">Core Categories</p>
        </motion.div>
      </div>

      {/* Mobile / tablet strip */}
      <div className="mt-1 grid grid-cols-4 gap-2.5 sm:mt-4 sm:gap-4 lg:hidden">
        {categories.slice(0, 4).map((c) => (
          <Tile key={c.slug} c={c} className="aspect-[4/3] sm:aspect-[3/2]" />
        ))}
      </div>
    </>
  )
}
