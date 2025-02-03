import { NavLink} from "react-router";


export const Navsection = () => {

  
  return (
    <>
      <div className="Nav flex flex-col md:flex-row justify-between w-full">
        <div className="PersonalInfo m-6   md:gap-3 flex flex-col  sm:flex-row items-center md:justify-center  space-x-3"> <NavLink to='/' >
          <img src="/images/IMG-20241207-WA0014-modified.png"  className="img-fluid desktop "alt="image not found"           />
          <div className="w-5 h-5 bg-yellow-500 rounded-full"></div></NavLink>
          <div className="flex flex-col">
          <h1 className="text-2xl font-semibold leading-tight mb-1">
            <NavLink to='/' > Kisan Dash</NavLink>
           
          </h1>
          <small className="text-sm block text-gray-600">Web Developer</small></div>
        </div>

  <>
        <div className="Navbar m-6 text-center">
          <ul className="flex gap-3 items-center">
            <li className="p-3 border-x border-b-gray-400  hover:text-amber-200 ">
              <NavLink
                to="/Resume"
                className={({ isActive, isPending }) =>
                  isActive? 'text-red-700':''
                }
              >
              Resume
              </ NavLink >
            </li>

            <li className="p-3 border-x border-b-gray-400 hover:text-amber-200">
              <NavLink to='/Projects' className={({isActive})=> isActive?'text-red-700':''}>
              Projects
              </NavLink>
            </li>
            <li className="p-3 border-x border-b-gray-400 hover:text-amber-200">
            <NavLink to='/Contact' className={({isActive})=> isActive?'text-red-700':''}>
            Contact
              </NavLink>
             
            </li>
          </ul>
        </div>
        </>

      </div>
    </>
  );
};
