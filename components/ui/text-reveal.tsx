'use client'

import { FC, ReactNode, useRef } from 'react'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'

import { cn } from '@/lib/utils'

export interface RevealLine {
  text: string
  /** Tailwind classes applied to every word of this line (e.g. its colour). */
  className?: string
}

interface TextRevealByWordProps {
  /** Plain string, or an array of lines that can each carry their own colour. */
  text: string | RevealLine[]
  className?: string
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({ text, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  })

  const lines: RevealLine[] = typeof text === 'string' ? [{ text }] : text
  const total = lines.reduce((n, l) => n + l.text.split(' ').length, 0)
  let index = 0

  return (
    <div ref={targetRef} className={cn('relative z-0 h-[220vh] sm:h-[250vh]', className)}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-5 sm:px-[7vw]">
        <p className="mx-auto flex max-w-[1200px] flex-col items-center text-center text-[40px] leading-[1.02] font-extrabold tracking-[-.03em] sm:text-[clamp(48px,7vw,104px)]">
          {lines.map((line, li) => (
            <span key={li} className="flex flex-wrap justify-center gap-x-[0.25em]">
              {line.text.split(' ').map((word) => {
                const start = (index / total) * 0.85
                const end = start + 0.85 / total + 0.06
                index += 1
                return (
                  <Word key={index} progress={scrollYProgress} range={[start, end]} className={line.className}>
                    {word}
                  </Word>
                )
              })}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
  className?: string
}

const Word: FC<WordProps> = ({ children, progress, range, className }) => {
  const opacity = useTransform(progress, range, [0, 1])
  const y = useTransform(progress, range, [14, 0])
  return (
    <span className="relative inline-block">
      <span aria-hidden className={cn(className ? 'opacity-[0.12]' : 'text-black/10 dark:text-white/10', className)}>
        {children}
      </span>
      <motion.span style={{ opacity, y }} className={cn('absolute inset-0', !className && 'text-black dark:text-white', className)}>
        {children}
      </motion.span>
    </span>
  )
}

export { TextRevealByWord }
