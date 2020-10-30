
import React,{Component,useState,useEffect} from 'react';
import '../css/tailwindcss.css';

import Navbar from '../components/Navbar';
import axios from 'axios';
function Datatable(){
    const[data,setData]=useState([]);


    useEffect(async ()=>{
        const response =axios.get('http://127.0.0.1:8000/reg/endpoint/')
        
          .then((res)=>{
              setData(res.data);
              console.log(res.data)
          })
          .catch((err)=>{
           console.log(err)
          })   
          },[]

    
    );
    return(
      <>
       <Navbar/>

       <table class="table-auto">
  <thead>
    <tr>
      <th class="px-4 py-2">First Name </th>
      <th class="px-4 py-2">Last Name</th>
      <th class="px-4 py-2">Email</th>
      <th class="px-4 py-2">Username</th>
      <th class="px-4 py-2">Password</th>
    </tr>
  </thead>

  {data.map( (item,key)=>{
                return(
  <tbody>
    <tr key={key}>
      <td class="border px-4 py-2">{item.first_name}</td>
      <td class="border px-4 py-2">{item.last_name}</td>
      <td class="border px-4 py-2">{item.email}</td>
      <td class="border px-4 py-2">{item.username}</td>
      <td class="border px-4 py-2">{item.password}</td>
    </tr>
 
  </tbody>
        )
      }
      )}
</table>

{/* <table className="table">
                <tr>
                    <th>Id</th>
      
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
            {data.map( (item,key)=>{
                return(
                    <tr key={key}>
                    <td>{item.id}</td>
                    
                <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>{item.password}</td>
                </tr>
                )
            }
            )}
            </table>  */}

</>

        
)
}

export default Datatable;