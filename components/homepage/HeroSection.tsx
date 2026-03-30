import Link from 'next/link'
import React from 'react'
import { merriweather } from '../fonts'

const HeroSection: React.FC = () => {
  return (
    <div>
      <h1
        className={`text-5xl md:text-6xl font-bold mb-6 ${merriweather.className} text-primary-400 w-2/3`}
      >
        Tenha sua própria loja de roupas em minutos
      </h1>
      <p className='text-xl text-gray-500 mb-12 ml-1'>
        Grátis. Direto ao ponto. Ideal para quem está começando a vender online.
      </p>

      <div className='mb-16 ml-1 flex flex-col justify-end items-end sm:flex-row gap-4'>
        <Link
          href='#'
          className='bg-white hover:bg-gray-50 text-gray-500 rounded-lg shadow-md shadow-gray-300 transition-colors py-2.5 px-4 text-lg'
        >
          Acessar minha loja
        </Link>
        <Link
          href='#'
          className='bg-primary-300 hover:bg-primary-400 text-white rounded-lg shadow-md shadow-gray-300 transition-colors py-2.5 px-8 text-lg font-bold'
        >
          Começar a vender
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
