import React,{Component,useState} from 'react';
import logo from '../img/logo.png';


function Navbar(){

  const [toggle,setToggle] = useState(false);
  const [drop,setDrop] = useState(false);
  const [clicks,setClicks] = useState(0)
  const [small,setSmall] = useState(false);

  const handleToggle = ()=>{
    if(clicks===0){
      setDrop(false);
      setToggle(true);
      setClicks(1);
    }else{
      setToggle(false);
      // setDrop(true);
      setClicks(0);
    }
   
  }

  const handleSolution = ()=>{
    // setDrop(true);
    // setToggle(false);
      if(clicks===0){
        setToggle(false);
        setDrop(true);
        setClicks(1);
    }else{
      // setToggle(true);
      setDrop(false);
      setClicks(0);
    }

  }


  const handleClick = ()=>{
    setSmall(true);
//     if(clicks===0){
//  setSmall(true);
//  setToggle(false);
//     setDrop(false);
//     setClicks(1);
//     }else{
// setSmall(false);
// setToggle(true);
//     setDrop(true);
//     setClicks(0);
//     }
   
  }

  const handleSmall = ()=>{
    setSmall(false);
  }

 
  

    return(
      <>

{/* 
<!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
<!-- This example requires Tailwind CSS v1.4.0+ --> */}
<div class="relative bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div class="lg:w-0 lg:flex-1">
        <a href="/" class="flex">
          <img class="h-8 w-auto sm:h-10" src={logo} alt="logo" />
        </a>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button type="button" onClick={handleClick} class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
          {/* <!-- Heroicon name: menu --> */}
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
      </div>

      <nav class="hidden md:flex space-x-10">
        <div class="relative">
          
{/* end of  drop */}

        </div>

        <a href="/" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
         Home
        </a>
        <a href="/data-table" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
      Data Table
        </a>
      

        <div class="relative">
         
{/* end  of    toggle (more) */}

        </div>
      </nav>
      <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
        <a href="/signin" class="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
          Sign in
        </a>
        <span class="inline-flex rounded-md shadow-sm">
          <a href="/user-signup" class="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
            Sign up
          </a>
        </span>
      </div>
    </div>
  </div>

{/* navbar of small devise */}

  {small?
  <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div class="rounded-lg shadow-lg">
      <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5 space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <img class="h-8 w-auto" src={logo} alt="logo" />
            </div>
            <div class="-mr-2">
              
              <button type="button" onClick={handleSmall} class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
              {/* <button type="button" onClick={()=>setSmall(false)} class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"> */}
                {/* <!-- Heroicon name: x --> */}
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <nav class="grid gap-y-8">
              
            <a href="/" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
         Home
        </a>
        <a href="/data-table" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
      Data Table
        </a>



            </nav>
          </div>
        </div>
        <div class="py-6 px-5 space-y-6">
         
          <div class="space-y-6">
            <span class="w-full flex rounded-md shadow-sm">
              <a href="/user-signup" class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                Sign up
              </a>
            </span>
            <p class="text-center text-base leading-6 font-medium text-gray-500">
              Existing customer?
              <a href="/signin" class="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  :<span></span>}
  {/* End of nvbar of small device */}

</div>





        
        </>
    )
}

export default Navbar;