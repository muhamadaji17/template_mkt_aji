import FormRegister from "@/components/organisms/FormRegister";
import AuthLayouts from "@/components/templates/AuthLayouts";

export default function Register() {
  return (
    <div className="flex justify-center  min-h-screen items-center">
      <AuthLayouts
        title={"Register"}
        header={"welcome, please enter your account"}
      >
        <FormRegister />
      </AuthLayouts>
    </div>
  );
}
