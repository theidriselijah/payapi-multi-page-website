import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#1B262F] py-10 md:py-[31px] md:flex-row md:justify-between md:px-10">
      <div className='md:flex md:items-center'>
        <div className="mb-10 md:mb-0">
          <Image
            src="/assets/shared/desktop/logo-white.svg"
            alt="payapi-logo"
            height={38}
            width={135}
          />
        </div>
        <div className="flex flex-col md:flex-row text-[#FBFCFE] opacity-70 gap-[31px] md:gap-0 font-public text-[15px] text-center md:text-justify">
          <Link href="/pricing" className="ml-[64px] text-[#FBFCFE] font-public text-[15px] font-bold opacity-70">Pricing</Link>
          <Link href="/about" className="ml-[64px] text-[#FBFCFE] font-public text-[15px] font-bold opacity-70">About</Link>
          <Link href="/contact" className="ml-[64px] text-[#FBFCFE] font-public text-[15px] font-bold opacity-70">Contact</Link>
        </div>
      </div>
      <div className="flex mt-10 gap-[24px] md:mt-0">
        <Image
          src="/assets/shared/desktop/facebook.svg"
          alt="payapi-logo"
          height={24}
          width={24}
        />
        <Image
          src="/assets/shared/desktop/twitter.svg"
          alt="payapi-logo"
          height={24}
          width={24}
        />
        <Image
          src="/assets/shared/desktop/linkedin.svg"
          alt="payapi-logo"
          height={24}
          width={24}
        />
      </div>
    </div>
  )
}
