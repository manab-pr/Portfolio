import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/Navbar/header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Components/Pages/home';
import About from './Components/Pages/about';
import Blog from './Components/Pages/blog';
import Contact from './Components/Pages/contact';
import Portfolio from './Components/Pages/portfolio';
import ThemeContext from './Components/Theme/ThemeContext';
import Footer from './Components/Pages/footer';
import Email from './Components/Pages/email';




const App=()=> {
  const themeHook=useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/about' exact Component={About}/>
        <Route path='/blog' exact Component={Blog}/>
        <Route path='/portfolio' exact Component={Portfolio}/>
        <Route path='/contact' exact Component={Contact}/>
        <Route path='/email' exact Component={Email}/>

      </Routes>
    </Router>
   <Footer/>
    </ThemeContext.Provider>

  );
}

export default App;
