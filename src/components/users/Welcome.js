import React, {useState} from 'react';
import '../../css/tailwindcss.css';
import {useHistory} from 'react-router-dom';

function Welcome(){
    const [localuser,setLocaluser]=useState("");
    let history=useHistory();
    const user=localStorage.getItem("username");

    const logout=()=>{
        localStorage.removeItem("username");
        history.push("/signin")
    }
    if(!user){
        history.push("/signin")
    }
    return(
        <>
        <div>
    <p>Welcome to admin page<span className="bg-green-500 text-white ml-10">{user}</span></p>
    </div>

    <button onClick={logout}>Logout</button>
    </>
    )
}
export default Welcome;