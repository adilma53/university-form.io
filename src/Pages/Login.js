import React from "react";
import Layout from "./Layout";

function Login() {
  return (
    <Layout>
      <div className="bg-book bg-cover bg-center h-screen flex justify-center items-center">
        <form className="bg-white p-8 shadow-md rounded-md w-96 space-y-5">
          {/* email log in */}
          <div className="mb-3">
            <label className="block font-semibold">Email address</label>
            <input
              type="email"
              autoComplete="email"
              className="block w-full rounded-md py-1.5 ring-1 ring-gray-400 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* password */}
          <div className="mb-3">
            <label className="block font-semibold">Password</label>
            <input
              type="password"
              autoComplete="current-password"
              className="block w-full rounded-md py-1.5 ring-1 ring-gray-400 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* log in button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gray-950 py-1.5 rounded-md font-semibold text-white hover:bg-gray-600 focus:ring-2 focus:ring-blue-500"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
