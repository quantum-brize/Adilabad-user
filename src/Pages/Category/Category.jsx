import React from 'react'
import Header from '../../Components/Header/Header'
import { category_data } from '../../data'
import Card1 from '../../Components/Card1/Card1'
import SearchBar from '../../Components/SearchBar/SearchBar'
import '../Category/Category.css'
const Category = () => {
  return (
    <div className='category'>
        <Header/>
        <SearchBar/>
        {
            category_data.map((e)=>{
                return <Card1 image={e.image} name={e.name} sub_category={e.sub_category}/>
            })
        }
    </div>
  )
}

export default Category