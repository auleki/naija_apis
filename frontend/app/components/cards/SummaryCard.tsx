import { SummaryCardProps } from '@/src/types/components'
import React from 'react'

const SummaryCard = ({title, value}: SummaryCardProps) => {
  return (
    <div className='bg-green-300 text-center text-dark-400 rounded-lg p-3 px-4'>
        <h3 className='border-b-2 border-dark-300'>{title}</h3>
        <p className='text-6xl font-normal'>{value}</p>
    </div>
  )
}

export default SummaryCard