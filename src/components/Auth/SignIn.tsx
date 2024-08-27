// src/pages/SignIn.tsx

import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/api/authApi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setUser } from "../../redux/api/authSlice";

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    try {
      const response = await loginUser(data).unwrap();
      dispatch(setUser({ user: response.data, token: response.token }));
      toast.success("Logged in successfully!");
      navigate(`/`);
      // navigate(`/${response.data.role}/dashboard`);
    } catch (error) {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full border border-gray-300 p-2 rounded"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 block w-full border border-gray-300 p-2 rounded"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Sign In
        </button>
      </form>
      <p className="mt-4 text-center">
        <Link to="/forgot-password" className="text-blue-500">
          Forgot Password?
        </Link>
      </p>
      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500">
          Sign Up Instead
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
