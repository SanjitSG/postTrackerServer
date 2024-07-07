import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import cors from "cors";
dotenv.config();
const app = express();

const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Post Tracker application backend server</h1>");
});

//middleware
app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

// backend to db connection using mongoose
mongoose
  .connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server is running in: http://localhost:${PORT}`)))
  .catch((err) => console.log(`Something went wrong. Error Message : ${err.message}`));
