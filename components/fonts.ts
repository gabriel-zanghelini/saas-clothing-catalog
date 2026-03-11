import {  Roboto, Merriweather } from 'next/font/google'
 

export const merriweather_display = Merriweather({
  variable: '--font-title',
  subsets: ['latin'],
})

export const roboto = Roboto({
  variable: '--font-text',
  subsets: ['latin'],
})
