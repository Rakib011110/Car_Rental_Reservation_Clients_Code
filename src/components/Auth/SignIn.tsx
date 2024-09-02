import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/api/authApi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setUser } from "../../redux/api/authSlice";
import Title from "../../Utils/Title";

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
    try {
      const response = await loginUser(data).unwrap();
      dispatch(setUser({ user: response.data, token: response.token }));
      toast.success("Logged in successfully!");
      navigate(`/`);
    } catch (error) {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-xl mb-64 mt-32 border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        <Title bigTitle={"Sign In"} smallTitle={""} />
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            className="block w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 mt-2 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            className="block w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 mt-2 text-sm">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#050d31] to-[#091583] text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition duration-200">
          Sign In
        </button>
      </form>
      <p className="mt-6 text-center text-gray-600">
        <Link
          to="/forgot-password"
          className="text-blue-500 hover:text-blue-700">
          Forgot Password?
        </Link>
      </p>
      <p className="mt-4 text-center text-gray-600">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500 hover:text-blue-700">
          Sign Up Instead
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
