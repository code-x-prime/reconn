import Image from 'next/image'
import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { Button, HeroImage, ImageReveal, Reveal, SectionTitle } from '@/components/site'
import { HeroShowcase } from '@/components/hero-showcase'
import { ProductShowcase } from '@/components/product-showcase'
import { QualityGrid } from '@/components/quality-grid'
import { CategoryPanels } from '@/components/products-view'
import { TextRevealByWord } from '@/components/ui/text-reveal'
import { categories } from '@/data/products'

export const metadata = {
  title: 'RECONN | Agro India Pvt. Ltd.',
  description: 'Reconn Agro India Pvt. Ltd. — quality-focused agro and food products across Ghee, Honey, Edible Oils and Spices.',
}

const heroImage = '/images/home-hero-new.png'
const aboutImage = '/images/reconn/home-who.webp'
const manufacturingImage = '/images/home-manufacturing-new.jpg'

const aboutParagraphs = [
  'Reconn Agro India Pvt. Ltd. is a forward-thinking FMCG company with a mission to reconnect people with nature through food.',
  'We are dedicated to creating pure, natural, and health-oriented products that inspire everyday wellness, while staying true to authenticity, sustainability, and transparency.',
]

const certifications = [
  { file: 'iso-9001', alt: 'ISO 9001:2015', w: 150, h: 196 },
  { file: 'iso-22000', alt: 'ISO 22000:2018', w: 160, h: 196 },
  { file: 'fssai', alt: 'FSSAI', w: 205, h: 196 },
  { file: 'fda', alt: 'FDA', w: 208, h: 196 },
  { file: 'gmp', alt: 'GMP Certified - Good Manufacturing Practice', w: 191, h: 196 },
  { file: 'international-accurate', alt: 'International Accurate Certified', w: 189, h: 196 },
  { file: 'haccp', alt: 'HACCP Certified', w: 186, h: 196 },
]

const aboutLabels = ['Quality Focus', 'Consistent Approach', 'Multiple Product Categories']

const manufacturingSteps = [
  { title: 'Ingredient Selection', copy: 'Attention to the inputs that form the foundation of every product category.' },
  { title: 'Processing', copy: 'A structured approach focused on consistency and product quality.' },
  { title: 'Quality Checks', copy: 'Attention to consistency throughout the product journey.' },
  { title: 'Packaging', copy: 'Careful presentation of the finished product.' },
]

const processSteps = [
  { title: 'Select', copy: 'Careful attention to product inputs and sourcing.' },
  { title: 'Process', copy: 'Structured, quality-focused production.' },
  { title: 'Check', copy: 'Consistency verified at every stage.' },
  { title: 'Package', copy: 'Considered, careful presentation.' },
  { title: 'Present', copy: 'Ready for business and everyday use.' },
]

const qualityRows = [
  { n: '01', title: 'Quality Focus', copy: 'An approach centred around product quality and consistency.' },
  { n: '02', title: 'Careful Selection', copy: 'Attention to the ingredients and categories we work with.' },
  { n: '03', title: 'Consistent Process', copy: 'A structured approach from input to finished product.' },
  { n: '04', title: 'Product Integrity', copy: 'Focused on delivering a consistent product experience.' },
]

