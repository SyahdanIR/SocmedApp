import { useAppDispatch } from "@/hooks/redux";
import { loginUser } from "@/store/AuthSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginForm } from "@/schemas/auth.schema";

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailOrUsername: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      await dispatch(
        loginUser({
          emailorusername: data.emailOrUsername,
          password: data.password,
        }),
      ).unwrap();

      toast.success("Login success! Redirecting to homePage");
      navigate("/home");
    } catch (error: any) {
      // Handle error dari backend
      if (error.response?.data?.message) {
        setError("root", {
          message: error.response.data.message,
        });
      } else {
        setError("root", {
          message: "Login data incorrect!",
        });
      }
    }
  };

  return (
    <div className="p-4 mx-auto shadow shadow-2 border-gray-500 rounded-lg bg-orange-150 w-full max-w-md">
      <img
        src="http://localhost:3000/uploads/Icon.png"
        alt="AntiSocial"
        className="w-auto h-16"
      />
      <h1 className="text-3xl font-bold py-4 text-gray-700 p-5">
        Login to AntiSocial
      </h1>

      {/* Global Error */}
      {errors.root && (
        <p className="text-red-500 text-sm text-center mb-4">
          {errors.root.message}
        </p>
      )}

      <form
        className="flex flex-col gap-4 w-full max-w-sm mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Email/Username Field */}
        <div>
          <input
            type="text"
            autoComplete="off"
            placeholder="Email/Username"
            {...register("emailOrUsername")}
            className="border border-[#9f4200] rounded-lg p-2 w-full"
          />
          {errors.emailOrUsername && (
            <p className="text-red-500 text-sm mt-1">
              {errors.emailOrUsername.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="border border-[#9f4200] rounded-lg p-2 w-full"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#9f4200] hover:bg-orange-700 text-white rounded-lg p-2 shadow disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className="text-center text-sm text-gray-700 mt-4">
        Don't have an account?{" "}
        <a href="/register" className="text-[#9f4200]">
          Let's create one!
        </a>
      </p>
    </div>
  );
}

export default Login;
