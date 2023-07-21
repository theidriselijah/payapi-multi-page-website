import DemoReqForm from '@/components/DemoReqForm'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Pricing() {
  return (
    <div className="bg-[#EDF3F8]">
      <div className="bg-[url('/assets/shared/desktop/bg-pattern-circle.svg')] bg-no-repeat bg-[top_-33%_left_-10%] bg-auto md:bg-[top_-130%_right_3500%]">
        <NavBar />
        <div className="flex flex-col justify-center items-center text-center px-6 lg:px-[165px]">
          <h1 className="text-[#36536B] font-display text-[32px] leading-9 mt-12 lg:text-[56px] lg:leading-[56px] lg:mt-[82px]">
            Pricing
          </h1>
          <div className="md:flex md:gap-[10px]">
            {/* Free Plan */}
            <div className='lg:flex lg:flex-col lg:justify-center lg:items-center'>
              <h2 className="mt-12 mb-20 md:mb-[13px] text-[#BA4270] font-display text-[24px]">
                Free Plan
              </h2>
              <div className="md:mb-[19px] md:w-[223px] hidden md:block">
                <p className="text-[#6C8294] font-public text-[15px] leading-7">
                  Build and test using our core set of products with up to 100
                  API requests
                </p>
              </div>
              <div>
                <p className="text-[#36536B] font-display text-[56px] leading-[72px]">
                  $0.00
                </p>
                <div className="bg-[#36536B] w-[223px] h-[1px] mt-6 mb-5 opacity-25 lg:w-[350px]"></div>
                <div className="flex justify-center mb-6">
                  <ul>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Transactions
                    </li>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Auth
                    </li>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Identity
                    </li>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7 opacity-50">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Investments
                    </li>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7 opacity-50">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Assets
                    </li>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7 opacity-50">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Liabilities
                    </li>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7 opacity-50">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Income
                    </li>
                  </ul>
                </div>
                <div className="bg-[#36536B] w-[223px] h-[1px] mt-6 mb-6 opacity-25 lg:w-[350px]"></div>
                <button className="w-[168px] h-[48px] text-[#36536B] border-[#36536B] border-[1px] rounded-3xl mb-12 hover:border-[#36536B] hover:bg-[#36536B] hover:text-[#FFFFFF]">
                  Request Access
                </button>
              </div>
            </div>

            {/* Basic Plan */}
            <div className='lg:flex lg:flex-col lg:justify-center lg:items-center'>
              <h2 className="mt-12 mb-20 md:mb-[13px] text-[#BA4270] font-display text-[24px]">
                Basic Plan
              </h2>
              <div className="md:mb-[19px] md:w-[223px] hidden md:block">
                <p className="text-[#6C8294] font-public text-[15px] leading-7">
                  Launch your project with unlimited requests and no contractual
                  minimums
                </p>
              </div>
              <div>
                <p className="text-[#36536B] font-display text-[56px] leading-[72px]">
                  $249.00
                </p>
                <div className="bg-[#36536B] w-[223px] h-[1px] mt-6 mb-5 opacity-25 lg:w-[350px]"></div>
                <div className="flex justify-center mb-6">
                  <ul>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Transactions
                    </li>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Auth
                    </li>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Identity
                    </li>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Investments
                    </li>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Assets
                    </li>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7 opacity-50">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Liabilities
                    </li>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7 opacity-50">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Income
                    </li>
                  </ul>
                </div>
                <div className="bg-[#36536B] w-[223px] h-[1px] mt-6 mb-6 opacity-25 lg:w-[350px]"></div>
                <button className="w-[168px] h-[48px] text-[#36536B] border-[#36536B] border-[1px] rounded-3xl mb-12 hover:border-[#36536B] hover:bg-[#36536B] hover:text-[#FFFFFF]">
                  Request Access
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className='lg:flex lg:flex-col lg:justify-center lg:items-center'>
              <h2 className="mt-12 mb-20 md:mb-[13px] text-[#BA4270] font-display text-[24px]">
                Premium Plan
              </h2>
              <div className="md:mb-[19px] md:w-[223px] hidden md:block">
                <p className="text-[#6C8294] font-public text-[15px] leading-7">
                  Get tailored solutions, volume pricing, and dedicated support
                  for your team
                </p>
              </div>
              <div>
                <p className="text-[#36536B] font-display text-[56px] leading-[72px]">
                  $499.00
                </p>
                <div className="bg-[#36536B] w-[223px] h-[1px] mt-6 mb-5 opacity-25 lg:w-[350px]"></div>
                <div className="flex justify-center mb-6">
                  <ul>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Transactions
                    </li>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Auth
                    </li>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Identity
                    </li>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Investments
                    </li>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Assets
                    </li>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Liabilities
                    </li>
                    <li className="my-1 flex items-center text-[#36536B] font-public text-[16px] leading-7">
                      <Image
                        src="/assets/shared/desktop/icon-check.svg"
                        alt="List Item Image"
                        className="mr-6"
                        width={16}
                        height={16}
                      />
                      Income
                    </li>
                  </ul>
                </div>
                <div className="bg-[#36536B] w-[223px] h-[1px] mt-6 mb-6 opacity-25 lg:w-[350px]"></div>
                <button className="w-[168px] h-[48px] text-[#36536B] border-[#36536B] border-[1px] rounded-3xl mb-12 hover:border-[#36536B] hover:bg-[#36536B] hover:text-[#FFFFFF]">
                  Request Access
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[32px] mb-20">
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
