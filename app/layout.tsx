import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/lib/auth-context'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Multi-Tenant Clothing Catalog',
  description:
    'Create your own unique clothing store with subdomain-based multi-tenancy',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='antialiased' style={{ ...geistSans.style }}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
