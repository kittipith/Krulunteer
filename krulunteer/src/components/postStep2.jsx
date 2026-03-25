import { useState } from "react";
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
                <input type="number" id="salary" className="w-full border border-gray-300 p-2.5 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" 
                placeholder="ค่าตอบแทน" value={formData.salary} onChange={handleChange} />
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
            <input id="duration" className="w-full border border-gray-300 p-2.5 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" 
            placeholder="ระยะเวลา" value={formData.duration} onChange={handleChange} />
            
        </div>
    );
}