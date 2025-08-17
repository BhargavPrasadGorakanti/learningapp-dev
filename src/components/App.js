import './App.css';
import Navigation from './Navigation';
import LandingPageCarousel from './LandingPageCarousel';
import Courses from './Courses';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {useState, useEffect} from 'react';

function App() {

  const APIURL = "https://fa-learningapp-hjf5fac7gvaaakce.canadacentral-01.azurewebsites.net/api/HttpTrigger1?"
  const [response, setResponse] = useState('');

  const getResponse = async () => {
    try {
      const res = await fetch(APIURL);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.text();
      setResponse(data);
      //console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponse('Error fetching data');
    }
  };

  useEffect(() => {
    getResponse();
  }, []);

  return (
    
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" exact Component={LandingPageCarousel} />
          <Route path="/courses" exact Component={Courses} />
        </Routes>
      </Router>
      <div>
        <b>Response from Azure Function:</b>
        <br></br>
        <span id="response"> {response} </span>
      </div>
    </div>
  );
}

export default App;
