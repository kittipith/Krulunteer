import '../index.css'
import Header from '../components/Header'
import { useState } from "react";
import PostStep1 from "../components/postStep1";
import PostStep2 from "../components/postStep2";
import PostStep3 from "../components/postStep3";    
import StepPointer from "../components/stepPointer";


function Post(){
    const [step, setStep] = useState(1);
    return(
        <>
            <Header />
            <div className="bg-gray-100 flex flex-col items-center w-full p-20">
                <div className="w-full max-w-3xl bg-white m-10 p-8 rounded-xl shadow">
                    <h1 className="text-3xl font-semibold text-center">Post a need</h1>
                    <p className="text-center text-gray-500">ประกาศหาครูให้โรงเรียนของท่านได้เลยที่นี่</p>
                    
                    {/* Step Pointer */}
                    <StepPointer step={step} />

                    {/* Step Content */}
                    <div className="mt-6">
                        {step === 1 && <PostStep1 />}
                        {step === 2 && <PostStep2 />}
                        {step === 3 && <PostStep3 />}
                    </div>

                    {/* ปุ่ม */}
                    <div className="flex justify-between mt-6">
                        <button onClick={() => setStep(step - 1)} disabled={step === 1} 
                        className="mr-4 px-4 py-2 border rounded-lg disabled:opacity-40 hover:bg-gray-200">
                            &lt; Back
                        </button>
                        <button onClick={() => { 
                            if (step === 3){
                                alert("บันทึกข้อมูลสำเร็จ");
                            } else {
                                setStep(step + 1);
                            }}} className="px-4 py-2 bg-[#368C64] text-white rounded-lg  hover:bg-[#2E6B52]">
                            {step === 3 ? "Submit" : "Next >"}
                        </button>
                    </div>
                </div>
                

            </div>
        </>
        
    )
}

export default Post