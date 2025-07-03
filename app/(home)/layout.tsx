import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'This is Home Page of Xiro Homes',
}

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  )
}
