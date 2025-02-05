import { resend } from "../lib/resend";
import { VerificationEmail } from "../../emails/VerificationEmail";
import React from "react";

export const sendVerificationEmail = async (
  email: string,
  verifyCode: string
) => {
  try {
    await resend.emails.send({
      from: "noreply@example.com",
      to: email,
      subject: "Verification Code",
      react: React.createElement(VerificationEmail, { otp: verifyCode }),
    });
    return { success: "Verification email sent" };
  } catch (error) {
    console.error("Error sending verification email", error);
    return { error: "Error sending verification email" };
  }
};
