import {lazy, Suspense} from "react";
const  SignInForm = lazy(() =>import("./SignInForm"));
const LoginCrousel = lazy(() => import("./LoginCrousel"));

const AuthPage = () => {

  return (
    <div className="min-h-screen flex md:items-center justify-center bg-backgrounddeep lg:bg-background text-white px-6 pt-[2px] ">
      <div className="bg-backgrounddeep w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-8 md:p-3 md:rounded-2xl shadow-2xl">
        {/* LEFT SIDE */}
        <div className="h-full sm:p-8 flex flex-col justify-center md:col-span-5">
           <Suspense fallback={<div>Loading...</div>}>
            <SignInForm />
          </Suspense>
        </div>
        {/* RIGHT SIDE (CAROUSEL) */}
        <div className="hidden md:flex items-center justify-center bg-backgroundLight rounded-xl p-6 md:col-span-7">
          <div className="w-full h-full max-w-xl">
            <Suspense fallback={<div>Loading...</div>}>
              <LoginCrousel />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
