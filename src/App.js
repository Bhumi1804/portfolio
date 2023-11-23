import "./App.js";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About_me from "./components/About_me";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/About_me' element={<About_me />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Skills' element={<Skills />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;
