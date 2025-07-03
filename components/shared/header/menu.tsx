'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import data from '@/lib/data'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="">
      <div className="">
        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          {data.headerMenu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-gray-600  px-4"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="md:hidden flex flex-col bg-white shadow-md header-button">
          {data.headerMenu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-gray-600 py-4"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </div>
  )
}
