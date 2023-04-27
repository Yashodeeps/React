import { useState } from "react";

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
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
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