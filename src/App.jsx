import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInPage } from "./pages/auth/SignInPage";
import { SignUpPage } from "./pages/auth/SignUpPage";

export const App = () => (
  <BrowserRouter basename="/grb/">
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  </BrowserRouter>
);
