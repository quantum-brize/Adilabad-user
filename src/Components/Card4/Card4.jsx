import React from 'react'
import '../Card4/Card4.css'
const Card4 = ({title}) => {
  return (
    <div className='card-4'>
     <div className="card">
     <h5>{title?title:"Are u Looking for a AC Store"}</h5>
        <form >
        <input className='input-area' type="text" placeholder='Enter your Name' />
        <input className='input-area' type="number" placeholder='Enter your Phone' />
        <textarea className='input-area' name="" id="message" placeholder='Enter your Message'></textarea>
        <button>Send Enquiry</button>
        </form>
     </div>
    </div>
  )
}

export default Card4