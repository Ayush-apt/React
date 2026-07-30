import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">
        <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <Bookmark className='book'/></button>
        
        </div>

        <div className="center">
          <h3>{props.company} <span>{props.daysAgo} days ago</span></h3>
          <h2>{props.role}</h2>
          <div className='type'>
            <h4>{props.jobTypes[0]}</h4>
            <h4>{props.jobTypes[1]}</h4>
          </div>
        </div>

        <hr />
        <div className="bottom">
          <div>
            <h3>{props.salary}</h3>
            <p>{props.location}</p>
          </div>
            <div className='apply'>Apply Now</div>
        </div>
    </div>
  )
}

export default Card
