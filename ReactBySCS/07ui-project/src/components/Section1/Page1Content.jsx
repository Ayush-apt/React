import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='flex justify-between gap-10 h-[90vh] px-8 py-3'>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default Page1Content
