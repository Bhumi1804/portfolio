import "../css/Contact.css";
// import C from "../icons/C.svg";
// import Envelope from "../icons/Envelope.svg";
// import Link from "../icons/Link.svg";
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import Loader from "./Loader";
function Contact() {
  const [loading,setLoader]=useState(false);
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();
setLoader(true);
    emailjs.sendForm('service_9dy6aan', 'template_7daexjs', form.current, 'PF9bcqDzyVrxTMKXt')
      .then((result) => {
          console.log(result.text);
          alert("Form submitted");
          setLoader(false);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id="container1">
    <h2>Contact Information</h2>
      {/* <h2>Contact Information</h2>
      <div id="contact">
        <img src={C} alt="that" />
        Phone Number:9844794177
        <br />
        <img src={Envelope} alt="this"/>
        Email:bhoomikabhat604@gmail.com
        <br/>
        <img src={Link} alt="this is"/>
        Linkdin Id:
        <br />
      </div> */}
      <form ref={form} onSubmit={sendEmail}>
        <table>
          <tr>
            <label>Name:</label>
            <input type="text" name="name" placeholder="Enter your name" />
          </tr>
          <tr>
            <label>Email:</label>
            <input type="email" name=" email"/>
          </tr>
         
            <tr>
              <label>Phone: </label>
              <input type="text" value="+91" size="3" />
                <input type="text" name=" mobile" size="20" />
            </tr>
         <tr>
          <label>Address:</label>
          <textarea name="address" ></textarea>
         </tr>
         <tr>
          <td>
            {
              loading ?"":
              <input type="submit" value="send" name="submit" />
            }
            {/* <input type="submit" value="send" name="submit" /> */}
            <input type="reset" value="reset" name="reset" />
            </td>
         </tr>
         {/* {
          loading? <Loader/>:null
         } */}
        </table>
      </form>
      {
          loading? <Loader/>:null
         }
    </div>
    
  );
}
export default Contact;
