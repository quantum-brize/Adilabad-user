import React from 'react'
import '../BottomNav/BottomNav.css'
import { Link } from 'react-router-dom'
import home from '../Assets/Images/home.png'
import notification from '../Assets/Images/notification.png'
import order from '../Assets/Images/order.png'
import profile from '../Assets/Images/profile.png'
const BottomNav = () => {
  return (
    <div className='bottom-nav'>
    <Link to={"/"}>
    <div className="single-box">
        <img src={home} alt="" />
        <p>Home</p>
    </div>
    </Link>
    <Link  to={"/notification"}>
        <div className="single-box">
            <img src={notification} alt="" />
            <p>Notification</p>
        </div>
    </Link>
    <Link  to={"/order-history"}>
        <div className="single-box">
            <img src={order} alt="" />
            <p>My Orders</p>
        </div>
    </Link>
    <Link  to={"/profile"}>
        <div className="single-box">
            <img src={profile} alt="" />
            <p>My Profile</p>
        </div>
    </Link>

    </div>
  )
}

export default BottomNav