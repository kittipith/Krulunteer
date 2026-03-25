import '../index.css'
import Header from '../components/Header'
import ThailandMap from '../components/thailandMap.jsx'
import { useNavigate } from 'react-router-dom';

import { GrLinkNext } from "react-icons/gr";

function Home(){
    const navigate = useNavigate();

    const handleFindSchool = () => {
        navigate("/find");
    }
    const handlePostNeed = () => {
        navigate("/post");
    }
    return(
        <>
            <Header />
            <div className="bg-gray-100 min-h-screen flex items-start justify-center px-10 pt-[5%] mt-20">
                <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="text-[#368C64] text-sm mb-2 font-noto-sans-thai">
                            เติมเต็มช่องโหว่ทางการศึกษา
                        </p>

                        <h1 className="text-4xl font-bold leading-tight mb-4 font-noto-sans-thai">
                            เด็กทุกคนสมควรได้รับโอกาส <br />
                            จากครูที่พร้อมเดินทางไปหา
                        </h1>

                        <p className="text-[#3F3F3F] mb-6 font-noto-sans-thai">
                            เชื่อมต่อคุณกับโรงเรียนที่ห่างไกลทั่วประเทศ ที่กำลังรอคอยครูอาสา ให้คุณได้ค้นหาโรงเรียนเหล่านั้นได้ด้วยตัวเอง ทำความเข้าใจเด็ก ๆ และบริบทของพื้นที่ เพื่อให้คุณตัดสินใจลงพื้นที่สอนได้อย่างตรงจุด
                            และค้นพบโรงเรียนที่ใช่สำหรับคุณอย่างแท้จริง
                        </p>

                        <div className="flex gap-4">
                        <button className="px-6 py-3 bg-[#368C64] text-white text-[1.2rem] rounded-lg shadow cursor-pointer hover:bg-green-700 font-playfair"
                            onClick={handleFindSchool}>
                            Find a School
                            <GrLinkNext size={20} className="inline-block ml-2" />
                        </button>

                        <button className="px-6 py-3 border border-[#368C64] text-[#368C64] text-[1.2rem]w rounded-lg cursor-pointer hover:bg-green-50 font-playfair"
                            onClick={handlePostNeed}>
                            Post a Need
                        </button>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-md">
                        <h2 className="text-center text-gray-600 mb-2">
                            School Location
                        </h2>

                        <div className="h-[450px] rounded-lg overflow-hidden">
                            <ThailandMap />
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Home