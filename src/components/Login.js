import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-32 mx-auto left-0 right-0 text-white rounded-md opacity-85">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 mt-4 w-full bg-gray-700 "
          />
        )}
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 mt-4 w-full bg-gray-700 "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 mt-4 w-full bg-gray-700"
        />
        <button className="p-2 mt-4 bg-red-600 rounded-md w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already a member? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
