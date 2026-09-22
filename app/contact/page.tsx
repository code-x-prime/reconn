import Image from 'next/image'
import { HugeiconsIcon } from '@hugeicons/react'
import { Call02Icon, Mail01Icon, Location01Icon } from '@hugeicons/core-free-icons'
import { ContactForm, Reveal } from '@/components/site'

export const metadata = {
  title: 'Contact RECONN | Business & Product Enquiries',
  description: 'Contact Reconn Agro India Pvt. Ltd. for product, bulk supply, distribution, dealership and general business enquiries.',
}

const heroImage = '/images/contact-hero.jpg'

const enquiryTypes = [
  { n: '01', title: 'Business Enquiries', copy: 'General business and partnership conversations.' },
  { n: '02', title: 'Product Enquiries', copy: 'Information on ghee, honey, edible oils and spices.' },
  { n: '03', title: 'Distribution', copy: 'Distribution partnerships and territory requirements.' },
  { n: '04', title: 'Dealership', copy: 'Dealership opportunities across regions.' },
]

const details = [
  { icon: Call02Icon, label: 'Business enquiries', value: 'Product, bulk and general' },
  { icon: Mail01Icon, label: 'Distribution', value: 'Dealership and distribution' },
  { icon: Location01Icon, label: 'Location', value: 'India' },
]

const screenH = 'min-h-[calc(100svh-71px)] sm:min-h-[calc(100svh-87px)]'

export default function Contact() {
  return (
    <>
      <main className="overflow-x-clip">
        {/* HERO */}
        <section className={`${screenH} bg-charcoal relative flex flex-col justify-end overflow-hidden text-white`}>
          <Image src={heroImage} alt="Reconn business and manufacturing" fill priority sizes="100vw" className="object-cover opacity-45" />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,#10241bf2_0%,#10241bb3_55%,#10241b66_100%)]" />
          <div className="from-orange to-red pointer-events-none absolute top-[8%] right-[-80px] h-[320px] w-[320px] bg-gradient-to-br opacity-[0.2] blur-[110px]" />
          <div className="from-blue to-purple pointer-events-none absolute bottom-[20%] left-[-80px] h-[260px] w-[260px] bg-gradient-to-br opacity-[0.14] blur-[110px]" />

          <div className="relative z-[2] mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-5 pt-12 sm:px-[7vw]">
            <Reveal>
              <span className="inline-flex items-center gap-3 border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-bold tracking-[.16em] text-white/85 uppercase backdrop-blur-md sm:text-[12px]">
                <span className="bg-orange h-2 w-2 animate-pulse" />
                Get in touch
              </span>
              <h1 className="my-6 text-[clamp(38px,11vw,52px)] leading-[0.98] font-extrabold tracking-[-.03em] sm:my-8 sm:text-[clamp(52px,min(7vw,11vh),104px)]">
                LET&apos;S START
                <br />A <span className="text-gradient-orange-red">CONVERSATION.</span>
              </h1>
              <p className="m-0 max-w-[520px] text-[15px] leading-[1.7] text-white/80 sm:text-[18px]">
                Have a product requirement or business enquiry? Connect with the Reconn team.
              </p>
            </Reveal>
          </div>

          <div className="relative z-[2] mx-auto mt-10 w-full max-w-[1400px] px-5 pb-8 sm:px-[7vw] sm:pb-12">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {enquiryTypes.map((t, i) => (
                <Reveal
                  key={t.title}
                  delay={i * 0.08}
                  className="group hover:bg-forest/80 relative overflow-hidden border border-white/20 bg-white/10 p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/40 sm:p-6"
                >
                  <span className="text-orange text-[12px] font-extrabold tracking-[.14em]">{t.n}</span>
                  <h3 className="m-0 mt-3 text-[15px] leading-[1.2] font-extrabold tracking-[-.01em] sm:mt-5 sm:text-[20px]">{t.title}</h3>
                  <p className="m-0 mt-2 hidden text-[14px] leading-[1.6] text-white/70 sm:block">{t.copy}</p>
                  <div className="bg-orange absolute bottom-0 left-0 h-[3px] w-0 transition-[width] duration-500 group-hover:w-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT DETAILS + FORM */}
        <section className={`${screenH} bg-charcoal relative flex items-center overflow-hidden px-5 py-16 text-white sm:px-[7vw] sm:py-20`}>
          <div className="from-orange to-red pointer-events-none absolute -bottom-24 -left-20 h-[340px] w-[340px] bg-gradient-to-br opacity-[0.16] blur-[120px]" />
          <div className="from-blue to-purple pointer-events-none absolute -top-24 -right-20 h-[320px] w-[320px] bg-gradient-to-br opacity-[0.16] blur-[120px]" />
          <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-start gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-[5vw]">
            <Reveal className="lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[.16em] text-white/60 uppercase">
                Business enquiry
              </span>
              <h2 className="my-6 text-[38px] leading-[1] font-extrabold tracking-[-.03em] sm:text-[clamp(44px,4.8vw,68px)]">
                TELL US WHAT
                <br />
                YOU <span className="text-[#4fbf7e]">NEED.</span>
              </h2>
              <p className="m-0 max-w-[440px] text-[15px] leading-[1.75] text-white/70 sm:text-[17px]">
                Please share your requirements and our team can follow up with the relevant information.
              </p>
              <div className="mt-10 flex flex-col gap-3">
                {details.map((d) => (
                  <div
                    key={d.label}
                    className="group flex items-center gap-4 border border-white/15 bg-white/[0.04] p-4 transition-all duration-300 hover:border-white/35 hover:bg-white/[0.08] sm:p-5"
                  >
                    <span className="bg-forest group-hover:bg-orange flex h-12 w-12 flex-none items-center justify-center text-white transition-colors duration-300">
                      <HugeiconsIcon icon={d.icon} size={20} />
                    </span>
                    <span>
                      <span className="block text-[11px] font-bold tracking-[.14em] text-white/55 uppercase">{d.label}</span>
                      <span className="mt-1 block text-[16px] font-bold sm:text-[18px]">{d.value}</span>
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="text-ink">
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
    </>
  )
}
