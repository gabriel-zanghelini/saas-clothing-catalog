export type Plan = {
  id: string
  name: string
  monthly: number | null
  yearly: number | null
  currency: string
  features: string[]
  ctaLabel?: string
  highlight?: boolean
}
