import { useState } from "react";
import { Footer } from "./Footer";
import { Navsection } from "./Navsection";
import db from "../firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = () => {
  let [user,setuser]=useState({
       firstname:'',
       lastname:'',
       email:'',
       subject:'',
       message:''
  })
   function handleChange(e)
  {
    let {name,value}=e.target;
     setuser(function(prev){
      console.log(prev);
             return{
              ...prev,[name]:value
             }
           
             
     })
  }

  async function handleSubmit(e)
  {
    e.preventDefault();
    if(user)
      {
          
          try{
                 await addDoc(collection(db,"Clients"),{
                    user
                 })
                 
                setuser({
                  firstname: "",
                  lastname: "",
                  email:'',
                  subject: "",
                  message: ""
                })
          }
          catch(err)
          {
              console.log(err);
          }
      }
  }
  return (
    <>
  
      <section style={{ margin:'9.5rem'}} className="contactus flex align-middle justify-center flex-col" id="contact" data-aos="fade-up">
       <div className="title">
         <h1
            className="font-bold text-7xl text-center "
            style={{ marginBottom: "0.9rem" }}
          >
            Contact ME
          </h1>
          <p className="text-center">
            Looking forward to Hearing from you
            <a className=" shadow cursor-pointer" href='tel:+917008068123' style={{marginLeft:'5px'}}><FontAwesomeIcon icon={faPhone} /></a> 
          </p>
       </div>

          <div  className="w-full flex align-middle justify-center" style={{marginTop:'3rem'}}>
          <form className=" max-w-lg shadow-lg" style={{padding:'2rem'}}>
  <div className="flex flex-wrap -mx-3 mb-6 flex-col sm:flex-row">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-left" htmlFor="firstname">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200  border border-gray-200  rounded p-3  mb-3 leading-tight focus:outline-none focus:bg-white" id="firstname" name='firstname'type="text" onChange={(e)=>handleChange(e)} value={user.firstname} placeholder="Enter First Name" />
     
    </div>
    <div className=" w-full md:w-1/2 px-3" >
      <label style={{'margin-left':'1rem'}}className="block uppercase tracking-wide text-xs font-bold mb-2 text-left" htmlFor="lastname">
        Last Name
      </label>
      <input style={{'margin-left':'1rem'}} name='lastname' className="appearance-none block w-full bg-gray-200  border border-gray-200  rounded p-3  mb-3 leading-tight focus:outline-none focus:bg-white" id="lastname" type="text" onChange={(e)=>handleChange(e)} value={user.lastname} placeholder="Enter last Name"/>
    </div>
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt ">
      <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="Email">
        Email
      </label>
      <input className="appearance-none block w-full bg-gray-200  border border-gray-200  rounded p-3 leading-tight focus:outline-none focus:bg-white" name='email' id="Email" type="text" onChange={(e)=>handleChange(e)} placeholder="Enter Email" value={user.email} />
     
    </div>
    <div className="w-full md:w-1/2 px-3 mt">
      <label style={{'margin-left':'1rem'}} className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="Subject">
       subject
      </label>
      <input style={{'margin-left':'1rem'}} className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded p-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Subject" name="subject" type="text" value={user.subject} onChange={(e)=>handleChange(e)} placeholder="Enter Subject"/>
    </div> </div>
    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3 " style={{'margin-top':'1rem'}}>
      <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="password">
        Message
      </label>
      <textarea className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded row-5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="4" cols="50" id="password"  name="message"type="text" value={user.message}onChange={(e)=>handleChange(e)} placeholder="Enter your message"/>
      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div className="text-center "style={{'margin-top':'2.1rem'}}>
  <button className="p-3  rounded-xl w-full shadow-lg border border-y-teal-500 hover:scale-110" onClick={handleSubmit}>Submit</button>
  </div>
  
    </form>
          </div>
        </section>
      
     
    </>
  );
};
