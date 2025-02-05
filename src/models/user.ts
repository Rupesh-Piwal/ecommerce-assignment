import mongoose, { Document, Schema, Model } from "mongoose";

interface IUser {
  name: string;
  email: string;
  password: string;
  categories: mongoose.Types.ObjectId[];
  createdAt?: Date;
}

interface UserDocument extends IUser, Document {}

const UserSchema = new Schema<UserDocument>({
  name: { type: String, required: [true, "Name is required"] },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
  },
  password: { type: String, required: [true, "Password is required"] },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  createdAt: { type: Date, default: Date.now },
});

const UserModel: Model<UserDocument> =
  mongoose.models.User || mongoose.model<UserDocument>("User", UserSchema);

export default UserModel;
