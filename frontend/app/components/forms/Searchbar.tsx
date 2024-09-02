import { SearchBarIcon } from '@/app/assets/icon'
import React from 'react'

const Searchbar = () => {
    return (
        <div className='border-2 flex p-1 py-2 pl-3 gap-1 text-xs justify-between rounded-lg border-green-300'>
            <input 
                type="text" 
                placeholder='Search...' 
                className='bg-transparent w-full text-green-300 outline-none'
                />
            <button className='cursor-pointer opacity-70 hover:opacity-100 duration-200'>
                <SearchBarIcon />
            </button>
        </div>
    )
}

export default Searchbar