export default function stepPointer({step}) {
    const Item = ({ number, label }) => (
        <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                ${step >= number ? "bg-[#368C64] text-white" : "bg-gray-300 text-gray-600"}`}>
                {number}
            </div>
            <span className="text-sm mt-2">{label}</span>
        </div>
    );

    return (
        <div className="flex justify-center gap-6 mt-4 text-[#476A47]">
            <Item number={1} label="ข้อมูลโรงเรียน" />
            <Item number={2} label="สิ่งที่ต้องการ" />
            <Item number={3} label="สภาพแวดล้อม" />
        </div>
    );
}