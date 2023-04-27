import Image from "next/image";
import { useState } from "react";
import { supabase } from "@/supabaseClient";
import router from "next/router";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
// import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
// import Account from "./Account";

const LoginScreen = ({ setAuthType, font }: any) => {
  // const session = useSession();
  // const supabase = useSupabaseClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) throw error;
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setEmail("");
      setPassword("");
      router.push("/dashboard");
    }
  };

  return (
    // <div className="flex-1 max-w-[360px] space-y-4 flex flex-col">
    //   {!session ? (
    //     <>
    //       <div className="flex flex-col gap-4 items-center">
    //         <Image
    //           alt="PlanetCareer Logomark"
    //           width="0"
    //           height="0"
    //           className="w-12 aspect-square"
    //           src="/logomark.svg"
    //         />
    //         <h1
    //           className={
    //             font.className +
    //             " text-xl md:text-2xl text-center font-medium text-stone-900"
    //           }
    //         >
    //           Welcome to PlanetCareer!
    //         </h1>
    //       </div>
    //       <Auth
    //         supabaseClient={supabase}
    //         providers={["github"]}
    //         redirectTo={`${process.env.NEXT_PUBLIC_HOST}/dashboard`}
    //         appearance={{
    //           theme: ThemeSupa,
    //           variables: {
    //             default: {
    //               colors: {
    //                 brand: "#087443",
    //                 brandAccent: "#087443",
    //                 inputBackground: "white",
    //                 inputBorder: "#D7D3D0",
    //                 inputBorderFocus: "#087443",
    //                 inputLabelText: "#44403C",
    //                 inputPlaceholder: "#79716B",
    //               },
    //             },
    //           },
    //         }}
    //       />
    //     </>
    //   ) : (
    //     <>
    //       <div className="flex flex-col gap-4 items-center">
    //           <Image
    //             alt="PlanetCareer Logomark"
    //             width="0"
    //             height="0"
    //             className="w-12 aspect-square"
    //             src="/logomark.svg"
    //           />
    //           <h1
    //             className={
    //               font.className +
    //               " text-xl md:text-2xl text-center font-medium text-stone-900"
    //             }
    //           >
    //             Complete onboarding
    //           </h1>
    //         </div>
    //       <Account session={session} />
    //     </>
    //   )}
    // </div>
    <div className="flex-1 max-w-[360px] space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <Image
          alt="PlanetCareer Logomark"
          width="0"
          height="0"
          className="w-10 aspect-square"
          src="/logomark.svg"
        />
        <h1
          className={
            font.className + " text-2xl md:text-3xl font-medium text-stone-900"
          }
        >
          Welcome back!
        </h1>
      </div>
      <div className="space-y-4">
        <div className="flex-1 flex flex-col gap-1.5">
          <label htmlFor="fname" className="font-medium text-sm text-stone-700">
            Email
          </label>
          <input
            id="fname"
            type="email"
            placeholder="Enter your email"
            className="input"
          />
        </div>
        <div className="flex-1 flex flex-col gap-1.5">
          <label htmlFor="fname" className="font-medium text-sm text-stone-700">
            Password
          </label>
          <input
            id="fname"
            type="password"
            placeholder="Enter your password"
            className="input"
          />
        </div>
      </div>
      <button onClick={handleLogin} className="btn-primary w-full max-w-none">Log in</button>
      <div>
        <p className="text-sm text-stone-500 text-center">
          Don&apos;t have an account?{" "}
          <button
            className="font-medium px-1 cursor-pointer outline-green-700 text-green-700"
            onClick={() => setAuthType("Sign up")}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