export default function Home() {
  return (
    <>
      <main className="overflow-x-clip">
        {/* 01 HERO */}
        <section className="bg-charcoal relative flex h-[calc(100svh-71px)] items-center overflow-hidden text-white sm:h-[calc(100svh-87px)]">
          <HeroImage
            src={heroImage}
            alt="Farmland and food processing facility at sunrise"
            className="[&_img]:object-[68%_center] sm:[&_img]:object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,#10241bf2_0%,#10241bcc_45%,#10241b66_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#10241b] to-transparent" />
          <div className="from-blue to-purple pointer-events-none absolute top-[-100px] right-[-60px] h-[340px] w-[340px] rounded-full bg-gradient-to-br opacity-[0.2] blur-[110px]" />
          <div className="from-orange to-red pointer-events-none absolute bottom-[10%] left-[-60px] h-[240px] w-[240px] rounded-full bg-gradient-to-br opacity-[0.16] blur-[100px]" />
          <div className="relative z-[2] mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-4 px-5 py-6 sm:px-[7vw] sm:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-[4vw]">
            <Reveal>
              <span className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-bold tracking-[.16em] text-white/85 uppercase backdrop-blur-md sm:text-[12px]">
                <span className="bg-orange h-2 w-2 animate-pulse rounded-full" />
                Reconn Agro India Pvt. Ltd.
              </span>
              <h1 className="my-4 text-[clamp(34px,10.5vw,46px)] leading-[0.98] font-extrabold tracking-[-.03em] sm:my-6 sm:text-[clamp(48px,min(6.6vw,10.5vh),96px)]">
                QUALITY FROM
                <br />
                <span className="text-[#4fbf7e]">FIELD</span> TO FINISHED
                <br />
                <span className="text-gradient-orange-red">PRODUCT.</span>
              </h1>
              <p className="mb-6 max-w-[600px] text-[14px] leading-[1.6] text-white/80 sm:mb-8 sm:text-[17px] sm:leading-[1.7] lg:text-[clamp(15px,2.3vh,19px)]">
                Reconn brings together quality-focused food categories including Ghee, Honey, Edible Oils and Spices, with an approach
                centred around consistency, care and everyday use.
              </p>
              <div className="flex flex-row items-stretch gap-3 sm:items-center sm:gap-4 [&_a]:flex-1 [&_a]:justify-center sm:[&_a]:flex-none">
                <Button href="/products" large>
                  Explore Products
                </Button>
                <Button href="/contact" light large>
                  Business Enquiry
                </Button>
              </div>
              <div className="mt-6 hidden flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-[12px] font-bold tracking-[.12em] text-white/70 uppercase sm:flex lg:mt-8">
                <span>Ghee</span>
                <span className="text-orange">•</span>
                <span>Honey</span>
                <span className="text-orange">•</span>
                <span>Edible Oils</span>
                <span className="text-orange">•</span>
                <span>Spices</span>
              </div>
            </Reveal>
            <HeroShowcase categories={categories} />
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="bg-white px-5 pt-8 pb-2 sm:px-[7vw] sm:pt-12 sm:pb-4">
          <Reveal className="mx-auto max-w-[1400px]">
            <p className="text-forest m-0 mb-5 text-center text-[11px] font-bold tracking-[.18em] uppercase sm:mb-8 sm:text-[12px]">
              Certifications &amp; standards
            </p>
            <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-x-6 gap-y-5 p-0 sm:gap-x-10 lg:gap-x-14">
              {certifications.map((c) => (
                <li key={c.file} className="flex items-center">
                  <Image
                    src={`/images/reconn/certifications/${c.file}.png`}
                    alt={c.alt}
                    width={c.w}
                    height={c.h}
                    className="h-14 w-auto sm:h-[84px] lg:h-24"
                  />
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* 02 ABOUT RECONN */}
        <section className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 px-5 py-10 sm:gap-12 sm:px-[7vw] sm:py-14 lg:grid-cols-[1.1fr_1fr] lg:gap-[6vw] lg:py-16">
          <ImageReveal
            src={aboutImage}
            alt="A mother and daughter at a sunlit kitchen table with Reconn ghee, honey and mustard oil, farm fields outside the window"
            sizes="55vw"
            className="mx-auto aspect-[4/5] w-full max-w-[520px] lg:mx-0 lg:aspect-auto lg:min-h-[560px] lg:max-w-none lg:self-stretch"
          />
          <Reveal>
            <span className="text-forest inline-flex items-center gap-2 text-[13px] font-bold tracking-[.16em] uppercase">Who We Are</span>
            <h2 className="my-6 text-[40px] leading-[1.02] font-extrabold tracking-[-.03em] sm:text-[clamp(44px,4.6vw,64px)]">
              FROM FARMERS
              <br />
              TO FAMILIES, NATURALLY.
            </h2>
            <div className="flex flex-col gap-5">
              {aboutParagraphs.map((p) => (
                <p key={p} className="text-muted m-0 max-w-[560px] text-[16px] leading-[1.75] sm:text-[18px]">
                  {p}
                </p>
              ))}
            </div>
            <div className="border-t-line mt-10 grid grid-cols-1 gap-6 border-t pt-8 sm:grid-cols-3">
              {aboutLabels.map((label, i) => (
                <Reveal key={label} delay={i * 0.08}>
                  <p className="text-forest m-0 text-[17px] leading-[1.3] font-extrabold tracking-[-.01em] uppercase sm:text-[19px]">
                    {label}
                  </p>
                </Reveal>
              ))}
            </div>
            <Link
              href="/about"
              className="text-forest group mt-10 inline-flex items-center gap-2 text-[14px] font-bold tracking-[.04em] uppercase"
            >
              About Reconn
              <HugeiconsIcon icon={ArrowRight01Icon} size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </section>

        {/* 03 PRODUCT CATEGORIES */}
        <section className="bg-cream flex min-h-[calc(100svh-71px)] items-center px-5 py-14 sm:min-h-[calc(100svh-87px)] sm:px-[7vw] sm:py-16">
          <div className="mx-auto w-full max-w-[1400px]">
            <SectionTitle
              eyebrow="Our range"
              title={
                <>
                  EVERYDAY FOOD
                  <br />
                  CATEGORIES.
                </>
              }
              copy="Explore the product categories that form the Reconn range."
            />
            <div className="mt-12 h-[520px] sm:mt-16 sm:h-[440px] lg:h-[500px]">
              <CategoryPanels />
            </div>
          </div>
        </section>

        {/* 04 MANUFACTURING CAPABILITIES */}
        <section
          className="mx-auto grid min-h-[calc(100svh-71px)] max-w-[1400px] grid-cols-1 content-center items-center gap-10 px-5 py-14 sm:min-h-[calc(100svh-87px)] sm:px-[7vw] sm:py-16 lg:grid-cols-2 lg:gap-[6vw]"
          id="manufacturing"
        >
          <ImageReveal
            src={manufacturingImage}
            alt="Modern food processing and quality control"
            sizes="50vw"
            className="mx-auto aspect-[4/5] w-full max-w-[520px] lg:mx-0 lg:aspect-auto lg:min-h-[560px] lg:max-w-none lg:self-stretch"
          />
          <Reveal>
            <span className="text-forest inline-flex items-center gap-2 text-[13px] font-bold tracking-[.16em] uppercase">
              Manufacturing
            </span>
            <h2 className="my-6 text-[40px] leading-[1.02] font-extrabold tracking-[-.03em] sm:text-[clamp(44px,4.6vw,64px)]">
              FROM INGREDIENT
              <br />
              TO FINISHED PRODUCT.
            </h2>
            <p className="text-muted m-0 mb-10 max-w-[560px] text-[16px] leading-[1.75] sm:text-[18px]">
              Our approach brings together careful ingredient selection, structured processing, quality-focused checks and considered
              product presentation.
            </p>
            <div className="flex flex-col">
              {manufacturingSteps.map((step, i) => (
                <Reveal
                  key={step.title}
                  delay={i * 0.07}
                  className="border-line group hover:border-forest relative flex items-start gap-7 border-b py-8 transition-colors duration-300"
                >
                  <span className="group-hover:text-forest text-muted w-10 flex-none text-[15px] font-bold transition-colors duration-300">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="m-0 text-[20px] font-bold tracking-[-.01em] sm:text-[22px]">{step.title}</h3>
                    <p className="text-muted m-0 mt-2 max-w-[440px] text-[15px] leading-[1.65] sm:text-[16px]">{step.copy}</p>
                  </div>
                  <div className="bg-forest absolute bottom-[-1px] left-0 h-[2px] w-0 transition-[width] duration-500 group-hover:w-full" />
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>

        {/* 05 PROCESS */}
        <section className="bg-off-white flex min-h-[calc(100svh-71px)] items-center px-5 py-14 sm:min-h-[calc(100svh-87px)] sm:px-[7vw] sm:py-16">
          <div className="mx-auto w-full max-w-[1400px]">
            <SectionTitle
              eyebrow="Product journey"
              title={
                <>
                  HOW WE APPROACH
                  <br />
                  THE PRODUCT JOURNEY.
                </>
              }
              copy="From ingredients to finished presentation, each stage contributes to the final product experience."
            />
            <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5">
              {processSteps.map((step, i) => (
                <Reveal
                  key={step.title}
                  delay={i * 0.08}
                  className={`group border-line hover:bg-forest hover:border-forest relative min-h-[220px] overflow-hidden border bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_-20px_rgba(16,36,27,0.45)] sm:min-h-[260px] sm:p-7 lg:min-h-[340px] ${i === processSteps.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                >
                  <span
                    aria-hidden
                    className="text-forest/10 pointer-events-none absolute -right-2 -bottom-6 text-[150px] leading-none font-extrabold tracking-[-.05em] transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 group-hover:text-white/15 sm:text-[180px] lg:text-[170px]"
                  >
                    {i + 1}
                  </span>
                  <span className="bg-forest/10 text-forest group-hover:text-forest relative flex h-11 w-11 items-center justify-center rounded-full text-[15px] font-extrabold transition-colors duration-500 group-hover:bg-white">
                    0{i + 1}
                  </span>
                  <h3 className="relative mt-6 mb-2 text-[22px] font-bold tracking-[-.01em] transition-colors duration-500 group-hover:text-white sm:text-[24px]">
                    {step.title}
                  </h3>
                  <p className="text-muted relative m-0 max-w-[260px] text-[15px] leading-[1.6] transition-colors duration-500 group-hover:text-white/80 sm:text-[16px]">
                    {step.copy}
                  </p>
                  <div className="bg-orange absolute bottom-0 left-0 h-[3px] w-0 transition-[width] duration-500 group-hover:w-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 06 BRAND STATEMENT */}
        <section className="bg-off-white relative">
          <div className="pointer-events-none sticky top-0 h-0">
            <div className="from-blue to-purple absolute top-[50vh] left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br opacity-[0.09] blur-[130px]" />
          </div>
          <TextRevealByWord
            text={[
              { text: 'ROOTED IN', className: 'text-ink' },
              { text: 'AGRICULTURE.', className: 'text-forest' },
              { text: 'BUILT FOR', className: 'text-ink' },
              { text: 'EVERYDAY LIFE.', className: 'text-gradient-orange-red' },
            ]}
          />
        </section>

        {/* 07 PRODUCT RANGE */}
        <section className="bg-white px-5 py-16 sm:px-[7vw] sm:py-24 lg:py-[110px]">
          <ProductShowcase />
        </section>

        {/* 08 QUALITY APPROACH */}
        <section className="bg-charcoal relative flex min-h-[calc(100svh-71px)] items-center overflow-hidden px-5 py-14 text-white sm:min-h-[calc(100svh-87px)] sm:px-[7vw] sm:py-16">
          <div className="from-blue to-purple pointer-events-none absolute top-[10%] right-[-100px] h-[300px] w-[300px] rounded-full bg-gradient-to-br opacity-[0.16] blur-[110px]" />
          <div className="from-orange to-red pointer-events-none absolute bottom-[-80px] left-[-80px] h-[280px] w-[280px] rounded-full bg-gradient-to-br opacity-[0.14] blur-[110px]" />
          <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-[5vw]">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <span className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[.16em] text-white/60 uppercase">Quality</span>
              <h2 className="my-6 text-[44px] leading-[1] font-extrabold tracking-[-.03em] sm:text-[clamp(52px,5.6vw,84px)]">
                QUALITY
                <br />
                AT EVERY
                <br />
                <span className="text-gradient-orange-red">STEP.</span>
              </h2>
              <p className="m-0 max-w-[460px] text-[16px] leading-[1.75] text-white/70 sm:text-[18px]">
                Quality is approached as an ongoing part of the product journey — from inputs and processing to the final presentation.
              </p>
              <div className="via-orange to-red mt-8 h-[3px] w-24 bg-gradient-to-r from-transparent" />
            </Reveal>
            <QualityGrid rows={qualityRows} />
          </div>
        </section>

        {/* 09 BUSINESS ENQUIRY */}
        <section className="bg-off-white relative flex min-h-[calc(100svh-71px)] items-center overflow-hidden px-5 py-14 sm:min-h-[calc(100svh-87px)] sm:px-[7vw] sm:py-16">
          <div className="from-orange to-red pointer-events-none absolute top-[-80px] right-[-80px] h-[420px] w-[420px] rounded-full bg-gradient-to-br opacity-[0.14] blur-[130px] sm:h-[520px] sm:w-[520px]" />
          <Reveal className="relative mx-auto w-full max-w-[1400px]">
            <div className="max-w-[720px]">
              <h2 className="text-[42px] leading-[1] font-extrabold tracking-[-.03em] sm:text-[clamp(52px,6.6vw,84px)]">
                LOOKING FOR
                <br />
                A PRODUCT
                <br />
                PARTNER?
              </h2>
              <p className="text-muted relative m-0 mt-8 mb-10 max-w-[540px] text-[16px] leading-[1.75] sm:text-[19px]">
                Connect with the Reconn team for product information, bulk requirements, distribution, dealership or general business
                enquiries.
              </p>
              <div className="relative flex flex-col items-stretch gap-4 sm:flex-row sm:items-center [&_a]:w-full sm:[&_a]:w-auto">
                <Button href="/contact" large>
                  Send a Business Enquiry
                </Button>
                <Button href="/contact" light large>
                  Contact Us
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  )
}
