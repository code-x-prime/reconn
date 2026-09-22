import { CategoryPanels, ProductCatalog } from '@/components/products-view'
import { Button, Reveal, SectionTitle } from '@/components/site'

export const metadata = {
  title: 'RECONN Products | Ghee, Honey, Edible Oils & Spices',
  description: 'Explore the Reconn Agro India Pvt. Ltd. product range across Ghee, Honey, Edible Oils and Spices.',
}

const screenH = 'min-h-[calc(100svh-71px)] sm:min-h-[calc(100svh-87px)]'

export default function Products() {
  return (
    <>
      <main className="overflow-x-clip">
        {/* HERO */}
        <section className={`${screenH} bg-charcoal relative flex flex-col overflow-hidden text-white`}>
          <div className="from-orange to-red pointer-events-none absolute -top-24 -right-20 h-[360px] w-[360px] bg-gradient-to-br opacity-[0.2] blur-[120px]" />
          <div className="from-blue to-purple pointer-events-none absolute bottom-[30%] -left-24 h-[280px] w-[280px] bg-gradient-to-br opacity-[0.14] blur-[110px]" />

          <div className="relative mx-auto w-full max-w-[1400px] px-5 pt-10 pb-8 sm:px-[7vw] sm:pt-14 sm:pb-10">
            <Reveal className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <span className="inline-flex items-center gap-3 border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-bold tracking-[.16em] text-white/85 uppercase backdrop-blur-md sm:text-[12px]">
                  <span className="bg-orange h-2 w-2 animate-pulse" />
                  Our product range
                </span>
                <h1 className="mt-6 mb-0 text-[clamp(38px,11vw,52px)] leading-[0.98] font-extrabold tracking-[-.03em] sm:text-[clamp(52px,min(6.6vw,10vh),96px)]">
                  AGRO ESSENTIALS.
                  <br />
                  <span className="text-gradient-orange-red">BUILT FOR INDUSTRY.</span>
                </h1>
              </div>
              <p className="m-0 max-w-[400px] text-[15px] leading-[1.7] text-white/75 sm:text-[17px]">
                A quality-focused collection engineered for everyday needs and business requirements.
              </p>
            </Reveal>
          </div>

          <div className="relative mx-auto w-full max-w-[1400px] flex-1 px-5 pb-8 sm:px-[7vw] sm:pb-12">
            <CategoryPanels />
          </div>
        </section>

        {/* CATALOG */}
        <section className="bg-off-white px-5 py-16 sm:px-[7vw] sm:py-24">
          <div className="mx-auto max-w-[1400px]">
            <SectionTitle
              eyebrow="Browse the collection"
              title={
                <>
                  MADE FOR <i>everyday quality.</i>
                </>
              }
              copy="Filter by category, then open a product to make an enquiry."
            />
            <div className="mt-10 sm:mt-14">
              <ProductCatalog />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`${screenH} bg-charcoal relative flex items-center overflow-hidden px-5 py-16 text-white sm:px-[7vw] sm:py-20`}>
          <div className="from-orange to-red pointer-events-none absolute -top-20 -right-20 h-[420px] w-[420px] bg-gradient-to-br opacity-[0.2] blur-[130px]" />
          <Reveal className="relative mx-auto w-full max-w-[1400px]">
            <div className="max-w-[860px]">
              <h2 className="text-[38px] leading-[1] font-extrabold tracking-[-.03em] sm:text-[clamp(48px,6vw,86px)]">
                NEED A PRODUCT
                <br />
                <span className="text-gradient-orange-red">FOR YOUR BUSINESS?</span>
              </h2>
              <p className="m-0 mt-7 mb-10 max-w-[560px] text-[15px] leading-[1.75] text-white/70 sm:text-[18px]">
                Connect with the Reconn team for product information, bulk requirements, distribution or dealership enquiries.
              </p>
              <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center [&_a]:w-full sm:[&_a]:w-auto">
                <Button href="/contact" large>
                  Send a Business Enquiry
                </Button>
                <Button href="/about" light large>
                  About Reconn
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  )
}
