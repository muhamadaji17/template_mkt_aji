const Buttons = ({ children, type, className }) => {
  return (
    <button
      type={type}
      className={`h-10 px-6 font-semibold rounded-md  ${className} text-white`}
    >
      {children}
    </button>
  );
};

export default Buttons;
