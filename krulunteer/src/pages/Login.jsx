import '../index.css'
import Teacher from '../components/LoginTeacher'
import Staff from '../components/LoginStaff'

function Login({ teacher, setTeacher, staff, setStaff }) {
    return (
        <>
            <div className='bg-[#F9F9F9] min-h-screen px-[5%] lg:px-[10%] grid grid-cols-1 lg:grid-cols-[45%_5%_45%] gap-5 lg:gap-10 py-10 lg:py-0'>
                <Teacher teacher={teacher} setTeacher={setTeacher} />
                <div className="relative flex flex-col items-center justify-center min-h-[50px] lg:min-h-screen">
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-10 flex-col items-center h-[80vh] justify-center">
                        <div className="flex-grow w-[1px] bg-gray-300"></div>
                        <span className="py-4 text-[#808080] font-playfair font-light text-sm">or</span>
                        <div className="flex-grow w-[1px] bg-gray-300"></div>
                    </div>
                    <div className="flex lg:hidden w-full items-center gap-4">
                        <div className="flex-grow h-[1px] bg-gray-300"></div>
                        <span className="text-[#808080] font-playfair font-light text-sm">or</span>
                        <div className="flex-grow h-[1px] bg-gray-300"></div>
                    </div>
                </div>
                <Staff staff={staff} setStaff={setStaff} />
            </div>
        </>
    )
}

export default Login