import { SearchRatingIcon } from '@/app/assets/icon'
import React from 'react'

const SearchbarResult = () => {
    return (
        <section className='bg-green-300 z-20 flex items-center gap-4 cursor-pointer hover:bg-white duration-100 text-dark-400 px-3 rounded-md py-2'>
            <div>
                <h3 className='font-semibold'>Flutterwave</h3>
                <p className='text-xs'>Released <strong>2010</strong></p>
            </div>

            <div className='flex gap-1'>
                <SearchRatingIcon />
                <SearchRatingIcon />
                <SearchRatingIcon />
                <SearchRatingIcon />
                <SearchRatingIcon />
            </div>
        </section>
    )
}

export default SearchbarResult