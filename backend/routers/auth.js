import express from "express";
import UserModel from "../models/Users.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import OnlineUserModal from "../models/OnlineUsers.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username) return res.status(400).json({ message: "Plz fill Username" });
    if (!email) return res.status(400).json({ message: "Plz fill Email" });
    if (!password) return res.status(400).json({ message: "Plz fill Password" });
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 12)

    const newUser = new UserModel({ username, email, password: hashPassword });
    await newUser.save();


    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/register", async (req, res) => {
  try {
    const allUsers = await UserModel.find(); // Fetch all users from the database
    res.status(200).json({
      message: "All Users Data",
      users: allUsers
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body

  const user = await UserModel.findOne({ email: email }).lean()

  if (!user) return res.status(400).json({ message: "User is not registered" })

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) return res.status(400).json({ message: "Invalid Password" })

  var token = jwt.sign(user, process.env.AUTH_SECRET);

  console.log("user from bakcend=>", user)

  const addOnlineUser = new OnlineUserModal({
    userId: user._id,
    email: user.email,
    username: user.username,
    token: token,
  })
  await addOnlineUser.save();

  res.status(201).json({ message: "User Login successfully", user: user, token: token });
})

router.get("/onlineUsers" , async (req , res)=>{
  try {
    const onlineUsers = await OnlineUserModal.find(); // Fetch all users from the database
    res.status(200).json({
      message: "All Online Users Data",
      onlineUsers: onlineUsers
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
})

router.delete("/login", async (req, res) => {
  const { user} = req.query

  // Delete the user by their `_id`
  const offlineUser = await OnlineUserModal.deleteOne({ userId : user[0].user._id});
console.log("deleteUser=>", user[0].user._id)

  res.status(201).json({ message: "Signout successfully" });
})




export default router; // Ensure you export the router
