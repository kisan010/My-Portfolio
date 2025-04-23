import { Footer } from "./Footer"
import { Navsection } from "./Navsection"




export  const Projects=()=>{



    return(
        <>
        <Navsection />
         <div style={{ margin: "5.5rem" }}>
        <h1 className="font-bold text-4xl">Projects</h1>
      </div>

      <div className="projects" style={{ 'margin-left': "5rem" }}>
        <section className="container flex flex-col-reverse sm:flex-row" >
          <div className="w-1/2">
            <div className="text-wrap">
              <h1 className="font-semibold text-2xl"> E-commerce Website</h1>
              <div className="text-wrap font-sans">
              <p style={{'margin-top':'5px'}}>Skills used:-Html,CSS,JavaScript</p>
              <p>Tool:-Vite</p>
              <p>Fully Responsive Dynamic Website.Functionalities are adding Items into Carts,can be Removed.
                Can be Increment and Decrement units Per item.Realtime Price Changes by adding into Cart etc..

              </p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div>
             
            </div>
            <div className="w-lg h-lg mls">
             <img src="/images/Screenshot 2025-02-01 123319.png " className="imgP" alt="error in image loading" />
            </div>
          </div>
          
        </section>

        <br/><br/>
        <hr />
        <br/><br/>
        <section className="container flex flex-col-reverse sm:flex-row" >
          <div className="w-1/2">
            <div>
              <h1 className="font-semibold text-2xl"> Food Delivery Website</h1>
              <div className="text-wrap font-sans">
              <p>Skills used:-React With Bootstrap</p>
              <p>Tool:-Vite</p>
              <p>Responsive Design Dynamic Single Page Application.</p>
              <p className="text-wrap">Functionalities Are Search Dish,Select Dish As Per DishType,Dish can be added,removed into Cart
                Dish Per item can be Increased and Decreased  according to Requirement,
                Total Bill Also changes in Real time Environment
                Theme Can be Changed into White to Dark and vice versa,
                And Also a Login functionality
              </p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div>
            
            </div>
            <div className=" w-lg h-lg mls"  >
             <img src="/images/Screenshot 2025-02-01 123225.png" className="imgP" alt="error in image loading" />
            </div>
          </div>
          
        </section>

        <br/><br/>
        <hr />
        <br/><br/>
        <section className="container flex flex-col-reverse sm:flex-row justify-center" >
          <div className="w-1/2">
            <div>
              <h1 className="font-semibold text-2xl"> TIC_TAC_TOE</h1>
              <div className="text-wrap font-sans">
              <p>Skills used:-React With Bootstrap</p>
              <p>Tool:-Vite</p>
              <p>Responsive Design Dynamic Single Page Application.</p>
              <p>Functionalities are User Name Swap Between X and O and Display whose Turn Currently.</p>
              <p>If an user wins then it shows who wins the Game Between 'O' User or 'X' User</p>
              <p>There is also Play Again button to Restart the Game.</p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div>
             
            </div>
            <div className=" w-lg h-lg mls">
             <img src="/images/Screenshot 2025-02-01 123407.png" className="imgP  " alt="error in image loading" />
            </div>
          </div>
          
        </section>

        <br/><br/>
      
        <br/><br/>
        </div>
        <Footer />
        </>
    )
}