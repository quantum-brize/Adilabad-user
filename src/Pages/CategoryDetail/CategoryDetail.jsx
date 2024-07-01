import React from 'react'
import '../CategoryDetail/CategoryDetail.css'
import Header from '../../Components/Header/Header'
import banner_iamge from '../../Components/Assets/Images/banner1.png'
import Banner1 from '../../Components/Banner1/Banner1'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Card2 from '../../Components/Card2/Card2'
import image1 from '../../Components/Assets/Images/card1.png'
import image2 from '../../Components/Assets/Images/card2.png'

import { category_data } from '../../data'
import Card3 from '../../Components/Card3/Card3'
const CategoryDetail = () => {
  return (
    <div className='category-detail'>
        <Header title={"Category Detail"}/>
        <Banner1 image={banner_iamge}/>
        <SearchBar/>
        <div className="sub-category">
       { category_data.map((e,i)=>{
            return <Card2 image={i%3===0?image1:image2} name={e.name} amount={e.sub_category}/>
          })}
        </div>
    </div>
  )
}

export default CategoryDetail