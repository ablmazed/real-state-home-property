import Sidebar from '@/components/shared/admin/Sidebar'
import Header from '@/components/shared/admin/Header'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { Toaster } from 'sonner'
export default async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Perform session check
  const session = await auth()

  // If no session, redirect to login
  if (!session) {
    redirect('/login')
  }

  return (
    <main className=" flex">
      <div className="hidden md:block ">
        <Sidebar />
      </div>

      <section className="flex-1 flex flex-col">
        <Header />
        <section className="flex-1 ">
          {children}
          <Toaster richColors />
        </section>
      </section>
    </main>
  )
}
