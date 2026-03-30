import '../index.css'
import profileData from '../data/ProfileData.json'
import { MdOutlinePhoneInTalk } from "react-icons/md"
import { IoIosMail, IoIosArrowRoundBack } from "react-icons/io"
import { FaLine } from "react-icons/fa6"
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'

function Profile() {
    const { id } = useParams()

    // หา user ตาม id จาก JSON
    const selectedProfile = profileData.find((item) => item.id === Number(id))

    // ถ้าไม่เจอข้อมูล
    if (!selectedProfile) {
        return (
            <>
                <div className="min-h-screen flex items-center justify-center">
                    <h1 className="text-2xl font-bold text-red-500 font-noto-sans-thai">
                        ไม่พบข้อมูลผู้ใช้
                    </h1>
                </div>
            </>
        )
    }

    // state สำหรับข้อมูลโปรไฟล์ที่แก้ไขได้
    const [profile, setProfile] = useState(selectedProfile)

    // state เปิด/ปิด popup
    const [isOpen, setIsOpen] = useState(false)

    // state เก็บค่าฟอร์ม
    const [formData, setFormData] = useState({
        name: profile.name,
        age: profile.age,
        teach_level: profile.teach_level,
        phone: profile.contact.phone,
        email: profile.contact.email,
        line: profile.contact.line,
        teachableSubjects: profile.teachableSubjects,
        education: profile.education,
        experience: profile.experience
    })

    // เปิด popup แล้ว sync ข้อมูลล่าสุดลงฟอร์ม
    const handleOpenModal = () => {
        setFormData({
            name: profile.name,
            age: profile.age,
            teach_level: profile.teach_level,
            phone: profile.contact.phone,
            email: profile.contact.email,
            line: profile.contact.line,
            teachableSubjects: profile.teachableSubjects,
            education: profile.education,
            experience: profile.experience
        })
        setIsOpen(true)
    }

    // เปลี่ยนค่า input
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
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
                                <button
                                    onClick={handleOpenModal}
                                    className="border border-gray-300 hover:border-gray-400 px-5 py-2 rounded-xl text-sm font-medium font-noto-sans-thai text-gray-700 hover:bg-gray-50 transition"
                                >
                                    แก้ไขข้อมูล
                                </button>
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

                            {/* ประสบการณ์ */}
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

                            {/* วิชาที่สอนได้ */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h2 className="text-lg font-bold text-gray-800 mb-4 font-noto-sans-thai">
                                    วิชาที่สามารถสอนได้
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {profile.teachableSubjects.map((subject, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium font-noto-sans-thai"
                                        >
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
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-gray-200 p-6 relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl">
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold text-gray-900 font-noto-sans-thai mb-6">
                            แก้ไขข้อมูลโปรไฟล์
                        </h2>
                        <div className="space-y-4">
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2'>
                                <div>    <label className="block text-sm font-medium text-gray-700 mb-1 font-noto-sans-thai">
                                        ชื่อ
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 font-noto-sans-thai">
                                        อายุ
                                    </label>
                                    <input
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 font-noto-sans-thai">
                                        ตำแหน่ง
                                    </label>
                                    <input
                                        type="text"
                                        name="teach_level"
                                        value={formData.teach_level}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 font-noto-sans-thai">
                                        เบอร์โทรศัพท์
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 font-noto-sans-thai">
                                        อีเมล
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 font-noto-sans-thai">
                                        Line ID
                                    </label>
                                    <input
                                        type="text"
                                        name="line"
                                        value={formData.line}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"/>
                                </div>

                                
                            </div>

                            <div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 font-noto-sans-thai">
                                    การศึกษา
                                    </label>
                                    <input
                                        type="text"
                                        name="edcation"
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 font-noto-sans-thai">
                                        ประสบการณ์
                                    </label>
                                    <input
                                        type="text"
                                        name="experience"
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 font-noto-sans-thai">
                                        วิชาที่สามารถสอนได้
                                    </label>
                                    <input
                                        type="text"
                                        name="ducation"
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"/>
                                </div>
                            </div>
                            

                        </div>

                        <div className="flex justify-end gap-3 mt-8">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-5 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 font-noto-sans-thai">
                                ยกเลิก
                            </button>
                            <button
                                className="px-5 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 font-noto-sans-thai">
                                บันทึกข้อมูล
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Profile