import Link from 'next/link'
import Menu from './menu'
import UserButton from './user-button'

import { app_name } from '@/lib/constants'

import { ThemeSwitch } from '../ThemeSwitch'

export default function Header() {
  return (
    <header>
      <div className="px-20 py-4">
        <div className="flex justify-between">
          <div>
            <Link href="/">{app_name}</Link>
          </div>
          <div className="">
            <Menu />
          </div>

          <div className="flex justify-end gap-3">
            <div>
              <UserButton />
            </div>
            <div>
              <button>
                <ThemeSwitch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
