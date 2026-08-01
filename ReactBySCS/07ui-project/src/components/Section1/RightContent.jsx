import React from 'react'
import RightCard from './RightCard'

const RightContent = () => {
const cardDetail = [
  {
    num: "1",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Prime",
    color: "bg-blue-600"
  },
  {
    num: "2",
    img: "https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Growth",
    color: "bg-teal-600"
  },
  {
    num: "3",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Emerging",
    color: "bg-amber-600"
  },
  {
    num: "4",
    img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Explorer",
    color: "bg-violet-600"
  },
  {
    num: "5",
    img: "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Potential",
    color: "bg-rose-600"
  },
  {
    num: "6",
    img: "https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Opportunity",
    color: "bg-emerald-600"
  }
];
  return (
    <div className='flex flex-nowrap overflow-x-auto gap-6 w-2/3 h-full'>{
      cardDetail.map( (elem) => {
        return(
          <RightCard
           num= {elem.num}
           img= {elem.img}
           type= {elem.type}
           color= {elem.color}
          />
        )
      })
    }
    </div>
  )
}

export default RightContent
