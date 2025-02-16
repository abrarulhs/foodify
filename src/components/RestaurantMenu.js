import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { MENU_API } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './Shimmer';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {

  const {resId} = useParams();


  const resInfo = useRestaurantMenu(resId)

  const [showIndex,setShowIndex] = useState(0);

  if(resInfo === null) return <Shimmer/>
  const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

  // const {itemCards} = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;



const categories = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card.card?.["@type"]  === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")



  return (
    <div className="text-center">
    <h1 className="font-bold my-10 text-2xl bold">{name}</h1>
   <p className="font-bold text-lg">
     {cuisines.join(", ")} - {costForTwoMessage}
   </p>
 
    {/* categories accordion */}
    {categories.map((category,index) => <RestaurantCategory 
    key={category?.card?.card.title}
    showItems={index === showIndex }
    setShowIndex={() => index === showIndex ? setShowIndex(0) : setShowIndex(index)}
    data={category?.card?.card}/>)}
 </div>
  )
}

export default RestaurantMenu
