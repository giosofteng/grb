import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FormContainer } from "./FormContainer";
import { AuthForm } from "./AuthForm";
import { RedirectToBoardsIfSignedIn } from "shared-components/RedirectToBoardsIfSignedIn";
import { UserContext } from "contexts/UserContext";

export const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signIn } = useContext(UserContext);

  return (
    <RedirectToBoardsIfSignedIn>
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
          }}
        />
        <Link
          to="/"
          className="text-orange-400 underline hover:text-orange-500"
        >
          Sign In
        </Link>
      </FormContainer>
    </RedirectToBoardsIfSignedIn>
  );
};
