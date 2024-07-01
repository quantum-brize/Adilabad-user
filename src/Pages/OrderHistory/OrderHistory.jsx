import React from 'react'
import './OrderHistory.css'
import Header from '../../Components/Header/Header'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { category_data } from '../../data'
import image from '../../Components/Assets/Images/card1.png'
const OrderHistory = () => {
  return (
    <div className='order-history'>
        <Header title={"My Orders"}/>
        <div className="top-actions flex-boxes">
            <h4>Order History</h4>
            <p>sort <IoIosArrowDown/> </p>
        </div>
        <div className="orders-list">
            {
                category_data.map((e)=>{
               return <div className="date-box">
                    <p>10/2/2024</p>
                   <div className="detail-box flex-boxes ">
                        <h4>#XXYXYZ</h4>
                        <p>Details <span><IoIosArrowForward/></span> </p>
                   </div>
                   <div className='order-card'>
        <div className="rows">
            <img src={image} alt="" />
        </div> 
        <div className="text rows">
            <h4>Air Force One</h4>
            <p>Quantity:{e.sub_category} | $99</p>
        </div>
    </div>

    <div className='order-card'>
        <div className="rows">
            <img src={image} alt="" />
        </div> 
        <div className="text rows">
            <h4>Air Force One</h4>
            <p>Quantity:{e.sub_category} | $99</p>
        </div>
    </div>
                </div>
                })
            }
        </div>
    </div>
  )
}

export default OrderHistory