import '../index.css'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { IoIosSearch } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { MdNavigateNext } from "react-icons/md";

function Find(){
    const [filter, setFilter] = useState(false);

    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [filteredDistricts, setFilteredDistricts] = useState([]);
    const [selectedProvinceId, setSelectedProvinceId] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kongvut/thai-province-data/refs/heads/master/api/latest/province.json')
            .then(res => res.json())
            .then(data => setProvinces(data.sort((a, b) => a.name_th.localeCompare(b.name_th))));
        fetch('https://raw.githubusercontent.com/kongvut/thai-province-data/refs/heads/master/api/latest/district.json')
            .then(res => res.json())
            .then(data => setDistricts(data));
    }, []);

    useEffect(() => {
        if (selectedProvinceId) {

            const result = districts.filter(d => d.province_id === parseInt(selectedProvinceId));
            setFilteredDistricts(result.sort((a, b) => a.name_th.localeCompare(b.name_th)));
        } else {
            setFilteredDistricts([]);
        }
        setSelectedDistrict("");
    }, [selectedProvinceId, districts]);

    return(
        <>
            <div className='bg-[#F9F9F9] min-h-screen pt-[8%] px-[10%]'>
                <h1 className='font-playfair font-semibold text-[3rem]'>Find a Schools</h1>
                <p className='font-noto-sans-thai text-[1.2rem] text-[#808080]'>โรงเรียนต่าง ๆ กำลังรออยู่ หาโรงเรียนที่ใช่สำหรับคุณได้เลย</p>
                <div className='grid grid-cols-[77%_10%_10%] my-5 w-full gap-5'>
                    <div className="flex items-center w-full bg-white border border-gray-300 rounded-full px-4 py-2 focus-within:border-green-800">
                        <IoIosSearch className="text-gray-400 mr-3" size={20} />
                        <input type="text" placeholder="Search by School name or province" className="flex-1 outline-none text-gray-700 text-[1.2rem]" />
                    </div>
                    <div onClick={() => setFilter(!filter)} className={`flex items-center justify-center w-full border border-gray-300 rounded-full px-4 py-2 transition ease-in-out duration-200 cursor-pointer hover:bg-[#E0FFF1] ${filter ? 'bg-[#368C64] text-white hover:text-black' : 'bg-white text-black'}`}>
                        <FaFilter className="mr-3" size={20} />
                        <button className='text-[1.2rem] font-medium pointer-events-none'>Filters</button>
                    </div>
                    <div className='flex items-center justify-center w-full px-4 py-2 bg-white rounded-2xl border border-[#368C64] text-[#368C64] cursor-pointer transition ease-in-out duration-200 hover:bg-[#368C64] hover:text-white'>
                        <button className='text-[1.2rem] font-noto-sans-thai font-medium'>ค้นหา</button>
                    </div>
                </div>
                {filter && (
                    <div className='bg-white p-5 rounded-xl shadow-md w-full'>
                        <h2 className='text-[1.5rem] font-semibold mb-4'>Filter Options</h2>
                        <div className='px-10'>
                            <p className='text-[1.3rem] font-noto-sans-thai font-light mb-2'>วิชา</p>
                            <div className='flex flex-wrap gap-4 mb-6'>
                                <button className='bg-[#E7E7E7] text-[#595959] px-4 py-2 rounded-lg text-[1.2rem] font-noto-sans-thai font-light cursor-pointer'>คณิตศาสตร์</button>
                                <button className='bg-[#E7E7E7] text-[#595959] px-4 py-2 rounded-lg text-[1.2rem] font-noto-sans-thai font-light cursor-pointer'>ภาษาอังกฤษ</button>
                                <button className='bg-[#E7E7E7] text-[#595959] px-4 py-2 rounded-lg text-[1.2rem] font-noto-sans-thai font-light cursor-pointer'>วิทยาศาสตร์</button>
                                <button className='bg-[#E7E7E7] text-[#595959] px-4 py-2 rounded-lg text-[1.2rem] font-noto-sans-thai font-light cursor-pointer'>ภาษาไทย</button>
                                <button className='bg-[#E7E7E7] text-[#595959] px-4 py-2 rounded-lg text-[1.2rem] font-noto-sans-thai font-light cursor-pointer'>สังคมศึกษา</button>
                                <button className='bg-[#E7E7E7] text-[#595959] px-4 py-2 rounded-lg text-[1.2rem] font-noto-sans-thai font-light cursor-pointer'>ศิลปะ</button>
                                <button className='bg-[#E7E7E7] text-[#595959] px-4 py-2 rounded-lg text-[1.2rem] font-noto-sans-thai font-light cursor-pointer'>ดนตรี</button>
                                <button className='bg-[#E7E7E7] text-[#595959] px-4 py-2 rounded-lg text-[1.2rem] font-noto-sans-thai font-light cursor-pointer'>พลศึกษา</button>
                                <button className='bg-[#E7E7E7] text-[#595959] px-4 py-2 rounded-lg text-[1.2rem] font-noto-sans-thai font-light cursor-pointer'>คอมพิวเตอร์</button>
                            </div>
                            <div className='flex gap-10 w-full'>
                                <div>
                                    <p className='text-[1.3rem] font-noto-sans-thai font-light mb-2'>จังหวัด</p>
                                    <select className="p-2 bg-[#F9F9F9] w-[150px] border border-gray-200 rounded-lg outline-none focus:border-[#368C64]" value={selectedProvinceId} onChange={(e) => setSelectedProvinceId(e.target.value)}>
                                        <option value="">เลือกจังหวัด</option>
                                        {provinces.map(p => (
                                            <option key={p.id} value={p.id}>{p.name_th}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <p className='text-[1.3rem] font-noto-sans-thai font-light mb-2'>อำเภอ</p>
                                    <select className="p-2 bg-[#F9F9F9] w-[200px] border border-gray-200 rounded-lg outline-none focus:border-[#368C64] disabled:opacity-50" value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} disabled={!selectedProvinceId}>
                                        <option value="">{selectedProvinceId ? "เลือกอำเภอ" : "กรุณาเลือกจังหวัดก่อน"}</option>
                                        {filteredDistricts.map(d => (
                                            <option key={d.id} value={d.name_th}>{d.name_th}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-semibold text-gray-600">ค่า PM 2.5</label>
                                    <select className="p-2 bg-[#F9F9F9] border border-gray-200 rounded-lg outline-none focus:border-[#368C64]">
                                        <option value="">ทั้งหมด</option>
                                        <option value="excellent">ดีมาก (0-15 µg/m³)</option>
                                        <option value="good">ดี (15.1-25 µg/m³)</option>
                                        <option value="moderate">ปานกลาง (25.1-37.5 µg/m³)</option>
                                        <option value="unhealthy-sensitive">เริ่มมีผลต่อสุขภาพ</option>
                                        <option value="unhealthy">มีผลต่อสุขภาพ</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className='grid grid-cols-3 gap-10 w-full mt-5'>
                    <div className='flex flex-col px-5 py-2 border border-gray-300 rounded-2xl bg-white gap-2 shadow-sm hover:shadow-md hover:-translate-y-1 transform transition duration-300'>
                        <h2 className='font-playfair font-medium text-[1.5rem]'>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</h2>
                        <div className='flex items-center font-noto-sans-thai'>
                            <IoLocationOutline />
                            <span className='text-[#808080] text-[1rem] mr-2'>กรุงเทพมหานคร, ลาดกระบัง</span>
                            <div className='flex items-center'>
                                <CiClock2 />
                                <span className='text-[#808080] text-[1rem]'>1 ปี</span>
                            </div>
                        </div>
                        <div className='flex gap-2 font-noto-sans-thai'>
                            <span className='text-[#595959] bg-[#E7E7E7] px-3 py-1 rounded-lg'>คณิตศาสตร์</span>
                            <span className='text-[#595959] bg-[#E7E7E7] px-3 py-1 rounded-lg'>ภาษาอังกฤษ</span>
                        </div>
                        <div className='flex justify-between mt-3 font-noto-sans-thai'>
                            <Link to="/find/detail">
                                <div className='flex items-center justify-center text-[#368C64] cursor-pointer'>
                                    <span className='text-[1.3rem]'>รายละเอียด</span>
                                    <MdNavigateNext size={30} />
                                </div>
                            </Link>
                            <span className='bg-[#FF0000] font-medium text-white text-[1.2rem] px-4 py-1 rounded-2xl'>เร่งด่วน</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Find