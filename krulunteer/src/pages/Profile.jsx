import '../index.css'
import profileData from '../data/ProfileData.json'
import { MdOutlinePhoneInTalk } from "react-icons/md"
import { IoIosMail, IoIosArrowRoundBack } from "react-icons/io"
import { FaLine } from "react-icons/fa6"
import { LuSchool } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { GoTrophy } from "react-icons/go";
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import EditProfileModal from "../components/EditProfile"

function Profile() {
    const { id } = useParams()
    const selectedProfile = profileData.find((item) => item.id === Number(id));
    const [profile, setProfile] = useState(selectedProfile);
    const [isOpen, setIsOpen] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        teach_level: "",
        phone: "",
        email: "",
        line: "",
        teachableSubjects: "",
        education: "",
        experience: ""
    })

    // เปิด popup จะดึงค่าจาก profile ใช้ join ทำเป็น string
    const handleOpenModal = () => {
        setFormData({
            name: profile.name,
            age: profile.age,
            teach_level: profile.teach_level,
            phone: profile.contact.phone,
            email: profile.contact.email,
            line: profile.contact.line,
            // แปลง Array เป็น String
            teachableSubjects: profile.teachableSubjects.join(", "),
            education: profile.education.map(e => `${e.degree} | ${e.school} | ${e.period}`).join("\n"),
            experience: profile.experience.map(e => `${e.title} | ${e.location} | ${e.level} | ${e.period}`).join("\n")
        })
        setIsOpen(true)
    }

    const handleSave = () => {
        setProfile(prev => ({
            ...prev,
            name: formData.name,
            age: formData.age,
            teach_level: formData.teach_level,
            contact: {
                phone: formData.phone,
                email: formData.email,
                line: formData.line
            },
            // แปลง String กลับเป็น Array
            teachableSubjects: formData.teachableSubjects.split(",").map(s => s.trim()),
            education: formData.education.split("\n").filter(line => line.trim() !== "").map((line, i) => {
                const [degree, school, period] = line.split("|").map(s => s.trim());
                return { id: i + 1, degree: degree || line, school: school || "", period: period || "" };
            }),
            experience: formData.experience.split("\n").filter(line => line.trim() !== "").map((line, i) => {
                const [title, location, level, period] = line.split("|").map(s => s.trim());
                return { id: i + 1, title: title || line, location: location || "", level: level || "", period: period || "" };
            })
        }))
        setIsOpen(false)
    }
    return (
        <>
            <div className="bg-[#F9F9F9] min-h-screen flex flex-col items-center w-full px-4 sm:px-6 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16">
                <div className="max-w-6xl w-full">
                    <Link to="/" className="w-fit block">
                        <button className='group flex justify-center items-center w-fit text-[#7F7F7F] hover:text-[#368C64] text-[1.2rem] mb-2 cursor-pointer transition-all duration-300 ease-in-out'>
                            <IoIosArrowRoundBack size={30} className="transition-transform duration-300 group-hover:-translate-x-1" />
                            <span>Back</span>
                        </button>
                    </Link>

                    <div className="mb-12 bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-2xl shadow-lg border border-gray-100">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 w-full">
                            <div className="flex flex-col sm:flex-row items-center gap-5">
                                <img
                                    src={profile.pic}
                                    alt={profile.name}
                                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border border-gray-200"/>
                                <div className="text-center sm:text-left">
                                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 font-noto-sans-thai mb-2">
                                        {profile.name} ({profile.age})
                                    </h1>
                                    <p className="text-green-700 text-sm font-medium font-noto-sans-thai bg-green-100 inline-block px-3 py-1 rounded-full">
                                        {profile.teach_level}
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center sm:justify-end sm:ml-auto">
                                <button onClick={handleOpenModal} className="border border-gray-300 hover:border-gray-400 px-5 py-2 rounded-xl text-sm font-medium font-noto-sans-thai text-gray-700 hover:bg-gray-50 transition">
                                    แก้ไขข้อมูล
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5'>
                        <div className='bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex items-center gap-2'>
                            <span className='bg-[#DBEAFE] w-20 h-20 rounded-2xl flex justify-center items-center'>
                                <LuSchool size={40} className="text-[#3670ED]" />
                            </span>
                            <div>
                                <h2 className='font-noto-sans-thai font-semibold text-[1.5rem]'>{profile.volunteerSchoolCount} โรงเรียน</h2>
                                <span className='text-gray-400 text-sm sm:text-base font-noto-sans-thai font-medium'>จำนวนโรงเรียนที่เคยสอน</span>
                            </div>
                        </div>
                        <div className='bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex items-center gap-2'>
                            <span className='bg-[#D1FAE5] w-20 h-20 rounded-2xl flex justify-center items-center'>
                                <IoCalendarOutline size={40} className="text-[#059669]" />
                            </span>
                            <div>
                                <h2 className='font-noto-sans-thai font-semibold text-[1.5rem]'>{profile.teachingYears} ปี</h2>
                                <span className='text-gray-400 text-sm sm:text-base font-noto-sans-thai font-medium'>จำนวนปีตั้งแต่เริ่มสอน</span>
                            </div>
                        </div>
                        <div className='bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex items-center gap-2'>
                            <span className='bg-[#FEF3C7] w-20 h-20 rounded-2xl flex justify-center items-center'>
                                <GoTrophy size={40} className="text-[#D97706]" />
                            </span>
                            <div>
                                <h2 className='font-noto-sans-thai font-semibold text-[1.5rem]'>{profile.awardsCont} รางวัล</h2>
                                <span className='text-gray-400 text-sm sm:text-base font-noto-sans-thai font-medium'>จำนวนรางวัลที่ได้รับ</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="space-y-6 lg:col-span-4">
                            <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-2xl shadow-lg border border-gray-100">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 font-noto-sans-thai">
                                    ช่องทางการติดต่อ
                                </h2>

                                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">
                                    <div className="flex items-start gap-2">
                                        <MdOutlinePhoneInTalk size={20} className="mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base font-noto-sans-thai">
                                                เบอร์โทรศัพท์
                                            </h3>
                                            <p className="text-gray-900 text-sm sm:text-base font-noto-sans-thai">
                                                {profile.contact.phone}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <IoIosMail size={20} className="mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base font-noto-sans-thai">
                                                อีเมล
                                            </h3>
                                            <p className="text-gray-900 text-sm sm:text-base font-noto-sans-thai">
                                                {profile.contact.email}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <FaLine size={20} className="mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base font-noto-sans-thai">
                                                Line ID
                                            </h3>
                                            <p className="text-gray-900 text-sm sm:text-base font-noto-sans-thai">
                                                {profile.contact.line}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-2xl shadow-lg border border-gray-100">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 font-noto-sans-thai">
                                    การศึกษา
                                </h2>
                                <div className="space-y-4">
                                    {profile.education.map((item) => (
                                        <div
                                            key={item.id}
                                            className="bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition"
                                        >
                                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base font-noto-sans-thai">
                                                {item.degree}
                                            </h3>
                                            <p className="text-gray-500 text-xs sm:text-sm mt-1 font-noto-sans-thai">
                                                {item.school}
                                            </p>
                                            <p className="text-gray-400 text-xs mt-1 font-noto-sans-thai">
                                                {item.period}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 lg:col-span-8">
                            <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-2xl shadow-lg border border-gray-100">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 font-noto-sans-thai">
                                    ประสบการณ์
                                </h2>
                                <div className="space-y-5">
                                    {profile.experience.map((item, index) => (
                                        <div key={item.id} className="relative pl-8">
                                            {index !== profile.experience.length - 1 && (
                                                <div className="absolute left-[10px] top-6 w-[2px] h-full bg-green-200" />
                                            )}

                                            <div className="absolute left-0 top-3 w-5 h-5 rounded-full border-2 border-[#2F855A] bg-white flex items-center justify-center">
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#2F855A]" />
                                            </div>

                                            <div className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 shadow-sm hover:shadow-md transition">
                                                <h3 className="font-medium text-gray-900 text-sm sm:text-base font-noto-sans-thai">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-500 text-xs sm:text-sm mt-1 font-noto-sans-thai">
                                                    {item.location}
                                                </p>
                                                <div className="flex flex-wrap items-center gap-2 mt-3">
                                                    <span className="bg-yellow-300 text-yellow-900 text-[11px] font-semibold px-2.5 py-1 rounded-full font-noto-sans-thai">
                                                        {item.level}
                                                    </span>
                                                    <span className="text-gray-400 text-xs font-noto-sans-thai">
                                                        {item.period}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h2 className="text-lg font-bold text-gray-800 mb-4 font-noto-sans-thai">
                                    วิชาที่สามารถสอนได้
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {profile.teachableSubjects.map((subject, index) => (
                                        <span key={index} className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium font-noto-sans-thai">
                                            {subject}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <EditProfileModal 
                    isOpen={isOpen} 
                    onClose={() => setIsOpen(false)} 
                    selectedProfile={profile}
                    onSave={handleSave}
                />
            )}
        </>
    )
}

export default Profile