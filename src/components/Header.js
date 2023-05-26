import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
    return(
       <a href="/">
       <img className = "logo" src="https://cdn.dribbble.com/users/7358993/screenshots/15348481/food_court_byswhk.png" alt="logo" />
       </a>
    );
  };

  const Header = ()=> {

   [isLoggedIn, setISLoggedIn]=useState(false);

    return(
       <div className= "header">
       <Title />
          <div className= "nav-items">
             <ul>
                <li>
                  <Link to= "/">Home</Link>
                </li>

                <Link to="/about">
                  <li>About</li>
                </Link>

                <Link to="/contact">
                  <li>Contact</li>
                </Link>

               <li>Cart</li>
             </ul>
          
          </div>

          <div className="auth">
            {

                  (!isLoggedIn)? (
                   <button onClick={()=> setISLoggedIn(true)}>Login</button>
                   ): 
                  <button onClick={()=> setISLoggedIn(false)}>Logout</button>
                   

            }

          </div>
       </div>
       
 
    );
 };

  export default Header;