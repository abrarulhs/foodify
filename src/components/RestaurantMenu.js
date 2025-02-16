import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { MENU_API } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {

  const {resId} = useParams();


  const resInfo = useRestaurantMenu(resId)

  if(resInfo === null) return <Shimmer/>
  const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

  const {itemCards} = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


  return (
    <div className="text-center">
    <h1 className="font-bold my-6 text-2xl">{name}</h1>
   <p className="font-bold text-lg">
     {cuisines.join(", ")} - {costForTwoMessage}
   </p>
 
   <h2>Menu</h2>
   <ul>
     {itemCards?.map((item) => (
       <li key={item.card.info.id}>
         {item.card.info.name} -{" Rs."}
         {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
       </li>
     ))}
   </ul>
 </div>
  )
}

export default RestaurantMenu
