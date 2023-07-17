export default function DemoReqForm() {
  return (
    <div className="md:mb-6">
      <div className="flex flex-col justify-center items-center">
        <div className="relative flex flex-col md:flex md:items-center">
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className="mb-[19px] md:mb-0 bg-[#FBFCFE] px-[27px] w-[327px] h-[48px] rounded-3xl md:w-[445px] md:pr-[200px]"
          />
          <button className="mb-[24px] md:mb-0 md:z-50 bg-[#BA4270] hover:bg-[#DA6D97] active:bg-[#BA4270] text-[#FBFCFE] font-public font-bold w-[327px] h-[48px] md:w-[173px] rounded-3xl md:absolute right-0">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  )
}
