import React, { useState } from 'react'
import '../StoreDetail/StoreDetail.css'
import Slider from 'react-slick'
import { IoMdArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../Components/Assets/Images/card1.png'
import image2 from '../../Components/Assets/Images/card2.png'
import Footer from '../../Components/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaHeart, FaLocationPin, FaStar } from 'react-icons/fa6';
import { CiShare2 } from 'react-icons/ci';
import fb from '../../Components/Assets/Images/fb.png'
import { MdOutlinePeopleOutline, MdVerifiedUser } from 'react-icons/md';
import { category_data } from '../../data';
import Card3 from '../../Components/Card3/Card3';

const StoreDetail = () => {
  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    setShowImage(prevShowImage => !prevShowImage);
  };

    const navigate = useNavigate();
  const goBack = ()=>{
    navigate(-1);
  }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='store-detail'>
        <div className="slider">
            <Slider {...settings}>
                <div className="image">
                <img src={image1} alt="" />
                </div>
                <div className="image">
                <img src={image2} alt="" />
                </div>
                <div className="image">
                <img src={image1} alt="" />
                </div>
            </Slider>
            <IoMdArrowBack onClick={()=>goBack()} className='arrow'/>
        </div>
        {/* head */}
        <div className="store-info">
            <div className="head">
                <div className="head-detail">
                <img src={image2} className='profile-pic' />
                <div className="name-detail">
                    <h4>Quantum Brize</h4>
                    <p>3000 Followers</p>
                </div>
                </div>
                <button className='follow-btn'>Follow</button> 
            </div>
{/* actions */}
            <div className="store-actions">
              <div className="details">
              <p> <FaEye/> 40,000 views &#8226; 2000Days▼ </p>
              </div>
              <div className="actions">
                <CiShare2/>
                <FaHeart className='heart'/>
              </div>
            </div>
            {/* detail */}
            <div className="store-detail-des">
              <h2>Quantum Brize Store<MdVerifiedUser className='verified-icon'/> </h2>
              <div className="description">
                <p>Short Description of the store Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text View More ▼</p>
               <p className='location'><FaLocationPin className='location-icon'/> Hyderabad, India</p>
              
               <div className='ratings-comment'>
              <div className="store-rating">
              <span className="rating-score">4.9 <FaStar/> </span>
              <span className="rating-comments">6 Comments</span>
            </div>
            <div className="enquiries">
              
            <button>Send Enquiry</button>
            <h6 className='enquired-text'> <MdOutlinePeopleOutline className='enquired-icon'/> 4 people enquired </h6>
            </div>
              </div> 
              </div>

              {/* icons */} 
              <div className="discount">
                <div className="discount-box">
                   <p>✅ Discount offer up to <span>20%</span></p>
                </div>
              </div>
              <div className="icons-action">
                <div className="cols">
                  <div className="icon-box">
                    <img src={fb} alt="" />
                    <p>Facebook</p>
                  </div>
                  <div className="icon-box">
                    <img src={fb} alt="" />
                    <p>Facebook</p>
                  </div>
                  <div className="icon-box">
                    <img src={fb} alt="" />
                    <p>Facebook</p>
                  </div>
                  <div className="icon-box">
                    <img src={fb} alt="" />
                    <p>Facebook</p>
                  </div>
                </div>
                <div className="cols">
                  <div className="icon-box">
                    <img src={fb} alt="" />
                    <p>Facebook</p>
                  </div>
                  <div className="icon-box">
                    <img src={fb} alt="" />
                    <p>Facebook</p>
                  </div>
                  <div className="icon-box">
                    <img src={fb} alt="" />
                    <p>Facebook</p>
                  </div>
                  <div className="icon-box">
                    <img src={fb} alt="" />
                    <p>Facebook</p>
                  </div>
                </div>
              </div>
    {/* image show */}
    <div className={`image-showing ${showImage ? '' : 'db-none'}`}>
    <div onClick={()=>toggleImage()} className="header-image">
    X
    </div>
    <img src={image1} alt="" />
    </div>
              {/* gallery */}
              <div className="gallery">
                <p>Gallery (6)</p>
             <div className="gallery-box">
             <div className="gallery-images">
                  {
                    category_data.map((e)=>{
                     return <div onClick={()=>toggleImage()} className="image-show">
                        <img src={image1} alt="" />
                      </div>
                    })
                  }
                </div>
             </div>
              </div>
              {/* products */}
              
              <div className="product-list">
                <p>Products/Services(6)</p>
                <div className="products">
                  {
                    category_data.map((e,i)=>{
                     return <Link to={`/product-service/${i}`} onClick={()=>toggleImage()} className="product-item">
                        <img src={image1} alt="" />
                        <p>$ 250.00 (5% OFF)</p>
                      </Link>
                    })
                  }
                </div>
              </div>
              {/* opening hours */}
              <div className="opening-hours">
                <h5>Mon - Sun open 24 Hours ▼</h5>
                <p>Short Description of the store Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text View More ▼</p>
               
              </div>
         
             
            </div>     {/* similar store */}
          
            <div className="similar-store">
  <div className="heading">
    <h4>Similar Store (56)</h4>
    <p>See all {'>'}</p>
  </div>
  <div className="list-stores">
    {
      category_data.map((e, i) => (
        <Card3 key={i} image={image1} id={i} className="card-3" />
      ))
    }
  </div>
</div>
        </div>
        <Footer/>
    </div>

  )
}

export default StoreDetail