import React, { useState,useContext,createContext} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Header from "./components/header"
export const UserContext = createContext();

const Login = () => {
    const[email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [user, setUser] = useState(null);

    const navigate = useNavigate();
 
   const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login', {
        email: email,
        password: password,
      })
      .then(res=>{
        console.log('Response from server:', res.data);
         if(res.data==="successful login"){
          alert("successful login");
          setUser(email);
          navigate("/products");
         }
         else if(res.data==="wrong password"){
          alert("entered password is wrong");
         }
         else if(res.data==="new email"){
          alert("mail not registered");
         }
      })

      // Handle the response from the server here
     
    } catch (error) {
      // Handle errors, show error messages, etc.
     // console.error('Error:', error);
    }
  };
    const handlesignuppage = () => {
        navigate('/signup'); // Navigate to the "/product" page
      };
      
    return (
      <>
    <div className="login-container">
    <h2 className="login-title">Login Page</h2>
      <form className="login-form" action="POST">
       <div>
        <input className='email' onChange={(e)=>{ setemail(e.target.value) }} type="email" name="email" placeholder='Email' required />
        </div>
        <div>
        <input className="password" onChange={(e)=>{ setpassword(e.target.value) }}  type="password" name="password" placeholder='Password'  required/>
        </div>
        <div className='loginbutton'>
        <button type='submit'  onClick={handleLogin}> LOGIN</button>
        </div>
        </form>
        <div class="bottom">
        <h5>Not a memeber yet?</h5>
       <button onClick={handlesignuppage} > Signup</button>
       </div>
       {/* <UserContext.Provider value={user}>{/* Provide user context */}
     {/*  </div> <Header />
      </UserContext.Provider> */}
    </div>
    </>
  )
}

export default Login;