import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-10 left-5 md:left-20 flex items-center gap-2">
        <FaHome size={20} /> <Link href={"/"}>Back to Home</Link>
      </div>
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Title */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gray-900 mb-4">
            <FaCalendar size={24} />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            Reset your password
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Enter your email address and we&apos;ll send you a link to reset
            your password.
          </p>
        </div>

        {/* Forgot Password Form */}
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-500 text-white bg-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 cursor-pointer">
              Send reset link
            </button>
          </div>
        </form>

        {/* Back to Login */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            Remember your password?{" "}
            <Link
              href="/login"
              className="font-medium text-indigo-400 hover:text-indigo-300">
              Back to login
            </Link>
          </p>
        </div>

        {/* Additional Help */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Didn&apos;t receive the email? Check your spam folder or{" "}
            <a href="#" className="text-indigo-400 hover:text-indigo-300">
              try again
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
