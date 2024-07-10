import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Pages/Home';
import OurPrograms from './Pages/OurPrograms';
import AatadalliAdhyatma from './Pages/AatadalliAdhyatma';
import ThoughtsAtTeenage from './Pages/ThoughtsAtTeenage';
import BrahmaVidyaClasses from './Pages/BrahmaVidyaClasses';
import Games from './Pages/Games';
import Game from './Pages/Game';
import GameCategory from './Pages/GameCategory';
import AboutUs from './Pages/AboutUs';
import LoginSignup from './Pages/LoginSignup';
import ContactUs from './Components/ContactUs/ContactUs';
import Enquiry from './Pages/Enquiry';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/program' element={<OurPrograms />} />
          <Route path='/program/aatadalliAdhyatma' element={<AatadalliAdhyatma />} />
          <Route path='/program/thoughtsAtTeenage' element={<ThoughtsAtTeenage />} />
          <Route path='/program/brahmavidyaClasses' element={<BrahmaVidyaClasses />} />
          <Route path='/games' element={<Games />} />
          <Route path='/games/memory' element={<GameCategory category="memory" />} />
          <Route path='/games/puzzle' element={<GameCategory category="puzzle" />} />
          <Route path='/games/board' element={<GameCategory category="board" />} />
          <Route path='/games/card' element={<GameCategory category="card" />} />
          <Route path='/games/hks' element={<GameCategory category="hks" />} />
          <Route path='/games/bgt' element={<GameCategory category="bgt" />} />
          <Route path='/game/:gameId' element={<Game />} />
          <Route path='/about' element={<AboutUs />} /> 
          <Route path='/login' element={<LoginSignup />} /> 
          <Route path='/contactus' element={<ContactUs />} />    
          <Route path='/game/:gameId/enquiry' element={<Enquiry />} />    
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={3000} // Close after 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
