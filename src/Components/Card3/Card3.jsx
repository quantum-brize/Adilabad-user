import React from 'react'
import '../Card3/Card3.css'
import { useNavigate } from 'react-router-dom';
import { FaEye, FaLocationPin, FaShield, FaStar } from 'react-icons/fa6';
const Card3 = ({image,id}) => {
  const navigate = useNavigate();

  const storeDetail = (id)=>{
    navigate(`/store-detail/${id}`)
  } 
    return (
      <div className="card-3">
   <div className="store-card">
          <div className="store-image">
            <img src={image} alt="Store" />
            <div className="store-verified">
              <FaShield className='icon-shield'/>
              <span>Verified 3-jan-2024</span>
            </div>
          </div>
          <div className="store-infos">
            <h2 className="store-name">Quantum Brize Store</h2>
            <p className="store-location"><FaLocationPin/> Ula, Howrah, Kolkata</p>
            <div className="store-rating">
              <span className="rating-score">4.9 <FaStar/> </span>
              <span className="rating-comments">6 Comments</span>
            </div>
            <div className="store-offers">
              <span className="offer-discount">✅ Discount offer up to 20%</span>
              <span className="offer-products">🛒 12 Products Available</span>
            </div>
           
            <button onClick={()=>storeDetail(id)} className="view-details-btn">View Details</button>
          </div>
        </div>
        <div className="card-details">
          <p><FaEye/>624323 views</p> 
          <p>20 calls</p>
          <p>18 chats</p>
          <p>12 orders</p>
          <p>12 enquiry</p>
        </div>
      </div>
     
      );
}

export default Card3