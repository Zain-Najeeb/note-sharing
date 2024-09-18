import { SignUpForm } from "@/components/index";

export default function SignUp() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-8">
        <span className="font-bold text-white text-2xl">StealthStudy</span>
      </div>
      <div className="flex-grow flex">
        <div className="m-auto pb-32 w-2/6">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
