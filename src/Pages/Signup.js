import React from "react";
import Layout from "./Layout";

function Signup() {
  return (
    <Layout>
      <div class="flex   flex-col justify-center px-6 py-12 ">
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form class="space-y-5" action="#" method="POST">
            <div>
              <div className="flex space-x-4">
                <div className="flex flex-col space-y-4">
                  <label className="">First Name</label>
                  <input
                    type="text"
                    className="font-semibold mt-1 block w-full rounded-md py-1.5 ring-1 ring-gray-400 "
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <label className="">Last Name</label>
                  <input
                    type="text"
                    className="font-semibold mt-1 block w-full rounded-md py-1.5 ring-1 ring-gray-400"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <label class="mb-1">Email address</label>
                <div class="">
                  <input
                    type="email"
                    autocomplete="email"
                    class="font-semibold mt-1 block w-full rounded-md py-1.5 ring-1 ring-gray-400 "
                  />
                </div>
              </div>
            </div>

            <div >
              <div className="flex flex-col space-y-2">
                <label class="">Password</label>
                <div class="">
                  <input
                    type="password"
                    autocomplete="email"
                    class="font-semibold mt-1  block w-full rounded-md py-1.5 ring-1 ring-gray-400 "
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                href="#"
                type="submit"
                class="flex w-full justify-center rounded-md bg-gray-950 py-1.5 font-semibold text-white hover:bg-gray-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
