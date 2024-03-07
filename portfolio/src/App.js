import './App.css';
import { Routes, Route } from "react-router-dom";
import { NavBar } from './Routes/NavBar/NavBar';
import { Footer } from './Routes/Footer/Footer';
import { Landing } from './Routes/Landing/Landing';
import { About } from './Routes/About/About';
import { Contact } from './Routes/Contact/Contact';
import { Portfolio } from './Routes/Portfolio/Portfolio';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        
       
        
    
      </Routes>
      <Footer />
    </>
  );
}

export default App;