import { useAppDispatch } from "@/hooks/redux";
import { registerUser } from "@/store/AuthSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterForm } from "@/schemas/auth.schema";

function Register() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterForm) => {
    try {
      // Mapping fullname -> full_name karena API pake full_name
      await dispatch(
        registerUser({
          full_name: data.fullname,
          username: data.username,
          email: data.email,
          password: data.password,
        }),
      ).unwrap();

      toast.success("Register success! Redirecting to Login page");
      navigate("/login");
    } catch (error: any) {
      // Handle error dari backend
      if (error.response?.data?.field === "username") {
        setError("username", {
          message: error.response.data.message || "Username already exists",
        });
      } else if (error.response?.data?.field === "email") {
        setError("email", {
          message: error.response.data.message || "Email already exists",
        });
      } else {
        setError("root", {
          message: error.response?.data?.message || "Something went wrong",
        });
      }
    }
  };

  return (
    <div className="p-4 mt-10 mx-auto shadow rounded-lg bg-orange-150 w-full max-w-md">
      <img
        src="http://localhost:3000/uploads/Icon.png"
        alt="AntiSocial"
        className="w-auto h-16"
      />
      <h1 className="text-3xl font-bold py-4 text-gray-700 p-5">
        Become AntiSocial
      </h1>

      {/* Global Error */}
      {errors.root && (
        <p className="text-red-500 text-sm text-center mb-4">
          {errors.root.message}
        </p>
      )}

      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full max-w-sm mx-auto"
      >
        {/* Full Name Field */}
        <div>
          <input
            type="text"
            id="fullname"
            {...register("fullname")}
            placeholder="Full Name"
            className="border border-[#9f4200] rounded-lg p-2 w-full"
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullname.message}
            </p>
          )}
        </div>

        {/* Username Field */}
        <div>
          <input
            type="text"
            id="username"
            {...register("username")}
            placeholder="Username"
            className="border border-[#9f4200] rounded-lg p-2 w-full"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
          <p className="text-gray-500 text-xs mt-1">
            Username must start with a letter, no symbols or spaces
          </p>
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Email"
            className="border border-[#9f4200] rounded-lg p-2 w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <input
            type="password"
            id="password"
            autoComplete="new-password"
            {...register("password")}
            placeholder="Password"
            className="border border-[#9f4200] rounded-lg p-2 w-full"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
          <p className="text-gray-500 text-xs mt-1">
            Password must be at least 5 characters
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#9f4200] hover:bg-orange-700 text-white rounded-lg p-2 shadow disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
      <p className="text-center text-sm text-gray-700 mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-[#9f4200]">
          Login here!
        </a>
      </p>
    </div>
  );
}

export default Register;
