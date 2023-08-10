import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import FrontPage from './pages/FrontPage';
import AdminSignUp from './pages/AdminSignUp';
import AdminLogin from './pages/AdminLogin';
import BioDataForm from './pages/BioDataForm';
import './App.css'

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route  path="/" element={<FrontPage/>}/>
          <Route  path="/admin-signup" element={<AdminSignUp/>}/>
          <Route  path="/bio-form" element={<BioDataForm/>}/>
          <Route  path="/admin-login" element={<AdminLogin/>}/>
          
          
          
          
        </Routes>
      </Router>
    </div>
  );
}

export default App
