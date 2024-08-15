import { useState } from "react";
import { Field } from "./Field";

export const AuthForm = ({ fields, submitButtonText, onSubmit }) => {
  const [fieldValues, setFieldValues] = useState(() => {
    const initialState = {};
    for (const field of fields) initialState[field.label] = "";
    return initialState;
  });

  return (
    <form
      className="my-8 w-72 rounded-2xl bg-neutral-300 p-4 shadow-lg shadow-neutral-200"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(fieldValues);
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
      <button className="mt-4 w-full rounded-2xl bg-orange-400 py-2 font-semibold text-white hover:bg-orange-500">
        {submitButtonText}
      </button>
    </form>
  );
};
