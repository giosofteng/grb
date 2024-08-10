import { Link } from "react-router-dom";
import { FormContainer } from "./FormContainer";
import { AuthForm } from "./AuthForm";

export const SignUpPage = () => (
  <FormContainer>
    <AuthForm
      fields={[
        { label: "Username", type: "text" },
        { label: "Password", type: "password" },
        { label: "Confirm password", type: "password" },
      ]}
      submitButtonText="Create an Account"
    />
    <Link className="underline text-orange-400 hover:text-orange-500" to="/">
      Sign In
    </Link>
  </FormContainer>
);
