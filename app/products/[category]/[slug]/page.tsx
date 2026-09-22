import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Button, ProductGrid } from '@/components/site'
import { products, getProduct, categorySlug } from '@/data/products'

export function generateStaticParams() {
  return products.map((p) => ({ category: categorySlug(p.category), slug: p.slug }))
}

export default async function ProductDetail({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params
  const product = getProduct(slug)
  if (!product || categorySlug(product.category) !== category) notFound()
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3)

  return (
    <>
      <main>
        <section className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 py-16 sm:px-[7vw] sm:py-24 lg:grid-cols-2 lg:gap-[7vw]">
          <div className="bg-light-green relative h-[360px] sm:h-[460px] lg:h-[560px]">
            <Image src={product.image} alt={product.name} fill priority sizes="50vw" className="object-cover" />
          </div>
          <div>
            <span className="text-forest inline-flex items-center gap-2 text-[13px] font-bold tracking-[.16em] uppercase">
              Reconn / {product.category}
            </span>
            <h1 className="my-6 text-[42px] leading-[1] font-extrabold tracking-[-.03em] sm:text-[clamp(48px,5.6vw,80px)]">
              {product.name}
            </h1>
            <p className="text-muted max-w-[540px] text-[17px] leading-[1.75] sm:text-[19px]">{product.description}</p>
            <h3 className="mt-10 text-[22px] font-bold">Product information</h3>
            <p className="text-muted mt-3 max-w-[540px] text-[16px] leading-[1.75] sm:text-[17px]">{product.information}</p>
            <div className="mt-8">
              <Button href="/contact" large>
                Request Product Information
              </Button>
            </div>
          </div>
        </section>
        {related.length > 0 && (
          <section className="bg-off-white px-5 py-16 sm:px-[7vw] sm:py-24">
            <div className="mx-auto max-w-[1400px]">
              <span className="text-forest inline-flex items-center gap-2 text-[13px] font-bold tracking-[.16em] uppercase">
                Related category
              </span>
              <h2 className="[&_i]:text-forest my-6 text-[36px] leading-[1.05] font-extrabold tracking-[-.03em] sm:text-[52px] [&_i]:font-normal">
                More from <i>{product.category}.</i>
              </h2>
              <div className="mt-10">
                <ProductGrid items={related} />
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  )
}
