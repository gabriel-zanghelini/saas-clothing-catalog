import Link from 'next/link'
import type { Plan } from '@/types/plan.types'

type Props = {
  plan: Plan
}

function formatCurrency(n: number | null, currency: string, decimals = 0) {
  if (n == null) return ''

  const currencySymbols: Record<string, string> = {
    USD: '$',
    EUR: '€',
    BRL: 'R$',
  }
  const symbol = currencySymbols[currency] || currency

  return `${symbol} ${n.toFixed(decimals)}`
}

export default function PlanCard({ plan }: Props) {
  const monthly = plan.monthly ?? null
  const yearly = plan.yearly ?? null

  const showYearly = yearly != null && yearly > 0
  const showMonthly = monthly != null && monthly > 0

  let monthlyEquivalent: number | null = null
  let discountPercent: number | null = null

  if (showYearly) {
    monthlyEquivalent = Math.round(((yearly as number) / 12) * 100) / 100
    if (showMonthly && monthly && monthlyEquivalent < monthly) {
      discountPercent = Math.round((1 - monthlyEquivalent / monthly) * 100)
    }
  }

  return (
    <article className='bg-white p-6 rounded-lg shadow-md flex flex-col justify-between'>
      <div>
        <h3 className='text-xl font-semibold text-gray-900 mb-2'>
          {plan.name}
        </h3>

        <div className='mb-4'>
          {showMonthly ? (
            <div className='text-2xl md:text-3xl font-bold text-gray-900'>
              {formatCurrency(monthly, plan.currency, 0)}{' '}
              <span className='text-base font-medium text-gray-600'>
                / month
              </span>
            </div>
          ) : (
            <div className='text-2xl md:text-3xl font-bold text-gray-900'>
              Free
            </div>
          )}

          {showYearly && (
            <div className='mt-2 flex justify-center gap-2 items-baseline text-sm text-gray-500'>
              <div>{formatCurrency(yearly, plan.currency, 0)} per year</div>
              <div>
                {monthlyEquivalent != null && (
                  <span className='text-sm text-gray-500'>
                    = {formatCurrency(monthlyEquivalent, plan.currency, 2)}/mo
                  </span>
                )}
                {discountPercent && (
                  <span className='text-sm text-green-500 ml-2'>
                    ({discountPercent}% off)
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        <ul className='mb-6 space-y-2 text-gray-600'>
          {plan.features.map((f) => (
            <li key={f} className='flex items-start gap-2'>
              <span aria-hidden>✅</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Link
          href='/auth/signup'
          className={`inline-block w-full text-center px-4 py-2 rounded-lg font-semibold transition-colors ${
            plan.monthly && plan.monthly > 0
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'bg-white border border-gray-200 text-gray-900 hover:bg-gray-50'
          }`}
        >
          {plan.ctaLabel ?? 'Get started'}
        </Link>
      </div>
    </article>
  )
}
