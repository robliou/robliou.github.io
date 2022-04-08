import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Home from "./components/Home";
 import Professional from "./components/Professional";
 import Personal from "./components/Personal";
 import Resume from "./components/Resume";
 import Contact from "./components/Contact";
 import Navigation from "./components/Navigation";




const App = () => {
  return (
    <Router>
        
        <Navigation />  
                 
                  <Routes>

                    <Route path="/" element ={<Home />} />
                    <Route path="/home" element ={<Home />} />
                    <Route path="/professional" element ={<Professional />} />
                    <Route path="/personal" element ={<Personal />} />
                    <Route path="/resume" element ={<Resume />} />
                    <Route path="/contact" element ={<Contact />} />

                    </Routes>
    </Router>

   
  );
}

export default App;
