import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "contexts/UserContext";

export const NavBar = () => {
  const { user, signOut } = useContext(UserContext);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="flex justify-center pl-2 pr-4 py-2 bg-neutral-300 font-head font-medium shadow-lg shadow-neutral-200">
      <div className="flex justify-between items-center w-full max-w-5xl">
        <div className="relative">
          <img src="/grb/logo.webp" alt="Logo" className="w-32" />
          <div className="absolute top-0 left-0 w-full h-full bg-white/10"></div>
        </div>
        <div className="relative flex flex-1 justify-end">
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="text-lg text-orange-500 hover:text-orange-600"
          >
            {user?.toUpperCase() || "GUEST"}
            <i className="fa-solid fa-user ml-3 text-2xl"></i>
          </button>
          {isUserMenuOpen && (
            <div className="absolute top-10 right-7">
              <button
                onClick={() => {
                  setIsUserMenuOpen(false);
                  user ? signOut() : navigate("/");
                }}
                className="flex items-center px-2 py-3 rounded-2xl bg-orange-400/75 text-neutral-100 shadow-md shadow-neutral-200 hover:bg-orange-400/90 hover:text-neutral-200"
              >
                {user ? "Sign Out" : "Sign In"}
                <i className="fa-solid fa-right-from-bracket ml-3 text-xl"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
