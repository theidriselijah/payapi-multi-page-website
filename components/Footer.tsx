import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#1B262F] py-10 md:py-[31px] md:flex-row md:justify-between md:px-10 bg-[url('/assets/shared/desktop/bg-pattern-circle.svg')] bg-no-repeat bg-[center_top_-43%] bg-auto md:bg-[center_left_500px]">
      <div className="md:flex md:items-center">
        <div className="mb-10 md:mb-0">
          <Link href="/">
            <Image
              src="/assets/shared/desktop/logo-white.svg"
              alt="payapi-logo"
              height={38}
              width={135}
            />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row text-[#FBFCFE] opacity-70 gap-[31px] md:gap-0 font-public text-[15px] text-center md:text-justify">
          <Link
            href="/pricing"
            className="md:ml-[64px] text-[#FBFCFE] font-public text-[15px] font-bold opacity-70"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="md:ml-[64px] text-[#FBFCFE] font-public text-[15px] font-bold opacity-70"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="md:ml-[64px] text-[#FBFCFE] font-public text-[15px] font-bold opacity-70"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex mt-10 gap-[24px] md:mt-0 lg:items-center">
        <a href="https://www.facebook.com">
          <Image
            src="/assets/shared/desktop/facebook.svg"
            alt="payapi-logo"
            height={24}
            width={24}
            className="cursor-pointer"
          />
        </a>
        <a href="https://www.twitter.com">
          <Image
            src="/assets/shared/desktop/twitter.svg"
            alt="payapi-logo"
            height={24}
            width={24}
            className="cursor-pointer"
          />
        </a>
        <a href="https://www.linkedin.com">
          <Image
            src="/assets/shared/desktop/linkedin.svg"
            alt="payapi-logo"
            height={24}
            width={24}
            className="cursor-pointer"
          />
        </a>
      </div>
    </div>
  )
}
