import profile from '../assets/google.png'
import ApplicantPopup from './ApplicantPopup'
import { useState } from 'react'

import { IoEyeOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";

function ListApplicant() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='mb-5'>
            <div className="flex justify-start items-center gap-3 px-5 py-3 mb-5 bg-white border border-gray-300 rounded-2xl hover:shadow-md transition duration-200 ease-in-out">
                <img src={profile} alt="Profile" className='w-12 h-12' />
                <div className='flex justify-between items-center w-full'>
                    <div className='flex flex-col'>
                        <p className='text-[1.5rem] font-playfair'>นายกิตติพิชญ์ หิรัญวงศ์</p>
                        <p className='text-[1.1rem] font-playfair text-[#7F7F7F]'>คณิตศาสตร์, ศรีนครินทรวิโรฒ ประสานมิตร</p>
                    </div>
                    <div className='flex justify-end items-center gap-5 text-[#368C64] font-noto-sans-thai'>
                        <button onClick={() => setIsModalOpen(true)} className='flex gap-2 cursor-pointer'>
                            <IoEyeOutline size={25} />
                            ดูรายละเอียด
                        </button>
                        <button className='flex gap-2 text-white bg-[#368C64] px-4 py-2 rounded-2xl cursor-pointer transition duration-200 ease-in-out hover:bg-[#2B6E4A]'>
                            <CiCircleCheck size={25} />
                            รับเข้าสอน
                        </button>
                    </div>
                </div>
            </div>
            <ApplicantPopup isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}

export default ListApplicant