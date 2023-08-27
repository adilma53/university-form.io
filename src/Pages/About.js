import React from "react";
import Layout from "./Layout";

function About() {
  return (
    <Layout>
      <div className="bg-book bg-cover bg-center h-screen flex flex-col justify-center items-center">
        <div className="bg-gray-300 opacity-60 p-4 rounded-lg max-w-lg w-full">
          <h1 className="text-md text-gray-800 font-Rbt">
          Welcome to a React-built website designed for learning.
          As we venture forward,our aim is for this project to transform 
          university enrollment, making it effortless for students and institutions alike.
          </h1>
        </div>
      </div>
    </Layout>
  );
}

export default About;
