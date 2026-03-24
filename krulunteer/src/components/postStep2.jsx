import { useState } from "react";
export default function Step2() {
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
    }
    
    return (
        <div className="space-y-4">
            <div>
                <label>ค่าตอบแทน</label>
                <input type="number" id="salary" className="w-full border p-2 rounded" placeholder="ค่าตอบแทน" />
                <div className="flex items-center mt-2">
                    <input type="checkbox" className="ml-2" />
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
                        <button key={subject} value={subject} onClick={() => handleSubjectChange(subject)}
                            className={`px-3 py-2 border rounded-lg transition-all duration-150 active:scale-90 ${isActive ? "bg-[#368C64] text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}>
                                {subject}
                        </button>
                    );
                })}
            </div>
            
            <label>ระยะเวลา</label>
            <input id="duration" className="w-full border p-2 rounded" placeholder="ระยะเวลา" />
            
        </div>
    );
}