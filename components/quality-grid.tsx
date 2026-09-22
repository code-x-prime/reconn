'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

type Row = { n: string; title: string; copy: string }

function QualityCard({ row, index }: { row: Row; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="group relative isolate min-h-[240px] overflow-hidden border border-white/10 bg-white/[0.04] p-7 transition-[transform,border-color] duration-500 hover:-translate-y-2 hover:border-white/25 sm:min-h-[280px] sm:p-9"
    >
      {/* mouse-follow spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), rgba(255,106,0,0.22), rgba(240,68,36,0.08) 45%, transparent 70%)',
        }}
      />
      {/* giant number */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-3 -bottom-10 text-[170px] leading-none font-extrabold tracking-[-.06em] text-transparent transition-all duration-700 [-webkit-text-stroke:1.5px_rgba(255,255,255,0.14)] group-hover:-translate-y-3 group-hover:[-webkit-text-stroke:1.5px_rgba(255,138,60,0.7)] sm:text-[210px]"
      >
        {row.n}
      </span>

      <span className="group-hover:bg-orange relative inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-white/25 px-3 text-[14px] font-bold text-white/80 transition-colors duration-500 group-hover:border-transparent group-hover:text-white">
        {row.n}
      </span>
      <h3 className="relative m-0 mt-8 text-[26px] leading-[1.1] font-extrabold tracking-[-.02em] sm:text-[30px]">{row.title}</h3>
      <p className="relative m-0 mt-3 max-w-[340px] text-[15px] leading-[1.65] text-white/65 transition-colors duration-500 group-hover:text-white/85 sm:text-[16px]">
        {row.copy}
      </p>
      <div className="from-orange to-red absolute bottom-0 left-0 h-[3px] w-12 bg-gradient-to-r transition-all duration-700 group-hover:w-full" />
    </motion.div>
  )
}

export function QualityGrid({ rows }: { rows: Row[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
      {rows.map((row, i) => (
        <QualityCard key={row.n} row={row} index={i} />
      ))}
    </div>
  )
}
