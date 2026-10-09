export const contactDetails = [
  {
    kind: 'phone',
    label: 'Customer Care',
    value: '8130787699',
    href: 'tel:+918130787699',
  },
  {
    kind: 'email',
    label: 'Email',
    value: 'reconnagroindia@gmail.com',
    href: 'mailto:reconnagroindia@gmail.com',
  },
  {
    kind: 'address',
    label: 'Marketing Office',
    value: 'E-904, Pratap Vihar, Ghaziabad Sector-11, Uttar Pradesh - 201009',
  },
  {
    kind: 'address',
    label: 'Manufacturing & Packing',
    value: 'P-09 Ishwarganj, Baikunthpur Road Bithoor, Kanpur - 209217, India',
  },
] as const

/** WhatsApp chat: number in international format without "+" (India: 91 + 10 digits). */
export const whatsapp = {
  number: '918130787699',
  display: '8130787699',
  message: 'Hello Reconn Agro India, I would like to know more about your products.',
  get href() {
    return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`
  },
}
