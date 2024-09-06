import Image from 'next/image'
import BackArrow from '../../public/assets/BackArrow.svg'
import MenuBtn from '../../public/assets/MenuBtn.svg'

export default function Header() {

    return (
    <div className='flex flex-nowrap justify-between w-full p-3'>
        <button className='hover:bg-gray-300 rounded-full pr-4 pl-4'><Image src={BackArrow} alt="" className='h-[20px] lg:h-[25px]'/></button>
        <p className='text-[#2C2C2C] text-[20px] lg:text-[30px] font-inter font-semibold'>Leaderboard</p>
        <button className='hover:bg-gray-300 rounded-full pr-4 pl-4'><Image src={MenuBtn} alt="" className='h-[20px] lg:h-[25px]'/></button>
    </div>
    )
}

