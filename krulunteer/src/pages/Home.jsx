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
            <div className="bg-[#F9F9F9] flex flex-col items-center w-full px-4 sm:px-6 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="text-[#2F855A] text-sm mb-2 font-noto-sans-thai">
                            เติมเต็มช่องโหว่ทางการศึกษา
                        </p>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 font-noto-sans-thai text-gray-800">
                            เด็กทุกคนสมควรได้รับโอกาส <br />
                            จากครูที่พร้อมเดินทางไปหา
                        </h1>

                        <p className="text-gray-600  mb-6 text-sm sm:text-base font-noto-sans-thai">
                            เชื่อมต่อคุณกับโรงเรียนที่ห่างไกลทั่วประเทศ ที่กำลังรอคอยครูอาสา ให้คุณได้ค้นหาโรงเรียนเหล่านั้นได้ด้วยตัวเอง ทำความเข้าใจเด็ก ๆ และบริบทของพื้นที่ เพื่อให้คุณตัดสินใจลงพื้นที่สอนได้อย่างตรงจุด
                            และค้นพบโรงเรียนที่ใช่สำหรับคุณอย่างแท้จริง
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <button className="flex items-center justify-center px-6 py-3 bg-[#2F855A]  text-white text-[1.2rem] rounded-lg shadow cursor-pointer hover:bg-[#276749] font-playfair"
                            onClick={handleFindSchool}>
                            Find a School
                            <GrLinkNext size={20} className="inline-block ml-2" />
                        </button>

                        <button className="flex items-center justify-center px-6 py-3 border border-[#2F855A] text-[#2F855A] text-[1.2rem] rounded-lg cursor-pointer hover:bg-green-100 font-playfair"
                            onClick={handlePostNeed}>
                            Post a Need
                        </button>
                        </div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-gray-100">
                        <h2 className="text-center text-gray-600 mb-2">
                            School Location
                        </h2>

                        <div className="h-[300px] sm:h-[350px] md:h-[450px] rounded-lg overflow-hidden hover:scale-[1.01] transition duration-300">
                            <ThailandMap />
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Home