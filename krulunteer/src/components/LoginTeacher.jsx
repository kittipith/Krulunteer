import { PiGraduationCapThin } from "react-icons/pi";
import { FaRegAddressCard } from "react-icons/fa";

import { useState } from "react";
import Swal from 'sweetalert2'
import ProfileData from '../data/ProfileData.json'
import { useNavigate } from "react-router-dom";

function LoginTeacher({ teacher, setTeacher }) {
    const [id, setId] = useState('');
    const navigate = useNavigate();
    const handleLogin = () => {
        const Profile = ProfileData.find(profile => profile.id_card === id);
        if (Profile){
            setTeacher(Profile);
            setId('');
            Swal.fire({
                title: "Login สำเร็จ!",
                text: `ยินดีต้อนรับคุณ ${Profile.name}`,
                icon: "success",
                draggable: true
            }).then(() => {
                navigate("/"); 
            });
        }else{
            Swal.fire({
                icon: "error",
                title: "Login ผิดพลาด",
                text: "เลขบัตรประชาชนไม่ถูกต้อง กรุณาลองใหม่",
            });
            setId('');
        }
    };

    return(
        <div className="w-full flex flex-col items-center justify-start mt-[30%]">
            <div className="flex items-center justify-center w-[130px] h-[130px] border border-[#D6E6DD] rounded-full">
                <div className="flex items-center justify-center w-[110px] h-[110px] bg-[#F0F5F1] rounded-full">
                    <PiGraduationCapThin size={50} color="#42926D" />
                </div>
            </div>
            <h1 className="font-playfair font-semibold text-[2.5rem]">Teacher</h1>
            <p className="text-center text-[#3F3F3F] font-noto-sans-thai text-[1rem]">เข้าสู่ระบบด้วยบัตรประชาชน</p>
            <div className="w-[80%] mt-7 mb-5">
                <label htmlFor="id-card" className="text-[1.2rem] font-medium font-noto-sans-thai">เลขบัตรประชาชน</label>
                <div className="relative flex items-center w-full bg-white border border-gray-300 rounded-2xl px-4 py-2 focus-within:border-green-800">
                    <FaRegAddressCard size={20} className="absolute left-4 text-[#D6E6DD]" />
                    <input id="id-card" type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="เช่น 1-1000-00000-00-0" className="w-full pl-10 outline-none text-gray-700 text-[1.2rem]" />
                </div>
            </div>
            <button onClick={handleLogin} className="w-[80%] bg-[#368C64] text-white py-3 rounded-2xl text-[1.2rem] cursor-pointer hover:bg-green-800 transition-colors">Verify & Login with ID Number</button>
            <div className="w-full flex flex-col justify-center items-center mt-5">
                <p className="text-[#368C64] text-[1rem] font-noto-sans-thai">ตรวจสอบใบประกอบวิชาชีพผ่านฐานข้อมูลคุรุสภา (KSP)</p>
                <p className="text-[#3F3F3F] text-[1rem]">License status verified via Teachers Council of Thailand (KSP)</p>
            </div>
        </div>
    )
}

export default LoginTeacher