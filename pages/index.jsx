import FormLogin from "@/components/organisms/FormLogin";
import AuthLayouts from "@/components/templates/AuthLayouts";

export default function Home() {
  return (
    <div className="flex justify-center  min-h-screen items-center">
      <AuthLayouts
        title={"Login"}
        header={"welcome, please enter your account"}
      >
        <FormLogin />
      </AuthLayouts>
    </div>
  );
}
