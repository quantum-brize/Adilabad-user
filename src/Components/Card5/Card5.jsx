import React from 'react'
import '../Card5/Card5.css'

const Card5 = ({image, title, time}) => {
  return (
    <div className='card-5'>
        <div className="rows">
            <img src={image} alt="" />
        </div>
        <div className="text rows">
            <h4>{title}</h4>
            <p>Subtitle {title}</p>
        </div>
        <div className="rows"><p className='time'>{time} days ago</p></div>
    </div>
  )
}

export default Card5