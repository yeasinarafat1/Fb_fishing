"use client";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function ErrorPage() {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full text-center">
        <AlertTriangle className="mx-auto text-red-500 w-16 h-16 mb-6" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Oops! Something Went Wrong
        </h1>
        <p className="text-gray-600 mb-8">
          We're sorry, but it seems there was an error. Please try again later
          or contact support if the problem persists.
        </p>
        <div className="space-y-4">
          <Button
            onClick={handleRefresh}
            className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-200"
          >
            Refresh Page
          </Button>
          <Button
            onClick={handleGoHome}
            variant="outline"
            className="w-full border border-blue-500 text-blue-500 py-2 rounded-md font-semibold hover:bg-blue-50 transition duration-200"
          >
            Go to Homepage
          </Button>
        </div>
      </div>
      <p className="mt-8 text-sm text-gray-500">
        If you continue to experience issues, please contact our{" "}
        <a href="/support" className="text-blue-500 hover:underline">
          support team
        </a>
        .
      </p>
    </div>
  );
}
