import { LuSchool } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { GrLinkNext } from "react-icons/gr";

import Google from "../assets/google.png"

function LoginStaff(){
    return(
        <div className="w-full flex flex-col items-center justify-start mt-[30%]">
            <div className="flex items-center justify-center w-[130px] h-[130px] border border-[#e6e5d6] rounded-full">
                <div className="flex items-center justify-center w-[110px] h-[110px] bg-[#FCFFE0] rounded-full">
                    <LuSchool size={50} color="#FED66A" />
                </div>
            </div>
            <h1 className="font-playfair font-semibold text-[2.5rem]">บุคลากรในโรงเรียน</h1>
            <p className="text-center text-[#3F3F3F] font-noto-sans-thai text-[1rem]">เข้าสู่ระบบด้วยอีเมลของสถานศึกษา</p>
            <div className="w-[80%] mt-7 mb-5">
                <label htmlFor="email" className="text-[1.2rem] font-medium font-noto-sans-thai">Email</label>
                <div className="relative flex items-center w-full bg-white border border-gray-300 rounded-2xl px-4 py-2 focus-within:border-yellow-400">
                    <MdOutlineEmail size={20} className="absolute left-4 text-[#D6E6DD]" />
                    <input id="email" type="email" placeholder="Example@school.ac.th" className="w-full pl-10 outline-none text-gray-700 text-[1.2rem]" />
                </div>
                <label htmlFor="password" className="text-[1.2rem] font-medium font-noto-sans-thai">Password</label>
                <div className="relative flex items-center w-full bg-white border border-gray-300 rounded-2xl px-4 py-2 focus-within:border-yellow-400">
                    <CiLock size={20} className="absolute left-4 text-[#D6E6DD]" />
                    <input id="password" type="password" className="w-full pl-10 outline-none text-gray-700 text-[1.2rem]" />
                </div>
            </div>
            <button className="w-[80%] bg-[#FFC224] text-white py-3 rounded-2xl text-[1.2rem] cursor-pointer hover:bg-yellow-600 transition-colors">
                Log in
                <GrLinkNext size={20} className="inline-block ml-2" />
            </button>
            <div class="flex items-center w-[80%] py-4">
                <div class="flex-grow border-t border-gray-400"></div>
                <span class="px-4 text-gray-400 font-light">Or Log in with</span>
                <div class="flex-grow border-t border-gray-400"></div>
            </div>
            <button className="flex justify-center items-center gap-2 w-[30%] bg-white border border-gray-300 py-3 rounded-2xl text-[1.2rem] cursor-pointer hover:bg-gray-100 transition-colors">
                <img src={Google} alt="google" className="w-6 h-6" />
                Google
            </button>
        </div>
    )
}

export default LoginStaff