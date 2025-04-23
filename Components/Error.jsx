import { NavLink } from "react-router"


export const Error=()=>{


    return(
        <div className="flex items-center justify-center flex-col ">
            <h1 className="font-extrabold">404 Error Page Not Found!!!</h1>
          
            <p><NavLink to="/" >Go Back to Home</NavLink></p>
       </div>
    )
}