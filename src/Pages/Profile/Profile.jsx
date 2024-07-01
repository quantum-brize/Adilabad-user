import React from 'react'
import '../Profile/Profile.css'
import Header from '../../Components/Header/Header'
import image from '../../Components/Assets/Images/card2.png'
import Footer from '../../Components/Footer/Footer'
import { category_data } from '../../data'
import {  IoCartOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
  const navigate = useNavigate();
  const goTo = (location)=>{
    navigate(location);
  }
  return (
    <div className='profile'>
        <Header title={"Profile"}/>
       <div className="body-profile">
       <div className="profile-card">
            <div className="detail">
            <p>Name = Adilabad</p>
            <p>Phone = 12234124</p>
            <p>Address = Hyderabad</p>
            </div>
            <div className="profile-pic">
            <img src={image} alt="" />
            </div>

        </div>
        <div className="search-history">
         <div className="title">
          <p>Search History</p>
          <p>see more <span>{">"}</span></p>
         </div>
        <div className="search-list">
        {
              category_data.map((e)=>{
                return ( 
                  <div className="searched-box">
                    <img src={image} alt="" />
                    <p>Product Name</p>
                  </div>

                )
              })
          }
        </div>
        </div>

        <div className="saved search-history">
         <div className="title">
          <p>Saved (6)</p>
          <p>see more <span>{">"}</span></p>
         </div>
        <div className="search-list">
        {
              category_data.map((e)=>{
                return ( 
                  <div className="searched-box">
                    <img src={image} alt="" />
                    <div className="details">
                      
                    <h5>Store Name</h5>
                    <p>Other Detail</p>
                    </div>
                  </div>

                )
              })
          }
        </div>
        </div>

        <div onClick={()=>goTo("/order-history")} className="my-order-history list-profile">
          <IoCartOutline className='icon'/>
          <h4>My Order History {">>"}</h4>
        </div>
        <div className="list-profile">
          <IoCartOutline className='icon'/>
          <h4>List My Business {">>"}</h4>
        </div>
        <div className="list-profile">
          <IoCartOutline className='icon'/>
          <h4>Customer Service {">>"}</h4>
        </div>
        <div className="list-profile">
          <IoCartOutline className='icon'/>
          <h4>Share the App {">>"}</h4>
        </div>
        <div className="list-profile">
          <IoCartOutline className='icon'/>
          <h4>Rate Us {">>"}</h4>
        </div>
        <div className="list-profile">
          <IoCartOutline className='icon'/>
          <h4>About Us {">>"}</h4>
        </div>
       </div>
       <Footer/>
    </div>
  )
}

export default Profile