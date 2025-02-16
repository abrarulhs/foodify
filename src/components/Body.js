import React, { useEffect, useState } from 'react'
import { Restaurant_Menu_API } from '../utils/constants';
import RestaurantCard from './RestaurantCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const Body = () => {
const [listOfRestaurants,setListOfRestaurants] = useState([]);

  const fetchData = async () => {
      const data = await fetch(Restaurant_Menu_API);
      const json = await data.json();
      setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }

  useEffect(() => {
    fetchData()
  },[])


  console.log(listOfRestaurants);
  
  if(listOfRestaurants.length === 0) return <Shimmer/>

  return (
    <div className="flex flex-wrap">
          {listOfRestaurants.map((restaurant) => (
            <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
            <RestaurantCard resData = {restaurant}/>
            </Link>
          ))}
    </div>
  )
}

export default Body
