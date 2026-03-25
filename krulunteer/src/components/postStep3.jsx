import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { BsBusFront } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";
import { GiMeal } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { FaRegSmileWink } from "react-icons/fa";
export default function Step3({ formData, setFormData }) {
    const internets = ["แย่มาก", "แย่", "ปานกลาง", "ดี", "ดีมาก"];
    const [selectedInternet, setInternet] = useState("");

    const handleInternetChange = (internet) => {
        setInternet(internet);
        setFormData({
            ...formData,
            internet: internet
        });

    };
    const transports = ["แย่มาก", "แย่", "ปานกลาง", "ดี", "ดีมาก"];
    const [selectedTransport, setTransport] = useState("");
    const handleTransportChange = (transport) => {
        setTransport(transport);
        setFormData({
            ...formData,
            transport: transport
        });
    }

    const electrics = ["แย่มาก", "แย่", "ปานกลาง", "ดี", "ดีมาก"];
    const [selectedElectric, setElectric] = useState("");
    const handleElectricChange = (electric) => {
        setElectric(electric);
        setFormData({
            ...formData,
            electric: electric
        });

    }

    const housings = ["แย่มาก", "แย่", "ปานกลาง", "ดี", "ดีมาก"];
    const [selectedHousing, setHousing] = useState("");
    const handleHousingChange = (housing) => {
        setHousing(housing);
        setFormData({
            ...formData,
            housing: housing
        });

    }

    const waters = ["แย่มาก", "แย่", "ปานกลาง", "ดี", "ดีมาก"];
    const [selectedWater, setWater] = useState("");
    const handleWaterChange = (water) => {
        setWater(water);
        setFormData({
            ...formData,
            water: water
        });

    }

    const [benefits, setBenefits] = useState([
        { title: "Free Housing", desc: "มีบ้านพักให้", icon: IoHomeOutline },
        { title: "Free WiFi", desc: "มีอินเตอร์เน็ตให้", icon: FaWifi },
        { title: "Transportation Provided", desc: "มีบริการรถรับส่ง", icon: BsBusFront },
        { title: "Free Meals", desc: "มีอาหารกลางวันให้", icon: GiMeal },
        { title: "Free water and electricity", desc: "ฟรีค่าน้ำ/ค่าไฟ", icon: RiBillLine }
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
        setFormData({
            ...formData,
            benefits: [...formData.benefits, newItem]
        });

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
        setFormData({
            ...formData,
            benefits: Array.from(newSet).map(i => benefits[i])
        });

    }

    


    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-noto-sans-thai">
                <div>
                    <label className="text-sm font-medium text-gray-700">สัญญาณอินเตอร์เน็ต</label>
                    <div className="flex flex-wrap gap-4">
                        {internets.map((internet) => {
                            const isActive = selectedInternet === internet;
                            return (
                                <button key={internet} value={internet} onClick={() => handleInternetChange(internet)}
                                    className={`px-2 py-0.5 text-xs border border-gray-300 p-2.5 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all mt-1 ${isActive ? "bg-[#368C64] text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}>
                                       
                                        {internet}

                                </button>
                            );
                        })}
                    </div>
                </div>
                
                <div>
                    <label className="text-sm font-medium text-gray-700">รถสาธารณะ</label>
                    <div className="flex flex-wrap gap-4">
                        {transports.map((transport) => {
                            const isActive = selectedTransport === transport;
                            return (
                                <button key={transport} value={transport} onClick={() => handleTransportChange(transport)}
                                    className={`px-2 py-0.5 text-xs border border-gray-300 p-2.5 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all mt-1 ${isActive ? "bg-[#368C64] text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}>
                                        {transport}

                                </button>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">ไฟฟ้า</label>
                    <div className="flex flex-wrap gap-4">
                        {electrics.map((electric) => {
                            const isActive = selectedElectric === electric;
                            return (
                                <button key={electric} value={electric} onClick={() => handleElectricChange(electric)}
                                    className={`px-2 py-0.5 text-xs border border-gray-300 p-2.5 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all mt-1 ${isActive ? "bg-[#368C64] text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}>
                                        {electric}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">ที่อยู่อาศัย</label>
                    <div className="flex flex-wrap gap-4">
                        {housings.map((housing) => {
                            const isActive = selectedHousing === housing;
                            return (
                                <button key={housing} value={housing} onClick={() => handleHousingChange(housing)}
                                    className={`px-2 py-0.5 text-xs border border-gray-300 p-2.5 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all mt-1 ${isActive ? "bg-[#368C64] text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}>
                                        {housing}

                                </button>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">น้ำประปา</label>
                    <div className="flex flex-wrap gap-4">
                        {waters.map((water) => {
                            const isActive = selectedWater === water;
                            return (
                                <button key={water} value={water} onClick={() => handleWaterChange(water)}
                                    className={`px-2 py-0.5 text-xs border border-gray-300 p-2.5 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all mt-1 ${isActive ? "bg-[#368C64] text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}>
                                        {water}

                                </button>
                            );
                        })}
                    </div>
                </div>
                
                 
            </div>
            <div className="mt-2 font-noto-sans-thai">
                <label className="text-sm font-medium text-gray-700">สวัสดิการของโรงเรียน</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    {benefits.map((benefit, index) => {
                        const isActive = selectedBenefit.has(index);
                        return (
                            <button
                                key={index}
                                onClick={() => {handleSelectBenefit(index)}}
                                className={`flex items-center justify-between p-3 border border-gray-200 rounded-xl shadow-sm transition ${isActive ? "bg-green-50 border-[#2F855A]" : "bg-white hover:bg-gray-50"}`} >
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-[#EEF0EA] rounded-lg ">
                                        {benefit.icon && <benefit.icon size={18} />}
                                    </div>

                                    <div className="inline-flex flex-col items-start">
                                        <p className="text-sm font-medium">{benefit.title}</p>
                                        <p className="text-xs text-gray-500">{benefit.desc}</p>
                                    </div>
                                </div>
                                <div className={`w-4 h-4 border rounded
                                    ${isActive ? "bg-[#2F855A] border-[#2F855A]" : "border-gray-300"}`}/>
                            </button>
                        );
                    })}
                    <div onClick={() => setIsAdding(!isAdding)}
                        className={`items-start flex  justify-between p-3 border border-gray-300  rounded-md shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all ${isAdding ? "bg-green-50 border-green-600": "bg-white hover:bg-gray-100" }`}>
                        <div className="flex gap-2">
                            <div className="p-2 bg-[#EEF0EA] rounded-lg">
                                <FaPlus size={16} />
                            </div>

                            <div className="inline-flex flex-col items-start">
                                <p className="text-sm font-medium">More</p>
                                <p className="text-xs text-gray-500">เพิ่มสวัสดิการอื่นๆ</p>
                            </div>
                        </div>
                    </div>

                </div>
                {isAdding && (
                    <div className="flex gap-2 mt-4">
                        <input value={newBenefit} onChange={(e) => setNewBenefit(e.target.value)} placeholder="เพิ่มสวัสดิการอื่นๆ"
                            className="flex-1 border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-[#2F855A]"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleAddBenefit();
                            }}
                        />
                        <button
                            onClick={handleAddBenefit}
                            className="px-4 py-2 bg-[#2F855A] text-white rounded-lg hover:bg-[#276749] shadow-md">
                            Add
                        </button>
                    </div>
                )}

            </div>
        </div>
        
        
    );
}