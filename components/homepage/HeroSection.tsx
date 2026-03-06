import Link from 'next/link'
import React from 'react'
import { playfair_display } from '../fonts'

const HeroSection: React.FC = () => {
  return (
    <div>
      <h1
        className={`text-5xl md:text-6xl font-bold mb-6 ${playfair_display.className}`}
      >
        Venda suas roupas de segunda mão com facilidade
      </h1>
      <p className='text-xl text-gray-600 mb-12'>
        Crie sua própria loja de roupas facilmente com nossa plataforma.
        Perfeita para brechós e venda de itens únicos.
      </p>

      <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
        <Link
          href='/auth/signup'
          className='px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg border-2 border-gray-200 transition-colors'
        >
          Crie Sua Loja
        </Link>
        <Link
          href='/auth/login'
          className='px-8 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-200 transition-colors'
        >
          Já tenho uma loja
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
