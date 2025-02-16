import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({data, showItems, setShowIndex}) => {


  const handleClick = () => {
    setShowIndex()
  }
    
  return (
    <div className='w-6/12 mx-auto my-4 bg-gary-50 shadow-lg p-4 '>
      {/* header */}
      <div className='flex justify-between' onClick={handleClick}>
      <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
    <span>⬇️</span>
    </div>
      {/* accordion body */}
      {showItems && <ItemList items={data.itemCards}/>}
    </div>
  )
}

export default RestaurantCategory
