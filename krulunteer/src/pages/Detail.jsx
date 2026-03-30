import Graph from '../components/Graph'
import Api from '../components/Api'
import Benefit from '../components/Benefits'
import Test from '../assets/test.jpg'
import { Link } from "react-router-dom";

import { IoIosArrowRoundBack } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { FaRegMoneyBillAlt } from "react-icons/fa";

function Detail(){
    return(
        <div>
            <div className='bg-[#F9F9F9] min-h-screen pt-[8%] px-[20%] pb-10'>
                <Link to="/find" className="w-fit block">
                    <button className='group flex justify-center items-center w-fit text-[#7F7F7F] hover:text-[#368C64] text-[1.2rem] mb-2 cursor-pointer transition-all duration-300 ease-in-out'>
                        <IoIosArrowRoundBack size={30} className="transition-transform duration-300 group-hover:-translate-x-1" />
                        <span>Back</span>
                    </button>
                </Link>
                <div className='flex justify-between items-center'>
                    <h1 className='font-playfair font-medium text-[2.5rem]'>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</h1>
                    <span className='bg-[#FF0000] font-noto-sans-thai font-medium text-white text-[1.2rem] px-4 py-1 rounded-2xl'>เร่งด่วน</span>
                </div>
                <div className='flex items-center font-noto-sans-thai'>
                    <IoLocationOutline />
                    <span className='text-[#808080] text-[1rem] mr-2'>กรุงเทพมหานคร, ลาดกระบัง</span>
                    <div className='flex items-center'>
                        <CiClock2 />
                        <span className='text-[#808080] text-[1rem]'>1 ปี</span>
                    </div>
                </div>
                <div className='flex justify-between items-center my-3 font-noto-sans-thai'>
                    <div>
                        <span className='text-[#368C64] bg-[#E0FFF1] px-3 py-1 rounded-full mr-2'>คณิตศาสตร์</span>
                    </div>
                    <span className='flex justify-center items-center gap-2 text-[#B45309] bg-[#FCEAA1] border border-[#B45309] px-5 py-1 rounded-full'>
                        <FaRegMoneyBillAlt size={25} />
                        <span className='text-[1.2rem] font-medium mt-1'>฿15,000 / เดือน</span>
                    </span>
                </div>
                <img src={Test} alt="test" className='w-full h-[40vh] object-center rounded-2xl' />
                <div className='grid grid-cols-[59%_40%] my-5'>
                    <Graph />
                    <Api />
                </div>
                <Benefit />
                <div>
                    <h2 className='pt-5 text-[1.5rem] font-noto-sans-thai'>สถานที่ตั้ง</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.810927024403!2d100.77565737586492!3d13.729894097798798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d664988a1bedf%3A0xcc678f180e221cd0!2z4Liq4LiW4Liy4Lia4Lix4LiZ4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4Lij4Liw4LiI4Lit4Lih4LmA4LiB4Lil4LmJ4Liy4LmA4LiI4LmJ4Liy4LiE4Li44LiT4LiX4Lir4Liy4Lij4Lil4Liy4LiU4LiB4Lij4Liw4Lia4Lix4LiH!5e0!3m2!1sth!2sth!4v1774433955794!5m2!1sth!2sth" 
                    className="w-full h-[400px] border border-[#B3B3B3] rounded-2xl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Detail