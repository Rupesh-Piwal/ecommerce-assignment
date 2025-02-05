import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json();

   
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await dbConnect();

    const [existingUserByName, existingUserByEmail] = await Promise.all([
      User.findOne({ name, isVerified: true }),
      User.findOne({ email, isVerified: true }),
    ]);

    if (existingUserByName || existingUserByEmail) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }


    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedPassword = await bcrypt.hash(password, 10);
    const expiryDate = new Date(Date.now() + 1 * 60 * 60 * 1000);

    const newUser = new User({
      email,
      password: hashedPassword,
      name,
      verifyCode,
      verifyCodeExpiry: expiryDate,
      isVerified: false,
    });

    await newUser.save();
    const emailResult = await sendVerificationEmail(email, verifyCode);

    if (emailResult.error) {
      return NextResponse.json(
        { error: "Verification email failed to send" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "User created successfully",
        userId: newUser._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Sign up error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
