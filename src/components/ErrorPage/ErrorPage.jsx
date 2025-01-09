import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700 text-white">
      <div className="text-center">
        <h1 className=" font-bold text-5xl  text-white mb-10">Page Not Found</h1>
        <Link to="/" className="bg-blue-700 px-3 py-2 rounded-md">Go Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
