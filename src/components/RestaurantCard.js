const RestaurantCard =({name,cuisines, cloudinaryImageId, deliveryTime}) =>{
    return(
       <div className="card">
          <img className="image" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ cloudinaryImageId}/>
          <h2>{name}</h2>
          <h3>{cuisines?.join(", ")}</h3>
          <h4>{deliveryTime} minutes</h4>
 
       </div>
    );
 };

 export default RestaurantCard;