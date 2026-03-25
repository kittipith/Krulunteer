import '../index.css'
import Header from '../components/Header'
import { useState } from "react";
import PostStep1 from "../components/postStep1";
import PostStep2 from "../components/postStep2";
import PostStep3 from "../components/postStep3";    
import StepPointer from "../components/stepPointer";

function Post(){
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        schoolName: "",
        province: "",
        district: "",
        location: "",
        image: null,

        subjects: [],
        salary: "",
        duration: "",

        benefits: []
    });

    const validateStep = () => {
        if (step === 1) {
            if (!formData.schoolName) {
                alert("กรุณากรอกชื่อโรงเรียน");
                return false;
            }
            if (!formData.province) {
                alert("กรุณากรอกจังหวัด");
                return false;
            }
            if (!formData.district) {
                alert("กรุณากรอกอำเภอ");
                return false;
            }
            if (!formData.location) {
                alert("กรุณากรอกสถานที่");
                return false;
            }
            if (!formData.image) {
                alert("กรุณาอัปโหลดรูปภาพ");
                return false;
            }
        }

        if (step === 2) {
            if (!formData.noSalary && !formData.salary) {
                alert("กรุณากรอกค่าตอบแทน");
                return false;
            }   

            if (formData.subjects.length === 0) {
                alert("กรุณาเลือกวิชา");
                return false;
            }
            if (!formData.duration) {
                alert("กรุณากรอกระยะเวลา");
                return false;
            }
        }

        if (step === 3) {
            if (!formData.internet) {
                alert("กรุณาเลือกคุณภาพอินเทอร์เน็ต");
                return false;
            }
            if (!formData.transport) {
                alert("กรุณาเลือกความสะดวกในการเดินทางด้วยรถสาธารณะ");
                return false;
            }
            if (!formData.electric) {
                alert("กรุณาเลือกความเสถียรของไฟฟ้า");
                return false;
            }
            if (!formData.housing) {
                alert("กรุณาเลือกคุณภาพที่อยู่อาศัย");
                return false;
            }
            if (!formData.water) {
                alert("กรุณาเลือกความสะดวกในการใช้น้ำประปา");                return false;
            }
            if (formData.benefits.length === 0) {
                alert("กรุณาเลือกสวัสดิการ");
                return false;
            }
        }

        return true;
    };

    return(
        <>
            <Header />
            <div className="bg-[#F9F9F9] flex flex-col items-center w-full px-4 sm:px-6 md:px-10 py-10 md:py-16 mt-10">
                
                <div className="w-full max-w-3xl bg-white/90 backdrop-blur-sm my-6 md:my-10 p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-center font-playfair">Post a need</h1>
                    <p className="text-center text-gray-500 text-sm sm:text-base font-noto-sans-thai">ประกาศหาครูให้โรงเรียนของท่านได้เลยที่นี่</p>
                    <div className='mt-4 sm:mt-6'>
                        <StepPointer step={step} />
                    </div>
                   

                    <div className="mt-4 sm:mt-6 ">
                        {step === 1 && <PostStep1 formData={formData} setFormData={setFormData} />}
                        {step === 2 && <PostStep2 formData={formData} setFormData={setFormData} />}
                        {step === 3 && <PostStep3 formData={formData} setFormData={setFormData} />}
                    </div>

                    <div className="flex justify-between mt-6">
                        <button 
                            onClick={() => setStep(step - 1)} 
                            disabled={step === 1} 
                            className="px-4 py-2 border rounded-lg disabled:opacity-40 hover:bg-gray-200 font-playfair">
                            &lt; Back
                        </button>

                        <button 
                            onClick={() => { 
                                if (!validateStep()) return;

                                if (step === 3){
                                    console.log(formData);
                                    alert("บันทึกข้อมูลสำเร็จ");
                                } else {
                                    setStep(step + 1);
                                }
                            }} 
                            className="px-4 py-2 bg-[#368C64] text-white rounded-lg hover:bg-[#2E6B52] font-playfair">
                            {step === 3 ? "Submit" : "Next >"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post;