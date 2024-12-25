import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./lib/connectDB.js";
import { UserModal } from "./lib/Models/UserModal.js";

dotenv.config();

const app = express();
const PORT = 8000;
let AllUser = [];

app.get("/", async (req, res) => {
  res.status(201).send({
    msg: "All User Fetched",
    error: false,
    allUser: AllUser,
  });
});

app.post("/", async (req, res) => {
  // const { userName, email, password, role } = req.body;
  console.log(req.body);
  
  // try {
  //   if (!userName || !email || !password) {
  //     return res.status(401).send({
  //       msg: "Please Provide all details",
  //       error: true,
  //     });
  //   } else {
  //     const newUser = new UserModal({
  //       userName,
  //       email,
  //       password,
  //       role,
  //     });

  //     newUser = await newUser.save();
  //     AllUser.push(newUser);

  //     return res.status(201).send({
  //       msg: "User Resgistered Successfully",
  //       error: false,
  //       newUser,
  //     });
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
