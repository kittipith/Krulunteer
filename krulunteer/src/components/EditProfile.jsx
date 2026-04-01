import { useState, useEffect } from "react";
import { FaTrashAlt, FaGraduationCap, FaBriefcase, FaPhoneAlt, FaBookOpen, FaUser } from "react-icons/fa";

export default function EditProfile({ isOpen, onClose, selectedProfile, onSave }) {
  const [form, setForm] = useState(null);

  useEffect(() => {
    if (selectedProfile) {
      setForm({
        ...selectedProfile,
        contacts: [
          { type: "Phone", value: selectedProfile.contact.phone || "" },
          { type: "Email", value: selectedProfile.contact.email || "" },
          { type: "Line", value: selectedProfile.contact.line || "" }
        ]
      });
    }
  }, [selectedProfile, isOpen]);

  if (!isOpen || !form) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (category, index, field, value) => {
    const updatedArray = [...form[category]];
    if (category === "teachableSubjects"){
      updatedArray[index] = value;
    }else{
      updatedArray[index] = { ...updatedArray[index], [field]: value };
    }
    setForm({ ...form, [category]: updatedArray });
  };

  const removeEntry = (category, index) => {
    setForm((prev) => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== index)
    }));
  };

  const addEntry = (category) => {
    const templates = {
      teachableSubjects: "",
      education: { degree: "", school: "", period: "" },
      experience: { title: "", location: "", level: "", period: "" },
      contacts: { value: "", type: "Email" }
    };
    setForm(prev => ({ ...prev, [category]: [...prev[category], templates[category]] }));
  };

  // ฟังก์ชันตอนกดบันทึก
  const handleInternalSave = () => {
    // แปลง contacts array เป็น object
    const finalContact = {};
    form.contacts.forEach(c => {
      finalContact[c.type.toLowerCase()] = c.value;
    });

    const finalData = {
      ...form,
      contact: finalContact
    };
    
    onSave(finalData); // ส่งข้อมูลกลับไปแสดงที่เดิม
    onClose();
  };

  const AddButton = ({ onClick, label }) => (
    <button onClick={onClick} className="flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.9rem] font-noto-sans-thai transition-all bg-[#E2EFDB] border border-[#8EC875] text-[#47945C] hover:bg-[#d4e6cb] mt-4">
      <span className="text-lg">+</span> {label}
    </button>
  );

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div onClick={(e) => e.stopPropagation()} className="bg-white w-full max-w-4xl rounded-3xl shadow-xl overflow-hidden flex flex-col max-h-[95vh] font-noto-sans-thai">
        <div className="px-8 py-5 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <h2 className="text-2xl font-bold text-[#47945C]">แก้ไขข้อมูลส่วนตัว</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">✕</button>
        </div>

        <div className="p-8 overflow-y-auto space-y-10 bg-white">
          <section>
            <div className="flex items-center gap-2 mb-4 text-[#47945C] font-bold text-lg">
              <FaUser />
              <h3>ข้อมูลทั่วไป</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">ชื่อ-นามสกุล</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:border-[#47945C] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">ตำแหน่ง</label>
                <input type="text" name="teach_level" value={form.teach_level} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:border-[#47945C] outline-none" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 col-span-1 md:col-span-2">
                <div>
                    <label className="block text-[0.8rem] font-medium text-gray-500 mb-1">อายุ</label>
                    <input type="number" name="age" value={form.age} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:border-[#47945C] outline-none" />
                </div>
                <div>
                    <label className="block text-[0.8rem] font-medium text-gray-500 mb-1">จำนวนรางวัลที่เคยได้</label>
                    <input type="number" name="awardsCont" value={form.awardsCont} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:border-[#47945C] outline-none" />
                </div>
                <div>
                    <label className="block text-[0.8rem] font-medium text-gray-500 mb-1">จำนวนปีที่สอน</label>
                    <input type="number" name="teachingYears" value={form.teachingYears} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:border-[#47945C] outline-none" />
                </div>
                <div>
                    <label className="block text-[0.8rem] font-medium text-gray-500 mb-1">จำนวนโรงเรียนที่เคยสอน</label>
                    <input type="number" name="volunteerSchoolCount" value={form.volunteerSchoolCount} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:border-[#47945C] outline-none" />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center gap-2 mb-4 text-[#47945C] font-bold text-lg border-t pt-6 border-[#EAF6E5]">
              <FaBookOpen />
              <h3>วิชาที่สอน</h3>
            </div>
            <div className="bg-[#FAFEF7] border border-[#EAF6E5] rounded-2xl p-6">
              <div className="flex flex-wrap gap-3">
                {form.teachableSubjects.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-gray-200 shadow-sm">
                    <input value={s} onChange={(e) => handleArrayChange('teachableSubjects', i, null, e.target.value)} className="text-gray-700 text-sm outline-none w-28 bg-transparent" />
                    <button onClick={() => removeEntry('teachableSubjects', i)} className="text-red-300 hover:text-red-500"><FaTrashAlt size={12} /></button>
                  </div>
                ))}
              </div>
              <AddButton onClick={() => addEntry('teachableSubjects')} label="เพิ่มวิชาใหม่" />
            </div>
          </section>
          <section>
            <div className="flex items-center gap-2 mb-4 text-[#47945C] font-bold text-lg border-t pt-6 border-[#EAF6E5]">
              <FaGraduationCap />
              <h3>ประวัติการศึกษา</h3>
            </div>
            <div className="bg-[#FAFEF7] border border-[#EAF6E5] rounded-2xl p-6">
              <div className="grid grid-cols-12 gap-4 mb-2 px-2 text-[0.85rem] font-semibold text-[#47945C] hidden md:grid">
                <div className="col-span-4">ชื่อมหาลัย</div>
                <div className="col-span-5">ระดับ/วุฒิการศึกษา</div>
                <div className="col-span-2">ปีการศึกษา</div>
              </div>
              {form.education.map((edu, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-4 items-center">
                  <input placeholder="มหาลัย" value={edu.school} onChange={(e) => handleArrayChange('education', i, 'school', e.target.value)} className="col-span-4 bg-white border border-gray-200 rounded-lg p-2 text-sm focus:border-[#8EC875] outline-none" />
                  <input placeholder="วุฒิการศึกษา" value={edu.degree} onChange={(e) => handleArrayChange('education', i, 'degree', e.target.value)} className="col-span-5 bg-white border border-gray-200 rounded-lg p-2 text-sm focus:border-[#8EC875] outline-none" />
                  <input placeholder="ปี" value={edu.period} onChange={(e) => handleArrayChange('education', i, 'period', e.target.value)} className="col-span-2 bg-white border border-gray-200 rounded-lg p-2 text-sm focus:border-[#8EC875] outline-none" />
                  <button onClick={() => removeEntry('education', i)} className="text-red-300 hover:text-red-500 flex justify-center"><FaTrashAlt /></button>
                </div>
              ))}
              <AddButton onClick={() => addEntry('education')} label="เพิ่มประวัติการศึกษา" />
            </div>
          </section>
          <section>
            <div className="flex items-center gap-2 mb-4 text-[#47945C] font-bold text-lg border-t pt-6 border-[#EAF6E5]">
              <FaBriefcase />
              <h3>ประวัติการทำงาน</h3>
            </div>
            <div className="bg-[#FAFEF7] border border-[#EAF6E5] rounded-2xl p-6 overflow-x-auto">
              <div className="min-w-[700px]">
                <div className="grid grid-cols-12 gap-3 mb-2 px-2 text-[0.8rem] font-semibold text-[#47945C]">
                  <div className="col-span-3">ชื่อโรงเรียน/หัวข้อ</div>
                  <div className="col-span-2">จังหวัด</div>
                  <div className="col-span-2">ระดับชั้น</div>
                  <div className="col-span-4">ระยะเวลา</div>
                </div>
                {form.experience.map((exp, i) => (
                  <div key={i} className="grid grid-cols-12 gap-3 mb-3 items-center">
                    <input value={exp.title} onChange={(e) => handleArrayChange('experience', i, 'title', e.target.value)} className="col-span-3 bg-white border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[#8EC875]" />
                    <input value={exp.location} onChange={(e) => handleArrayChange('experience', i, 'location', e.target.value)} className="col-span-2 bg-white border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[#8EC875]" />
                    <input value={exp.level} onChange={(e) => handleArrayChange('experience', i, 'level', e.target.value)} className="col-span-2 bg-white border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[#8EC875]" />
                    <input value={exp.period} onChange={(e) => handleArrayChange('experience', i, 'period', e.target.value)} className="col-span-4 bg-white border border-gray-200 rounded-lg p-2 text-sm outline-none focus:border-[#8EC875]" />
                    <button onClick={() => removeEntry('experience', i)} className="col-span-1 text-red-300 hover:text-red-500 flex justify-center"><FaTrashAlt /></button>
                  </div>
                ))}
                <AddButton onClick={() => addEntry('experience')} label="เพิ่มประสบการณ์ทำงาน" />
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center gap-2 mb-4 text-[#47945C] font-bold text-lg border-t pt-6 border-[#EAF6E5]">
              <FaPhoneAlt /> <h3>ช่องทางการติดต่อ</h3>
            </div>
            <div className="bg-[#FAFEF7] border border-[#EAF6E5] rounded-2xl p-6">
              {form.contacts.map((c, i) => (
                <div key={i} className="flex gap-4 mb-4 items-center">
                  <input value={c.value} onChange={(e) => handleArrayChange('contacts', i, 'value', e.target.value)} className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-[#8EC875]" />
                  <select value={c.type} onChange={(e) => handleArrayChange('contacts', i, 'type', e.target.value)} className="w-32 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none">
                    <option value="Phone">Phone</option>
                    <option value="Email">Email</option>
                    <option value="Line">Line</option>
                  </select>
                  <button onClick={() => removeEntry('contacts', i)} className="text-red-300 hover:text-red-500"><FaTrashAlt /></button>
                </div>
              ))}
              <AddButton onClick={() => addEntry('contacts')} label="เพิ่มช่องทางติดต่อ" />
            </div>
          </section>
        </div>
        <div className="px-8 py-6 border-t border-gray-100 flex justify-end gap-4 bg-white sticky bottom-0">
          <button onClick={onClose} className="px-8 py-2 rounded-xl bg-gray-100 text-gray-500 font-semibold hover:bg-gray-200 transition-colors">ยกเลิก</button>
          <button onClick={handleInternalSave} className="px-8 py-2 rounded-xl bg-[#368C64] text-white font-semibold hover:bg-[#2b6e4f] transition-all shadow-md active:scale-95">บันทึกการเปลี่ยนแปลง</button>
        </div>
      </div>
    </div>
  );
}