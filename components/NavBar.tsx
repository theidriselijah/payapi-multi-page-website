import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center pt-10 px-6">
        <div>
            <Image 
                src="/assets/shared/desktop/logo.svg"
                alt="payapi-logo"
                height={38}
                width={135}
            />
        </div>
        <div>
            <Image 
                src="/assets/shared/mobile/menu.svg"
                alt="menu-icon"
                width={28}
                height={17}
            />
        </div>
    </nav>
  )
}
