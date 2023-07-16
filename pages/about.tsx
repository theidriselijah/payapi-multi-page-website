import DemoReqForm from '@/components/DemoReqForm'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function About() {
  return (
    <div className="bg-[#EDF3F8]">
      <div>
        <NavBar />
        <div className="text-center mx-6 mt-12">
          <h1 className='text-[#36536B] font-display text-[32px] leading-9 mb-10'>
            We empower innovators by delivering access to the financial system
          </h1>
          <div className='mb-12'>
            <h4 className='text-[#36536B] font-display text-[24px] mb-4 leading-8'>Our Vision</h4>
            <p className='text-[#6C8294] font-public text-[15px] leading-7'>
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.
            </p>
          </div>
          <div className='mb-[76px]'>
            <h4 className='text-[#36536B] font-display text-[24px] mb-4 leading-8'>Our Business</h4>
            <p className='text-[#6C8294] font-public text-[15px] leading-7'>
              At the core of our platform is the technical infrastructure APIs
              that connect consumers. Our innovative product provides key
              insights for businesses and individuals, as well as robust
              reporting for traditional financial institutions and developers.
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/assets/about/mobile/image-team-members.jpg"
            alt="team members"
            width={449}
            height={300}
          />
        </div>
        <div className='flex justify-center items-center mt-12'>
          <div className="bg-[#36536B] w-[327px] h-[1px] mb-4 opacity-25"></div>
        </div>
        <div className="text-center">
          <div className='mb-8'>
            <h5 className='text-[#36536B] text-[16px] font-public leading-7'>Team Members</h5>
            <p className='text-[#BA4270] font-display text-[56px] leading-[72px]'>300+</p>
          </div>
          <div className='mb-8'>
            <h5 className='text-[#36536B] text-[16px] font-public leading-7'>Offices in the US</h5>
            <p className='text-[#BA4270] font-display text-[56px] leading-[72px]'>3</p>
          </div>
          <div>
            <h5 className='text-[#36536B] text-[16px] font-public leading-7'>Transactions analyzed</h5>
            <p className='text-[#BA4270] font-display text-[56px] leading-[72px]'>10M+</p>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className="bg-[#36536B] w-[327px] h-[1px] mt-4 mb-5 opacity-25"></div>
        </div>
        <div className="text-center px-6 pb-12">
          <div className='mb-12'>
            <h4 className='text-[#36536B] font-display text-[24px] mb-4 leading-8'>The Culture</h4>
            <p className='text-[#6C8294] font-public text-[15px] leading-7'>
              We strongly believe there&apos;s always an opportunity to learn
              from each other outside of day-to-day work, whether it&apos;s
              company-wide offsites, internal hackathons, or co-worker meetups.
              We always value cross-team collaboration and diversity of thought,
              no matter the job title.
            </p>
          </div>
          <div>
            <h4 className='text-[#36536B] font-display text-[24px] mb-4 leading-8'>The People</h4>
            <p className='text-[#6C8294] font-public text-[15px] leading-7'>
              We&apos;re all passionate about building a more efficient and
              inclusive financial infrastructure together. At PayAPI, we have
              diverse backgrounds and skills.
            </p>
          </div>
        </div>
        <div className="mb-20">
          <div>
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
