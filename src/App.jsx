
import { Home } from '../Components/Home'
import { Projects } from '../Components/Projects'
import { Resume } from '../Components/Resume'
import {Contact}  from '../Components/Contacts'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Navsection } from '../Components/Navsection'
import { Footer } from '../Components/Footer'
import { Error } from '../Components/Error'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navsection />
    <Routes>
   
        <Route element={ < Home />} path='/'/>
        <Route element={ < Resume />} path='/Resume'/>
        <Route element={ < Projects />} path='/Projects'/>
        <Route element={ < Contact />} path='/Contact'/>
        <Route path='*' element={<Error />}/>
        
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
