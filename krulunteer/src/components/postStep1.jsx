import { useState } from "react";
import { TiImage } from "react-icons/ti";
import { LuSchool } from "react-icons/lu";
import { PiCity } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";

export default function Step1({ formData, setFormData }) {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleImageChange = (e) => {
    const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                image: file
            });

            setImage(file);
            setPreview(URL.createObjectURL(file)); // สร้าง preview
            console.log("Selected file:", file);
        }
    };

    return (
        <div className="space-y-5 p-1">
            <div className="flex flex-col gap-1.5 font-noto-sans-thai">
                <label>ชื่อโรงเรียน</label>
                <div className="relative flex items-center w-full bg-white border border-gray-300 rounded-2xl px-4 py-2 transition duration-150 ease-in-out focus-within:border-emerald-600">
                    <LuSchool size={20} className="absolute left-4 text-gray-600" />
                    <input id="schoolName" type="text" placeholder="ชื่อโรงเรียน" className="w-full pl-10 outline-none text-gray-700 text-[1rem]"
                    value={formData.schoolName} onChange={handleChange} />
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 font-noto-sans-thai">
                    <label>จังหวัด</label>
                    <div className="relative flex items-center w-full bg-white border border-gray-300 rounded-2xl px-4 py-2 transition duration-150 ease-in-out focus-within:border-emerald-600">
                        <PiCity size={20} className="absolute left-4 text-gray-600" />
                        <input id="province" type="text" placeholder="จังหวัด" className="w-full pl-10 outline-none text-gray-700 text-[1rem]"
                        value={formData.province} onChange={handleChange} />
                    </div>
                </div>
                <div className="flex flex-col gap-1.5 font-noto-sans-thai">
                    <label>อำเภอ</label>
                    <div className="relative flex items-center w-full bg-white border border-gray-300 rounded-2xl px-4 py-2 transition duration-150 ease-in-out focus-within:border-emerald-600">
                        <PiCity size={20} className="absolute left-4 text-gray-600" />
                        <input id="district" type="text" placeholder="อำเภอ" className="w-full pl-10 outline-none text-gray-700 text-[1rem]"
                        value={formData.district} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1.5 font-noto-sans-thai"> 
                <label>Location</label>
                <div className="relative flex items-center w-full bg-white border border-gray-300 rounded-2xl px-4 py-2 transition duration-150 ease-in-out focus-within:border-emerald-600">
                    <IoLocationOutline size={20} className="absolute left-4 text-gray-600" />
                    <input id="location" type="text" placeholder="วางลิงก์พิกัดโรงเรียน" className="w-full pl-10 outline-none text-gray-700 text-[1rem]"
                    value={formData.location} onChange={handleChange} />
                </div>
            </div>
            
            <label className="font-noto-sans-thai">รูปภาพโรงเรียน</label>
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
                <span className="text-gray-500 flex flex-col items-center font-noto-sans-thai">
                    <TiImage size={40} />
                    คลิกเพื่ออัปโหลดรูปภาพ
                </span>    
                <span className="text-sm text-gray-400 font-noto-sans-thai">
                    รองรับไฟล์ JPG, PNG
                </span>
                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden"/>
            </label>
            {image && (
                <div className="flex items-center gap-3 p-2 border rounded-lg">
                    <img src={preview} alt="preview" className="w-16 h-16 object-cover rounded-md border" />
                    <div className="flex-1">
                        <p className="text-sm font-medium truncate">{image.name}</p>
                        <p className="text-xs text-gray-500">
                            {(image.size / 1024).toFixed(1)} KB
                        </p>
                    </div>
                    <button onClick={() => {setImage(null); setPreview(null);}} className="text-red-500 text-sm">
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}