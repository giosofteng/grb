export const Field = ({ label, type, values, setValues }) => (
  <div key={label} className="my-4 flex flex-col">
    <label htmlFor={label} className="pl-0.5 text-neutral-600">
      {label}
    </label>
    <input
      required
      type={type}
      value={values[label]}
      onChange={(e) => setValues({ ...values, [label]: e.target.value })}
      id={label}
      className="w-64 rounded-2xl px-2 py-1 text-orange-500 selection:bg-neutral-200 focus:outline-orange-300"
    />
  </div>
);
