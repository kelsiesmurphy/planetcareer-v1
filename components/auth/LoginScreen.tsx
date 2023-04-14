import Image from "next/image";

const LoginScreen = ({ setAuthType, font }: any) => {
  return (
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
            Email*
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
            Password*
          </label>
          <input
            id="fname"
            type="password"
            placeholder="Enter your password"
            className="input"
          />
        </div>
      </div>
      <button className="btn-primary w-full max-w-none">Log in</button>
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
