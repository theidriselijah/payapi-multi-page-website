import MainButton from "./MainButton";


export default function DemoReqForm() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center"> 
        <div className="mb-[19px]">
          <input type="email" name="email" placeholder="Enter email address" className="bg-[#FBFCFE] px-[27px] w-[327px] h-[48px] rounded-3xl"/>
        </div>
        <MainButton />
      </div>
    </div>
  )
}
