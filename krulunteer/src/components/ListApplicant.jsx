import ApplicantPopup from './ApplicantPopup'
import { useState } from 'react'
import ProfilesData from '../data/ProfileData.json'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

import { IoEyeOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";

function ListApplicant() {
    const [applicants, setApplicants] = useState(ProfilesData);
    const [selectedApplicant, setSelectedApplicant] = useState(null);
    const navigate = useNavigate();

    const handleAccept = (id) => {
        const updatedList = applicants.filter(profile => profile.id !== id);
        setApplicants(updatedList);
        Swal.fire({
            title: "รับเข้าสอนเรียบร้อยแล้ว!",
            icon: "success",
            draggable: true
        });
        setTimeout(() => {
            navigate('/');
        }, 1000);
    };

    return (
        <div className='mb-5'>
            {applicants.map((profile) => (
                <div key={profile.id} className="flex justify-start items-center gap-3 px-5 py-3 mb-5 bg-white border border-gray-300 rounded-2xl hover:shadow-md transition duration-200 ease-in-out">
                    <img src={profile.pic} alt="Profile" className='w-12 h-12 rounded-full object-cover' />
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex flex-col'>
                            <p className='text-[1.5rem] font-playfair'>{profile.name}</p>
                            <p className='text-[1.1rem] font-playfair text-[#7F7F7F]'>{profile.teach_level}</p>
                        </div>
                        <div className='flex justify-end items-center gap-5 text-[#368C64] font-noto-sans-thai'>
                            <button onClick={() => setSelectedApplicant(profile)} className='flex gap-2 cursor-pointer items-center'>
                                <IoEyeOutline size={25} />
                                <span className='hidden md:flex'>ดูรายละเอียด</span>
                            </button>
                            <button onClick={() => handleAccept(profile.id)} className='flex gap-2 text-white bg-[#368C64] px-4 py-2 rounded-2xl cursor-pointer transition duration-200 ease-in-out hover:bg-[#2B6E4A] items-center'>
                                <CiCircleCheck size={25} />
                                <span className='hidden md:flex'>รับเข้าสอน</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {applicants.length === 0 && (
                <div className="text-center py-10 text-gray-400 font-noto-sans-thai">
                    ไม่มีใบสมัครใหม่ในขณะนี้
                </div>
            )}
            <ApplicantPopup 
                isOpen={!!selectedApplicant} 
                applicant={selectedApplicant} 
                onClose={() => setSelectedApplicant(null)} 
            />
        </div>
    )
}

export default ListApplicant