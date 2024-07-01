import React from 'react'
import search_icon from '../Assets/Images/red_search.png'
import '../SearchBar/SearchBar.css'
const SearchBar = () => {
  return (
    <div className='search-bar'>
        <img src={search_icon} alt="" />
        <input type="text"  placeholder='Search Category'/>
    </div>
  )
}

export default SearchBar