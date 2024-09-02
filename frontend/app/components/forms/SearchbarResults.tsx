"use client"
import { SearchRatingIcon } from '@/app/assets/icon'
import React, { useState } from 'react'
import SearchbarResult from './SearchbarResult'
import { TbLoaderQuarter } from "react-icons/tb";
import { LuLoader2 } from "react-icons/lu";


const SearchbarResults = () => {
    const [isLoading, setIsLoaading] = useState<boolean>(false)
    const SRClass = 'outline-2 h-full stylish_scrollbar pr-3 flex flex-col overflow-hidden z-10 pt-2 gap-2 rounded-md min-h-48 max-h-48 overflow-y-auto outline-green-300 outline p-4'
    return (
        <div className="">
            {/* Search Result */}
            {isLoading ? (
                <div className={`${SRClass} grid h-full items-center justify-center`}>
                    <div className='h-40 flex items-center gap-2'>
                        <span className='text-xs'>Incoming...</span>
                        <LuLoader2 className='spin text-green-300' />
                    </div>
                </div>
            ): (
                <div className={SRClass}>
                    <SearchbarResult />
                    <SearchbarResult />
                    <SearchbarResult />
                    <SearchbarResult />
                    <SearchbarResult />
                </div>
            ) }
            
           
        </div>
    )
}

export default SearchbarResults