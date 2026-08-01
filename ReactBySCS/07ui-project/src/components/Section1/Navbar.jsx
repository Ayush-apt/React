import React from 'react'
import {CornerDownRight} from 'lucide-react'

const navbar = () => {
  return (
    <>
        <div className='flex items-center justify-between px-20 py-10'>
            <button className='rounded-2xl text-gray-200 bg-black px-3 py-1 uppercase font-normal'>Target Audience</button>
            <div className='flex items-center content-center gap-0.5 text-gray-800 uppercase font-normal rounded-2xl bg-gray-200 px-3 py-1'><CornerDownRight className='text-gray-800 w-5px h-5px'/> Digital Banking Platform</div>
        </div>
    </>
  )
}

export default navbar
