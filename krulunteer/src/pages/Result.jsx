import { Link } from 'react-router-dom'

import Applicant from '../components/ListApplicant'
import { IoIosArrowRoundBack } from "react-icons/io";

function Result(){
    return(
        <div>
            <div className='bg-[#F9F9F9] min-h-screen pt-[8%] px-[20%] pb-10'>
                <Link to="/" className="w-fit block">
                    <button className='group flex justify-center items-center w-fit text-[#7F7F7F] hover:text-[#368C64] text-[1.2rem] mb-2 cursor-pointer transition-all duration-300 ease-in-out'>
                        <IoIosArrowRoundBack size={30} className="transition-transform duration-300 group-hover:-translate-x-1" />
                        <span>Back</span>
                    </button>
                </Link>
                <h1 className='font-playfair font-semibold text-[3rem]'>Match Result</h1>
                <p>ผู้สมัครทั้งหมด 2 คน</p>
                <div className='mt-5'>
                    <Applicant />
                </div>
            </div>
        </div>
    )
}

export default Result