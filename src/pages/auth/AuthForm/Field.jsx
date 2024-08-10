export const Field = ({ label, type, values, setValues }) => (
  <div key={label} className="flex flex-col my-4">
    <label htmlFor={label} className="pl-0.5 text-neutral-600">
      {label}
    </label>
    <input
      required
      type={type}
      value={values[label]}
      onChange={(e) => setValues({ ...values, [label]: e.target.value })}
      id={label}
      className="w-64 px-2 py-1 rounded-2xl text-orange-500 focus:outline-orange-300 selection:bg-neutral-200"
    />
  </div>
);
