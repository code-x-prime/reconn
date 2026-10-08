export type Product = { name: string; category: string; slug: string; image: string; description: string; information: string }

export const categories = [
  {
    name: 'Ghee',
    slug: 'ghee',
    number: '01',
    image: '/images/reconn/ghee.webp',
    description: 'Richness rooted in agricultural tradition.',
  },
  {
    name: 'Honey',
    slug: 'honey',
    number: '02',
    image: '/images/reconn/organic-honey.webp',
    description: 'Natural sweetness, refined for quality.',
  },
  {
    name: 'Edible Oils',
    slug: 'edible-oils',
    number: '03',
    image: '/images/reconn/mustard.webp',
    description: 'Engineered for consistent everyday cooking.',
  },
  {
    name: 'Spices',
    slug: 'spices',
    number: '04',
    image: '/images/reconn/spices.webp',
    description: 'Flavour built on careful sourcing.',
  },
]

export const products: Product[] = [
  {
    name: 'Deshi Cow Bilona Ghee',
    category: 'Ghee',
    slug: 'premium-ghee',
    image: '/images/reconn/ghee.webp',
    description: 'Reconn ghee, rooted in the traditional bilona method.',
    information: 'Product information available on business enquiry.',
  },
  {
    name: 'Organic Honey',
    category: 'Honey',
    slug: 'natural-honey',
    image: '/images/reconn/organic-honey.webp',
    description: 'Natural sweetness, quality-checked at every stage.',
    information: 'Product information available on business enquiry.',
  },
  {
    name: 'Mustard Oil',
    category: 'Edible Oils',
    slug: 'mustard-oil',
    image: '/images/reconn/mustard.webp',
    description: 'Distinctive character for everyday cooking.',
    information: 'Product information available on business enquiry.',
  },
  {
    name: 'Sunflower Oil',
    category: 'Edible Oils',
    slug: 'sunflower-oil',
    image: '/images/reconn/sunflower-oil.webp',
    description: 'A versatile choice engineered for daily meals.',
    information: 'Product information available on business enquiry.',
  },
  {
    name: 'Turmeric Powder',
    category: 'Spices',
    slug: 'turmeric-powder',
    image: '/images/reconn/turmeric-powder.webp',
    description: 'Warm colour and unmistakable aroma.',
    information: 'Product information available on business enquiry.',
  },
  {
    name: 'Red Chilli Powder',
    category: 'Spices',
    slug: 'red-chilli-powder',
    image: '/images/reconn/red-chilli-powder.webp',
    description: 'Vibrant flavour for products and recipes.',
    information: 'Product information available on business enquiry.',
  },
  {
    name: 'Black Reserve Organic Honey',
    category: 'Honey',
    slug: 'black-reserve-organic-honey',
    image: '/images/reconn/black-reserve.webp',
    description: 'Reconn organic honey in the signature Black Reserve presentation.',
    information: 'Product information available on business enquiry.',
  },
  {
    name: 'Forest Honey',
    category: 'Honey',
    slug: 'forest-honey',
    image: '/images/reconn/forest-honey.webp',
    description: 'Reconn forest honey, inspired by the richness of wild floral sources.',
    information: 'Product information available on business enquiry.',
  },
  {
    name: 'Groundnut Oil',
    category: 'Edible Oils',
    slug: 'groundnut-oil',
    image: '/images/reconn/groundnut.webp',
    description: 'Reconn cold press groundnut oil with a traditional wood pressed character.',
    information: 'Product information available on business enquiry.',
  },
]

export type CategoryArtDirection = {
  title: string
  intro: string
  heroImage: string
  visualImage: string
  visualHeading: string
  usageContext: string
  accent: 'gold' | 'amber' | 'green' | 'red'
  accentHex: string
  productImage: string
  sourceImage: string
  steps: { title: string; copy: string }[]
}

