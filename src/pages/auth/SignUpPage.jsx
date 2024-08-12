import { useState } from "react";
import { Link } from "react-router-dom";
import { FormContainer } from "./FormContainer";
import { AuthForm } from "./AuthForm";

export const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <FormContainer>
      {errorMessage && <div className="mt-8 text-red-500">{errorMessage}</div>}
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
        }}
      />
      <Link className="underline text-orange-400 hover:text-orange-500" to="/">
        Sign In
      </Link>
    </FormContainer>
  );
};
