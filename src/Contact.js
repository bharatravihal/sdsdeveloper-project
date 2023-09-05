import styled from "styled-components";

const Contact=()=>{

  return <><h1 className="contacts">Contacts</h1>
  
  <div className="formscontainer">
    <div className="contact-form">
      <form action="https://formspree.io/f/xzblgprk" method="POST" className="contact-inputs">
      <input type="text" placeholder="Username" name="username" autoComplete="off" required/>
      
      <input type="email" name="Email" placeholder="Email" autoComplete="off" required/>
      <textarea name="Enter your message" placeholder="Enter your mesage here" cols="30" rows="10" required></textarea>
      <input type="submit" value="SEND"/>
      </form>
    </div>
  </div>
  
  </>
};

export default Contact;
