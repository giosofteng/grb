import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormContainer } from "./FormContainer";
import { AuthForm } from "./AuthForm";
import { UserContext } from "../../contexts/UserContext";

export const SignInPage = () => {
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
        ]}
        submitButtonText="Sign In"
        onSubmit={(values) => {
          if (values["Username"].length < 4) {
            setErrorMessage("Please enter a valid username");
            return;
          }
          if (values["Password"].length < 4) {
            setErrorMessage("Please enter a valid password");
            return;
          }
          setErrorMessage("");
          signIn(values["Username"]);
          navigate("/");
        }}
      />
      <Link
        to="/sign-up"
        className="underline text-orange-400 hover:text-orange-500"
      >
        Create an Account
      </Link>
    </FormContainer>
  );
};
