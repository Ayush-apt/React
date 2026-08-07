import React from 'react'
import {X} from 'lucide-react'

const Card = (props) => {

  return (
    <div className='relative h-50 w-40'>
        <img className='h-full w-full object-cover rounded-xl'
        src="https://i.pinimg.com/736x/9c/c8/e1/9cc8e1e978288c790b633a41efd02089.jpg" 
        alt="" />

        <X onClick={ () => {
          props.deleteNote(props.index)
        }} className='cursor-pointer absolute top-2 right-4 text-black bg-amber-200 p-1 rounded-full z-10'/>

        <div className='absolute top-0 w-full p-4 flex flex-col gap-1 text-black'>
          <h2 className='font-bold text-xl'>{props.head}</h2>
          <p className='font-medium text-sm'>{props.detail}</p>
        </div>
    </div>
  )
}

export default Card
