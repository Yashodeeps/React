import RestaurantCard from "./RestaurantCard";
import RestaurantList from "../constants";

  

  
const Body = () =>{
     return(
      <div className="restaurant-list">
        {RestaurantList.map((restaurant)=>{
          return(
            <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
          );
        }) }
        </div>
     );
  };

export default Body;

