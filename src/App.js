import logo from './logo.svg';
import './App.css';

import React  from 'react';
import {BrowserRouter as Router,  Route} from 'react-router-dom';

import MainMenu from './Menuber/MainMenu';
import Home from './Menuber/Home';
import About from './Menuber/About';
import Service from './Menuber/Service';
import Contact from './Menuber/Contact';
import Slider from './components/Slider';
import QuizMain from './components/QuizFoler/QuizMain';
import Question from './components/QuizFoler/QuizData';
import Setting from './components/QuizFoler/Setting';
function App() {
  return (
   <QuizMain />
    /*
    <BrowserRouter>
      <nav>
    <MainMenu />
    <Slider />
    <QuizMain/>
    
      </nav>
     
      
    </BrowserRouter>
    */
   
    //<React.Fragment>
      //<Navbar />
    //</React.Fragment>
    
  );
}

export default App;
