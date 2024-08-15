import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "contexts/UserContext";
import { CartModal } from "./modals/CartModal";

export const NavBar = () => {
  const { user, signOut } = useContext(UserContext);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="flex justify-center bg-neutral-300 py-2 pl-2 pr-4 font-head font-medium shadow-lg shadow-neutral-200">
        <div className="flex w-full max-w-5xl items-center justify-between">
          <div className="relative">
            <img src="/grb/logo.webp" alt="Logo" className="w-32" />
            <div className="absolute left-0 top-0 h-full w-full bg-white/10"></div>
          </div>
          <div className="relative flex flex-1 justify-end">
            <div className="flex">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="text-lg text-orange-500 hover:text-orange-600"
              >
                {user?.toUpperCase() || "GUEST"}
                <i className="fa-solid fa-user ml-3 text-2xl"></i>
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="ml-5 flex items-end border-x-2 border-neutral-800 hover:border-neutral-600"
              >
                <i className="fa-solid fa-cart-shopping mx-2 text-2xl text-neutral-800 hover:text-neutral-600"></i>
              </button>
            </div>
            {isUserMenuOpen && (
              <div className="absolute right-16 top-10">
                <button
                  onClick={() => {
                    setIsUserMenuOpen(false);
                    user ? signOut() : navigate("/");
                  }}
                  className="flex items-center rounded-2xl bg-orange-400/75 px-2 py-3 text-neutral-100 shadow-md shadow-neutral-200 hover:bg-orange-400/90 hover:text-neutral-200"
                >
                  {user ? "Sign Out" : "Sign In"}
                  <i className="fa-solid fa-right-from-bracket ml-3 text-xl"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      {isCartOpen && <CartModal setIsCartOpen={setIsCartOpen} />}
    </>
  );
};
