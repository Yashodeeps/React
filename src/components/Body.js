import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../constants";

import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";

function filterData(searchTxt, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant)=>
  restaurant.data.name.includes(searchTxt));
  return filterData;
}
 
  
const Body = () =>{
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(()=> { 
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5807719&lng=73.9787063&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

    if(!allRestaurants) return null;

    

     return (allRestaurants?.length === 0)? <Shimmer/> :(

    
      <>
      <div className="search-container">
        <input 
        type="text" 
        className="search-input" 
        placeholder="Search" 
        value={searchTxt} 
        onChange={(e)=> 
        {setSearchTxt(e.target.value);}}/>

        <button className="search-btn" onClick={()=>{
          const data = filterData(searchTxt, allRestaurants);
          setFilteredRestaurants(data);

        }}>search</button>
      </div> 

      
      <div className="restaurant-list">
        {

          (filteredRestaurants.length === 0)?
          <h1>No restaurants match your filter!!!</h1> :
        
        filteredRestaurants?.map((restaurant)=>{
          return(
            <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
          );
        }) 
        
        }
        </div>
        </>
     );
  };

export default Body;

