import { useState } from "react";
import Image from "next/image";
import AuthHandler from "@/handlers/Auth";
import UserProfileHandler from "@/handlers/UserProfile";
import JobApplicationPeriodHandler from "@/handlers/JobApplicationPeriod";
import router from "next/router";

const SignupScreen = ({ setAuthType, font }: any) => {
  const authHandlers = new AuthHandler();
  const userProfileHandlers = new UserProfileHandler();
  const jobApplicationPeriodHandlers = new JobApplicationPeriodHandler();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e: any) => {
    e.preventDefault();

    const createJobApplication = async (userProfile: any) => {
      try {
        jobApplicationPeriodHandlers
          .createJobApplicationPeriod(userProfile)
          .then((jobPeriodData) =>
            userProfileHandlers.updateUserProfileWithJobPeriodId(jobPeriodData)
          );
      } catch (error: any) {
        alert(error.error_description || error.message);
      }
    };

    const createUserProfile = async (data: any) => {
      try {
        userProfileHandlers
          .createUserProfile(data, firstName)
          .then((userProfile) => createJobApplication(userProfile));
      } catch (error: any) {
        alert(error.error_description || error.message);
      }
    };

    try {
      authHandlers
        .createSignUp(email, password)
        .then((res) => createUserProfile(res));
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setFirstName("");
      setEmail("");
      setPassword("");
      router.push("/dashboard");
    }
  };

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
          Create an account
        </h1>
      </div>
      <div className="space-y-4">
        <div className="flex-1 flex flex-col gap-1.5">
          <label htmlFor="fname" className="font-medium text-sm text-stone-700">
            First Name
          </label>
          <input
            id="fname"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
            className="input"
          />
        </div>
        <div className="flex-1 flex flex-col gap-1.5">
          <label htmlFor="email" className="font-medium text-sm text-stone-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input"
          />
        </div>
        <div className="flex-1 flex flex-col gap-1.5">
          <label
            htmlFor="password"
            className="font-medium text-sm text-stone-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            className="input"
          />
          <p className="text-stone-500 text-sm">
            Must be at least 8 characters.
          </p>
        </div>
      </div>
      <button onClick={handleSignup} className="btn-primary w-full max-w-none">
        Get started
      </button>
      <div>
        <p className="text-sm text-stone-500 text-center">
          Already have an account?{" "}
          <button
            className="font-medium px-1 cursor-pointer outline-green-700 text-green-700"
            onClick={() => setAuthType("Log in")}
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupScreen;
