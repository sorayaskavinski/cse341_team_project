// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: Number, required: true }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
