import Link from 'next/link'
import React from 'react'
import { merriweather_display } from '../fonts'

const HeroSection: React.FC = () => {
  return (
    <div>
      <h1
        className={`text-5xl md:text-6xl font-bold mb-6 ${merriweather_display.className} text-primary-400 w-2/3`}
      >
        Tenha sua própria loja de roupas em minutos
      </h1>
      <p className='text-xl text-gray-400 mb-12 ml-1'>
        Grátis. Direto ao ponto. Ideal para quem está começando a vender online.
      </p>

      <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
        <Link
          href='#'
          className='px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg border-2 border-gray-200 transition-colors'
        >
          Quero vender
        </Link>
        <Link
          href='#'
          className='px-8 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-200 transition-colors'
        >
          Entrar na loja
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
