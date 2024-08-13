import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormContainer } from "./FormContainer";
import { AuthForm } from "./AuthForm";
import { UserContext } from "contexts/UserContext";

export const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { signIn } = useContext(UserContext);

  return (
    <FormContainer>
      {errorMessage && (
        <div className="mt-8 text-lg text-red-500">{errorMessage}</div>
      )}
      <AuthForm
        fields={[
          { label: "Username", type: "text" },
          { label: "Password", type: "password" },
          { label: "Confirm password", type: "password" },
        ]}
        submitButtonText="Create an Account"
        onSubmit={(values) => {
          if (values["Username"].length < 4) {
            setErrorMessage("Username is too short");
            return;
          }
          if (values["Password"].length < 4) {
            setErrorMessage("Password is too short");
            return;
          }
          if (values["Password"] !== values["Confirm password"]) {
            setErrorMessage("Passwords do not match");
            return;
          }
          setErrorMessage("");
          signIn(values["Username"]);
          navigate("/");
        }}
      />
      <Link to="/" className="underline text-orange-400 hover:text-orange-500">
        Sign In
      </Link>
    </FormContainer>
  );
};
