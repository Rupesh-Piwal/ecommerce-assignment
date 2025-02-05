import * as React from "react";

interface VerificationEmailProps {
  otp: string;
}

export const VerificationEmail: React.FC<VerificationEmailProps> = ({
  otp,
}) => {
  return (
    <div>
      <h1>Verify Your Email</h1>
      <p>
        Please use the following verification code to complete your
        registration:
      </p>
      <div
        style={{
          background: "#f4f4f4",
          padding: "24px",
          borderRadius: "4px",
          marginTop: "16px",
          marginBottom: "16px",
          fontSize: "24px",
          textAlign: "center",
          letterSpacing: "4px",
        }}
      >
        {otp}
      </div>
      <p>This code will expire in 10 minutes.</p>
      <p>
        If you did not request this verification code, please ignore this email.
      </p>
    </div>
  );
};
