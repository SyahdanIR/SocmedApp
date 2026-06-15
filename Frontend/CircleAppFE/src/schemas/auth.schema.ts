// schemas/auth.schema.ts
import { z } from "zod";

// Schema untuk Register
export const registerSchema = z.object({
  fullname: z
    .string()
    .min(3, "FullName must be at least 3 characters")
    .max(50, "FullName must be at least 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Fullname can only be letters and spaces"),

  username: z
    .string()
    .min(4, "Username must be at least 4 characters")
    .max(20, "Username must be at least 20 characters")
    .regex(/^[a-zA-Z\s]+$/, "The username must not contain symbols and spaces")
    .regex(/^[a-zA-Z]/, "Username must start with a letter")
    .toLowerCase(), // Convert ke lowercase otomatis

  email: z
    .string()
    .email("Format email invalid")
    .min(5, "Email too short")
    .max(100, "Email too long")
    .toLowerCase(),

  password: z
    .string()
    .min(5, "Password must be at least 5 characters")
    .max(100, "Password must be at least 100 characters"),
});

// Schema untuk Login
export const loginSchema = z.object({
  emailOrUsername: z
    .string()
    .min(3, "Email or username must be at least 3 characters")
    .max(100, "Email or username is too long"),

  password: z.string().min(1, "Password is required"),
});

// Type inference untuk TypeScript
export type RegisterForm = z.infer<typeof registerSchema>;
export type LoginForm = z.infer<typeof loginSchema>;
