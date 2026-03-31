import React, { useState, useEffect } from "react";

import { TiWeatherPartlySunny } from "react-icons/ti";
import { FiWind } from "react-icons/fi";
import { CiHospital1 } from "react-icons/ci";

export default function LocationInfo({ Lat, Lon }) {
    const lat = Lat;
    const lon = Lon;
    const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const GEOAPIFY_API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;

    const [data, setData] = useState({
        weatherTemp: "-",
        weatherDesc: "กำลังโหลด...",
        pm25Value: "-",
        pm25Level: "กำลังโหลด...",
        hospitalDist: "กำลังโหลด..."
    });

    const getAqiText = (aqiIndex) => {
        switch (aqiIndex) {
            case 1: return "ดีมาก";
            case 2: return "ดี";
            case 3: return "ปานกลาง";
            case 4: return "เริ่มมีผลกระทบ";
            case 5: return "มีผลกระทบต่อสุขภาพ";
            default: return "-";
        }
    };
    useEffect(() => {
        const fetchAllData = async () => {
            try {
                // ดึงข้อมูลสภาพอากาศ
                const weatherPromise = fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=th`
                ).then(res => res.ok ? res.json() : null);
                // ดึงข้อมูล PM 2.5
                const pm25Promise = fetch(
                    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`
                ).then(res => res.ok ? res.json() : null);
                // ดึงข้อมูลโรงพยาบาลที่ใกล้ที่สุด
                const hospitalPromise = fetch(
                    `https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:${lon},${lat},50000&bias=proximity:${lon},${lat}&limit=1&apiKey=${GEOAPIFY_API_KEY}`
                ).then(res => res.ok ? res.json() : null);
                // รอให้โหลดเสร็จพร้อมกันทั้ง 3 ตัว
                const [weatherRes, pm25Res, hospitalRes] = await Promise.all([
                    weatherPromise, pm25Promise, hospitalPromise
                ]);
                setData({
                    weatherTemp: weatherRes ? Math.round(weatherRes.main.temp) : "-",
                    weatherDesc: weatherRes ? weatherRes.weather[0].description : "ไม่สามารถดึงข้อมูลได้",
                    pm25Value: pm25Res ? Math.round(pm25Res.list[0].components.pm2_5) : "-",
                    pm25Level: pm25Res ? getAqiText(pm25Res.list[0].main.aqi) : "",
                    hospitalDist: hospitalRes && hospitalRes.features.length > 0
                        ? Math.round(hospitalRes.features[0].properties.distance / 1000)
                        : "-"
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchAllData();
    }, []);

  return (
    <div className="flex flex-col gap-4 w-full ml-3">
        <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FEFFE2] text-black">
                <TiWeatherPartlySunny size={24} />
            </div>
            <div className="font-noto-sans-thai">
                <h4 className="text-[16px] font-bold text-gray-900 leading-tight">สภาพอากาศวันนี้</h4>
                <p className="text-[14px] text-gray-400 mt-1">
                  {data.weatherTemp}°C {data.weatherDesc}
                </p>
            </div>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FEFFE2] text-black">
                <FiWind size={24} />
            </div>
            <div className="font-noto-sans-thai">
                <h4 className="text-[16px] font-bold text-gray-900 leading-tight">ค่า PM 2.5 วันนี้</h4>
                <p className="text-[14px] text-gray-400 mt-1">
                    {data.pm25Value} μg/m³ - {data.pm25Level}
                </p>
            </div>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FEFFE2] text-black">
                <CiHospital1 size={24} />
            </div>
            <div className="font-noto-sans-thai">
                <h4 className="text-[16px] font-bold text-gray-900 leading-tight">ระยะห่างจากโรงพยาบาล</h4>
                <p className="text-[14px] text-gray-400 mt-1">
                    {data.hospitalDist === "-" 
                        ? "ไม่พบสถานพยาบาลในระยะ 50 กม." 
                        : `อยู่ห่างออกไปประมาณ ${data.hospitalDist} กิโลเมตร`}
                </p>
            </div>
        </div>
    </div>
  );
}