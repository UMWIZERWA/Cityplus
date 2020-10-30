import React from 'react';
import logo from './logo.png';
import './App.css';
import Navbar from './components/Navbar.js';
import Body from './components/Body.js';
import About from './components/About';
import Footer from './components/Footer.js';
import Signin from './components/Signin.js';
import Welcome from './components/users/Welcome';

import './css/tailwindcss.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from './components/Registration.js';
import Datatable from './components/Datatable';
// import signin from './components/signin';

function App() {
  return (
  <Router>
    <Switch>
          <Route exact path="/">

            <Body/>

         
          </Route>
          <Route path="/About-us">
          <About/>
          </Route>

        
            <Route path="/user-signup">
              <Signup/>
          </Route>
       
          <Route path="/data-table">
              <Datatable/>
          </Route>

          <Route path="/signin">
          <Signin  />

        </Route>
        <Route path="/user-welcome">
          <Welcome/>
        </Route>

          
          </Switch>
          </Router>
    );
    
    {/* // <div className="App">
    //   <Navbar/>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />

    //     <p>
    //       Hello <code>World</code> and Agathe UMWIZERWA Web Master.
    //     </p>
    //     <a */}
    {/* //       className="My-color"
    //       href="#"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Welcome to City plus App
    //     </a>
    //   </header> */}

      
    {/* //   <Body/>
    //   <Footer/>
    // </div> */}

}

export default App;