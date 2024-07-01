import React from 'react'
import './ProductService.css'
import { FaArrowLeft, FaEye, FaStar } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
import { CiShare2 } from 'react-icons/ci'
import image from '../../Components/Assets/Images/Vector.png'
import { RxCross1 } from 'react-icons/rx'
import Card6 from '../../Components/Card6/Card6'
import { category_data } from '../../data'
import image1 from '../../Components/Assets/Images/card1.png'
// import { MdOutlinePeopleOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
const ProductService = ({ feedbackOn, setFeedbackOn }) => {
    const toogleFeedback = () => {
        setFeedbackOn(prevfeedbackOn => !prevfeedbackOn);
    }
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div className='product-service'>
            <div className="header">
                <FaArrowLeft onClick={() => goBack()} className='icons' />
                <div className="title">

                    <h3>Product/Service (6)</h3>
                    <p> <FaEye /> 40,000 views </p>
                </div>
                <div className="action">
                    <IoSearch className='icons' />
                    <CiShare2 className='icons' />
                </div>
            </div>

            {/*  */}
            <div className="body-product-service">
                <div className="notification-admin">
                    <p>Any text from Admin</p>
                    <RxCross1 className='cross-icon' />
                </div>
                <div className="store-title">
                    <img src={image} alt="" />
                    <h3>Store Full Name</h3>
                </div>
                <div className="product-types-btn">
                    <button className='btn-on'>All</button>
                    <button className='btn-off'>Food1</button>
                    <button className='btn-off'>Food2</button>
                </div>


            </div>
            <div className="product-service-lists">
                {
                    category_data.map((e, i) => {
                        return i === 4 ? <div className="review" onClick={() => toogleFeedback()}>
                            <div className="text">
                                Your Feedback Matters
                            </div>
                            <div className="stars">
                                <FaStar className='star-icon' />
                                <FaStar className='star-icon' />
                                <FaStar className='star-icon' />
                                <FaStar className='star-icon' />
                                <FaStar className='star-icon' />
                            </div>
                            <div className="store-rating">
                                <span className="rating-score">4.9 <FaStar /> </span>
                                <span className="rating-comments">6 Comments</span>
                            </div>
                        </div> : <Card6 image={image1} />
                    })
                }
            </div>
        </div>
    )
}

export default ProductService