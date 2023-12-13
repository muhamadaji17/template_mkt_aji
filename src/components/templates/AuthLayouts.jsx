// import Links from "../atoms/links/Links";
// import FormLogin from "../organisms/FormLogin";

const AuthLayouts = ({ children, title, header }) => {
  return (
    <div className=" md:w-6/12 w-11/12 border py-5 px-5 rounded-md shadow-lg ">
      <h1 className="text-blue-600 text-3xl font-bold mb-2 text-center">
        {title}
      </h1>
      <p className="font-medium text-slate-500 text-center">{header}</p>
      {children}
    </div>
  );
};

export default AuthLayouts;
