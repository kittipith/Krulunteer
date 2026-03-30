import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { CgLogIn, CgMenu, CgClose } from "react-icons/cg";
import Menu from './TeacherMenu';
import MenuStaff from './StaffMenu';
import logo from '../assets/logo.png';

function Header({ setTeacher, setStaff, teacher, staff }) {
    const location = useLocation();
    const path = location.pathname;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [menu, setMenu] = useState(false);
    const [menuStaff, setMenuStaff] = useState(false);

    const activeStyle = "text-white bg-[#368C64] text-[1.1rem] xl:text-[1.3rem] font-roboto-mono font-light px-4 py-1 rounded-2xl transition duration-200";
    const inactiveStyle = "text-[#3F3F3F] text-[1.1rem] xl:text-[1.3rem] font-roboto-mono font-light px-4 py-1 rounded-2xl transition duration-200 ease-in-out hover:bg-[#E3E3E3] hover:text-black";

    const NavLinks = () => (
        <>
            <Link to="/" className={path === '/' ? activeStyle : inactiveStyle} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            {(!teacher || staff) && (
                <Link to="/post" className={path === '/post' ? activeStyle : inactiveStyle} onClick={() => setIsMobileMenuOpen(false)}>Post a Need</Link>
            )}
            <Link to="/find" className={path.startsWith('/find') ? activeStyle : inactiveStyle} onClick={() => setIsMobileMenuOpen(false)}>Find Schools</Link>
        </>
    );

    return (
        <header className='fixed top-0 left-0 w-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] z-50'>
            <div className='w-full lg:w-[80%] h-[5rem] mx-auto px-4 flex justify-between items-center'>
                <Link to="/" className='flex items-center gap-3 shrink-0'>
                    <img src={logo} alt="logo" className='w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem]' />
                    <p className='text-[#368C64] text-[1.5rem] md:text-[2rem] font-playfair font-semibold'>Krulunteer</p>
                </Link>
                <div className='hidden md:flex items-center gap-4 xl:gap-8'>
                    <NavLinks />
                    {!teacher && !staff ? (
                        <Link to="/login" className='flex items-center gap-2 text-[#368C64] text-[1.1rem] xl:text-[1.3rem] font-roboto-mono font-light px-5 py-1 rounded-2xl border-[#368C64] border-2 hover:bg-[#368C64] hover:text-white transition'>
                            <CgLogIn />
                            Login
                        </Link>
                    ) : (
                        <div className='relative'>
                            <button className='border border-gray-300 rounded-full cursor-pointer overflow-hidden' 
                                onClick={() => teacher ? setMenu(!menu) : setMenuStaff(!menuStaff)}>
                                <img src={teacher ? teacher.pic : staff.profile} alt="User" className='w-10 h-10 object-cover' />
                            </button>
                            {teacher && <Menu isOpen={menu} onClose={() => setMenu(false)} setTeacher={setTeacher} teacher={teacher} />}
                            {staff && <MenuStaff isOpen={menuStaff} onClose={() => setMenuStaff(false)} setStaff={setStaff} staff={staff} />}
                        </div>
                    )}
                </div>
                <div className='md:hidden flex items-center gap-4 cursor-pointer'>
                    {(teacher || staff) && (
                         <button onClick={() => teacher ? setMenu(!menu) : setMenuStaff(!menuStaff)}>
                            <img src={teacher ? teacher.pic : staff.profile} alt="User" className='w-9 h-9 rounded-full border' />
                         </button>
                    )}
                    <button className='text-3xl text-[#368C64]' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <CgClose /> : <CgMenu />}
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className='md:hidden bg-white border-t flex flex-col p-5 gap-4 shadow-lg animate-fadeIn'>
                    <NavLinks />
                    {!teacher && !staff && (
                        <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className='text-center text-[#368C64] border-2 border-[#368C64] py-2 rounded-xl'>
                            Login
                        </Link>
                    )}
                </div>
            )}
            {teacher && <Menu isOpen={menu} onClose={() => setMenu(false)} setTeacher={setTeacher} teacher={teacher} />}
            {staff && <MenuStaff isOpen={menuStaff} onClose={() => setMenuStaff(false)} setStaff={setStaff} staff={staff} />}
        </header>
    );
}

export default Header;