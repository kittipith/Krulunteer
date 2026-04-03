import '../index.css'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import schools from '../data/School.json'

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
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [selectedUrgency, setSelectedUrgency] = useState("");

    const [search, setSearch] = useState("");
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kongvut/thai-province-data/refs/heads/master/api/latest/province.json')
            .then(res => res.json())
            .then(data => setProvinces(data.sort((a, b) => a.name_th.localeCompare(b.name_th))));
        fetch('https://raw.githubusercontent.com/kongvut/thai-province-data/refs/heads/master/api/latest/district.json')
            .then(res => res.json())
            .then(data => setDistricts(data));
    }, []);

    useEffect(() => {
        if (selectedProvinceId){
            const result = districts.filter(d => d.province_id === parseInt(selectedProvinceId));
            setFilteredDistricts(result.sort((a, b) => a.name_th.localeCompare(b.name_th)));
        }else{
            setFilteredDistricts([]);
        }
        setSelectedDistrict("");
    }, [selectedProvinceId, districts]);

    const filteredSchools = schools.filter((school) => {
        const matchesSearch = school.Name.toLowerCase().includes(search.toLowerCase()) || 
                              school.Province.toLowerCase().includes(search.toLowerCase());
        const matchesProvince = selectedProvinceId 
            ? provinces.find(p => p.id === parseInt(selectedProvinceId))?.name_th === school.Province || school.Province.includes(selectedProvinceId)
            : true;

        const matchesDistrict = selectedDistrict 
            ? school.District === selectedDistrict 
            : true;

        const matchesSubject = selectedSubjects.length > 0 
            ? selectedSubjects.every(subj => school.Subject.includes(subj)) 
            : true;

        const matchesUrgency = selectedUrgency 
            ? school.Priority === selectedUrgency 
            : true;

        return matchesSearch && matchesProvince && matchesDistrict && matchesSubject && matchesUrgency;
    });

    return(
        <>
            <div className='bg-[#F9F9F9] min-h-screen pt-[20%] sm:pt-[15%] xl:pt-[8%] pb-10 px-[10%]'>
                <h1 className='font-playfair font-semibold text-[3rem]'>Find a Schools</h1>
                <p className='font-noto-sans-thai text-[1.2rem] text-[#808080]'>โรงเรียนต่าง ๆ กำลังรออยู่ หาโรงเรียนที่ใช่สำหรับคุณได้เลย</p>
                <div className='grid grid-cols-1 sm:grid-cols-[70%_30%] md:grid-cols-[80%_20%] lg:grid-cols-[82%_1%_15%] my-5 w-full gap-5'>
                    <div className="flex items-center w-full bg-white border border-gray-300 rounded-full px-4 py-2 focus-within:border-green-800">
                        <IoIosSearch className="text-gray-400 mr-3" size={20} />
                        <input type="text" placeholder="Search by School name or province" className="flex-1 outline-none text-gray-700 text-[1.2rem]" value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    <div className='hidden lg:flex'></div>
                    <div onClick={() => setFilter(!filter)} className={`flex items-center justify-center w-full border border-gray-300 rounded-full px-4 py-2 transition ease-in-out duration-200 cursor-pointer hover:bg-[#E0FFF1] ${filter ? 'bg-[#368C64] text-white hover:text-black' : 'bg-white text-black'}`}>
                        <FaFilter className="mr-3" size={20} />
                        <button className='text-[1.2rem] font-medium pointer-events-none'>Filters</button>
                    </div>
                </div>
                {filter && (
                    <div className='bg-white p-5 rounded-xl shadow-md w-full'>
                        <h2 className='text-[1.5rem] font-semibold mb-4'>Filter Options</h2>
                        <div className='px-10'>
                            <p className='text-[1.3rem] font-noto-sans-thai font-light mb-2'>วิชา</p>
                            <div className='flex flex-wrap gap-4 mb-6'>
                                {["คณิตศาสตร์", "ภาษาอังกฤษ", "วิทยาศาสตร์", "ภาษาไทย", "สังคมศึกษา", "ศิลปะ", "ดนตรี", "พลศึกษา", "คอมพิวเตอร์"].map((subj) => (
                                    <button key={subj}
                                        onClick={() => {
                                            if (selectedSubjects.includes(subj)){
                                                setSelectedSubjects(selectedSubjects.filter(s => s !== subj));
                                            }else{
                                                setSelectedSubjects([...selectedSubjects, subj]);
                                            }
                                        }}
                                        className={`px-4 py-2 rounded-lg text-[1.2rem] font-noto-sans-thai font-light cursor-pointer transition
                                            ${selectedSubjects.includes(subj) ? 'bg-[#368C64] text-white' : 'bg-[#E7E7E7] text-[#595959]'}`}>
                                        {subj}
                                    </button>
                                ))}
                            </div>
                            <div className='flex flex-col md:flex-row gap-10 w-full'>
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
                                    <label className='text-[1.3rem] font-noto-sans-thai font-light'>ความต้องการ</label>
                                    <select className="p-2 bg-[#F9F9F9] border border-gray-200 rounded-lg outline-none focus:border-[#368C64]" value={selectedUrgency} onChange={(e) => setSelectedUrgency(e.target.value)}>
                                        <option value="">ทั้งหมด</option>
                                        <option value="1">ปกติ</option>
                                        <option value="2">ปานกลาง</option>
                                        <option value="3">เร่งด่วน</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full my-5'>
                    {filteredSchools.length > 0 ? (
                        filteredSchools.map((school) => (
                            <div className='flex flex-col px-5 py-2 border border-gray-300 rounded-2xl bg-white gap-2 shadow-sm hover:shadow-md hover:-translate-y-1 transform transition duration-300'>
                                <h2 className='font-playfair font-medium text-[1.5rem]'>{school.Name}</h2>
                                <div className='flex items-center font-noto-sans-thai text-[#808080]'>
                                    <IoLocationOutline />
                                    <span className='text-[1rem] mr-2'>{school.Province}, {school.District}</span>
                                    <div className='flex items-center gap-1'>
                                        <CiClock2 />
                                        <span className='text-[1rem]'>{school.Duration}</span>
                                    </div>
                                </div>
                                <div className='hidden lg:flex gap-2 font-noto-sans-thai'>
                                    {school.Subject.map((s, index) => (
                                        <span key={index} className="text-[#595959] bg-[#E7E7E7] px-3 py-1 rounded-lg">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                                <div className='flex justify-between items-center mt-3 font-noto-sans-thai'>
                                    <Link to={`/find/detail/${school.ID}`}>
                                        <div className='flex items-center justify-center text-[#368C64] cursor-pointer'>
                                            <span className='text-[1.3rem]'>รายละเอียด</span>
                                            <MdNavigateNext size={30} />
                                        </div>
                                    </Link>
                                    {(() => {
                                        if (school.Priority === "1") return <span className='bg-[#40a576] flex justify-center items-center font-light text-white text-[1.3rem] px-4 py-1 rounded-xl'>ปกติ</span>;
                                        if (school.Priority === "2") return <span className='bg-[#e8b730] flex justify-center items-center font-light text-white text-[1.3rem] px-4 py-1 rounded-xl'>ปานกลาง</span>;
                                        if (school.Priority === "3") return <span className='bg-[#FF0000] flex justify-center items-center font-light text-white text-[1.3rem] px-4 py-1 rounded-xl'>เร่งด่วน</span>;
                                        return null;
                                    })()}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-3 text-center py-10 text-gray-500 text-xl">
                            ไม่พบโรงเรียนที่ตรงตามเงื่อนไข
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Find