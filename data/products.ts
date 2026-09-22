export type Product = { name: string; category: string; slug: string; image: string; description: string; information: string }

export const categories = [
  {
    name: 'Ghee',
    slug: 'ghee',
    number: '01',
    image: '/images/ghee-card.png',
    description: 'Richness rooted in agricultural tradition.',
  },
  {
    name: 'Honey',
    slug: 'honey',
    number: '02',
    image: '/images/honey-card.png',
    description: 'Natural sweetness, refined for quality.',
  },
  {
    name: 'Edible Oils',
    slug: 'edible-oils',
    number: '03',
    image: '/images/oils-card.png',
    description: 'Engineered for consistent everyday cooking.',
  },
  {
    name: 'Spices',
    slug: 'spices',
    number: '04',
    image: '/images/spices-card.png',
    description: 'Flavour built on careful sourcing.',
  },
]

export const products: Product[] = [
  {
    name: 'Premium Ghee',
    category: 'Ghee',
    slug: 'premium-ghee',
    image: '/images/ghee-tile.jpg',
    description: 'A rich, golden agro-manufactured essential.',
    information: 'Product information available on business enquiry.',
  },
  {
    name: 'Natural Honey',
    category: 'Honey',
    slug: 'natural-honey',
    image: '/images/honey-tile.jpg',
    description: 'Natural sweetness, quality-checked at every stage.',
    information: 'Product information available on business enquiry.',
  },
  {
    name: 'Mustard Oil',
    category: 'Edible Oils',
    slug: 'mustard-oil',
    image: '/images/oils-tile.jpg',
    description: 'Distinctive character for everyday cooking.',
    information: 'Product information available on business enquiry.',
  },
  {
    name: 'Sunflower Oil',
    category: 'Edible Oils',
    slug: 'sunflower-oil',
    image: '/images/oils-hero.jpg',
    description: 'A versatile choice engineered for daily meals.',
    information: 'Product information available on business enquiry.',
  },
  {
    name: 'Turmeric Powder',
    category: 'Spices',
    slug: 'turmeric-powder',
    image: '/images/spices-tile.jpg',
    description: 'Warm colour and unmistakable aroma.',
    information: 'Product information available on business enquiry.',
  },
  {
    name: 'Red Chilli Powder',
    category: 'Spices',
    slug: 'red-chilli-powder',
    image: '/images/spices-hero.jpg',
    description: 'Vibrant flavour for products and recipes.',
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
    intro: 'Reconn ghee is presented as a dependable agro-food category for product and business requirements.',
    heroImage: '/images/ghee-hero.jpg',
    visualImage: '/images/ghee-tile.jpg',
    visualHeading: 'FROM MILK TO EVERYDAY RICHNESS.',
    usageContext:
      'Presented for everyday cooking and preparation needs, with an approach that keeps consistency and presentation central to the category.',
    accent: 'gold',
    accentHex: '#C9A227',
    productImage: '/images/ghee-product.png',
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
    heroImage: '/images/honey-hero.jpg',
    visualImage: '/images/honey-tile.jpg',
    visualHeading: 'FROM HIVE TO EVERYDAY SWEETNESS.',
    usageContext:
      'Suited to everyday use across households and food businesses, presented with attention to natural character and consistency.',
    accent: 'amber',
    accentHex: '#F0A324',
    productImage: '/images/honey-product.png',
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
    heroImage: '/images/oils-hero.jpg',
    visualImage: '/images/oils-tile.jpg',
    visualHeading: 'FROM SEED TO EVERYDAY USE.',
    usageContext: 'Built for everyday cooking requirements, with a focus on consistency across the categories we present.',
    accent: 'green',
    accentHex: '#3f8a5c',
    productImage: '/images/oils-product.png',
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
    heroImage: '/images/spices-hero.jpg',
    visualImage: '/images/spices-tile.jpg',
    visualHeading: 'FROM HARVEST TO EVERYDAY FLAVOUR.',
    usageContext: 'Presented for everyday cooking and recipe use, with attention to colour, aroma and character across the range.',
    accent: 'red',
    accentHex: '#f04424',
    productImage: '/images/spices-product.png',
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
