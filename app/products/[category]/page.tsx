import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { Button, Reveal, SectionTitle } from '@/components/site'
import { categories, categoryCopy, getCategoryProducts, productHref } from '@/data/products'

const screenH = 'min-h-[calc(100svh-71px)] sm:min-h-[calc(100svh-87px)]'

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const c = categories.find((item) => item.slug === category)
  return { title: `${c?.name ?? 'Products'} | RECONN`, description: categoryCopy[category]?.intro }
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const data = categories.find((c) => c.slug === category)
  const copy = categoryCopy[category]
  if (!data || !copy) notFound()
  const related = categories.filter((c) => c.slug !== category)
  const items = getCategoryProducts(category)
  const vars = { '--accent': copy.accentHex } as React.CSSProperties

  return (
    <>
      <main className="overflow-x-clip" style={vars}>
        {/* HERO */}
        <section className={`${screenH} bg-charcoal relative flex flex-col justify-end overflow-hidden text-white`}>
          <Image src={copy.productImage} alt={`${data.name} product`} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,#10241bf2_0%,#10241bb0_45%,#10241b33_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#10241b] to-transparent" />
          <div className="pointer-events-none absolute top-[6%] right-[-80px] h-[320px] w-[320px] bg-[var(--accent)] opacity-[0.25] blur-[120px]" />

          <div className="relative z-[2] mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-5 pt-10 sm:px-[7vw]">
            <Reveal>
              <span className="inline-flex items-center gap-3 border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-bold tracking-[.16em] text-white/85 uppercase backdrop-blur-md sm:text-[12px]">
                <span className="h-2 w-2 animate-pulse bg-[var(--accent)]" />
                Reconn / {data.name}
              </span>
              <h1 className="my-6 max-w-[900px] text-[clamp(34px,10vw,48px)] leading-[0.98] font-extrabold tracking-[-.03em] sm:my-8 sm:text-[clamp(48px,min(6.4vw,10.5vh),96px)]">
                {copy.title}
              </h1>
              <p className="m-0 max-w-[520px] text-[15px] leading-[1.7] text-white/80 sm:text-[18px]">{copy.intro}</p>
              <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center [&_a]:w-full sm:[&_a]:w-auto">
                <Button href="/contact" large>
                  Enquire About {data.name}
                </Button>
                <Button href="#products" light large>
                  View Products
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="relative z-[2] border-t border-white/15 bg-black/25 backdrop-blur-md">
            <div className="mx-auto grid max-w-[1400px] grid-cols-3 px-5 sm:px-[7vw]">
              {[
                { n: data.number, label: 'Category' },
                { n: String(items.length).padStart(2, '0'), label: 'Products' },
                { n: '01', label: 'Quality Standard' },
              ].map((st, i) => (
                <div key={st.label} className={`py-4 sm:py-6 ${i > 0 ? 'border-l border-white/15 pl-4 sm:pl-8' : ''}`}>
                  <p className="m-0 text-[26px] leading-none font-extrabold text-[var(--accent)] sm:text-[44px]">{st.n}</p>
                  <p className="m-0 mt-2 text-[10px] font-bold tracking-[.12em] text-white/65 uppercase sm:text-[12px]">{st.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className={`${screenH} bg-off-white relative flex items-center overflow-hidden px-5 py-16 sm:px-[7vw] sm:py-20`}>
          <span
            aria-hidden
            className="pointer-events-none absolute -right-4 -bottom-16 text-[260px] leading-none font-extrabold tracking-[-.06em] text-transparent [-webkit-text-stroke:1.5px_color-mix(in_srgb,var(--accent)_35%,transparent)] sm:text-[420px] lg:text-[560px]"
          >
            {data.number}
          </span>
          <div className="relative mx-auto w-full max-w-[1400px]">
            <Reveal className="max-w-[1000px]">
              <span className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[.16em] text-[var(--accent)] uppercase">
                Product introduction
              </span>
              <p className="text-ink my-6 text-[26px] leading-[1.25] font-extrabold tracking-[-.02em] sm:text-[clamp(32px,3.8vw,56px)]">
                {copy.intro}
              </p>
              <div className="h-[4px] w-24 bg-[var(--accent)]" />
              <p className="text-muted mt-8 max-w-[560px] text-[15px] leading-[1.75] sm:text-[18px]">{copy.usageContext}</p>
            </Reveal>
          </div>
        </section>

        {/* SOURCE VISUAL + JOURNEY */}
        <section className={`${screenH} relative flex flex-col justify-end overflow-hidden text-white`}>
          <Image src={copy.sourceImage} alt={`${data.name} source`} fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#10241b99_0%,#10241b55_35%,#10241bee_100%)]" />
          <div className="relative z-[2] mx-auto flex w-full max-w-[1400px] flex-1 items-center px-5 pt-16 sm:px-[7vw]">
            <Reveal className="max-w-[780px]">
              <h2 className="text-[34px] leading-[1.02] font-extrabold tracking-[-.03em] sm:text-[clamp(40px,5vw,72px)]">
                {copy.visualHeading}
              </h2>
            </Reveal>
          </div>
          <div className="relative z-[2] mx-auto w-full max-w-[1400px] px-5 pb-8 sm:px-[7vw] sm:pb-12">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {copy.steps.map((st, i) => (
                <Reveal
                  key={st.title}
                  delay={i * 0.1}
                  className="group relative overflow-hidden border border-white/20 bg-white/10 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/40 sm:p-7"
                >
                  <span className="text-[13px] font-extrabold tracking-[.14em] text-[var(--accent)]">0{i + 1}</span>
                  <h3 className="m-0 mt-3 text-[20px] font-extrabold tracking-[-.01em] sm:text-[24px]">{st.title}</h3>
                  <p className="m-0 mt-2 text-[14px] leading-[1.6] text-white/75 sm:text-[15px]">{st.copy}</p>
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--accent)] transition-[width] duration-500 group-hover:w-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="bg-cream scroll-mt-24 px-5 py-16 sm:px-[7vw] sm:py-24">
          <div className="mx-auto max-w-[1400px]">
            <SectionTitle
              eyebrow="Product information"
              title={
                <>
                  The {data.name.toLowerCase()} <i>range.</i>
                </>
              }
              copy="Explore the category, then contact our team for product information and business requirements."
            />
            <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <Link
                    href={productHref(p)}
                    className="group bg-charcoal relative block h-[380px] overflow-hidden text-white sm:h-[440px]"
                  >
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width:640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,#10241bf2_100%)]" />
                    <div className="absolute top-0 left-0 h-[5px] w-24 bg-[var(--accent)] transition-[width] duration-500 group-hover:w-full" />
                    <span className="absolute top-5 left-5 border border-white/30 bg-white/10 px-3 py-1.5 text-[11px] font-bold tracking-[.14em] uppercase backdrop-blur-md">
                      {p.category}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                      <h3 className="m-0 text-[26px] leading-[1.05] font-extrabold tracking-[-.02em] sm:text-[30px]">{p.name}</h3>
                      <p className="m-0 mt-2 text-[14px] leading-[1.6] text-white/75 sm:text-[15px]">{p.description}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold tracking-[.06em] text-[var(--accent)] uppercase">
                        View Product
                        <HugeiconsIcon
                          icon={ArrowRight01Icon}
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-[7vw] sm:py-24">
          <SectionTitle eyebrow="Explore more" title={<>Related categories.</>} />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {related.map((c) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className="group bg-charcoal relative flex h-[240px] items-end overflow-hidden p-6 sm:h-[300px]"
              >
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <span className="absolute top-5 right-5 text-[56px] leading-none font-extrabold text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.6)]">
                  {c.number}
                </span>
                <div className="relative flex w-full items-center justify-between text-white">
                  <h3 className="m-0 text-[26px] font-extrabold tracking-[-.02em]">{c.name}</h3>
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={22}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </div>
                <div className="bg-orange absolute bottom-0 left-0 h-[3px] w-0 transition-[width] duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={`${screenH} bg-charcoal relative flex items-center overflow-hidden px-5 py-16 text-white sm:px-[7vw] sm:py-20`}>
          <div className="pointer-events-none absolute -top-20 -right-20 h-[420px] w-[420px] bg-[var(--accent)] opacity-[0.22] blur-[130px]" />
          <div className="from-blue to-purple pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] bg-gradient-to-br opacity-[0.14] blur-[110px]" />
          <Reveal className="relative mx-auto w-full max-w-[1400px]">
            <div className="max-w-[860px]">
              <h2 className="text-[38px] leading-[1] font-extrabold tracking-[-.03em] sm:text-[clamp(48px,6vw,86px)]">
                LOOKING FOR
                <br />
                <span className="text-[var(--accent)]">{data.name.toUpperCase()}</span> FOR YOUR
                <br />
                BUSINESS?
              </h2>
              <p className="m-0 mt-7 mb-10 max-w-[560px] text-[15px] leading-[1.75] text-white/70 sm:text-[18px]">
                Connect with the Reconn team for product information, bulk requirements, distribution or dealership enquiries.
              </p>
              <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center [&_a]:w-full sm:[&_a]:w-auto">
                <Button href="/contact" large>
                  Send a Business Enquiry
                </Button>
                <Button href="/products" light large>
                  All Products
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  )
}
