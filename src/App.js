import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Firstpage from './Components/First page/App';
import Secondpage from './Components/Second Page/App';

const App = () => {
  return  (
        <div>
            <Router>
              <Routes>
                <Route path="/" element={<Firstpage/>} />
                <Route path="/page2" element={<Secondpage/>} />
              </Routes>
            </Router>
          </div>

    )
  }
  

export default App;
