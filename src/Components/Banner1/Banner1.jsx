import React from 'react'
import { Link } from 'react-router-dom'
import '../Banner1/Banner1.css'
const Banner1 = ({image, link}) => {
  return (
    <Link className='banner-1'>
        <img src={image} alt="" />
    </Link>
  )
}

export default Banner1