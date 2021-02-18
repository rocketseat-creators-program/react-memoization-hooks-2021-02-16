import React from "react";

export default function Navbar({ theme, toogleDarkmode }) {
  return (
    <nav id="header" className="fixed w-full">
      <div
        style={{ backgroundColor: theme }}
        className="relative w-full z-10  top-0 "
      >
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
          <div className="pl-4 flex items-center">
            <h1 className="text-teal-700  no-underline hover:no-underline font-extrabold text-xl">
              Github Finder
            </h1>
          </div>

          <ul className="list-reset lg:flex justify-end items-center pr-4">
            <label
              htmlFor="toogleA"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  id="toogleA"
                  type="checkbox"
                  onChange={toogleDarkmode}
                  className="hidden"
                />
                <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
              </div>
              <div className="ml-3 text-gray-700 font-medium">Dark Mode</div>
            </label>
          </ul>
        </div>
      </div>
    </nav>
  );
}
