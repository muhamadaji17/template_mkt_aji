const Input = ({ ...props }) => {
  return (
    <input
      {...props}
      className="text-sm border rounded w-full py-2 px-3 border-slate-700 placeholder: opacity-50"
    />
  );
};

export default Input;
