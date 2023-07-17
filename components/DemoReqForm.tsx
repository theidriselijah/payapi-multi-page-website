

export default function DemoReqForm() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="mb-[19px]">
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className="bg-[#FBFCFE] px-[27px] w-[327px] h-[48px] rounded-3xl"
          />
        </div>
        <div className="mb-[24px]">
          <button className="bg-[#BA4270] hover:bg-[#DA6D97] active:bg-[#BA4270] text-[#FBFCFE] font-public font-bold w-[327px] h-[48px] rounded-3xl">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  )
}
