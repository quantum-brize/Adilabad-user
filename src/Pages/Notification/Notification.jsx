import React from 'react'
import Header from '../../Components/Header/Header'
import { category_data } from '../../data'
import Card5 from '../../Components/Card5/Card5'
import chat from '../../Components/Assets/Images/Chat.png'
import '../Notification/Notification.css'
const Notification = () => {
  return (
    <div>
   
        <Header title={"Notification"}/>
        {
          category_data.length>0?<div className="notification-body">
              {
                category_data.map((e)=>{
                  return (
                    <Card5 image={e.image} title={e.name} time={e.sub_category} />
                  )
                })
              }
          </div>
          
          
          :
          
          
          <div className="no-Notification">
            <img src={chat} alt="" />
            <h4>No Notifications</h4>
            <p>We’ll let you know when there will be something to update you.</p>

          </div>
        }
    </div>
  )
}

export default Notification