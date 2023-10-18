import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Home from "./HomePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Service from "./ServicePage/Service";
import GoldLoans from './GoldLoans/GoldLoans'
import PersonalLoans from "./PersonalLoans/PersonalLoans";
import About from "./Components/About";
import BusinessLoan from "./Components/BusinessLoan";
import HomeLoans from "./Components/HomeLoans";
import Spinner from "./Components/Spinner";
import {ContactUs} from './Components/ContactUs'

function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="App">
      {isLoading ?
          (<div className="loader">
           <Spinner/>
          </div>
        ) :
        (<Router>
     
        <NavBar />
       
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/service" element={<Service/>}/>
          <Route exact path="/contact" element={<ContactUs/>} />
          <Route exact path="/goldloan" element={<GoldLoans/>}/>
          <Route exact path="/personalLoan" element={<PersonalLoans/>}/>
          <Route exact path="/businessloan" element={<BusinessLoan/>}/>
          <Route exact path="/homeloan" element={<HomeLoans/>} />
        </Routes>
        <Footer />
      </Router>)}
    </div>
  );
}

export default App;
