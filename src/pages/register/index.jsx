import FormRegister from "@/src/components/organisms/FormRegister";
import AuthLayouts from "@/src/components/templates/AuthLayouts";

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
