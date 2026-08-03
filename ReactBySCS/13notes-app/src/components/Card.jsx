import React from 'react'

const Card = (props) => {
  return (
    <div className='h-50 w-40'>
        <img className='' src="https://i.pinimg.com/736x/9c/c8/e1/9cc8e1e978288c790b633a41efd02089.jpg" alt="" />
        <div>
          <h2>{props.head}</h2>
          <p>{props.detail}</p>
        </div>
    </div>
  )
}

export default Card
