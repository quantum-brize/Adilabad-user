import React from 'react'
import '../Header/Header.css'
import arrow_back from '../Assets/Images/arrow_back.png';
import share from '../Assets/Images/share.png'
import { useNavigate } from 'react-router-dom';
const Header = ({title}) => {
  const navigate = useNavigate();
  const goBack = ()=>{
    navigate(-1);
  }
  return (
    <div className='header'>
        <div className="header-left">
            <img onClick={()=>goBack()} src={arrow_back} alt="" />
        <h3>{title?title:"Category"}</h3>
        </div>
        <div className="header-right">
        <img src={share} alt="" />
        </div>
    </div>
  )
}

export default Header