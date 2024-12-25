import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  role: { type: String, default: "user", enum: ["user", "admin"] },
});

export const UserModal =
  mongoose.models.Practice || mongoose.model("Practice", UserSchema);
