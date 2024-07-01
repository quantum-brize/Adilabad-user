import React from 'react'
import '../SubCategory/SubCategory.css'
import Header from '../../Components/Header/Header'
import SearchBar from '../../Components/SearchBar/SearchBar'
import image1 from '../../Components/Assets/Images/card1.png'
import { category_data } from '../../data'
import Card3 from '../../Components/Card3/Card3'
import Card4 from '../../Components/Card4/Card4'

const SubCategory = () => {
  return (
    <div className='sub-category'>
        <Header title={"SubCategory"}/>
        <SearchBar/>
        {
            category_data.map((e,i)=>{
                
            return (i===4?<Card4/>:<Card3 image={image1} id={i}/>)
            })
        }
    </div>
  )
}

export default SubCategory