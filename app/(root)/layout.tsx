import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Property Page',
  description: 'This is Property Page of Xiro Homes',
}

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
