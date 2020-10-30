import React,{Component,useState,useEffect} from 'react';
import '../css/tailwindcss.css';
import cityplus from  '../img/logo.png';
import Navbar from '../components/Navbar';
import axios from 'axios';
function Body(){
    const[ida,setIda]=useState(0);
    const[count,setCount]=useState(0);
    const[loading,setLoading]=useState(false);
    
    const clickHandle =()=>{
        setLoading(true);
        setCount(count+1);
        setIda(ida+2);
        setTimeout(function(){
            setLoading(false);

        },3000);
        // let fetch information

    
    }

    return(
        <>
            <Navbar/>
            <h1 className="text-green-600 text-4xl "></h1>
            <h2>State value: {count}</h2>
            <h2>State value: {ida}</h2>
            <button onClick={clickHandle}>
    {loading?<p>Loading...</p>:<p>Update me</p>}</button>

            {/* <button onClick={() => setCount(count + 1)}>
    {}Update me</button> */}
            <img src={cityplus} className="City-logo" alt="logo" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"/>
 
  
            </>

        
    )
}

export default Body;