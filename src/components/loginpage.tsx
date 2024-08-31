"use client";
import { signIn } from "@/config/auth";
export default function LoginPage() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Login</h2>

        <div className="space-y-6">
          <button
            type="button"
            className="w-full flex justify-center items-center bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => signIn("google")}
          >
            <img src="/google.png" alt="Google" className="w-5 h-5 mr-2"/>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};


