import { Link } from "react-router-dom";
import { FormContainer } from "./FormContainer";
import { AuthForm } from "./AuthForm";

export const SignInPage = () => (
  <FormContainer>
    <AuthForm
      fields={[
        { label: "Username", type: "text" },
        { label: "Password", type: "password" },
      ]}
      submitButtonText="Sign In"
      onSubmit={(values) => console.log(values)}
    />
    <Link
      className="underline text-orange-400 hover:text-orange-500"
      to="/sign-up"
    >
      Create an Account
    </Link>
  </FormContainer>
);
