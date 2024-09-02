import Image from 'next/image'
import BoyStandingImg from '@/app/assets/images/boy_standing.jpg'
import React from 'react'
import { LogoutIcon } from '@/app/assets/icon'

const SidebarFooter = () => {
    return (
        <div className={"bg-dark-400 flex flex-col gap-4 mx-4 p-4 outline outline-1 outline-gray-300 rounded-md mb-4"}>
            <button className='flex items-center gap-3'>
                <Image src={BoyStandingImg} alt='avatar' className='h-10 w-10 rounded-full outline outline-2 outline-gray-300' />
                <h3>Michael Smithson</h3>
            </button>
            <button className='flex gap-5 items-center'>
                <LogoutIcon />
                <h3>Logout</h3>
            </button>
        </div>
    )
}

export default SidebarFooter