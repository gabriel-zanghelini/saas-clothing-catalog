import {  Playfair_Display, Roboto } from 'next/font/google'
 

export const playfair_display = Playfair_Display({
  variable: '--font-title',
  subsets: ['latin'],
})

export const roboto = Roboto({
  variable: '--font-text',
  subsets: ['latin'],
})
