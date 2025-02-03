export const Contact = () => {
  return (
    <>
      <div style={{ 'margin-top': "4.5rem",'margin-left': "4.5rem" ,'margin-bottom':'4.5rem'}} className="contactus">
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
    <div className="w-50 md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded p-3  mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter First Name" />
     
    </div>
    <div className=" w-50 md:w-1/2 px-3" >
      <label style={{'margin-left':'1rem'}}className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <input style={{'margin-left':'1rem'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded p-3  mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" placeholder="Enter last Name"/>
    </div>
    <div className="w-50 md:w-1/2 px-3 mb-6 md:mb-0 mt ">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Email-name">
        Email
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded p-3 leading-tight focus:outline-none focus:bg-white" id="grid-Email-name" type="text" placeholder="Enter Email" />
     
    </div>
    <div className="w-50 md:w-1/2 px-3 mt">
      <label style={{'margin-left':'1rem'}} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Subject-name">
       subject
      </label>
      <input style={{'margin-left':'1rem'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded p-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-Subject-name" type="text" placeholder="Enter Subject"/>
    </div> </div>
    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3 " style={{'margin-top':'1rem'}}>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Message
      </label>
      <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded row-5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="4" cols="50" id="grid-password" type="text" placeholder="Enter your message"/>
      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div className="text-center "style={{'margin-top':'2.1rem'}}>
  <button className="p-3 bg-yellow-500 border-2 rounded-xl w-full">Submit</button>
  </div>
  
    </form>
          </div>
        </section>
      </div>
    </>
  );
};
