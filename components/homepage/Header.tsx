import React from 'react'
import { merriweather } from '../fonts'

const Header: React.FC = () => {
  return (
    <header className='container mx-auto flex h-16 items-center justify-between px-20'>
      <span
        className={`text-3xl text-gray-600 font-bold ${merriweather.className}`}
      >
        Brechózin
      </span>
      <nav className='flex gap-8 font-semibold font-lg'>
        <a href='#' className='hover:text-gray-600 transition-colors'>
          Funcionalidades
        </a>
        <a href='#' className='hover:text-gray-600 transition-colors'>
          Como Funciona
        </a>
        <a href='#' className='hover:text-gray-600 transition-colors'>
          Planos
        </a>
        <a href='#' className='hover:text-gray-600 transition-colors'>
          Registrar
        </a>
        <a href='#' className='hover:text-gray-600 transition-colors'>
          Entrar
        </a>
      </nav>
    </header>
  )
}

export default Header
