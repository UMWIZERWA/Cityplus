import React from 'react';
import logo from './logo.png';
import './App.css';
import Navbar from './components/Navbar.js';
import Body from './components/Body.js';
import About from './components/About';
import Footer from './components/Footer.js';
import Signin from './components/Signin.js';
import Welcome from './components/users/Welcome';
// import Signup from './components/Registration.js';
import Datatable from './components/Datatable';
import Account from './components/users/Account';


import './css/tailwindcss.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (

    <div className="">


  <Router>
    <Switch>
          {/* <Route exact path="/">

            <Body/>

         
          </Route> */}
          <Route path="/About-us">
          <About/>
          </Route>

        
            {/* <Route exact path="/user-signup">
              <Signup/>
          </Route> */}

          <Route exact path="/user-signup">
              <Account/>
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
          </div>
          
    );
}
export default App;
        
