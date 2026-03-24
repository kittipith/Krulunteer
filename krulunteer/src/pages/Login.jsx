import '../index.css'
import Header from '../components/Header'
import Teacher from '../components/LoginTeacher'
import Staff from '../components/LoginStaff'

function Home(){
    return(
        <>
            <Header />
            <div className='bg-[#F9F9F9] min-h-screen px-[10%] grid grid-cols-[45%_5%_45%] gap-10'>
                <Teacher />
                <div className="relative min-h-screen">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-10 flex flex-col items-center h-[80vh] justify-center">
                        <div className="flex-grow w-[1px] bg-gray-300"></div>
                        <span className="py-4 text-[#808080] font-playfair font-light text-sm">or</span>
                        <div className="flex-grow w-[1px] bg-gray-300"></div>
                    </div>
                </div>
                <Staff />
            </div>
        </>
    )
}

export default Home