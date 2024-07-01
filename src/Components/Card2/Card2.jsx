import React from 'react'
import '../Card2/Card2.css'
import { Link } from 'react-router-dom'
const Card2 = ({image, name, amount}) => {
  return (
    <Link to={"/sub-category"} className='card-2'>
        <img src={image} alt="" />
        <div className="detail">
           <p>{name} {" "} ({amount})</p>
        </div>
    </Link>
  )
}

export default Card2