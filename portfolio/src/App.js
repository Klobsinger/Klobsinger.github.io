import './App.css';
import { Route, Routes } from "react-router-dom";
import { NavBar } from './Routes/NavBar/NavBar';
import { Footer } from './Routes/Footer/Footer'
import { Landing } from './Routes/Landing/Landing'

function App() {
  return (
    <>
    <NavBar />
   <Routes>
   <Route path="/" element={<Landing />} />
   </Routes>
   <Footer />
    </>
  );
}

export default App;
