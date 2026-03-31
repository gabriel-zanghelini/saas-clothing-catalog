import React from 'react'
import { merriweather } from '../fonts'

const Header: React.FC = () => {
  return (
    <div className='container mx-auto flex h-16 items-center justify-between px-20'>
      <span
        className={`text-3xl text-gray-600 font-bold ${merriweather.className}`}
      >
        Brechózin
      </span>
      <div className='flex gap-8 font-semibold font-lg'>
        <a href='#' className='hover:text-gray-600 transition-colors'>
          Features
        </a>
        <a href='#' className='hover:text-gray-600 transition-colors'>
          Plans
        </a>
        <a href='#' className='hover:text-gray-600 transition-colors'>
          Registrar
        </a>
        <a href='#' className='hover:text-gray-600 transition-colors'>
          Entrar
        </a>
      </div>
    </div>
  )
}

export default Header
