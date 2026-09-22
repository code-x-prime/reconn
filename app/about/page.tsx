import Image from 'next/image'
import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { Button, CategoryCard, HeroImage, ImageReveal, Reveal, SectionTitle } from '@/components/site'
import { TextRevealByWord } from '@/components/ui/text-reveal'
import { categories } from '@/data/products'

export const metadata = {
  title: 'About RECONN | Agro India Pvt. Ltd.',
  description: 'Learn about Reconn Agro India Pvt. Ltd.’s quality-focused approach to agro manufacturing and everyday product categories.',
}

const heroImage = '/images/about-hero.jpg'
const visualImage = '/images/about-visual.jpg'

const approachPoints = [
  { n: '01', title: 'Quality', copy: 'Careful attention from sourcing to finished product.' },
  { n: '02', title: 'Process', copy: 'Disciplined, repeatable manufacturing standards.' },
  { n: '03', title: 'Consistency', copy: 'The same standard, maintained across every batch.' },
  { n: '04', title: 'Product Focus', copy: 'A range built around everyday agro requirements.' },
]

const qualityFocusPoints = [
  { title: 'Careful Selection', copy: 'Attention to the ingredients and materials that go into every category.' },
  { title: 'Consistent Standards', copy: 'The same approach applied across every batch and category.' },
  { title: 'Considered Presentation', copy: 'Products presented with care, from packaging to information.' },
]

const heroStats = [
  { n: '04', label: 'Core Categories' },
  { n: '05', label: 'Stage Journey' },
  { n: '01', label: 'Quality Standard' },
]

const screenH = 'min-h-[calc(100svh-71px)] sm:min-h-[calc(100svh-87px)]'

