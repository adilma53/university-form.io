import React from 'react';


function App()
{
    return (
        <nav class="bg-gray-300">

            {/* container */}
            <div class="flex  items-center justify-between mx-auto p-4">

                {/* logo */}
                <a href="#">
                    <ul class="flex items-center  space-x-1" >
                        <li>
                            <div class="mr-5px text-4xl font-bold ">LOGO</div>
                        </li>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Location_dot_black.svg/1024px-Location_dot_black.svg.png" class="h-8 mr-3" alt="Flowbite Logo" />
                        </li>
                    </ul>
                </a >

                {/* this part for responsive design hamburger button to work on it later */}
                {/* <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button> */}

                <div class="flex items-center mx-10 border-solid	" >
                    <ul class="flex items-center font-mono font-medium text-2xl space-x-5">
                        <li>
                            <a href="#" class="hover:text-gray-500">Home</a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-gray-500">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-gray-500">Contact</a>
                        </li>
                        <li>
                            {/* <div class="border-solid border-2 border-sky-500">Login</div> */}

                            <button class="bg-gray-950 text-white hover:bg-gray-600 rounded font-bold py-1.5 px-3 ml-10" >Login</button>
                        </li>
                        <li>
                            <button class="bg-gray-950 text-white hover:bg-gray-600 rounded font-bold py-1.5 px-3">Signup</button>
                        </li>
                    </ul>
                </div>

            </div >
        </nav >

    );
}




export default App;
