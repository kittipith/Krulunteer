import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

function Graph({ Data }) {
    const chartData = [
        { environment: 'อินเทอร์เน็ต', value: Data?.Internet || 1 },
        { environment: 'การเดินทาง', value: Data?.Transport || 1 },
        { environment: 'ไฟฟ้า', value: Data?.Electric || 1 },
        { environment: 'ที่พักอาศัย', value: Data?.Residence || 1 },
        { environment: 'น้ำประปา', value: Data?.Water || 1 },
    ];

    return (
        <div className='border border-[#B3B3B3] rounded-2xl bg-white shadow-sm'>
            <h2 className='px-5 pt-5 text-[1.5rem] font-noto-sans-thai font-medium'>สภาพแวดล้อมรอบโรงเรียน</h2>
            <p className='px-5 text-[1rem] text-[#B3B3B3] font-noto-sans-thai'>แสดงระดับของสภาพแวดล้อมรอบโรงเรียน</p>
            <p className='px-5 text-[1rem] text-[#73AD92] font-noto-sans-thai'>5 ดีมาก 4 ดี 3 ปานกลาง 2 แย่ 1 แย่มาก</p>
            <div className="w-full h-[250px] md:h-[300px] font-noto-sans-thai">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="environment" tick={{ fill: '#6b7280', fontSize: 14 }}/>
                        <PolarRadiusAxis angle={90} domain={[1, 5]} tickCount={5} tick={{ fill: '#9ca3af', fontSize: 12 }}/>
                        <Radar name="ระดับ" dataKey="value" stroke="#368C64" fill="#D5FFD4" fillOpacity={0.2}/>
                        <Tooltip />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Graph;