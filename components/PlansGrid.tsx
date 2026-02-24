import type { Plan } from '@/types/plan.types'
import PlanCard from './PlanCard'

type Props = {
  plans: Plan[]
}

export default function PlansGrid({ plans }: Props) {
  return (
    <section aria-labelledby='plans-heading' className='mt-16 w-full'>
      <div className='max-w-4xl mx-auto text-center mb-8'>
        <h2 id='plans-heading' className='text-2xl font-bold text-gray-900'>Escolha um plano</h2>
        <p className='text-gray-600 mt-2'>Selecione o plano que melhor atende sua loja.</p>
      </div>

      <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
        {plans.map((p) => (
          <PlanCard key={p.id} plan={p} />
        ))}
      </div>
    </section>
  )
}
