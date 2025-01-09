import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaRegEyeSlash,
  FaRegEye,
} from "react-icons/fa";
import { data, Link, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { logInWithWithEmailAndPassword, handleGoogleLoginWithSocial } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await logInWithWithEmailAndPassword(data.email, data.password);
      console.log("SSSSS")
      Swal.fire({
        title: "LogIn Success!",
        icon: "success",
        draggable: true
      });
      navigate("/");
    } catch (error) {
      console.log("Registation Faild", error.message);
    }
  };


  const handleGoogleWithLogin = async () => {
    try{
      await handleGoogleLoginWithSocial();
      navigate("/")
    }catch(error){
      console.log("Login Invalid")
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login Now!
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email:{" "}
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              name="email"
              id="email"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2`}
            />
            {errors.email && (
              <p className="text-sm italic text-red-500 mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password:
            </label>
            <div className=" relative">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                name="password"
                type={showPassword ? "password" : "name"}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
              />
              {errors.password && (
                <p className="text-sm italic text-red-500 mt-2">
                  {errors.password.message}
                </p>
              )}

              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute  top-3 right-4 text-gray-500"
                type="button"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Sign up
          </button>
        </form>

        {/* social login */}
        <div className="text-center space-y-4">
          <p className="text-gray-600">Or sign-up with</p>

          <div className="flex flex-col sm:flex-row  justify-center  gap-4">
            <button onClick={handleGoogleWithLogin} className="flex w-full  items-center px-4 py-2 space-x-2 text-white bg-red-500 rounded hover:bg-red-600">
              <FaGoogle />
              <span>Google</span>
            </button>
            <button className="flex w-full items-center px-4 py-2 space-x-2 text-white bg-gray-800 rounded hover:bg-gray-900">
              <FaGithub />
              <span>GitHub</span>
            </button>
            <button className="flex w-full items-center px-4 py-2 space-x-2 text-white bg-blue-500 rounded hover:bg-blue-600">
              <FaFacebook />
              <span>Facebook</span>
            </button>
          </div>
        </div>

        <p className="text-base text-center text-gray-600">
          Don't have any account? Please{" "}
          <Link to="/register" className="text-blue-600 hover:underline italic">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
