import React, { Component } from "react";
import Logo from "./components/avatar";
// import "./assets/style.css";

class App extends Component {
  render() {
    return (
      <div className="bg-gray-100 flex">
        <div className="h-screen bg-white w-1/5 border border-gray-2">
          <div class="my-2 w-auto">
            <div className="flex justify-center">
              <Logo />
            </div>
            <div className="py-2 flex justify-center">
              <p className="text-gray-700">JOHN DOE</p>
              <span className="px-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="none"
                >
                  <defs />
                  <path
                    stroke="#0D1C2E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.75 7.125l4.75 4.75 4.75-4.75"
                  />
                </svg>
              </span>
            </div>
            <div className="flex justify-center py-4">
              <ul class="list-reset uppercase">
                <li className="flex align-center py-1 hover:text-gray-900">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      className="text-gray-700 hover:text-gray-900"
                      // fill="none"
                    >
                      <defs />
                      <path
                        fill="#78909C"
                        d="M18 29v-6h4v6h5v-8h3l-10-9-10 9h3v8h5z"
                      />
                    </svg>
                  </span>
                  <a
                    href="#"
                    className="self-center flex-1 text-gray-700 font-bold border-gray-200"
                  >
                    Home
                  </a>
                </li>
                <li className="flex align-center py-1">
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="none"
                    >
                      <defs />
                      <path
                        fill="#78909C"
                        d="M27 28H13V17h14v11zm-3-18v2h-8v-2h-2v2h-1c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2V14a2 2 0 00-2-2h-1v-2h-2zm1 11h-5v5h5v-5z"
                      />
                    </svg>
                  </span>
                  <a className="self-center flex-1 text-gray-700 font-bold border-gray-200">
                    Supplier
                  </a>
                </li>
                <li className="flex align-center  py-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="none"
                    >
                      <defs />
                      <path
                        fill="#78909C"
                        d="M20 26a2 2 0 100-4 2 2 0 000 4zm6-9a2 2 0 012 2v10a2 2 0 01-2 2H14a2 2 0 01-2-2V19a2 2 0 012-2h1v-2a5 5 0 1110 0v2h1zm-6-5a3 3 0 00-3 3v2h6v-2a3 3 0 00-3-3z"
                      />
                    </svg>
                  </span>
                  <a
                    href="#"
                    className="self-center flex-1  text-gray-700 font-bold border-gray-200"
                  >
                    Clients
                  </a>
                </li>
                <li className="flex align-center  py-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="none"
                    >
                      <defs />
                      <path
                        fill="#78909C"
                        d="M27 23h-4a3 3 0 01-6 0h-4V13h14v10zm0-12H13a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V13a2 2 0 00-2-2z"
                      />
                    </svg>
                  </span>
                  <a
                    href="#"
                    className="self-center flex-1  text-gray-700 font-bold border-gray-200"
                  >
                    Loaders
                  </a>
                </li>
                <li className="flex align-center  py-1">
                  <span>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 12C21.0609 12 22.0783 12.4214 22.8284 13.1716C23.5786 13.9217 24 14.9391 24 16C24 17.0609 23.5786 18.0783 22.8284 18.8284C22.0783 19.5786 21.0609 20 20 20C18.9391 20 17.9217 19.5786 17.1716 18.8284C16.4214 18.0783 16 17.0609 16 16C16 14.9391 16.4214 13.9217 17.1716 13.1716C17.9217 12.4214 18.9391 12 20 12ZM20 22C24.42 22 28 23.79 28 26V28H12V26C12 23.79 15.58 22 20 22Z"
                        fill="#78909C"
                      />
                    </svg>
                  </span>
                  <a
                    href="#"
                    className="self-center flex-1  text-gray-700 font-bold border-gray-200"
                  >
                    Users
                  </a>
                </li>
                <li className="flex align-center  py-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="none"
                    >
                      <defs />
                      <path
                        fill="#78909C"
                        d="M19.73 23.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46a.492.492 0 00-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65a.506.506 0 00-.5-.42h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L12.3 19c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"
                      />
                    </svg>
                  </span>
                  <a
                    href="#"
                    class="self-center flex-1  text-gray-700 font-bold border-gray-200"
                  >
                    Configuration
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* body */}
        <div className="w-full">
          <div className="flex justify-between w-full">
            <div className="m-4 text-xl px-4 py-4 text-gray-600 font-bold w-8/12 ">
              <span>Hello JOHN DOE,</span>
              <br />
              <span>
                Here is some information that we gathered about The Store
              </span>
            </div>
            <div className="w-4/12 m-4 text-xl px-4 py-4 border text-gray-600 font-bold">
              <p>other</p>
            </div>
          </div>
          <div className="w-full flex ">
            <div className="w-8/12 m-4">
              <div className="my-4 flex">
                <div className=" flex m-4 py-8 px-6 justify-between text-gray-600 bg-white w-1/2 font-bold shadow">
                  <div className>
                    <span>Orders</span>
                    <br />
                    <span>Today</span>
                  </div>
                  <div>14</div>
                </div>
                <div className=" flex m-4 py-8 px-6 justify-between text-gray-600 bg-white w-1/2 font-bold shadow">
                  <div className>
                    <span>Sales</span>
                    <br />
                    <span>Today</span>
                  </div>
                  <div>14</div>
                </div>
              </div>
              <div className="my-4 w-full flex">
                <div className="flex m-4 py-8 px-6 bg-white w-full shadow">
                  <label className="text-md self-center text-gray-600 mx-2">
                    Tracking No:
                  </label>
                  <input
                    type="text"
                    className="bg-white focus:outline-none  border border-gray-300 rounded rounded-r-none	 py-2 px-4 block w-8/12 appearance-none leading-normal shadow"
                  />
                  <button className="bg-gray-800 hover:bg-gray-600 text-gray-200 font-semibold py-2 px-4 border border-gray-400 rounded rounded-l-none	 shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="12"
                      fill="none"
                    >
                      <defs />
                      <path
                        stroke="#0D1C2E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1.17 10.7l4.795-4.675L1.262 1.2"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="my-4 w-full flex">
                <div className="m-4 bg-white w-full p-4 my-2 text-gray-600 border border-gray-2">
                  <div className="flex py-2 justify-between">
                    <span>300 Orders were delivered</span>
                    <span className="self-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="12"
                        fill="none"
                      >
                        <defs />
                        <path
                          stroke="#0D1C2E"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1.17 10.7l4.795-4.675L1.262 1.2"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="flex  py-2 justify-between">
                    <span>300 Orders were pending</span>
                    <span className="self-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="12"
                        fill="none"
                      >
                        <defs />
                        <path
                          stroke="#0D1C2E"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1.17 10.7l4.795-4.675L1.262 1.2"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="flex  py-2 justify-between">
                    <span>300 Orders were cancelled</span>
                    <span className="self-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="12"
                        fill="none"
                      >
                        <defs />
                        <path
                          stroke="#0D1C2E"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1.17 10.7l4.795-4.675L1.262 1.2"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-4/12 m-2 my-4 bg-white shadow border">
              <h2 className="text-center text-2xl">Activity</h2>
              <div>
                <div className="border p-4 m-2">
                  Order#408 was placed
                  <br />
                  <span>4 hours ago</span>
                </div>
                <div className="border p-4 m-2">
                  Order#408 was delivered
                  <br />
                  <span>4 hours ago</span>
                </div>
                <div className="border p-4 m-2">
                  Order#401 was confirmed
                  <br />
                  <span>4 hours ago</span>
                </div>
                <div className="border p-4 m-2">
                  Order#402 was cancelled
                  <br />
                  <span>4 hours ago</span>
                </div>
                <div className="border p-4 m-2">
                  Order#401 was placed
                  <br />
                  <span>4 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
