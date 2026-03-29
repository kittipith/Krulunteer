import React from 'react';
import profile from '../assets/google.png'
import { IoClose, IoBookOutline, IoSchoolOutline, IoMailOutline, IoLocationOutline } from 'react-icons/io5';
import { GoHistory } from "react-icons/go";
import { LuPhone } from "react-icons/lu";
import { FaLine } from "react-icons/fa6";

const workHistories = [
    { 
        id: 1, 
        school: 'โรงเรียนเบญจมราชรังสฤษฎิ์', 
        location: 'ฉะเชิงเทรา, อำเภอเมือง', 
        level: 'ม.1 - ม.3', 
        date: 'ม.ค. - ธ.ค. 2566' 
    },
    { 
        id: 2, 
        school: 'โรงเรียนเบญจมราชรังสฤษฎิ์', 
        location: 'ฉะเชิงเทรา, อำเภอเมือง', 
        level: 'ม.1 - ม.3', 
        date: 'ม.ค. - ธ.ค. 2566' 
    },
    { 
        id: 3, 
        school: 'โรงเรียนเบญจมราชรังสฤษฎิ์', 
        location: 'ฉะเชิงเทรา, อำเภอเมือง', 
        level: 'ม.1 - ม.3', 
        date: 'ม.ค. - ธ.ค. 2566' 
    },
];

const ApplicantPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]">
                <div className="bg-gradient-to-t from-[#fef7d9] to-white p-6 relative shrink-0">
                    <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full transition-colors">
                        <IoClose size={20} />
                    </button>
                    <div className="flex items-center gap-5">
                        <img src={profile} alt="Profile" className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm"/>
                        <div>
                            <h2 className="text-[1.7rem] font-semibold text-gray-800 font-noto-sans-thai">นายกิตติพิชญ์ หิรัญวงศ์ (21 ปี)</h2>
                            <p className="text-gray-500 text-[1.1rem] font-noto-sans-thai mt-1">ครูชำนาญการพิเศษ</p>
                        </div>
                    </div>
                </div>

                <div className="px-8 py-5 overflow-y-auto flex flex-col gap-8 text-sm text-gray-700">
                    <section>
                        <h3 className="flex items-center gap-2 font-medium font-noto-sans-thai text-gray-900 mb-3 text-[1.2rem]">
                            <IoBookOutline className="text-emerald-700" size={25} />
                            วิชาที่สอนได้
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-4 py-1.5 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-100">คณิตศาสตร์</span>
                            <span className="px-4 py-1.5 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-100">ภาษาอังกฤษ</span>
                        </div>
                    </section>

                    <section>
                        <h3 className="flex items-center gap-2 font-medium font-noto-sans-thai text-gray-900 mb-3 text-[1.2rem]">
                            <IoSchoolOutline className="text-emerald-700" size={25} />
                            การศึกษา
                        </h3>
                        <ul className="space-y-4 font-noto-sans-thai">
                            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-emerald-600 before:rounded-full">
                                <p className="font-medium text-gray-900 text-[1rem]">ปริญญาโท สาขาคณิตศาสตรศึกษา</p>
                                <p className="text-gray-500 text-[0.9rem] mt-0.5">มหาวิทยาลัยศรีนครินทรวิโรฒ ประสานมิตร - 2564</p>
                            </li>
                            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-emerald-600 before:rounded-full">
                                <p className="font-medium text-gray-900 text-[1rem]">ปริญญาตรี สาขาคณิตศาสตร์</p>
                                <p className="text-gray-500 text-[0.9rem] mt-0.5">มหาวิทยาลัยศรีนครินทรวิโรฒ ประสานมิตร - 2560</p>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="flex items-center gap-2 font-medium font-noto-sans-thai text-gray-900 mb-3 text-[1.2rem]">
                            <GoHistory className="text-emerald-700" size={25} />
                            ประวัติการทำงาน
                        </h3>

                        <div className="relative border-l border-gray-200 ml-2.5 space-y-6 font-noto-sans-thai">
                            {workHistories.map((work) => (
                                <div key={work.id} className="relative pl-7">
                                    <div className="absolute -left-[9px] top-1.5 flex items-center justify-center w-[17px] h-[17px] rounded-full bg-white border-[2px] border-emerald-500">
                                        <div className="w-[7px] h-[7px] bg-emerald-500 rounded-full"></div>
                                    </div>
                                    <div className="bg-[#f9f9f9] p-4 rounded-xl">
                                        <h4 className="font-medium text-gray-900 text-[1.1rem]">{work.school}</h4>
                                        <p className="flex items-center gap-1 text-gray-400 text-[1rem] mt-1">
                                            <IoLocationOutline size={15} />
                                            {work.location}
                                        </p>
                                        <div className="flex items-center gap-3 mt-3">
                                            <span className="px-3 py-0.5 bg-[#facc15] text-yellow-900 text-[1rem] font-semibold rounded-full">
                                                {work.level}
                                            </span>
                                            <span className="text-gray-400 text-[1rem]">
                                                {work.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="flex items-center gap-2 font-medium font-noto-sans-thai text-gray-900 mb-3 text-[1.2rem]">
                            <IoMailOutline className="text-emerald-700" size={25} />
                            ช่องทางการติดต่อ
                        </h3>
                        <div className="flex flex-col items-start justify-start gap-2 bg-gray-50 rounded-xl p-4 text-black">
                            <div className='flex justify-center items-center gap-2 text-[1.1rem]'>
                                <LuPhone size={20} />
                                <span>081-234-5678</span>
                            </div>
                            <div className='flex justify-center items-center gap-2 text-[1.1rem]'>
                                <IoMailOutline size={20} />
                                <span>Example@kmitl.ac.th</span>
                            </div>
                            <div className='flex justify-center items-center gap-2 text-[1.1rem]'>
                                <FaLine size={20} />
                                <span>kittipitch</span>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default ApplicantPopup;