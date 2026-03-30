import type { Plan } from '@/types/plan.types'
import PlanCard from './PlanCard'
import Title from './homepage/Title'

export default function PlansGrid() {
  const plans: Plan[] = [
    {
      id: 'free',
      name: 'Free',
      monthly: 0,
      yearly: 0,
      currency: 'BRL',
      features: [
        'Domínio customizável',
        'Integração com Instagram',
        'Até 100 produtos',
      ],
      ctaLabel: 'Começar grátis',
    },
    {
      id: 'partner',
      name: 'Plus',
      monthly: 29.9,
      yearly: 269.9,
      currency: 'BRL',
      features: [
        'Domínio customizável',
        'Integração com Instagram',
        'Integração com Enjoei e OLX',
        'Até 1000 produtos',
        'Dashboard de estatísticas',
      ],
      ctaLabel: 'Tornar-se Plus',
      highlight: true,
    },
  ]

  return (
    <section className='mt-16 w-full'>
      <div className='mx-auto text-center mb-2'>
        <Title title='Escolha um plano' />
      </div>

      <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
        {plans.map((p) => (
          <PlanCard key={p.id} plan={p} />
        ))}
      </div>
    </section>
  )
}
