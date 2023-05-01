import { Center, Stack } from '@chakra-ui/react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import About from './components/About/About';
import { useEffect, useState } from 'react';
import LanguageContext from './LanguageContext';
import Dashboard from './components/Dashboard/Dashboard';
import Mint from './components/Mint/Mint';

function App() {

  const [language, setLanguage] = useState('en');
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="App">

        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/mint" element={<Mint />} />

        </Routes>
        {/* <Bottombar /> */}


      </div>
    </LanguageContext.Provider>
  );
}

export default App;
