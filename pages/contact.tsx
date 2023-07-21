import DemoReqForm from '@/components/DemoReqForm'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import { useState } from 'react'

export default function Contact() {

  const initialFormData = {
    name: "",
    email: "",
    companyName: "",
    title: "",
    message: "",
    isSubscribed: false,
  }

  const [formData, setFormData] = useState(initialFormData)

  function handleChange(event: any) {
    const { name, value, type, checked } = event.target

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event: any) {
    event.preventDefault()
    console.log(formData)

    setFormData(initialFormData)
  }

  return (
    <div className="bg-[#EDF3F8]">
      <div className="bg-[url('/assets/shared/desktop/bg-pattern-circle.svg')] bg-no-repeat bg-[top_-60%_left_-15%] bg-auto md:bg-[top_-65%_right_4000%]">
        <NavBar />
        <div className="px-6 pt-12 md:px-[100px] md:pt-[80px] lg:px-[165px]">
          <h1 className="text-[#36536B] font-display text-[32px] text-center leading-9 md:text-[48px] md:leading-[56px] lg:text-[56px]  lg:px-[100px]">
            Submit a help request and we&apos;ll get in touch shortly.
          </h1>
        </div>
        <div className="lg:flex lg:justify-center lg:items-center lg:px-[165px] lg:gap-[124px]">
          <div className="mx-6 mt-10 mb-6 md:mx-[162px] md:mt-[54px] lg:mx-0">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-center items-center gap-y-[24px]">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full h-[42px] px-[20px] pb-[17px] border-b-[1px] border-[#36536B]/[.50] bg-[#EDF3F8] focus:outline-none focus:border-[#36536B] focus:placeholder:text-[#36536B] focus:invalid:border-[#FF0000] focus:invalid:placeholder:text-[#FF0000]"
                  onChange={handleChange}
                  value={formData.name}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full h-[42px] px-[20px] pb-[17px] border-b-[1px] border-[#36536B]/[.50] bg-[#EDF3F8] focus:outline-none focus:border-[#36536B] focus:placeholder:text-[#36536B] focus:invalid:border-[#FF0000] focus:invalid:placeholder:text-[#FF0000]"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  className="w-full h-[42px] px-[20px] pb-[17px] border-b-[1px] border-[#36536B]/[.50] bg-[#EDF3F8] focus:outline-none focus:border-[#36536B] focus:placeholder:text-[#36536B] focus:invalid:border-[#FF0000] focus:invalid:placeholder:text-[#FF0000]"
                  onChange={handleChange}
                  value={formData.companyName}
                  required
                />
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="w-full h-[42px] px-[20px] pb-[17px] border-b-[1px] border-[#36536B]/[.50] bg-[#EDF3F8] focus:outline-none focus:border-[#36536B] focus:placeholder:text-[#36536B] focus:invalid:border-[#FF0000] focus:invalid:placeholder:text-[#FF0000]"
                  onChange={handleChange}
                  value={formData.title}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full h-[89px] px-[20px] border-b-[1px] border-[#36536B]/[.50] bg-[#EDF3F8] resize-none focus:outline-none focus:border-[#36536B] focus:placeholder:text-[#36536B] focus:invalid:border-[#FF0000] focus:invalid:placeholder:text-[#FF0000]"
                  onChange={handleChange}
                  value={formData.message}
                  required
                />
                <div className="flex justify-center items-center mb-[24px]">
                  <div>
                    <input type="checkbox" id="subscribe" name="isSubscribed" checked={formData.isSubscribed} onClick={handleChange}/>
                  </div>
                  <div className="ml-[32px]">
                    <label
                      htmlFor="subscribe"
                      className="text-[#36536B] font-public text-[15px] leading-[25px]"
                    >
                      Stay up-to-date with company announcements and updates to
                      our API
                    </label>
                  </div>
                </div>
              </div>
              <button className="w-[152px] h-[48px] text-[#36536B] border-[#36536B] border-[1px] rounded-3xl mb-12 hover:border-[#36536B] hover:bg-[#36536B] hover:text-[#FFFFFF]">
                Submit
              </button>
            </form>
          </div>
          <div className="text-center mx-6">
            <div>
              <h3 className="text-[#36536B] font-display text-[24px] leading-8 opacity-75 mb-8 md:mb-10 md:mx-[162px] lg:mx-0">
                Join the thousands of innovators already building with us
              </h3>
              <div className="md:hidden">
                <div className="flex justify-center items-center">
                  <Image
                    src="/assets/shared/desktop/tesla.svg"
                    alt="payapi-logo"
                    height={15}
                    width={107}
                    className="mr-[25px]"
                  />
                  <Image
                    src="/assets/shared/desktop/microsoft.svg"
                    alt="payapi-logo"
                    height={26}
                    width={120}
                    className="ml-[25px]"
                  />
                </div>
                <div className="flex justify-center items-center mt-[42px]">
                  <Image
                    src="/assets/shared/desktop/hewlett-packard.svg"
                    alt="payapi-logo"
                    height={22}
                    width={115}
                    className="mr-[28px]"
                  />
                  <Image
                    src="/assets/shared/desktop/oracle.svg"
                    alt="payapi-logo"
                    height={14}
                    width={108}
                    className="ml-[28px]"
                  />
                </div>
                <div className="flex justify-center items-center mt-[50px]">
                  <Image
                    src="/assets/shared/desktop/google.svg"
                    alt="payapi-logo"
                    height={22}
                    width={115}
                    className="mr-[28px]"
                  />
                  <Image
                    src="/assets/shared/desktop/nvidia.svg"
                    alt="payapi-logo"
                    height={22}
                    width={113}
                    className="ml-[28px]"
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-center hidden md:block">
                <div className="flex justify-between items-center mx-[119px] mb-[40px] lg:mx-0">
                  <Image
                    src="/assets/shared/desktop/tesla.svg"
                    alt="payapi-logo"
                    height={15}
                    width={107}
                  />
                  <Image
                    src="/assets/shared/desktop/microsoft.svg"
                    alt="payapi-logo"
                    height={26}
                    width={120}
                  />
                  <Image
                    src="/assets/shared/desktop/hewlett-packard.svg"
                    alt="payapi-logo"
                    height={22}
                    width={115}
                  />
                </div>
                <div className="flex justify-between items-center mx-[119px] lg:mx-0">
                  <Image
                    src="/assets/shared/desktop/oracle.svg"
                    alt="payapi-logo"
                    height={14}
                    width={108}
                  />
                  <Image
                    src="/assets/shared/desktop/google.svg"
                    alt="payapi-logo"
                    height={22}
                    width={115}
                  />
                  <Image
                    src="/assets/shared/desktop/nvidia.svg"
                    alt="payapi-logo"
                    height={22}
                    width={113}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 mb-20">
          <div className="lg:flex lg:justify-around lg:items-center">
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
