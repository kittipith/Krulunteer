import { IoHomeOutline, IoShieldCheckmarkOutline, IoFastFoodOutline } from "react-icons/io5";
import { BsBusFront } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";

function Benefits({ welfare = [] }) {
    const iconConfig = {
        "Housing": {
            icon: <IoHomeOutline size={50} />,
            labelEn: "Free Housing",
            labelTh: "มีบ้านพักให้ฟรี"
        },
        "Transport": {
            icon: <BsBusFront size={50} />,
            labelEn: "Transportation",
            labelTh: "มีรถรับส่งฟรี"
        },
        "WiFi": {
            icon: <FaWifi size={50} />,
            labelEn: "Free Wifi",
            labelTh: "มีอินเตอร์เน็ตฟรี"
        },
        "Water&Electric": {
            icon: <RiBillLine size={50} />,
            labelEn: "Utilities",
            labelTh: "ฟรีค่าน้ำ/ค่าไฟ"
        },
        "Food": {
            icon: <IoFastFoodOutline size={50} />,
            labelEn: "Free Food",
            labelTh: "มีอาหารเลี้ยงฟรี"
        }
    };

    return (
        <div>
            <h2 className='pt-5 pb-3 text-[1.5rem] font-noto-sans-thai font-semibold'>สวัสดิการของโรงเรียน</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {welfare.map((item, index) => {
                    const config = iconConfig[item];

                    return (
                        <div key={index} className="flex flex-col justify-center items-center border border-[#B3B3B3] rounded-2xl py-5 bg-white shadow-sm hover:border-[#368C64] transition-all">
                            <div className="w-14 h-14 flex items-center justify-center bg-[#E0FFF1] rounded-full text-[#368C64] mb-2 p-3">
                                {config ? config.icon : <IoShieldCheckmarkOutline size={50} />}
                            </div>
                            
                            <p className="text-[1rem] font-medium text-center px-2">
                                {config ? config.labelEn : item} 
                            </p>
                            <p className="text-[0.9rem] text-gray-500 font-noto-sans-thai text-center px-2">
                                {config ? config.labelTh : "สวัสดิการเพิ่มเติม"}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Benefits;