import { useContext } from "react";
import { UserContext } from "contexts/UserContext";

export const NavBar = () => (
  <nav className="flex justify-center pl-2 pr-4 py-2 bg-neutral-300 font-head font-medium text-lg text-orange-500 shadow-lg shadow-neutral-200">
    <div className="flex justify-between items-center w-full max-w-5xl">
      <div className="relative">
        <img src="/grb/logo.webp" alt="Logo" className="w-32" />
        <div className="absolute top-0 left-0 w-full h-full bg-white/10"></div>
      </div>
      <div>
        <button className="hover:text-orange-600">
          {useContext(UserContext).user?.toUpperCase() || "GUEST"}
          <i className="fa-solid fa-user ml-3 text-2xl"></i>
        </button>
      </div>
    </div>
  </nav>
);
