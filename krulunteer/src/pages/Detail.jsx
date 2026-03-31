import Graph from '../components/Graph'
import Api from '../components/Api'
import Benefit from '../components/Benefits'
import Test from '../assets/test.jpg'
import schools from '../data/School.json'
import { Link, useParams } from "react-router-dom";

import { IoIosArrowRoundBack } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { FaRegMoneyBillAlt } from "react-icons/fa";


function Detail(){
    const { id } = useParams();

    const school = schools.find(s => s.ID === parseInt(id));

    if (!school) {
        return <div className="text-center py-20 text-2xl">ไม่พบข้อมูลโรงเรียนนี้</div>;
    }
    return(
        <div>
            <div className='bg-[#F9F9F9] min-h-screen pt-[8%] px-[20%] pb-10'>
                <Link to="/find" className="w-fit block">
                    <button className='group flex justify-center items-center w-fit text-[#7F7F7F] hover:text-[#368C64] text-[1.2rem] mb-2 cursor-pointer transition-all duration-300 ease-in-out'>
                        <IoIosArrowRoundBack size={30} className="transition-transform duration-300 group-hover:-translate-x-1" />
                        <span>Back</span>
                    </button>
                </Link>
                <div className='flex justify-between items-center'>
                    <h1 className='font-playfair font-medium text-[2.5rem]'>{school.Name}</h1>
                    {(() => {
                        if (school.Priority === "1") return <span className='bg-[#00b120] flex justify-center items-center font-noto-sans-thai font-medium text-white text-[1.3rem] px-4 py-1 rounded-xl'>ปกติ</span>;
                        if (school.Priority === "2") return <span className='bg-[#ffd000] flex justify-center items-center font-noto-sans-thai font-medium text-white text-[1.3rem] px-4 py-1 rounded-xl'>ปานกลาง</span>;
                        if (school.Priority === "3") return <span className='bg-[#FF0000] flex justify-center items-center font-noto-sans-thai font-medium text-white text-[1.3rem] px-4 py-1 rounded-xl'>เร่งด่วน</span>;
                        return null;
                    })()}
                </div>
                <div className='flex items-center font-noto-sans-thai'>
                    <IoLocationOutline />
                    <span className='text-[#808080] text-[1rem] mr-2'>{school.Province}, {school.District}</span>
                    <div className='flex items-center gap-2'>
                        <CiClock2 />
                        <span className='text-[#808080] text-[1rem]'>{school.Duration}</span>
                    </div>
                </div>
                <div className='flex justify-between items-center my-3 font-noto-sans-thai'>
                    <div>
                        {school.Subject.map((s, index) => (
                            <span key={index} className="text-[#368C64] bg-[#E0FFF1] px-3 py-1 rounded-full mr-2">
                                {s}
                            </span>
                        ))}
                    </div>
                    <span className='flex justify-center items-center gap-2 text-[#B45309] bg-[#FEFFE2] border border-[#ffdd00] px-5 py-1 rounded-full'>
                        <FaRegMoneyBillAlt size={25} />
                        <span className='text-[1.2rem] font-medium mt-1'>
                            {school.NoSalary ? "ไม่มีเงินเดือน" : `฿${school.Budget.toLocaleString()} / เดือน`}
                        </span>
                    </span>
                </div>
                <img src={Test} alt="test" className='w-full h-[40vh] object-center rounded-2xl' />
                <div className='grid grid-cols-[59%_40%] my-5'>
                    <Graph Data={school.Environment} />
                    <Api Lat={school.Lat} Lon={school.Lon}/>
                </div>
                <Benefit welfare={school.Welfare} />
                <div>
                    <h2 className='pt-5 text-[1.5rem] font-noto-sans-thai font-semibold'>สถานที่ตั้ง</h2>
                    <iframe src={school.MapUrl} 
                        className="w-full h-[400px] border border-[#B3B3B3] rounded-2xl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className='w-full bg-[#E0FFF1] rounded-2xl'>
                    
                </div>
                </div>
        </div>
    )
}

export default Detail