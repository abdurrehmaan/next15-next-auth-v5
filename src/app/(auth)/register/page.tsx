
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import RegisterForm from "@/container/forms/regsiter-form";

// import FormPage from "./form";

export default async function RegisterPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <section className=" h-screen flex items-center justify-center">
      <div className="w-[600px]">
        <RegisterForm />
      </div>
    </section>
  );
}