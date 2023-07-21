import DemoReqForm from '@/components/DemoReqForm'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-[#EDF3F8] ">
      <Head>
        <title>PayAPI Multi-Page Website</title>
        
      </Head>
      <div className="bg-[url('/assets/shared/desktop/bg-pattern-circle.svg')] bg-no-repeat bg-[center_-16%] bg-auto md:bg-[center_-20%] lg:bg-[center_-20%]">
        <NavBar />

        {/* Hero section */}
        <div className="lg:flex lg:justify-around lg:items-center lg:my-[75px]">
          <div className="flex justify-center items-center mt-8 mb-6 lg:order-2">
            <Image
              src="/assets/home/desktop/illustration-phone-mockup.svg"
              alt="cellphone"
              width={128}
              height={240}
              className="md:hidden z-10"
            />
            <Image
              src="/assets/home/desktop/illustration-phone-mockup.svg"
              alt="cellphone"
              width={156}
              height={300}
              className="hidden md:block lg:hidden z-10"
            />
            <Image
              src="/assets/home/desktop/illustration-phone-mockup.svg"
              alt="cellphone"
              width={258}
              height={500}
              className="hidden lg:block z-10"
            />
          </div>
          <div className="mx-6 mb-[80px] md:mx-[98px] md:mb-[100px] lg:mx-0 lg:mb-0 lg:order-1">
            <h1 className="font-display text-[32px] text-center pb-[24px] md:text-[48px] md:leading-[56px] lg:text-[72px] lg:leading-[72px] lg:w-[546px]">
              Start building with our APIs for absolutely free.
            </h1>
            <DemoReqForm />
            <p className="font-public text-[15px] text-center">
              Have any questions?
              <Link href="/contact" className="hover:opacity-50">
                <strong> Contact Us</strong>
              </Link>
            </p>
          </div>
        </div>

        {/* Partner section */}
        <div>
          <div className="bg-[#1B262F] pt-[80px] lg:py-[100px] lg:flex lg:justify-around lg:items-center bg-[url('/assets/shared/desktop/bg-pattern-circle.svg')] bg-no-repeat bg-[center_top_730%] bg-auto">
            <div className="lg:order-2">
              <div className="md:hidden">
                <div className="flex justify-center items-center md:flex-none md:justify-normal">
                  <Image
                    src="/assets/shared/desktop/tesla-white.svg"
                    alt="payapi-logo"
                    height={15}
                    width={107}
                    className="mr-[25px]"
                  />
                  <Image
                    src="/assets/shared/desktop/microsoft-white.svg"
                    alt="payapi-logo"
                    height={26}
                    width={120}
                    className="ml-[25px]"
                  />
                </div>
                <div className="flex justify-center items-center mt-[42px]">
                  <Image
                    src="/assets/shared/desktop/hewlett-packard-white.svg"
                    alt="payapi-logo"
                    height={22}
                    width={115}
                    className="mr-[28px]"
                  />
                  <Image
                    src="/assets/shared/desktop/oracle-white.svg"
                    alt="payapi-logo"
                    height={14}
                    width={108}
                    className="ml-[28px]"
                  />
                </div>
                <div className="flex justify-center items-center mt-[50px]">
                  <Image
                    src="/assets/shared/desktop/google-white.svg"
                    alt="payapi-logo"
                    height={22}
                    width={115}
                    className="mr-[28px]"
                  />
                  <Image
                    src="/assets/shared/desktop/nvidia-white.svg"
                    alt="payapi-logo"
                    height={22}
                    width={113}
                    className="ml-[28px]"
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-center hidden md:block ">
                <div className="flex justify-between items-center mx-[119px] lg:mx-0 mb-[40px] lg:w-[536px]">
                  <Image
                    src="/assets/shared/desktop/tesla-white.svg"
                    alt="payapi-logo"
                    height={15}
                    width={107}
                  />
                  <Image
                    src="/assets/shared/desktop/microsoft-white.svg"
                    alt="payapi-logo"
                    height={26}
                    width={120}
                  />
                  <Image
                    src="/assets/shared/desktop/hewlett-packard-white.svg"
                    alt="payapi-logo"
                    height={22}
                    width={115}
                  />
                </div>
                <div className="flex justify-between items-center mx-[119px] lg:mx-0 lg:w-[536px]">
                  <Image
                    src="/assets/shared/desktop/oracle-white.svg"
                    alt="payapi-logo"
                    height={14}
                    width={108}
                  />
                  <Image
                    src="/assets/shared/desktop/google-white.svg"
                    alt="payapi-logo"
                    height={22}
                    width={115}
                  />
                  <Image
                    src="/assets/shared/desktop/nvidia-white.svg"
                    alt="payapi-logo"
                    height={22}
                    width={113}
                  />
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <div className="flex-col items-center text-center mt-[60px] mx-6 md:mx-[156px] lg:mx-0">
                <h2 className="text-[32px] text-[#FBFCFE] font-display leading-9 lg:text-left">
                  Who we work with
                </h2>
                <p className="text-center text-[#FBFCFE] opacity-60 font-public text-[15px] leading-7 mt-[16px] lg:w-[445px] lg:text-left">
                  Today, millions of people around the world have successfully
                  connected their accounts to apps they love using our API. We
                  provide developers with the tools they need to create easy and
                  accessible experiences for their users.
                </p>
              </div>
              <div className="flex justify-center mt-[60px] pb-[80px] lg:justify-start lg:mt-[32px]">
                <Link href="/about">
                  <button className="w-[129px] h-[48px] text-[#FBFCFE] border-[#FBFCFE] border-2 rounded-3xl hover:border-[#FBFCFE] hover:bg-[#FFFFFF] hover:text-[#1B262F]">
                    About Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Implement section */}
        <div className="pt-20 pb-10 px-6 md:px-[100px] lg:flex lg:justify-around lg:items-center lg:py-[150px] lg:gap-[120px]">
          <div className="flex justify-center shadow-[25px_25px_80px_0_rgba(54, 83, 107, 0.3)]">
            <Image
              src="/assets/home/desktop/illustration-easy-to-implement.svg"
              alt="easy to implement"
              height={209}
              width={328}
              className="md:hidden"
            />
            <Image
              src="/assets/home/desktop/illustration-easy-to-implement.svg"
              alt="easy to implement"
              height={248}
              width={410}
              className="hidden md:block lg:hidden"
            />
            <Image
              src="/assets/home/desktop/illustration-easy-to-implement.svg"
              alt="easy to implement"
              height={284}
              width={445}
              className="hidden md:hidden lg:block"
            />
          </div>
          <div className="text-center mt-12 lg:mt-0 lg:max-w-[445px] lg:text-left">
            <h2 className="text-[#36536B] font-display text-[36px] leading-9 mb-6">
              Easy to implement
            </h2>
            <p className="font-public text-[15px] text-[#6C8294] leading-7">
              Our API comes with just a few lines of code. You&apos;ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
        </div>

        {/* Simple UI & UX section */}
        <div className="mt-10 px-6 md:px-[100px] lg:mt-0 lg:px-[165px] lg:flex lg:justify-around lg:items-center lg:gap-[100px] lg:mb-[145px]">
          <div className="flex justify-center lg:order-2">
            <Image
              src="/assets/home/desktop/illustration-simple-ui.svg"
              alt="easy to implement"
              height={290}
              width={328}
              className="md:hidden"
            />
            <Image
              src="/assets/home/desktop/illustration-simple-ui.svg"
              alt="easy to implement"
              height={320}
              width={363}
              className="hidden md:block lg:hidden"
            />
            <Image
              src="/assets/home/desktop/illustration-simple-ui.svg"
              alt="easy to implement"
              height={500}
              width={566}
              className="hidden md:hidden lg:block"
            />
          </div>
          <div className="text-center mt-[50px] mb-10 lg:mt-0 lg:mb-10 lg:order-1 lg:w-[445px] lg:text-left">
            <h2 className="mb-6 text-[#36536B] font-display text-[36px] leading-9">
              Simple UI & UX
            </h2>
            <p className="leading-7 text-[#6C8294] font-public text-[15px]">
              Our pre-built form is easy to integrate in your app or
              website&apos;s checkout flow and designed to optimize conversion.
            </p>
          </div>
        </div>

        {/* Benefits section */}
        <div className="px-6 py-10 lg:pb-[96px]">
          <div className="md:flex md:justify-center md:items-start md:gap-[10px] lg:px-[165px] lg:gap-[30px]">
            <div className="flex flex-col justify-center items-center text-center pb-12 md:pb-0">
              <Image
                src="/assets/home/desktop/icon-personal-finances.svg"
                alt="easy to implement"
                height={106}
                width={106}
              />
              <h4 className="text-[#36536B] text-[18px] font-public font-bold leading-[25px] mt-[33px] mb-4">
                Personal Finances
              </h4>
              <p className="text-[#6C8294]">
                Consolidate financial data from multiple sources and categorize
                transactions up to 2 years of history. Analyze reports to
                reconcile activities in your account.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center pb-12 md:pb-0">
              <Image
                src="/assets/home/desktop/icon-banking-and-coverage.svg"
                alt="easy to implement"
                height={106}
                width={106}
              />
              <h4 className="text-[#36536B] text-[18px] font-public font-bold leading-[25px] mt-[33px] mb-4">
                Banking & Coverage
              </h4>
              <p className="text-[#6C8294]">
                With our platform, you can speed up account onboarding and
                support ongoing payments for checking, savings, credit card, and
                brokerage accounts.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <Image
                src="/assets/home/desktop/icon-consumer-payments.svg"
                alt="easy to implement"
                height={106}
                width={106}
              />
              <h4 className="text-[#36536B] text-[18px] font-public font-bold leading-[25px] mt-[33px] mb-4">
                Consumer Payments
              </h4>
              <p className="text-[#6C8294]">
                It&apos;s easier to set up secure bank payments with us through
                a flow designed with the user experience in mind. Customers
                could instantly authenticate their account.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-20">
          <div className='lg:flex lg:justify-around lg:items-center'>
            <h2 className="mb-[32px] text-center text-[#36536B] text-[32px] leading-9 font-display">
              Ready to start?
            </h2>
            <DemoReqForm />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
