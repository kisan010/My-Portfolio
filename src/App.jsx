import { Home } from "../Components/Home";
import { Projects } from "../Components/Projects";
import { Resume } from "../Components/Resume";
import { Contact } from "../Components/Contacts";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Navsection } from "../Components/Navsection";
import { Footer } from "../Components/Footer";
import { Error } from "../Components/Error";
  import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
 useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Animation occurs only once
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" /> 
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
