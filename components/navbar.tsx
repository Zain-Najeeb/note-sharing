import { NavLinks } from './ui/navlinks'
import {MobileMenu} from './index'
import Link from "next/link";
export default function Navbar() {

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
            <button className="bg-white  px-4 py-2 rounded-full text-sm  mr-2 hover:shadow-md transition-shadow">
              <Link href={'/register/signup'} className='text-black font-medium'>
                Open StealthStudy
              </Link>
            </button>
          </div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}