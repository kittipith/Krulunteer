import '../index.css'
import Header from '../components/Header'
import ThailandMap from '../components/thailandMap.jsx'
import { useNavigate } from 'react-router-dom';

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
            <div className="bg-gray-100  flex items-center justify-center px-10 py-10 mt-20">
                <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

                    <div>
                        <p className="text-[#368C64] text-sm mb-2">
                            เติมเต็มช่องโหว่ทางการศึกษา
                        </p>

                        <h1 className="text-4xl font-bold leading-tight mb-4">
                            เด็กทุกคนสมควรได้รับโอกาส <br />
                            จากครูที่พร้อมเดินทางไปหา
                        </h1>

                        <p className="text-[#3F3F3F] mb-6">
                            เชื่อมต่อคุณกับโรงเรียนที่ห่างไกลทั่วประเทศ ที่กำลังรอคอยครูอาสา ให้คุณได้ค้นหาโรงเรียนเหล่านั้นได้ด้วยตัวเอง ทำความเข้าใจเด็ก ๆ และบริบทของพื้นที่ เพื่อให้คุณตัดสินใจลงพื้นที่สอนได้อย่างตรงจุด
                            และค้นพบโรงเรียนที่ใช่สำหรับคุณอย่างแท้จริง
                        </p>

                        <div className="flex gap-4">
                        <button className="px-6 py-3 bg-[#368C64] text-white rounded-lg shadow hover:bg-green-700"
                            onClick={handleFindSchool}>
                            Fine a School →
                        </button>

                        <button className="px-6 py-3 border border-[#368C64] text-[#368C64] rounded-lg hover:bg-green-50"
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