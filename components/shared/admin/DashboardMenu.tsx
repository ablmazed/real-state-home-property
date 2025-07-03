'use client'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import Link from 'next/link'

import { JSX } from 'react'
import { Tab } from './Tab'
import { House, Layers2, LayoutDashboard } from 'lucide-react'
import Image from 'next/image'

export default function DashboardMenu(): JSX.Element {
  // Define the type for the menu item
  interface MenuItem {
    name: string
    link: string
    icon: JSX.Element
  }

  const menuList: MenuItem[] = [
    {
      name: 'Dashboard',
      link: '/admin',
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: 'Properties',
      link: '/admin/properties',
      icon: <House className="h-5 w-5" />,
    },
    {
      name: 'Add new property',
      link: '/admin/Addproperties',
      icon: <Layers2 className="h-5 w-5" />,
    },
  ]
  return (
    <>
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>

            <DrawerDescription>
              This action cannot be undone.
              <section className="sticky top-0 flex flex-col gap-10 px-5 py-3 h-screen overflow-hidden w-[260px] z-10  ">
                <div className="flex justify-center py-4">
                  <Link href={`/`}>
                    <Image className="h-8" src="/logo.png" alt="Logo" />
                  </Link>
                </div>
                <ul className="flex-1 h-full overflow-y-auto flex flex-col gap-4">
                  {menuList?.map((item, key) => {
                    return (
                      <Tab
                        item={item}
                        key={key}
                        onClose={function (): void {
                          throw new Error('Function not implemented.')
                        }} // onClose={onClose} // Pass the onClose function
                      />
                    )
                  })}
                </ul>
                <div className="flex justify-center"></div>
              </section>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            Submit
            <DrawerClose>Cancel</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
