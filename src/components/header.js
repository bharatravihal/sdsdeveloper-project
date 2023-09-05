import React ,{useContext}from 'react'
import { UserContext } from '../login';

import { FaShoppingCart } from 'react-icons/fa';
const Header = () => {
   //const user = useContext(UserContext);
  return (
     <nav class="navhref">
         <a href="/" >Home</a>
        <a href="/abouts">About</a>
        <a href="/contacts">Contact</a>
        
        <a href="/Products">Shop</a>
       
        <a href="/login">Login</a>  
        <a href="/carts"><FaShoppingCart/></a>
      
        
     </nav>

  )
}


export default Header;