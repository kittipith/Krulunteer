import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Applicant from '../components/ListApplicant'
import { IoIosArrowRoundBack } from "react-icons/io";

function Result(){
    return(
        <div>
            <Header />
            <div className='bg-[#F9F9F9] min-h-screen pt-[8%] px-[20%] pb-10'>
                <Link to="/">
                    <button className='flex justify-center items-center w-fit text-[#7F7F7F] text-[1.2rem] cursor-pointer hover:text-[1.3rem]'>
                        <IoIosArrowRoundBack size={30} />
                        Back
                    </button>
                </Link>
                <h1 className='font-playfair font-semibold text-[3rem]'>Match Result</h1>
                <p>ผู้สมัครทั้งหมด 3 คน</p>
                <div className='mt-5'>
                    <Applicant />
                </div>
            </div>
        </div>
    )
}

export default Result