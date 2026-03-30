import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

function StaffMenu({ isOpen, onClose, setStaff, staff }) {
    if (!isOpen || !staff) return null;

    return (
        <div className='fixed inset-0 z-50 top-[7%] left-[60%] sm:left-[65%] md:left-[77%] w-fit 2xl:w-[13%] h-fit bg-white border border-gray-200 rounded-2xl shadow-xl flex flex-col font-noto-sans-thai'>
            <p className='px-5 pt-5 font-medium'>{staff.name}</p>
            <p className='px-5 text-[0.9rem] text-gray-500'>{staff.email}</p>
            <hr className='my-3 text-gray-300' />
            <Link to="/result" onClick={onClose} className='flex justify-start items-center gap-2 mx-3 cursor-pointer hover:bg-gray-200 p-2 rounded-lg'>
                <CiUser />
                ผู้สมัครทั้งหมด
            </Link>
            <hr className='my-3 text-gray-300' />
            <button className='flex justify-start items-center gap-2 mx-3 mb-2 cursor-pointer hover:bg-red-100 p-2 rounded-lg text-red-500' 
                onClick={() => { onClose(); setStaff(null); }}>
                <IoIosLogOut />
                ออกจากระบบ
            </button>
        </div>
    );
}

export default StaffMenu;