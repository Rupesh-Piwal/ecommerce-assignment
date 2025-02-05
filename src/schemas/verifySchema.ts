import { z } from "zod";

export const verifySchema = z.object({
  code: z.string().min(8, "Verification code must be 8 digits"),
});

export type VerifyInput = z.infer<typeof verifySchema>;
