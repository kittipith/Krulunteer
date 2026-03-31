import Graph from '../components/Graph'
import Api from '../components/Api'
import Benefit from '../components/Benefits'
import user from '../assets/mock_user.png'
import schools from '../data/School.json'
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from 'react';
import Swal from 'sweetalert2';

import { IoIosArrowRoundBack } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { FaRegMoneyBillAlt } from "react-icons/fa";


function Detail(){
    const { id } = useParams();
    const navigate = useNavigate();
    const school = schools.find(s => s.ID === parseInt(id));
    if (!school) {
        return <div className="text-center py-20 text-2xl">ไม่พบข้อมูลโรงเรียนนี้</div>;
    }

    const images = school.Images;
    const [index, setIndex] = useState( 0);
    const handleDecrement = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
    const handleIncrement = () => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleApply = () => {
        Swal.fire({
            title: "ยืนยันการสมัคร?",
            text: `คุณแน่ใจที่จะสมัคร ${school.Name} ใช่หรือไม่?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#368C64",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, apply!",
        }).then((result) => {
            if (result.isConfirmed) Swal.fire({
                title: "สมัครสำเร็จ!",
                text: `คุณได้สมัครเข้าร่วม ${school.Name} สำเร็จแล้ว`,
                icon: "success"
            });
        });
        setTimeout(() => {
            navigate('/find');
        }, 1000);
    };

    return(
        <div>
            <div className='bg-[#F9F9F9] min-h-screen pt-[8%] px-[20%] pb-10'>
                <Link to="/find" className="w-fit block">
                    <button className='group flex justify-center items-center w-fit text-[#7F7F7F] hover:text-[#368C64] text-[1.2rem] mb-2 cursor-pointer transition-all duration-300 ease-in-out'>
                        <IoIosArrowRoundBack size={30} className="transition-transform duration-300 group-hover:-translate-x-1" />
                        <span>Back</span>
                    </button>
                </Link>
                <div className='flex justify-between items-center font-noto-sans-thai'>
                    <h1 className='font-playfair font-medium text-[2.5rem]'>{school.Name}</h1>
                    {(() => {
                        if (school.Priority === "1") return <span className='bg-[#40a576] flex justify-center items-center font-light text-white text-[1.3rem] px-4 py-1 rounded-xl'>ปกติ</span>;
                        if (school.Priority === "2") return <span className='bg-[#e8b730] flex justify-center items-center font-light text-white text-[1.3rem] px-4 py-1 rounded-xl'>ปานกลาง</span>;
                        if (school.Priority === "3") return <span className='bg-[#FF0000] flex justify-center items-center font-light text-white text-[1.3rem] px-4 py-1 rounded-xl'>เร่งด่วน</span>;
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
                <div className='flex items-center gap-4'>
                    <button className="py-2 px-4 rounded-lg bg-white shadow-md hover:bg-gray-100 active:scale-95 transition-transform" onClick={handleDecrement}>
                        {"<"}
                    </button>
                    <div className="w-full relative">
                        <img key={index} src={images[index]} alt={`${school.Name} - ${index + 1}`} className='w-full h-[45vh] object-cover rounded-2xl shadow-lg' />
                        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                            {index + 1} / {images.length}
                        </div>
                    </div>
                    <button className="py-2 px-4 rounded-lg bg-white shadow-md hover:bg-gray-100 active:scale-95 transition-transform" onClick={handleIncrement}>
                        {">"}
                    </button>
                </div>
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
                <div className='w-full bg-[#f2f7f3] font-noto-sans-thai rounded-2xl mt-5 border border-gray-200 shadow-sm'>
                    <div className='flex flex-col items-center gap-3 py-5'>
                        <img src={user} alt="User" className='w-16 h-16 rounded-full border border-gray-300' />
                        <p className='text-[1.2rem] font-medium'>ผู้จัดทำ: นายกิตติพิชญ์ หิรัญวงศ์</p>
                        <p className='text-[1rem] text-[#808080]'>ตำแหน่ง: ผู้อำนวยการโรงเรียน</p>
                        <button onClick={handleApply} className='bg-[#368C64] text-white text-[1rem] py-2 px-6 rounded-xl hover:bg-[#2a6b4f] transition-colors cursor-pointer'>Apply to Volunteer • สมัครเข้าร่วมเป็นอาสาสมัคร</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail