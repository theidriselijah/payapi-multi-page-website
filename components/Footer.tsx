import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#1B262F] pb-10 pt-10">
        <div className="mb-10">
            <Image 
                src="/assets/shared/desktop/logo-white.svg"
                alt="payapi-logo"
                height={38}
                width={135}
            />
        </div>
        <div className="flex flex-col text-[#FBFCFE] opacity-70 gap-[31px] font-public text-[15px] text-center">
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </div>
        <div className="flex mt-10 gap-[24px]">
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
