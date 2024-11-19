import React from 'react'
import { BrowserRouter ,Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componets/Home'
import Customers from './componets/Customers'
import Footer from './componets/Footer';
import Navigation from './componets/Navigation';
import WhoAreWe from './componets/WhoAreWe';
import Contact from './componets/Contact';
import WhoWeAre from './componets/WhoWeAre';
import News from './componets/News';
import "./assets/css/style.css"
 

function App() {

  return (
    <>
         <BrowserRouter>
        <Navigation/>
          <Routes>
            <Route path='/' element={<><Home/></>}/>
            <Route path='/customers' element={<><Customers/></>}/>
            <Route path='/WhoAreWe'  element={<><WhoAreWe/></>}/>
            <Route path='/contact'  element={<><Contact/></>}/>
            <Route path='/try yourself' element={<><WhoWeAre/></>}/>
            <Route path='/news' element={<><News/></>}/>
          </Routes>
          <Footer/>
         </BrowserRouter>
 
        
    </>
  )
}

export default App
