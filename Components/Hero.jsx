
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
export const Hero = () => {

 
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1000);
    
  }, []);

  return (
    <>
      <div className={` sm:h-screen container ${animate ? "animate-fly" : ""}`}>
        <div className=" flex gap-8 items-center flex-col justify-center sm:flex-row h-full">
          <div style={{ width: "30%" }} className="text-right md:text-left">
            <img
              src="/images/IMG-20241207-WA0014-modified.png"
              
              className="img-fluid mobile "
              alt="image not found"
            />
          </div>
         
          <article style={{ width: "30%" }} className="text-wrap flex flex-col items-center justify-center sm:items-stretch sm:justify-baseline  text-center sm:text-left ">
           
          <h3 className="text-[5rem] font-bold text-left  leading-none" style={{'margin-bottom':'3%'}}>Hello</h3>
          <div style={{'margin-left':'1%'}}>
           
            <p className="font-bold ">My Name is Kisan Dash</p>
           
            <p className="font-serif text-base/7 tracking-wide">
              I am a Frontend Developer. I'm expertise in
              React,JavaScript,Css3,Html5,Bootstrap and Tailwind Css.
            </p>
            </div>
            <div
              style={{ "margin-top": "1rem" }}
              className="flex gap-2 text-center  flex-col sm:flex-row"
            >
              <div className="w-30 h-30 rounded-full bg-amber-400 font-bold flex items-center justify-center hover:bg-white">
              <NavLink
                to="/Resume"
                className={({ isActive }) =>
                  isActive? 'text-red-700':''
                }
              >
              Resume
              </ NavLink >
              </div>
              <div className="w-30 h-30 rounded-full  bg-red-400 font-bold flex items-center justify-center  hover:bg-white">
              <NavLink to='/Projects' className={({isActive})=> isActive?'text-red-700':''}>
              Projects
              </NavLink>
              </div>
              <div className="w-30 h-30 rounded-full bg-blue-400 font-bold flex items-center justify-center  hover:bg-white">
              <NavLink to='/Contact' className={({isActive})=> isActive?'text-red-700':''}>
            Contact
              </NavLink>
              </div>
            </div>
          </ article>
          </div>
        </div>
      
    </>
  );
};
