import { useState } from "react";
import { Field } from "./Field";

export const AuthForm = ({ fields, submitButtonText }) => {
  const [fieldValues, setFieldValues] = useState(() => {
    const initialState = {};
    for (const field of fields) initialState[field.label] = "";
    return initialState;
  });

  return (
    <form
      className="w-72 my-8 p-4 rounded-2xl bg-neutral-200 font-body shadow-lg shadow-neutral-200"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(fieldValues);
      }}
    >
      {fields.map((field) => (
        <Field
          label={field.label}
          type={field.type}
          values={fieldValues}
          setValues={setFieldValues}
          key={field.label}
        />
      ))}
      <button className="w-full mt-4 py-2 rounded-2xl bg-orange-400 font-semibold text-white hover:bg-orange-500">
        {submitButtonText}
      </button>
    </form>
  );
};
