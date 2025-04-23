import { useState } from "react";
import { Footer } from "./Footer";
import { Navsection } from "./Navsection";
import db from "../firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

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
    <Navsection />
      <div style={{ 'margin-top': "4.5rem",'margin-left': "5.2rem" ,'margin-bottom':'4.5rem'}} className="contactus">
        <section className="container flex flex-col sm:flex-row text-center sm:text-left">
          <div className="w-1/2 mb-10">
            <h1 className="font-bold text-4xl">Contact</h1>
            <p>Looking forward to Hearing from you</p>
            <br />
            <h1 className="font-semibold text-xl">Phone</h1>
            <p>+91 7008068123</p>
            <br />
            <h1 className="font-semibold text-xl">Email</h1>
            <p>kisandash199@gmail.com</p>
            <br />
          </div>

          <div  className="w-1/2">
          <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6 flex-col sm:flex-row">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstname">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded p-3  mb-3 leading-tight focus:outline-none focus:bg-white" id="firstname" name='firstname'type="text" onChange={(e)=>handleChange(e)} value={user.firstname} placeholder="Enter First Name" />
     
    </div>
    <div className=" w-full md:w-1/2 px-3" >
      <label style={{'margin-left':'1rem'}}className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastname">
        Last Name
      </label>
      <input style={{'margin-left':'1rem'}} name='lastname' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded p-3  mb-3 leading-tight focus:outline-none focus:bg-white" id="lastname" type="text" onChange={(e)=>handleChange(e)} value={user.lastname} placeholder="Enter last Name"/>
    </div>
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt ">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Email">
        Email
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded p-3 leading-tight focus:outline-none focus:bg-white" name='email' id="Email" type="text" onChange={(e)=>handleChange(e)} placeholder="Enter Email" value={user.email} />
     
    </div>
    <div className="w-full md:w-1/2 px-3 mt">
      <label style={{'margin-left':'1rem'}} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Subject">
       subject
      </label>
      <input style={{'margin-left':'1rem'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded p-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Subject" name="subject" type="text" value={user.subject} onChange={(e)=>handleChange(e)} placeholder="Enter Subject"/>
    </div> </div>
    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3 " style={{'margin-top':'1rem'}}>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
        Message
      </label>
      <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded row-5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="4" cols="50" id="password"  name="message"type="text" value={user.message}onChange={(e)=>handleChange(e)} placeholder="Enter your message"/>
      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div className="text-center "style={{'margin-top':'2.1rem'}}>
  <button className="p-3 bg-yellow-500 border-2 rounded-xl w-full" onClick={handleSubmit}>Submit</button>
  </div>
  
    </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
