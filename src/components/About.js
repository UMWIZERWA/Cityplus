import React,{Component} from 'react';
import '../css/tailwindcss.css';
import cityplus from  '../img/logo.png';
function About(){
    return(
        <div className="Items-center ">
             <h1>Welcome to About page</h1>
            <img src={cityplus} className="City-logo" alt="logo" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"/>
            
           
        </div>
    )
}

export default About;