export default function About() {
  return (
    <>
      <main className="overflow-x-clip">
        {/* ABOUT HERO */}
        <section className="bg-charcoal relative flex h-[calc(100svh-71px)] flex-col justify-end overflow-hidden text-white sm:h-[calc(100svh-87px)]">
          <HeroImage src={heroImage} alt="Agriculture and food manufacturing" />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,#10241bf2_0%,#10241bb3_50%,#10241b55_100%)]" />
          <div className="from-orange to-red pointer-events-none absolute top-[10%] right-[-80px] h-[300px] w-[300px] bg-gradient-to-br opacity-[0.18] blur-[110px]" />
          <div className="relative z-[2] mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-5 sm:px-[7vw]">
            <Reveal>
              <span className="inline-flex items-center gap-3 border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-bold tracking-[.16em] text-white/85 uppercase backdrop-blur-md sm:text-[12px]">
                <span className="bg-orange h-2 w-2 animate-pulse" />
                About Reconn
              </span>
              <h1 className="my-6 max-w-[900px] text-[clamp(38px,11vw,52px)] leading-[0.98] font-extrabold tracking-[-.03em] sm:my-8 sm:text-[clamp(52px,min(7vw,11vh),108px)]">
                ROOTED IN
                <br />
                AGRICULTURE.
                <br />
                <span className="text-[#4fbf7e]">DRIVEN BY</span> <span className="text-gradient-orange-red">QUALITY.</span>
              </h1>
              <p className="m-0 max-w-[560px] text-[15px] leading-[1.7] text-white/80 sm:text-[18px]">
                A focused agro and food company built around careful sourcing, consistent processes and clear business conversations.
              </p>
            </Reveal>
          </div>
          <div className="relative z-[2] border-t border-white/15 bg-black/25 backdrop-blur-md">
            <div className="mx-auto grid max-w-[1400px] grid-cols-3 px-5 sm:px-[7vw]">
              {heroStats.map((st, i) => (
                <div key={st.label} className={`py-4 sm:py-6 ${i > 0 ? 'border-l border-white/15 pl-4 sm:pl-8' : ''}`}>
                  <p className="m-0 text-[26px] leading-none font-extrabold sm:text-[44px]">{st.n}</p>
                  <p className="m-0 mt-2 text-[10px] font-bold tracking-[.12em] text-white/65 uppercase sm:text-[12px]">{st.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section
          className={`${screenH} mx-auto grid max-w-[1400px] grid-cols-1 content-center items-center gap-14 px-5 py-16 sm:px-[7vw] sm:py-20 lg:grid-cols-[1fr_1.05fr] lg:gap-[6vw]`}
        >
          <div className="relative">
            <div className="border-forest pointer-events-none absolute -right-3 -bottom-3 h-full w-full border-2 sm:-right-5 sm:-bottom-5" />
            <ImageReveal
              src={visualImage}
              alt="Agro sourcing and manufacturing"
              sizes="45vw"
              className="relative h-[340px] sm:h-[460px] lg:h-[520px]"
            />
            <div className="bg-forest absolute top-0 left-0 z-10 px-5 py-4 text-white">
              <p className="m-0 text-[11px] font-bold tracking-[.16em] uppercase">Field</p>
              <p className="m-0 text-[20px] leading-none font-extrabold">→ Finished</p>
            </div>
          </div>
          <Reveal>
            <span className="text-forest inline-flex items-center gap-2 text-[13px] font-bold tracking-[.16em] uppercase">Our Story</span>
            <h2 className="my-6 text-[30px] leading-[1.1] font-extrabold tracking-[-.03em] sm:text-[clamp(34px,3.6vw,50px)]">
              An agro and food manufacturing company focused on <span className="text-forest">quality products</span>, consistent processes
              and clear business conversations.
            </h2>
            <div className="border-orange border-l-[3px] pl-5">
              <p className="text-muted m-0 max-w-[560px] text-[15px] leading-[1.75] sm:text-[17px]">
                We use a considered approach to agro manufacturing, keeping attention on sourcing, process consistency, hygiene and
                presentation. We do not make claims beyond the information provided — our focus is building dependable agro products and
                making it easy for businesses to start a conversation.
              </p>
            </div>
          </Reveal>
        </section>

        {/* OUR APPROACH */}
        <section className={`${screenH} bg-off-white flex items-center px-5 py-16 sm:px-[7vw] sm:py-20`}>
          <div className="mx-auto w-full max-w-[1400px]">
            <Reveal className="max-w-[720px]">
              <span className="text-forest inline-flex items-center gap-2 text-[13px] font-bold tracking-[.16em] uppercase">
                Our Approach
              </span>
              <h2 className="my-5 text-[38px] leading-[1.02] font-extrabold tracking-[-.03em] sm:text-[clamp(44px,4.6vw,64px)]">
                FOUR THINGS
                <br />
                WE HOLD TO.
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {approachPoints.map((p, i) => (
                <Reveal
                  key={p.n}
                  delay={i * 0.07}
                  className="group border-line hover:border-forest hover:bg-forest relative min-h-[230px] overflow-hidden border bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_-20px_rgba(16,36,27,0.45)] lg:min-h-[320px]"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-2 -bottom-8 text-[160px] leading-none font-extrabold tracking-[-.06em] text-transparent transition-all duration-500 [-webkit-text-stroke:1.5px_rgba(23,77,50,0.18)] group-hover:-translate-y-3 group-hover:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.5)] sm:text-[190px]"
                  >
                    {p.n}
                  </span>
                  <span className="text-forest group-hover:text-orange relative text-[14px] font-extrabold tracking-[.14em] transition-colors duration-500">
                    {p.n}
                  </span>
                  <h3 className="relative m-0 mt-10 text-[26px] font-extrabold tracking-[-.02em] transition-colors duration-500 group-hover:text-white sm:text-[28px]">
                    {p.title}
                  </h3>
                  <p className="text-muted relative m-0 mt-3 max-w-[260px] text-[15px] leading-[1.65] transition-colors duration-500 group-hover:text-white/80">
                    {p.copy}
                  </p>
                  <div className="bg-orange absolute bottom-0 left-0 h-[3px] w-0 transition-[width] duration-500 group-hover:w-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SCROLL-REVEAL STATEMENT */}
        <section className="bg-charcoal relative text-white">
          <div className="from-blue to-purple pointer-events-none absolute top-[20%] right-[-100px] h-[300px] w-[300px] bg-gradient-to-br opacity-[0.16] blur-[110px]" />
          <TextRevealByWord
            text={[
              { text: 'QUALITY IS NOT', className: 'text-white' },
              { text: 'ONE STEP.', className: 'text-white' },
              { text: 'IT IS', className: 'text-white' },
              { text: 'EVERY STEP.', className: 'text-[#4fbf7e]' },
            ]}
          />
        </section>

        {/* QUALITY FOCUS */}
        <section className={`${screenH} mx-auto flex max-w-[1400px] items-center px-5 py-16 sm:px-[7vw] sm:py-20`}>
          <div className="w-full">
            <SectionTitle eyebrow="Quality focus" title={<>Quality is built into every decision.</>} />
            <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-3">
              {qualityFocusPoints.map((p, i) => (
                <Reveal
                  key={p.title}
                  delay={i * 0.08}
                  className="group border-line hover:border-forest bg-cream/60 relative border-t-[3px] p-7 transition-all duration-500 hover:-translate-y-2 sm:p-9"
                >
                  <span className="text-forest/25 group-hover:text-orange block text-[64px] leading-none font-extrabold transition-colors duration-500 sm:text-[80px]">
                    0{i + 1}
                  </span>
                  <h3 className="m-0 mt-6 text-[22px] font-extrabold tracking-[-.01em] sm:text-[26px]">{p.title}</h3>
                  <p className="text-muted m-0 mt-3 text-[15px] leading-[1.7] sm:text-[16px]">{p.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCT CATEGORIES */}
        <section className={`${screenH} bg-cream flex items-center px-5 py-16 sm:px-[7vw] sm:py-20`}>
          <div className="mx-auto w-full max-w-[1400px]">
            <SectionTitle
              eyebrow="Our categories"
              title={
                <>
                  Agro products across
                  <br />
                  essential categories.
                </>
              }
              copy="Explore ghee, honey, edible oils and spices, then connect with the Reconn team for product information."
            />
            <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((c) => (
                <CategoryCard key={c.slug} category={c} className="h-[280px] sm:h-[340px]" />
              ))}
            </div>
            <div className="mt-10">
              <Button href="/products" large>
                Explore Products
              </Button>
            </div>
          </div>
        </section>

        {/* MANUFACTURING APPROACH */}
        <section
          className={`${screenH} bg-light-green grid grid-cols-1 content-center items-center gap-12 px-5 py-16 sm:px-[7vw] sm:py-20 lg:grid-cols-2 lg:gap-[7vw]`}
          id="manufacturing"
        >
          <div className="max-w-[560px]">
            <span className="text-forest inline-flex items-center gap-2 text-[13px] font-bold tracking-[.16em] uppercase">
              Manufacturing Approach
            </span>
            <h2 className="my-6 text-[38px] leading-[1.02] font-extrabold tracking-[-.03em] sm:text-[clamp(44px,4.6vw,64px)]">
              BUILT FOR
              <br />
              BUSINESS NEEDS.
            </h2>
            <p className="text-muted m-0 text-[15px] leading-[1.75] sm:text-[18px]">
              Our product categories are shaped around everyday agro requirements and the details that support consistent presentation.
            </p>
          </div>
          <div className="border-line border-t">
            {['Quality focus', 'Process consistency', 'Hygiene & care', 'Business readiness'].map((item, i) => (
              <Reveal
                key={item}
                className="group hover:bg-forest border-line grid grid-cols-[52px_1fr] items-center gap-4 border-b px-3 py-6 transition-all duration-300 hover:pl-6 sm:grid-cols-[70px_1fr] sm:py-8"
                delay={i * 0.08}
              >
                <span className="text-forest text-[15px] font-extrabold transition-colors duration-300 group-hover:text-white/70">
                  0{i + 1}
                </span>
                <h3 className="m-0 text-[20px] font-extrabold tracking-[-.02em] transition-colors duration-300 group-hover:text-white sm:text-[26px]">
                  {item}
                </h3>
              </Reveal>
            ))}
          </div>
        </section>

        {/* BUSINESS CTA */}
        <section className={`${screenH} bg-charcoal relative flex items-center overflow-hidden px-5 py-16 text-white sm:px-[7vw] sm:py-20`}>
          <div className="from-orange to-red pointer-events-none absolute -top-20 -right-20 h-[420px] w-[420px] bg-gradient-to-br opacity-[0.2] blur-[130px]" />
          <div className="from-blue to-purple pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] bg-gradient-to-br opacity-[0.14] blur-[110px]" />
          <Reveal className="relative mx-auto w-full max-w-[1400px]">
            <div className="max-w-[860px]">
              <h2 className="text-[40px] leading-[1] font-extrabold tracking-[-.03em] sm:text-[clamp(52px,6.4vw,92px)]">
                LOOKING FOR A
                <br />
                PRODUCT <span className="text-gradient-orange-red">PARTNER?</span>
              </h2>
              <p className="m-0 mt-7 mb-10 max-w-[560px] text-[15px] leading-[1.75] text-white/70 sm:text-[18px]">
                Connect with the Reconn team for product information, bulk requirements, distribution or general business enquiries.
              </p>
              <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center [&_a]:w-full sm:[&_a]:w-auto">
                <Button href="/contact" large>
                  Business Enquiry
                </Button>
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center gap-2 text-[14px] font-bold tracking-[.04em] text-white uppercase sm:justify-start"
                >
                  Explore Products
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  )
}
