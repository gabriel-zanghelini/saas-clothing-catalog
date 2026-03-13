import React from 'react'
import { merriweather } from '../fonts'

const Header: React.FC = () => {
  return (
    <div className='container mx-auto flex h-12 items-center justify-between'>
      <span
        className={`text-2xl text-gray-600 font-bold ${merriweather.className}`}
      >
        Brechózin
      </span>
      <div className='flex gap-8 font-semibold '>
        <a href='#' className='hover:text-gray-600 transition-colors'>
          Features
        </a>
        <a href='#' className='hover:text-gray-600 transition-colors'>
          Plans
        </a>
        <a href='#' className='hover:text-gray-600 transition-colors'>
          Sign Up
        </a>
        <a href='#' className='hover:text-gray-600 transition-colors'>
          Login In
        </a>
      </div>
    </div>
  )
}

export default Header
