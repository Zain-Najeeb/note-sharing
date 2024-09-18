'use client';

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLinks } from './ui/navlinks'

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#5865F2] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          <span className="sr-only">Open Main Menu</span>
          {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#36393F]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks isPhone={true}/>
          </div>
          <div className="pt-4 pb-3 border-t border-[#5865F2]">
            <div className="flex items-center px-5">
              <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium mr-2 hover:shadow-md transition-shadow">
                Open StealthStudy
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}