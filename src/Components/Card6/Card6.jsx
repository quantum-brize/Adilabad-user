import React, { useState } from 'react'
import './Card6.css'
import { MdOutlinePeopleOutline } from 'react-icons/md'
import { IoIosCall } from 'react-icons/io'
import { FaWhatsapp } from 'react-icons/fa6'
const Card6 = ({ image }) => {
    const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className='card-6'>
        <div className="upper-box">
        <div className="image-box"> 
            <img src={image} alt="" />
        </div>
        <div className="product-details">
            <h5>Product Name</h5>
            <p className='offer-price'>$250.00 <span>(-5% oFF)</span> </p>
            <p className='original-price'>MRP <span>200.00</span> </p>
       
            <div className="cart-options">
                <button>ADD TO CART</button>
                <div className="cart-change">
                    <button onClick={decrementQuantity}>-</button>
                          <span>{quantity}</span>
                    <button onClick={incrementQuantity}>+</button>
                </div>
            </div>
            <h6 className='enquired-text'> <MdOutlinePeopleOutline className='enquired-icon'/> 4 people enquired </h6>
          
        </div>
        </div>
        <div className="lower-box">
        <div className="rows-action">
            <button> <IoIosCall/> Call Now</button>
            <p> <MdOutlinePeopleOutline/> 200</p>
        </div>
        <div className="rows-action">
            <button> <FaWhatsapp/> Chat Now</button>
            <p> <MdOutlinePeopleOutline/> 200</p>
        </div>
        <div className="rows-action">
            <button>Send Enquiry</button>
            <p> <MdOutlinePeopleOutline/> 200</p>
        </div>
        <div className="rows-action">
            <button>Similar ▼</button>
            <p> 10 products</p>
        </div>
        </div>
    </div>
  )
}

export default Card6