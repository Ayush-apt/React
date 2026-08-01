import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='shrink-0 h-full w-60 overflow-hidden relative rounded-4xl'>
        <img className='w-full h-full object-cover' src={props.img} alt="" />
        <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
            <RightCardContent
                num={props.num}
                img={props.img}
                type={props.type}
                color= {props.color}
            />
        </div>
    </div>
  )
}

export default RightCard
