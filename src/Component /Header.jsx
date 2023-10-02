import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  function pathMatchRoute(route) {
    return new RegExp(`^${route}$`, 'i').test(location.pathname);
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={()=> navigate("/home")}
          />  
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              style={pathMatchRoute("/home") ? { borderBottom: "2px solid red", color: "black" } : {}}
              className="cursor-pointer p-3 text-sm font-semibold text-gray-400"
              onClick={()=> navigate("/home")}
            >
              Home
            </li>
            <li
              style={pathMatchRoute("/offers") ? { borderBottom: "2px solid red", color: "black" } : {}}
              className="cursor-pointer py-3 text-sm font-semibold text-gray-400"
              onClick={()=> navigate("/offers")}
            >
              Offers
            </li>
            <li
              style={pathMatchRoute("/sign-in") ? { borderBottom: "2px solid red", color: "black" } : {}}
              className="cursor-pointer py-3 text-sm font-semibold text-gray-400"
              onClick={()=> navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}
