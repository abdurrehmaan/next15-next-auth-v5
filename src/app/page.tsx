import LoginForm from "@/container/forms/login-form";
export default function Home() {
  // return <LoginForm />
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img alt="Daneenz" src="/assets/logo.png" className="h-24 w-auto" />
            <h2 className="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign in to your account as an{" "}
              <span className="text-red-500">administrator</span>
            </h2>
          </div>

          <LoginForm />
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          className="absolute inset-0 size-full object-cover"
        />
      </div>
    </div>
  );
}
