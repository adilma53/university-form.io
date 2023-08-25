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
          <ul class="flex items-center font-mono font-medium text-2xl space-x-5">
            <li>
              <Link to="/" class="hover:text-gray-500">
                Home
              </Link>
            </li>
            <Link to="/about">About</Link>
            <li></li>

            <li>
              <a href="/contact" class="hover:text-gray-500">
                Contact
              </a>
            </li>
            <li>
              <button class="bg-gray-950 text-white hover:bg-gray-600 rounded font-bold py-1.5 px-3 ml-10">
                Login
              </button>
            </li>
            <li>
              <button class="bg-gray-950 text-white hover:bg-gray-600 rounded font-bold py-1.5 px-3">
                Signup
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
