import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { SignInPage } from "pages/auth/SignInPage";
import { SignUpPage } from "pages/auth/SignUpPage";
import { BoardListPage } from "pages/BoardListPage";
import { UserContext } from "contexts/UserContext";
import {
  setUserStorage,
  getUserStorage,
  removeUserStorage,
} from "services/user";

export const App = () => {
  const [, setUser] = useState(() => getUserStorage());

  return (
    <HashRouter>
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
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/boards" element={<BoardListPage />} />
        </Routes>
      </UserContext.Provider>
    </HashRouter>
  );
};
