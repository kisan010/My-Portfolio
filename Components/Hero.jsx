import { NavLink } from "react-router";
import { Navsection } from "./Navsection";
import { Footer } from "./Footer";
export const Hero = () => {
  return (
    <>
      <Navsection />
      <div className=" sm:h-screen container animate-fly">
        <div className=" flex gap-12 items-center flex-col justify-center sm:flex-row h-full">
          <div style={{ width: "30%" }} className="text-right md:text-left">
            <img
              src="/images/IMG-20241207-WA0014-modified.png"
              className="img-fluid mobile "
              alt="image not found"
            />
          </div>

          <article
            style={{ width: "30%" }}
            className="text-wrap flex flex-col items-center justify-center sm:items-stretch sm:justify-baseline  text-center sm:text-left "
          >
            <h3
              className="text-[6rem] font-bold text-left  italic leading-none mobile-font"
              style={{ "margin-bottom": "3%" }}
            >
              Hello
            </h3>
            <div style={{ "margin-left": "1%" ,"marginTop":"20px"}}>
              <p className="font-bold  text-lg ">My Name is Kisan Dash</p>

              <p className="font-mono text-base/7 ">
                I am a Frontend Developer. Expertise in
                React,JavaScript,CSS3,HTML5,Bootstrap and Tailwind CSS.
              </p>
            </div>
            <div
              style={{ "margin-top": "1rem" }}
              className="flex gap-2 text-center  flex-col sm:flex-row"
            >
              <div className="w-30 h-30 rounded-full bg-amber-400 font-bold flex items-center justify-center hover:bg-white">
                <NavLink
                  to="/Resume"
                  className={({ isActive }) => (isActive ? "text-red-700" : "")}
                >
                  Resume
                </NavLink>
              </div>
              <div className="w-30 h-30 rounded-full  bg-red-400 font-bold flex items-center justify-center  hover:bg-white">
                <NavLink
                  to="/Projects"
                  className={({ isActive }) => (isActive ? "text-red-700" : "")}
                >
                  Projects
                </NavLink>
              </div>
              <div className="w-30 h-30 rounded-full bg-blue-400 font-bold flex items-center justify-center  hover:bg-white">
                <NavLink
                  to="/Contact"
                  className={({ isActive }) => (isActive ? "text-red-700" : "")}
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
};
