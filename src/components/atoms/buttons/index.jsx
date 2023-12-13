const Buttons = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`h-10 px-6 font-semibold rounded-md  ${className} text-white`}
    >
      {children}
    </button>
  );
};

export default Buttons;
