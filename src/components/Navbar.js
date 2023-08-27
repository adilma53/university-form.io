import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="bg-gray-300">
      {/* container */}
      <div class="flex  items-center justify-between mx-auto p-4">
        {/* logo */}
        <a href="/">
          <ul class="flex items-center  space-x-1">
            <li>
              <div class="mr-5px text-4xl font-bold ">LOGO</div>
            </li>

            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Location_dot_black.svg/1024px-Location_dot_black.svg.png"
                class="h-8 mr-3"
                alt="Flowbite Logo"
              />
            </li>
          </ul>
        </a>

        <div class="flex items-center mx-10 border-solid	">
          <ul class="flex items-center font-Rbt text-2xl space-x-5">
            <li>
              <Link to="/" class="hover:text-gray-500">
                Home
              </Link>
            </li>
            <Link to="/about" class="hover:text-gray-500">About</Link>
            
            <li>
              <Link to="/contact" class="hover:text-gray-500">
                Contact
              </Link>
            </li>
            <li>
              <button class="bg-gray-950 text-white hover:bg-gray-600 rounded font-bold py-1.5 px-3 ml-10">
                <Link to="/login">login</Link>
              </button>
            </li>
            <li>
              <button class="bg-gray-950 text-white hover:bg-gray-600 rounded font-bold py-1.5 px-3">
                <Link to="/signup">Signup</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
