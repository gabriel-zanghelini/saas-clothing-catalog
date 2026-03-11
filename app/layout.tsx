import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/lib/auth-context'
import { roboto } from '@/components/fonts'

export const metadata: Metadata = {
  title: 'Brechózin',
  description:
    'Tenha sua própria loja de roupas em minutos. Grátis. Direto ao ponto. Ideal para quem está começando a vender online.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`min-h-screen antialiased ${roboto.className}`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
