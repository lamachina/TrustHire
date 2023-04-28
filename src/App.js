import { Stack } from '@chakra-ui/react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import About from './components/About/About';
import { useState } from 'react';
import LanguageContext from './LanguageContext';

function App() {

  const [language, setLanguage] = useState('en');
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />

        </Routes>
        {/* <Bottombar /> */}

      </div>
    </LanguageContext.Provider>
  );
}

export default App;
