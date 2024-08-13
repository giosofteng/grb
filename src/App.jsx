import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInPage } from "./pages/auth/SignInPage";
import { SignUpPage } from "./pages/auth/SignUpPage";
import { UserContext } from "./contexts/UserContext";
import {
  setUserStorage,
  getUserStorage,
  removeUserStorage,
} from "./services/user";

export const App = () => {
  const [user, setUser] = useState(() => getUserStorage());

  return (
    <UserContext.Provider
      value={{
        user: getUserStorage(),
        signIn: (user) => {
          setUser(user);
          setUserStorage(user);
        },
        signOut: () => {
          setUser("");
          removeUserStorage();
        },
      }}
    >
      <BrowserRouter basename="/grb/">
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};
