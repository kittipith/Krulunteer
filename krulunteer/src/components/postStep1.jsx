import { useState } from "react";
import { TiImage } from "react-icons/ti";

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
            <div className="flex flex-col gap-1.5">
                <label>ชื่อโรงเรียน</label>
            <input id="schoolName" className="w-full px-4 py-2.5 border border-gray-300 rounded-xl shadow-sm transition duration-150 ease-in-out focus:ring-2 focus:ring-blue-100 focus:border-blue-400 placeholder:text-gray-400"  placeholder="ชื่อโรงเรียน" value={formData.schoolName} onChange={handleChange}/>
            </div>

            
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label>จังหวัด</label>
                    <input id="province" className="w-full border border-gray-300 p-2.5 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400" 
                    placeholder="จังหวัด" value={formData.province} onChange={handleChange}/>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label>อำเภอ</label>
                    <input id="district" className="w-full border border-gray-300 p-2.5 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400" 
                    placeholder="อำเภอ" value={formData.district} onChange={handleChange}/>
                </div>      
            </div>
            <div className="flex flex-col gap-1.5"> 
                <label>Location</label>
                <input id="location" className="w-full border border-gray-300 p-2.5 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                placeholder="วางลิงก์พิกัดโรงเรียน" value={formData.location} onChange={handleChange}/>
            </div>

            
            
            
            <label>รูปภาพโรงเรียน</label>
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
                <span className="text-gray-500 flex flex-col items-center">
                    <TiImage size={40} />
                    คลิกเพื่ออัปโหลดรูปภาพ
                </span>    
                <span className="text-sm text-gray-400">
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