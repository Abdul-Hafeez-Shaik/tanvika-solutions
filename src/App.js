import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import ContactUs from './Components/ContactUs';

function App() {
  return (
   <Routes>
    <Route exact path="/" element={<HomePage/>} />
    <Route exact path="/contactus" element={<ContactUs/>} />
   </Routes>
  );
}

export default App;
