import React from "react";
import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import Home from "./Home";
import Abouts from "./About";
import Products from "./cartandshop/Products";
import Contacts from "./Contact";
import Carts from "./cartandshop/Cart";
import SingleProduct from "./SingleProduct";
import Login from "./login"
import Error from "./error";
import Signup from "./signup"

import Header from "./components/header";
import { Shopcontextprovider } from "./shop-context";
const App = () => {
 
  return (
  <div>
  <Shopcontextprovider>
  <Router>
  
  <Header/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/abouts" element={<Abouts/>}/>
  <Route path="/products" element={<Products/>}/>
  <Route path="/carts" element={<Carts/>} />
  <Route path="/contacts" element={<Contacts/>}/> 
  <Route path="/login" element={<Login/>}/> 
  <Route path="/signup" element={<Signup/>}/> 
  <Route path="/singleproduct/:id" element={<SingleProduct/>} />
  
  <Route path="*" element={<Error/>}/>
</Routes>

  </Router>
  </Shopcontextprovider>
  </div>
  ) ;
  
}

export default App;
