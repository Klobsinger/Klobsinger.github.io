import './App.css';
import { Route, Routes } from "react-router-dom";
import { NavBar } from './Routes/NavBar/NavBar';
import { Landing } from './Routes/Landing/Landing'

function App() {
  return (
    <>
    <NavBar />
   <Routes>
   <Route path="/" element={<Landing />} />
   </Routes>
    </>
  );
}

export default App;
