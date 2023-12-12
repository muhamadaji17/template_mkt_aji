const Input = ({ type, placeholder, name, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      className="text-sm border rounded w-full py-2 px-3 border-slate-700 placeholder: opacity-50"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
