import DemoReqForm from '@/components/DemoReqForm'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function About() {
  return (
    <div className="bg-[#EDF3F8]">
      <div className="bg-[url('/assets/shared/desktop/bg-pattern-circle.svg')] bg-no-repeat bg-[top_-33%_left_-10%] bg-auto md:bg-[top_-40%_right_4000%]">
        <NavBar />
        <div className="text-center mx-6 md:mx-10 mt-12 md:mt-[80px] lg:mx-0 lg:mt-[82px]">
          <div className='lg:mx-[260px]'>
            <h1 className="text-[#36536B] font-display text-[32px] leading-9 mb-10 md:text-[48px] md:leading-[56px] md:mb-[54px] lg:text-[56px] lg:leading-[56px] lg:w-[730px] lg:mb-[51px]">
              We empower innovators by delivering access to the financial system
            </h1>
            <div className="mb-12 md:mb-[64px] md:flex md:justify-center md:gab-[10px] lg:gap-[30px]">
              <h4 className="text-[#36536B] font-display text-[24px] md:text-[32px] mb-4 leading-8 md:leading-[40px] md:w-[223px] lg:mb-0 lg:text-left lg:w-[255px]">
                Our Vision
              </h4>
              <p className="text-[#6C8294] font-public text-[15px] leading-7 md:w-[456px] md:text-justify lg:w-[635px]">
                Our main goal is to build beautiful consumer experiences along
                with developer-friendly infrastructure. The result is an
                intelligent tool that gives everyone the ability to create
                amazing products that solve big problems. We are deeply focused
                on democratizing financial services through technology.
              </p>
            </div>
            <div className="mb-[76px] md:mb-[92px] md:flex md:justify-center md:gab-[10px] lg:gap-[30px]">
              <h4 className="text-[#36536B] font-display text-[24px] md:text-[32px] mb-4 leading-8 md:leading-[40px] md:w-[223px] lg:mb-0 lg:text-left lg:w-[255px]">
                Our Business
              </h4>
              <p className="text-[#6C8294] font-public text-[15px] leading-7 md:w-[456px] md:text-justify lg:w-[635px]">
                At the core of our platform is the technical infrastructure APIs
                that connect consumers. Our innovative product provides key
                insights for businesses and individuals, as well as robust
                reporting for traditional financial institutions and developers.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/assets/about/mobile/image-team-members.jpg"
            alt="team members"
            width={449}
            height={300}
            className="md:hidden w-full"
          />
          <Image
            src="/assets/about/tablet/image-team-members.jpg"
            alt="team members"
            width={769}
            height={267}
            className="hidden md:block lg:hidden w-full"
          />
          <Image
            src="/assets/about/desktop/image-team-members.jpg"
            alt="team members"
            width={1440}
            height={500}
            className="hidden md:hidden lg:block w-full"
          />
        </div>
        <div className="flex justify-center items-center mt-12 md:hidden">
          <div className="bg-[#36536B] w-[327px] h-[1px] mb-4 opacity-25"></div>
        </div>
        <div className="text-center md:flex md:justify-between md:items-end md:mx-10 md:my-[64px] lg:mx-[165px]">
          <div className="mb-8 md:mb-0">
            <div className="bg-[#36536B] w-[223px] h-[1px] mb-4 opacity-25 hidden md:block"></div>
            <h5 className="text-[#36536B] text-[16px] font-public leading-7">
              Team Members
            </h5>
            <p className="text-[#BA4270] font-display text-[56px] leading-[72px]">
              300+
            </p>
            <div className="bg-[#36536B] w-[223px] h-[1px] mb-4 opacity-25 hidden md:block"></div>
          </div>
          <div className="mb-8 md:mb-0">
            <div className="bg-[#36536B] w-[223px] h-[1px] mb-4 opacity-25 hidden md:block"></div>
            <h5 className="text-[#36536B] text-[16px] font-public leading-7">
              Offices in the US
            </h5>
            <p className="text-[#BA4270] font-display text-[56px] leading-[72px]">
              3
            </p>
            <div className="bg-[#36536B] w-[223px] h-[1px] mb-4 opacity-25 hidden md:block"></div>
          </div>
          <div>
            <div className="bg-[#36536B] w-[223px] h-[1px] mb-4 opacity-25 hidden md:block"></div>
            <h5 className="text-[#36536B] text-[16px] font-public leading-7">
              Transactions analyzed
            </h5>
            <p className="text-[#BA4270] font-display text-[56px] leading-[72px]">
              10M+
            </p>
            <div className="bg-[#36536B] w-[223px] h-[1px] mb-4 opacity-25 hidden md:block"></div>
          </div>
        </div>
        <div className="flex justify-center items-center md:hidden">
          <div className="bg-[#36536B] w-[327px] h-[1px] mt-4 mb-5 opacity-25"></div>
        </div>
        <div className="text-center px-6 pb-12">
          <div className="mb-12 md:mb-[64px] md:flex md:justify-center md:gab-[10px]">
            <h4 className="text-[#36536B] font-display text-[24px] md:text-[32px] mb-4 leading-8 md:leading-[40px] md:w-[223px] lg:mb-0 lg:text-left lg:w-[255px]">
              The Culture
            </h4>
            <p className="text-[#6C8294] font-public text-[15px] leading-7 md:w-[456px] md:text-justify lg:w-[635px]">
              We strongly believe there&apos;s always an opportunity to learn
              from each other outside of day-to-day work, whether it&apos;s
              company-wide offsites, internal hackathons, or co-worker meetups.
              We always value cross-team collaboration and diversity of thought,
              no matter the job title.
            </p>
          </div>
          <div className="md:mb-[64px] md:flex md:justify-center md:gab-[10px]">
            <h4 className="text-[#36536B] font-display text-[24px] md:text-[32px] mb-4 leading-8 md:leading-[40px] md:w-[223px] lg:mb-0 lg:text-left lg:w-[255px]">
              The People
            </h4>
            <p className="text-[#6C8294] font-public text-[15px] leading-7 md:w-[456px] md:text-justify lg:w-[635px]">
              We&apos;re all passionate about building a more efficient and
              inclusive financial infrastructure together. At PayAPI, we have
              diverse backgrounds and skills.
            </p>
          </div>
        </div>
        <div className="mb-20">
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
