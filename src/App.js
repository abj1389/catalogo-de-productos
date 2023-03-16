import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Faqs from "./components/Faqs.js";

function App() {
  return (
    <div className="app">
      <BrowserRouter>

        <div className='links'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/faqs">FAQs</Link>
        </div>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/faqs' element={<Faqs></Faqs>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;