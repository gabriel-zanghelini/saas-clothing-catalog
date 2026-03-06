import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/lib/auth-context'
import { roboto } from '@/components/fonts'

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
      <body className={`min-h-screen antialiased ${roboto.className}`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
