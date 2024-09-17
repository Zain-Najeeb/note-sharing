"use client"; 
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLinks } from './ui/navlinks'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="font-bold text-2xl">StealthStudy</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLinks isPhone={false}/>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium mr-2 hover:shadow-md transition-shadow">
              Open StealthStudy
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#5865F2] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open Main Menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
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
    </nav>
  )
}