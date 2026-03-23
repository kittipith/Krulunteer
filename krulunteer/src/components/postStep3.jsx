import { useState } from "react";
import { FaWifi } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { FaBus } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { FaPlus } from "react-icons/fa";
import { FaRegSmileWink } from "react-icons/fa";
export default function Step3() {
    const internets = ["แย่มาก", "แย่", "ปานกลาง", "ดี", "ดีมาก"];
    const [selectedInternet, setInternet] = useState("");

    const handleInternetChange = (internet) => {
        setInternet(internet);
    };
    const transports = ["แย่มาก", "แย่", "ปานกลาง", "ดี", "ดีมาก"];
    const [selectedTransport, setTransport] = useState("");
    const handleTransportChange = (transport) => {
        setTransport(transport);
    }

    const electrics = ["แย่มาก", "แย่", "ปานกลาง", "ดี", "ดีมาก"];
    const [selectedElectric, setElectric] = useState("");
    const handleElectricChange = (electric) => {
        setElectric(electric);
    }

    const housings = ["แย่มาก", "แย่", "ปานกลาง", "ดี", "ดีมาก"];
    const [selectedHousing, setHousing] = useState("");
    const handleHousingChange = (housing) => {
        setHousing(housing);
    }

    const waters = ["แย่มาก", "แย่", "ปานกลาง", "ดี", "ดีมาก"];
    const [selectedWater, setWater] = useState("");
    const handleWaterChange = (water) => {
        setWater(water);
    }

    const [benefits, setBenefits] = useState([
        { title: "Free Housing", desc: "มีบ้านพักให้", icon: IoHomeOutline },
        { title: "Free WiFi", desc: "มีอินเตอร์เน็ตให้", icon: FaWifi },
        { title: "Transport", desc: "มีบริการรถรับส่ง", icon: FaBus },
        { title: "Meals", desc: "มีอาหารกลางวันให้", icon: GiMeal },
        { title: "Free water and electricity", desc: "ฟรีค่าน้ำ/ค่าไฟ", icon: LiaFileInvoiceDollarSolid }
    ]);

    const [newBenefit, setNewBenefit] = useState("");
    const [isAdding, setIsAdding] = useState(false);
    const handleAddBenefit = () => {
        if (!newBenefit.trim()) return;

        const newItem = {
            title: newBenefit,
            desc: null,
            icon: FaRegSmileWink
        };
        setBenefits([...benefits, newItem]);
        setNewBenefit("");

    };
    const [selectedBenefit, setSelectedBenefit] = useState(new Set());
    const handleSelectBenefit = (index) => {
        const newSet = new Set(selectedBenefit);
        if (newSet.has(index)) {
            newSet.delete(index);
        } else {
            newSet.add(index);
        }
        setSelectedBenefit(newSet);
    }
    


    return (
        <div>
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label>สัญญาณอินเตอร์เน็ต</label>
                    <div className="flex flex-wrap gap-4">
                        {internets.map((internet) => {
                            const isActive = selectedInternet === internet;
                            return (
                                <button key={internet} value={internet} onClick={() => handleInternetChange(internet)}
                                    className={`px-2 py-0.5 text-xs border rounded-md transition-all duration-150 active:scale-90 mt-1 ${isActive ? "bg-[#368C64] text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}>
                                        {internet}

                                </button>
                            );
                        })}
                    </div>
                </div>
                
                <div>
                    <label>รถสาธารณะ</label>
                    <div className="flex flex-wrap gap-4">
                        {transports.map((transport) => {
                            const isActive = selectedTransport === transport;
                            return (
                                <button key={transport} value={transport} onClick={() => handleTransportChange(transport)}
                                    className={`px-2 py-0.5 text-xs border rounded-md transition-all duration-150 active:scale-90 mt-1 ${isActive ? "bg-[#368C64] text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}>
                                        {transport}

                                </button>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <label>ไฟฟ้า</label>
                    <div className="flex flex-wrap gap-4">
                        {electrics.map((electric) => {
                            const isActive = selectedElectric === electric;
                            return (
                                <button key={electric} value={electric} onClick={() => handleElectricChange(electric)}
                                    className={`px-2 py-0.5 text-xs border rounded-md transition-all duration-150 active:scale-90 mt-1 ${isActive ? "bg-[#368C64] text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}>
                                        {electric}

                                </button>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <label>ที่อยู่อาศัย</label>
                    <div className="flex flex-wrap gap-4">
                        {housings.map((housing) => {
                            const isActive = selectedHousing === housing;
                            return (
                                <button key={housing} value={housing} onClick={() => handleHousingChange(housing)}
                                    className={`px-2 py-0.5 text-xs border rounded-md transition-all duration-150 active:scale-90 mt-1 ${isActive ? "bg-[#368C64] text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}>
                                        {housing}

                                </button>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <label>น้ำประปา</label>
                    <div className="flex flex-wrap gap-4">
                        {waters.map((water) => {
                            const isActive = selectedWater === water;
                            return (
                                <button key={water} value={water} onClick={() => handleWaterChange(water)}
                                    className={`px-2 py-0.5 text-xs border rounded-md transition-all duration-150 active:scale-90 mt-1 ${isActive ? "bg-[#368C64] text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}>
                                        {water}

                                </button>
                            );
                        })}
                    </div>
                </div>
                
                 
            </div>
            <div>
                <label>สวัสดิการของโรงเรียน</label>
                <div className="grid grid-cols-2 gap-3">
                    {benefits.map((benefit, index) => {
                        const isActive = selectedBenefit.has(index);
                        return (
                            <button
                                key={index}
                                onClick={() => {handleSelectBenefit(index)}}
                                className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all active:scale-95 bg-white text-gray-700 hover:bg-gray-200}`}>
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-gray-100 rounded-lg">
                                        {benefit.icon && <benefit.icon size={18} />}
                                    </div>

                                    <div className="inline-flex flex-col items-start">
                                        <p className="text-sm font-medium">{benefit.title}</p>
                                        <p className="text-xs text-gray-500">{benefit.desc}</p>
                                    </div>
                                </div>
                                <div className={`w-4 h-4 border rounded
                                    ${isActive ? "bg-[#368C64] border-[#368C64]" : ""}`}/>
                            </button>
                        );
                    })}
                    <div onClick={() => setIsAdding(!isAdding)}
                        className={`flex items-center justify-center gap-2 p-3 border rounded-xl cursor-pointer transition ${isAdding ? "bg-green-50 border-green-600": "bg-white hover:bg-gray-50" }`}>
                        <FaPlus size={16} />
                        <span>more</span>
                    </div>

                </div>
                {isAdding && (
                    <div className="flex gap-2 mt-4">
                        <input value={newBenefit} onChange={(e) => setNewBenefit(e.target.value)} placeholder="เพิ่มสวัสดิการอื่นๆ"
                            className="flex-1 border p-2 rounded-lg"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleAddBenefit();
                            }}
                        />
                        <button
                            onClick={handleAddBenefit}
                            className="px-4 py-2 bg-[#368C64] text-white rounded-lg hover:bg-[#2E6B52]">
                            Add
                        </button>
                    </div>
                )}

            </div>
        </div>
        
        
    );
}