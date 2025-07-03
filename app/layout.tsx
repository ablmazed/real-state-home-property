import type { Metadata } from 'next'

import './globals.css'
import { Providers } from './Providers'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'Xiro-Homes',
  description: 'Your safe house',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          {/* Main content */}
          <main>
            {children}
            <Toaster />
          </main>
        </Providers>
      </body>
    </html>
  )
}
