'use client';

import { SignIn, SignUp, useClerk, useSignIn, useSignUp, useUser } from "@clerk/nextjs";
import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <main className="flex min-h-screen bg-white text-black">
      {/* Left Side – Landing Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-10 bg-gray-50">
        <div className="max-w-lg mx-auto">
          {/* Optional Brand Icon */}
          <div className="mb-6">
            <Image
              src="/logo-clausely.png" // Add this to /public
              alt="Clausely logo"
              width={48}
              height={48}
            />
          </div>

          {/* Placeholder or Replace with <Carousel /> */}
          <div className="aspect-video w-full bg-gray-200 rounded-lg mb-6" />

          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            AI-First Legal <span className="text-blue-600">Compliance</span>
          </h1>
          <p className="text-gray-700 mb-6">
            Automate clause analysis, generate policies, and stay compliant across
            all jurisdictions with intelligent AI assistance.
          </p>

          <div className="flex gap-3 flex-wrap">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              ✅ GDPR Ready
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              ✅ AI Act Compliant
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              ✅ Multi-Jurisdiction
            </span>
          </div>
        </div>
      </div>

      {/* Right Side – Sign In / Sign Up Auth */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-sm w-full space-y-6">
          {/* Toggle Sign In / Sign Up */}
          <div className="flex justify-center gap-6">
            <button
              className={`font-semibold ${!isSignUp ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
              onClick={() => setIsSignUp(false)}
            >
              Sign In
            </button>
            <button
              className={`font-semibold ${isSignUp ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
              onClick={() => setIsSignUp(true)}
            >
              Sign Up
            </button>
          </div>

          {/* Clerk Components */}
          {isSignUp ? (
            <SignUp
              path="/login"
              routing="path"
              signInUrl="/login"
              afterSignUpUrl="/projects"
              redirectUrl="/projects"
            />
          ) : (
            <SignIn
              path="/login"
              routing="path"
              signUpUrl="/login"
              afterSignInUrl="/projects"
              redirectUrl="/projects"
            />
          )}
        </div>
      </div>
    </main>
  );
}