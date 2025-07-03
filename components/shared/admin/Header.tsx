'use client'

// import { Kbd } from '@nextui-org/kbd'

import DashboardMenu from './DashboardMenu'
import { Bell } from 'lucide-react'
// import { Input } from '@/components/ui/input'

export default function Header() {
  return (
    <div className=" ">
      <section className="  w-full top-0 flex items-center gap-3  border-b px-4 py-4">
        <div className="flex justify-end items-center md:hidden  ">
          <DashboardMenu />
        </div>
        <div className="grid grid-cols-2 w-full gap-2 items-center ">
          <h1 className="col-span-1 text-xl font-semibold  flex justify-between items-center  object-fill">
            Admin Dashboard
          </h1>

          {/* Search Input shifted to the right */}

          <div className="ml-auto flex items-center justify-end gap-2  pr-2 ">
            <div>
              <Bell strokeWidth={3} />
            </div>
            <div className="flex justify-end">
              {/* {searchInput} */}
              Search In put
            </div>
          </div>
          <div className="flex gap-2 items-center ">
            <div className="md:flex flex-col items-end hidden "></div>
          </div>
        </div>
      </section>
    </div>
  )
}
