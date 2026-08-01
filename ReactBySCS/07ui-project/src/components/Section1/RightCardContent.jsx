import React from 'react'
import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
    <>
        <h1 className='bg-white h-10 w-10 text-lg font-medium rounded-full flex justify-center items-center'>{props.num}</h1>
        <div>
            <p className='text-lg leading-relaxed text-white font-normal mb-10'>Prime customers, that have access to bank credit and are satisfied with the current product</p>
            <div className='flex justify-between gap-3 items-center'>
            <button className={`px-4 py-1 rounded-3xl text-white ${props.color} font-normal text-lg`}>{props.type}</button>
            <button className={`px-1 py-1 rounded-3xl text-white ${props.color} font-normal text-lg`}><ArrowRight /></button>
            </div>
        </div>
    </>
  )
}

export default RightCardContent
