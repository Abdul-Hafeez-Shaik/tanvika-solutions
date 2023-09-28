import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import ContactUs from './Components/ContactUs';
import Services from './Components/Services';
import Careers from './Components/Careers';
import AboutUs from './Components/AboutUs';

function App() {
  return (
   <Routes>
    <Route exact path="/" element={<HomePage/>} />
    <Route exact path="/contactUs" element={<ContactUs/>} />
    <Route exact path="/services" element={<Services/>} />
    <Route exact path="/careers" element={<Careers/>} />
    <Route exact path="/aboutUs" element={<AboutUs/>} />
    
   </Routes>
  );
}

export default App;
