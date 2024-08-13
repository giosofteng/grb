import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "contexts/UserContext";

export const RedirectToBoardsIfSignedIn = ({ children }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/boards");
  }, [user, navigate]);

  return children;
};
