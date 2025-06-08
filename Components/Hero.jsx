import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet } from "react-router";

export const Hero = () => {
  return (
    <>
     
      <div className=" h-screen container " >
        <div className=" flex gap-12 items-center flex-col justify-center sm:flex-row h-full animate-fly ">
          <div style={{ width: "30%" }} className="text-right md:text-left">
            <img
              src="/images/cropped_circle_image.png"
              className="img-fluid mobile"
              alt="image not found"
            />
          </div>

          <article
            style={{ width: "30%",marginTop:'2rem' }}
            className="text-wrap flex flex-col items-center justify-center sm:items-stretch sm:justify-baseline   text-center sm:text-left  "
            
          >
           
            
             <div className='shadow-lg' style={{padding:'10px'}}>
            {/* style={{ "margin-left": "1%" ,"marginTop":"20px"}} */}
            <h3
              className="text-[0.5rem] sm:text-[2rem] font-bold text-left  italic leading-none mobile-font "
              style={{ "margin-bottom": "3%" }}
            >
              Hello!
            </h3>
            <div className="text-center">
              <p className="font-bold  text-[2.5rem] poppins-extrabold tracking-wide kisan">I am Kisan Dash</p>

              <p className="font-mono text-[1.3rem] poppins-extrabold tracking-wide kisan">
                 FullStack Developer. 
              </p>
              <div style={{margin:'1.2rem'}} className="flex gap-2.5 justify-center hire">
              <a type='button' href='#contact' className="border-1 rounded-2xl bg-[#D0E3FF] text-indigo-300 hover:bg-yellow-50" style={{padding:'7px'}}>Hire me</a>
              <a type='button' href='https://drive.google.com/file/d/1i8JxD5xJvykLfnP8ux231bU3MNrJjbjt/view?usp=sharing' className="p-4 border-1 rounded-2xl hover:bg-yellow-50 " style={{padding:'7px'}}>Download the cv <FontAwesomeIcon icon={faArrowDown} /></a>
              </div>
              {/* style={{padding:'7px'}} */}
            </div>
            </div>
            {/* <div
              style={{ "margin-top": "1rem" }}
              className="flex gap-2 text-center  flex-col sm:flex-row"
            >
              <div className="w-30 h-30 rounded-full bg-amber-400 font-bold flex items-center justify-center hover:bg-yellow-50 shadow-2xl">
                <a
                  href="#skills "
                  className="tracking-wide"
                  
                >
                  Skills
                </a>
              </div>
              <div className="w-30 h-30 rounded-full  bg-red-400 font-bold flex items-center justify-center  hover:bg-yellow-50 shadow-2xl">
                <a
                  href="#projects "
                  className="tracking-wide"
                >
                  Projects
                </a>
              </div>
              <div className="w-30 h-30 rounded-full bg-blue-400 font-bold flex items-center justify-center  hover:bg-yellow-50 shadow-2xl">
                <a
                  href="#contact "
                  className="tracking-wide"
                  
                >
                  Contact
                </a>
              </div>
            </div> */}
          </article>
        </div>
      </div>
      
    </>
  );
};
