import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Index';
import Experience from './Pages/Experience/Index';
import Hobbies from './Pages/Hobbies/Index';
import Qualifications from './Pages/Qualifications/Index';
import Skills from './Pages/Skills/Index';
import Aboutme from './Pages/Aboutme/Index';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='Aboutme' element={<Aboutme/>}/>
        <Route path='Experience' element={<Experience/>}/>
        <Route path='Hobbies' element={<Hobbies/>}/>
        <Route path='Qualifications' element={<Qualifications/>}/>
        <Route path='Skills' element={<Skills/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
