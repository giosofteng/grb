import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormContainer } from "./FormContainer";
import { AuthForm } from "./AuthForm";

export const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

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
          navigate("/");
        }}
      />
      <Link to="/" className="underline text-orange-400 hover:text-orange-500">
        Sign In
      </Link>
    </FormContainer>
  );
};
