import { useState } from "react";
import { TiImage } from "react-icons/ti";

export default function Step1() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        setImage(file);
        setPreview(URL.createObjectURL(file)); // สร้าง preview
        console.log("Selected file:", file);
    }
  };

  return (
    <div className="space-y-4">
        <label>ชื่อโรงเรียน</label>
        <input id="schoolName" className="w-full border p-2 rounded" placeholder="ชื่อโรงเรียน" />
        <label>จังหวัด</label>
        <input id="province" className="w-full border p-2 rounded" placeholder="จังหวัด" />
        <label>อำเภอ</label>
        <input id="district" className="w-full border p-2 rounded" placeholder="อำเภอ" />
        <label>location</label>
        <input id="location" className="w-full border p-2 rounded" placeholder="location" />
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