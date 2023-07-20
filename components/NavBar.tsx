import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="flex justify-between items-center pt-10 px-6 md:px-10 md:pt-[45px] lg:px-[165px]">
      <div className="md:flex md:justify-center md:items-center">
        <div>
          <Link href="/">
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt="payapi-logo"
              height={38}
              width={135}
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <Link
            href="/pricing"
            className="ml-[64px] text-[#36536B] font-public text-[15px] font-bold opacity-70"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="ml-10 text-[#36536B] font-public text-[15px] font-bold opacity-70"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="ml-10 text-[#36536B] font-public text-[15px] font-bold opacity-70"
          >
            Contact
          </Link>
        </div>
      </div>
      <div>
        <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
          <Image
            src="/assets/shared/mobile/menu.svg"
            alt="menu-icon"
            width={28}
            height={17}
          />
        </div>
        <div className="hidden md:block">
          <button className="bg-[#BA4270] hover:bg-[#DA6D97] active:bg-[#BA4270] text-[#FBFCFE] font-public font-bold w-[173px] h-[48px] rounded-3xl">
            Schedule a Demo
          </button>
        </div>
      </div>

      {/* Slide-over menu content */}
      {isMenuOpen && (
        <div className="fixed top-0 left-[75px] right-0 bottom-0 bg-[#1B262F] z-10 px-[24px]">
          <div
            className="mt-[48px] mb-[24px] flex justify-end"
            onClick={toggleMenu}
          >
            <Image
              src="/assets/shared/mobile/close.svg"
              alt="menu-icon"
              width={24}
              height={24}
              className='cursor-pointer'
            />
          </div>
          <div className="flex items-center">
            <div className="bg-[#FBFCFE] w-[249px] h-[1px] opacity-15"></div>
          </div>
          <div className="flex flex-col justify-center text-center">
            <Link
              href="/pricing"
              className="text-[#FBFCFE] font-public text-[20px] font-bold opacity-70 mt-[43px] mb-[32px]"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-[#FBFCFE] font-public text-[20px] font-bold opacity-70 mb-[32px]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[#FBFCFE] font-public text-[20px] font-bold opacity-70 mb-[32px]"
            >
              Contact
            </Link>
            <div>
              <button className="bg-[#BA4270] hover:bg-[#DA6D97] active:bg-[#BA4270] text-[#FBFCFE] font-public font-bold w-[252px] h-[48px] rounded-3xl">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
