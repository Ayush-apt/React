import React from 'react'
import {ArrowUpRight} from 'lucide-react'

const LeftContent = () => {
  return (
    <div className='flex flex-col justify-between w-1/3 h-full px-10 py-5'>
        <div>
            <h3 className='text-5xl font-bold mb-5'>Prospective <br /><span>Customer</span> <br />Segmentation</h3>
            <p className='text-lg pr-10 text-gray-700 font-medium'>Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups</p>
        </div>
        <div>
            <ArrowUpRight className='h-15 w-15'/>
        </div>
    </div>
  )
}

export default LeftContent
