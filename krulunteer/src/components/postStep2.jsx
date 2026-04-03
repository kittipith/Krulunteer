import { useState } from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

export default function Step2({ formData, setFormData }) {
    const subjects = ["คณิตศาสตร์", "ภาษาอังกฤษ", "วิทยาศาสตร์", "ภาษาไทย", "สังคมศึกษา", "ศิลปะ", "ดนตรี", "พลศึกษา", "คอมพิวเตอร์"];
    const [selectedSubject, setSubject] = useState(new Set());

    const handleSubjectChange = (subject) => {
        const newSet = new Set(selectedSubject);
        if (newSet.has(subject)) {
            newSet.delete(subject);
        } else {
            newSet.add(subject);
        }
        setSubject(newSet);
        setFormData({
            ...formData,
            subjects: Array.from(newSet)
        });
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };
    
    return (
        <div className="space-y-4 font-noto-sans-thai">
            <div>
                <label>ค่าตอบแทน</label>
                <div className="relative flex items-center w-full bg-white border border-gray-300 rounded-2xl px-4 py-2 transition duration-150 ease-in-out focus-within:border-emerald-600">
                    <FaRegMoneyBillAlt size={20} className="absolute left-4 text-gray-600" />
                    <input id="salary" type="number" placeholder="ค่าตอบแทน" className="w-full pl-10 outline-none text-gray-700 text-[1rem]"
                    value={formData.salary} onChange={handleChange} />
                </div>
                <div className="flex items-center mt-2">
                    <input type="checkbox" id="noSalary" className="ml-2" checked={formData.noSalary} onChange={(e) => setFormData({...formData, noSalary: e.target.checked, salary: e.target.checked ? "" : formData.salary })} />
                    <span className="ml-2 text-xs">
                        ไม่มีค่าตอบแทน
                    </span>
                </div>
            </div>
            <label>วิชาที่ต้องการ</label>
            <div className="flex flex-wrap gap-4">
                {subjects.map((subject) => {
                    const isActive = selectedSubject.has(subject);
                    return (
                        <button key={subject} value={subject} onClick={() => handleSubjectChange(subject) } 
                            className={`border border-gray-300 p-2.5 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all ${isActive ? "bg-[#368C64] text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}>
                                {subject}
                        </button>
                    );
                })}
            </div>
            <label>ระยะเวลา</label>
            <div className="relative flex items-center w-full bg-white border border-gray-300 rounded-2xl px-4 py-2 transition duration-150 ease-in-out focus-within:border-emerald-600">
                <IoTimeOutline size={20} className="absolute left-4 text-gray-600" />
                <input id="duration" type="text" placeholder="ระยะเวลา" className="w-full pl-10 outline-none text-gray-700 text-[1rem]"
                value={formData.duration} onChange={handleChange} />
            </div>
            <label>ความต้องการ</label>
            <div>
                <select className="w-full bg-white border border-gray-300 rounded-2xl px-4 py-2 transition duration-150 ease-in-out focus-within:border-emerald-600">
                    <option value="">ทั้งหมด</option>
                    <option value="1">ปกติ</option>
                    <option value="2">ปานกลาง</option>
                    <option value="3">เร่งด่วน</option>
                </select>
            </div>
        </div>
    );
}