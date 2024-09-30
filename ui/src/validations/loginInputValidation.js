import { z } from "zod";

export const registrationSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(31, "Name should be at most 31 characters long"),
  email: z.string().nonempty("Email is required").email("Invalid email"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password should be at least 6 characters long")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/,
      "Password must contain at least one uppercase,lowercase,number, and special character"
    ),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email").nonempty("Email is required"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password should be at least 6 characters long")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/,
      "Password must contain at least one uppercase,lowercase,number, and special character"
    ),
});
