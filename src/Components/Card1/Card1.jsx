import React from 'react'
import '../Card1/Card1.css'
import arrow from '../Assets/Images/arrow-forward.png'
import { Link } from 'react-router-dom'
const Card1 = ({image, name, sub_category}) => {
  return (
    <Link to={"/category-detail"} className='card-1'>
        <div className="box-left card-box">
            <img src={image} alt="" />
            <p>{name}</p>
        </div>
        <div className="box-right card-box">
        <p>{sub_category>0?sub_category:""}</p>
        <img src={arrow} alt="" />
        </div>
    </Link>
  )
}

export default Card1