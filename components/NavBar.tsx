import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center pt-10 px-6 md:px-10 md:pt-[45px]">
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
          <Link href="/pricing" className="ml-[64px] text-[#36536B] font-public text-[15px] font-bold opacity-70">
            Pricing
          </Link>
          <Link href="/about" className="ml-10 text-[#36536B] font-public text-[15px] font-bold opacity-70">
            About
          </Link>
          <Link href="/contact" className="ml-10 text-[#36536B] font-public text-[15px] font-bold opacity-70">
            Contact
          </Link>
        </div>
      </div>
      <div>
        <div className="cursor-pointer md:hidden">
          <Image
            src="/assets/shared/mobile/menu.svg"
            alt="menu-icon"
            width={28}
            height={17}
          />
        </div>
        <div className='hidden md:block'>
          <button className="bg-[#BA4270] hover:bg-[#DA6D97] active:bg-[#BA4270] text-[#FBFCFE] font-public font-bold w-[173px] h-[48px] rounded-3xl">
            Schedule a Demo
          </button>
        </div>
      </div>
    </nav>
  )
}
