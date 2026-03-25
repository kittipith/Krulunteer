import { IoHomeOutline } from "react-icons/io5";
import { BsBusFront } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";

function Benefits(){
    return(
        <div>
            <h2 className='pt-5 text-[1.5rem] font-noto-sans-thai'>สวัสดิการของโรงเรียน</h2>
            <div className="grid grid-cols-4 gap-5">
                <div className="flex flex-col justify-center items-center border border-[#B3B3B3] rounded-2xl py-5 bg-white shadow-sm">
                    <IoHomeOutline className="w-14 p-3 bg-[#E0FFF1] rounded-full text-[#368C64] mb-2" size={50} />
                    <p className="text-[1rem] font-noto-sans-thai">Free Housing</p>
                    <p className="text-[1rem] font-noto-sans-thai">มีบ้านพักให้ฟรี</p>
                </div>
                <div className="flex flex-col justify-center items-center border border-[#B3B3B3] rounded-2xl py-5 bg-white shadow-sm">
                    <BsBusFront className="w-14 p-3 bg-[#E0FFF1] rounded-full text-[#368C64] mb-2" size={50} />
                    <p className="text-[1rem] font-noto-sans-thai">Transportation Provided</p>
                    <p className="text-[1rem] font-noto-sans-thai">มีรถรับส่งฟรี</p>
                </div>
                <div className="flex flex-col justify-center items-center border border-[#B3B3B3] rounded-2xl py-5 bg-white shadow-sm">
                    <FaWifi className="w-14 p-3 bg-[#E0FFF1] rounded-full text-[#368C64] mb-2" size={50} />
                    <p className="text-[1rem] font-noto-sans-thai">Free Wifi</p>
                    <p className="text-[1rem] font-noto-sans-thai">มีอินเตอร์เน็ตฟรี</p>
                </div>
                <div className="flex flex-col justify-center items-center border border-[#B3B3B3] rounded-2xl py-5 bg-white shadow-sm">
                    <RiBillLine className="w-14 p-3 bg-[#E0FFF1] rounded-full text-[#368C64] mb-2" size={50} />
                    <p className="text-[1rem] font-noto-sans-thai">Free water and electricity</p>
                    <p className="text-[1rem] font-noto-sans-thai">ฟรีค่าน้ำ/ค่าไฟ</p>
                </div>
            </div>
        </div>
    )
}

export default Benefits