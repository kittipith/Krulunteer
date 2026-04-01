import { useState } from "react";

export default function EditProfileModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    nickname: "",
    organization: "",
    experienceYears: "",
    age: "",
    totalStudents: "",
    subjects: ["คณิตศาสตร์", "วิทยาศาสตร์"],
    education: [],
    work: [],
    contacts: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const addSubjects = () => {
    setForm((prev) => ({
      ...prev,
      subjects: [...prev.subjects, ""]
    }));
  };
  const addEducation = () => {
    setForm((prev) => ({
      ...prev,
      education: [...prev.education, { school: "", degree: "", level: "" }]
    }));
  };

  const addWork = () => {
    setForm((prev) => ({
      ...prev,
      work: [...prev.work, { school: "", province: "", district: "", period: "" }]
    }));
  };

  const addContact = () => {
    setForm((prev) => ({
      ...prev,
      contacts: [...prev.contacts, { value: "", type: "Email" }]
    }));
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#F5F7F4] w-full max-w-3xl rounded-2xl shadow-xl p-6 overflow-y-auto max-h-[90vh]"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-green-800">แก้ไขข้อมูล</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* ข้อมูลทั่วไป */}
        <section className="mb-6">
          <h3 className="text-green-700 font-semibold mb-2">ข้อมูลทั่วไป</h3>
            <div className="space-y-4">
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2'>
                  <div>    <label className="block text-sm font-medium text-gray-700 mb-1 font-noto-sans-thai">
                          ชื่อ
                      </label>
                      <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                      />
                  </div>

                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 font-noto-sans-thai">
                          จำนวนโรงเรียนที่เคยสอน
                      </label>
                      <input
                          type="number"
                          name="age"
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                      />
                  </div>

                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 font-noto-sans-thai">
                          ตำแหน่ง
                      </label>
                      <input
                          type="text"
                          name="teach_level"
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                      />
                  </div>

                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 font-noto-sans-thai">
                          จำนวนโรงเรียนที่เคยสอน
                      </label>
                      <input
                          type="text"
                          name="phone"
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                      />
                  </div>

                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 font-noto-sans-thai">
                          จำนวนรางวัลที่เคยได้
                      </label>
                      <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                      />
                  </div>

                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 font-noto-sans-thai">
                          จำนวนรางวัลที่เคยได้
                      </label>
                      <input
                          type="text"
                          name="line"
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"/>
                  </div>
                </div>

          </div>
        </section>

       <section className="mb-6">
          <h3 className="text-green-700 font-semibold mb-2">วิชาที่สอน</h3>

          {form.subjects.map((s, i) => (
            <input
              key={i}
              value={s}
              onChange={(e) => {
                const newSubjects = [...form.subjects];
                newSubjects[i] = e.target.value;
                setForm({ ...form, subjects: newSubjects });
              }}
              className="input mb-2 " placeholder="เพิ่มวิชา"
            />
          ))}

          <button onClick={addSubjects} className="text-green-600 text-sm">
            + เพิ่มวิชา
          </button>
        </section>


        <section className="mb-6">
          <h3 className="text-green-700 font-semibold mb-2">ประวัติการศึกษา</h3>

          {form.education.map((edu, i) => (
            <div key={i} className="grid grid-cols-3 gap-2 mb-2">
              <input placeholder="ชื่อมหาลัย" className="input"/>
              <input placeholder="ชื่อคณะ" className="input"/>
              <input placeholder="ระดับการศึกษา" className="input"/>
            </div>
          ))}

          <button onClick={addEducation} className="text-green-600 text-sm">
            + เพิ่มประวัติการศึกษา
          </button>
        </section>


        <section className="mb-6">
          <h3 className="text-green-700 font-semibold mb-2">ประวัติการทำงาน</h3>

          {form.work.map((w, i) => (
            <div key={i} className="grid grid-cols-5 gap-2 mb-2">
              <input placeholder="ชื่อโรงเรียน" className="input"/>
              <input placeholder="จังหวัด" className="input"/>
              <input placeholder="อำเภอ" className="input"/>
              <input placeholder="ระยะเวลา" className="input"/>
              <input placeholder="ระดับชั้นสอน" className="input"/>
            </div>
          ))}

          <button onClick={addWork} className="text-green-600 text-sm">
            + เพิ่มประสบการณ์
          </button>
        </section>

        <section className="mb-6">
          <h3 className="text-green-700 font-semibold mb-2">ช่องทางการติดต่อ</h3>

          {form.contacts.map((c, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input placeholder="Example@email.com" className="input flex-1"/>
              <select className="input w-32">
                <option>Email</option>
                <option>Phone</option>
                <option>Line</option>
              </select>
            </div>
          ))}

          <button onClick={addContact} className="text-green-600 text-sm">
            + เพิ่มช่องทางติดต่อ
          </button>
        </section>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            ยกเลิก
          </button>
          <button onClick={onClose}  className="px-4 py-2 bg-green-600 text-white rounded">
            บันทึกการเปลี่ยนแปลง
          </button>
        </div>
      </div>
    </div>
  );
}