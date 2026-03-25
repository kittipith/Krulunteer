import '../index.css'
import logo from '../assets/logo.png'
import { CgLogIn } from "react-icons/cg";

import { Link } from "react-router-dom";

function Header(){
    return(
        <header className='fixed top-0 left-0 w-full bg-white flex justify-between items-center shadow-[0_2px_4px_rgba(0,0,0,0.3)] z-50'>
            <div className='grid grid-cols-2 h-[5rem] w-[80%] mx-auto'>
                <div className='flex items-center justify-start gap-5'>
                    <img src={logo} alt="logo" className='w-[3rem] h-[3rem]' />
                    <p className='text-[#368C64] text-[2rem] font-playfair font-semibold'>Krulunteer</p>
                </div>
                <div className='flex items-center justify-end gap-5'>
                    <Link to="/" className='text-white bg-[#368C64] text-[1.3rem] font-roboto-mono font-light px-4 py-1 rounded-2xl'>Home</Link>
                    <Link to="/post" className='text-[#3F3F3F] text-[1.3rem] font-roboto-mono font-light px-4 py-1 rounded-2xl transition duration-200 ease-in-out hover:bg-[#E3E3E3] hover:text-black'>Post a Need</Link>
                    <Link to="/find" className='text-[#3F3F3F] text-[1.3rem] font-roboto-mono font-light px-4 py-1 rounded-2xl transition duration-200 ease-in-out hover:bg-[#E3E3E3] hover:text-black'>Find Schools</Link>
                    <Link to="/login" className='flex items-center justify-center gap-2 text-[#368C64] text-[1.3rem] font-roboto-mono font-light px-4 py-1 rounded-2xl border-[#368C64] border-2 transition duration-200 ease-in-out hover:bg-[#368C64] hover:text-white'>
                        <CgLogIn />
                        Login
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header