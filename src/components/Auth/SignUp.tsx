// src/pages/SignUp.tsx

import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegisterUserMutation } from "../../redux/api/authApi";
import Title from "../../Utils/Title";

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation(); // Using the mutation hook for signup

  const onSubmit = async (data: FieldValues) => {
    try {
      await registerUser(data).unwrap(); // Calling the signup API endpoint
      toast.success("User registered successfully!"); // Display success message
      navigate("/signin"); // Redirect to the signin page after successful registration
    } catch (error: any) {
      console.error("Registration Error:", error); // Console log for debugging
      toast.error(error.data?.message || "Error registering user"); // Display error message
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">
          {" "}
          <Title bigTitle={"Sign Up"} smallTitle={""} />{" "}
        </h2>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Role Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            {...register("role", { required: "Role is required" })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-sm">{errors.role.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Phone Number Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            {...register("phone")}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Address Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            {...register("address")}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-[#050d31] to-[#091583] text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
          disabled={isLoading}>
          {isLoading ? "Signing Up..." : "Sign Up"}
        </button>

        {/* Sign In Instead Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-700">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Sign In Instead
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
