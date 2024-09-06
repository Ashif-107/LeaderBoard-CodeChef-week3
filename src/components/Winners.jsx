import Winner1 from '../../public/photos/max.jpg'
import Winner2 from '../../public/photos/leclerc.png'
import Winner3 from '../../public/photos/lewis.jpg'
import Image from 'next/image'

function Winners(props) {

    return (
        <div className='flex flex-wrap justify-center lg:h-[420px]'>
            <div className='flex pr-3 pl-3 md:pr-0 md:pl-0 sm:w-[60%] lg:w-[65%] justify-around'>
                <Image src={Winner2} className='border-4 border-gray-600 h-[90px] w-[90px] sm:h-[120px] sm:w-[120px] lg:h-[150px] lg:w-[150px] relative top-[100px] sm:top-[] lg:top-[120px] rounded-full bg-white' style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }} />
                <Image src={Winner1} className='border-4 border-yellow-600 h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] lg:h-[150px] lg:w-[150px] relative top-[30px] sm:top-[] lg:top-[50px] rounded-full' style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}/>
                <Image src={Winner3} className='border-4 border-red-950 h-[90px] w-[90px] sm:h-[120px] sm:w-[120px] lg:h-[150px] lg:w-[150px] relative top-[100px] sm:top-[] lg:top-[120px] rounded-full' style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }} />
            </div>

            <div className='flex items-end pr-3 pl-3 md:pr-0 md:pl-0 sm:w-[60%] lg:w-[65%] pb-5'>
                <div className='flex flex-wrap justify-center items-center content-center bg-[#3B5987] pb-3 mr-[1px] h-[130px] lg:h-[180px] w-[33%] self-end rounded-3xl rounded-r-none '>
                    <div className='text-white text-center w-full text-[15px] font-normal mt-5 font-inter' >{props.winners[1]}</div>
                    <div className='text-white text-[20px] font-semibold mt-3 font-inter'>{props.winnerPoints[1]}</div>
                </div>
                <div className='flex flex-wrap justify-center items-center content-center bg-[#3B5987] pb-3 h-[200px] lg:h-[250px] w-[33%] rounded-3xl rounded-b-none'>
                    <div className='text-white text-center w-full text-[15px] font-normal font-inter'>{props.winners[0]}</div>
                    <div className='text-white text-[20px] font-semibold mt-3 font-inter'>{props.winnerPoints[0]}</div>
                </div>
                <div className='flex flex-wrap justify-center items-center content-center bg-[#3B5987] pb-3 ml-[1px] h-[130px] lg:h-[180px] w-[33%] self-end rounded-3xl rounded-l-none'>
                    <div className='text-white text-center w-full text-[15px] font-normal mt-5 font-inter'>{props.winners[2]}</div>
                    <div className='text-white text-[20px] font-semibold mt-3 font-inter'>{props.winnerPoints[2]}</div>
                </div>
            </div>
        </div>
    )
}

export default Winners