export const categoryCopy: Record<string, CategoryArtDirection> = {
  ghee: {
    title: 'RICHNESS ROOTED IN TRADITION.',
    intro: 'Reconn Deshi Cow Bilona Ghee brings traditional character to everyday cooking and product requirements.',
    heroImage: '/images/reconn/ghee.webp',
    visualImage: '/images/reconn/ghee.webp',
    visualHeading: 'FROM MILK TO EVERYDAY RICHNESS.',
    usageContext:
      'Presented for everyday cooking and preparation needs, with an approach that keeps consistency and presentation central to the category.',
    accent: 'gold',
    accentHex: '#C9A227',
    productImage: '/images/reconn/ghee.webp',
    sourceImage: '/images/ghee-source.png',
    steps: [
      { title: 'Milk Sourcing', copy: 'Attention to the dairy inputs that form the base of the category.' },
      { title: 'Careful Processing', copy: 'A structured approach focused on consistency and richness.' },
      { title: 'Considered Packing', copy: 'Presented with care for everyday and business use.' },
    ],
  },
  honey: {
    title: 'NATURAL SWEETNESS. CAREFULLY PRESENTED.',
    intro: 'A considered honey category for agro-food products and distribution conversations.',
    heroImage: '/images/reconn/organic-honey.webp',
    visualImage: '/images/reconn/forest-honey.webp',
    visualHeading: 'FROM HIVE TO EVERYDAY SWEETNESS.',
    usageContext:
      'Suited to everyday use across households and food businesses, presented with attention to natural character and consistency.',
    accent: 'amber',
    accentHex: '#F0A324',
    productImage: '/images/reconn/organic-honey.webp',
    sourceImage: '/images/honey-source.png',
    steps: [
      { title: 'Natural Source', copy: 'Attention to the natural character of the honey we present.' },
      { title: 'Quality Checks', copy: 'Consistency considered at every stage of the journey.' },
      { title: 'Careful Presentation', copy: 'Presented for households and food businesses.' },
    ],
  },
  'edible-oils': {
    title: 'ESSENTIAL FOR EVERYDAY COOKING.',
    intro: 'Edible oils built for the requirements of modern food businesses and everyday kitchens.',
    heroImage: '/images/reconn/mustard.webp',
    visualImage: '/images/reconn/groundnut.webp',
    visualHeading: 'FROM SEED TO EVERYDAY USE.',
    usageContext: 'Built for everyday cooking requirements, with a focus on consistency across the categories we present.',
    accent: 'green',
    accentHex: '#3f8a5c',
    productImage: '/images/reconn/mustard.webp',
    sourceImage: '/images/oils-source.png',
    steps: [
      { title: 'Seed Selection', copy: 'Attention to the seeds and inputs behind each oil.' },
      { title: 'Structured Processing', copy: 'A consistent process built for everyday cooking needs.' },
      { title: 'Ready for Kitchens', copy: 'Presented for households and food businesses.' },
    ],
  },
  spices: {
    title: 'FLAVOUR THAT BRINGS EVERY DISH TO LIFE.',
    intro: 'A versatile spices category for food products that need colour, aroma and character.',
    heroImage: '/images/reconn/spices.webp',
    visualImage: '/images/reconn/spices.webp',
    visualHeading: 'FROM HARVEST TO EVERYDAY FLAVOUR.',
    usageContext: 'Presented for everyday cooking and recipe use, with attention to colour, aroma and character across the range.',
    accent: 'red',
    accentHex: '#f04424',
    productImage: '/images/reconn/spices.webp',
    sourceImage: '/images/spices-source.png',
    steps: [
      { title: 'Harvest Sourcing', copy: 'Attention to the harvest that gives spices their character.' },
      { title: 'Colour & Aroma', copy: 'Care taken to preserve colour, aroma and flavour.' },
      { title: 'Packed for Use', copy: 'Presented for everyday recipes and food products.' },
    ],
  },
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug)
}
export function categorySlug(categoryName: string) {
  return categoryName.toLowerCase().replace(/\s+/g, '-')
}
export function productHref(product: Pick<Product, 'category' | 'slug'>) {
  return `/products/${categorySlug(product.category)}/${product.slug}`
}
export function getCategoryProducts(category: string) {
  return products.filter((product) => categorySlug(product.category) === category)
}
export const imageSizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
