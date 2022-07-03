// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Addskills from './pages/Addskills';
import Personal from './pages/Personal';
// import Profile from './pages/Profile';
import Landingpage from './pages/Landingpage';
import Login from './pages/Login';
import Externalsignup from './pages/Externalsignup';
import ExternalLogin from './pages/ExternalLogin';

import Buildprofile from './pages/Buildprofile';


import {LoginContext} from './Context/LoginContext';
import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Profiles from './pages/Profiles';




function App() {

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");
  const [skillInfo, setSkillInfo] = useState([])
  const [totalexp, setTotalexp] = useState("")
  const [candidates, setCandidates] = useState([])
  const [auth, setAuth] = useState(false)
  
  const [logs, setLogs] = useState("");
  const [defaultDate, setDefaultDate] = useState("");
  const [defaultTime, setDefaultTime] = useState("");
  const [selectRadar, setSelectRadar] = useState("");
  const [location, setLocation] = useState("")


  return (
    <div >
      <LoginContext.Provider value = {{ username, setUsername, firstname, setFirstname, lastname, setLastname, city, setCity, candidates, setCandidates, skillInfo, setSkillInfo, location, setLocation,totalexp, setTotalexp, auth, setAuth }}>

        <Router>
          <Routes>
            {auth && <Route exact path="/profiles" element={<Profiles/>} />}
            {auth && <Route exact path="/home" element={<Home/>} />}
            {auth && <Route exact path="/dashboard" element={<Dashboard/>} />}
            {auth && <Route exact path="/addskill" element={<Addskills/>} />}
            {auth && <Route exact path="/buildprofile" element={<Buildprofile/>} />}

            <Route exact path="/" element={<Landingpage/>} />
            <Route exact path="/Landingpage" element={<Landingpage/>} />
            <Route exact path="/login" element={<Login/>} />            
            <Route exact path="/externalsignup" element={<Externalsignup/>} />
            <Route exact path="/externallogin" element={<ExternalLogin/>} />
            
            <Route exact path="*" element={<Landingpage/>} />
            
          </Routes>
        </Router>


        
        </LoginContext.Provider>
    </div>
  );
}

export default App;
