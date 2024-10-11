import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import postsRouter from "./routes/postRoute.js";
import generateImageRouter from "./routes/GenerateImageRoute.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

// Db Connection

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URI)
    .then((e) => {
      console.log("MongoDB Connected:",e.connection.host);
    })
    .catch((err) => {
      console.error("Failed to connect to DB");
      console.error(err);
    });
};


app.use("/api/post", postsRouter);
app.use("/api/generateImage", generateImageRouter);
                                
app.get("/", async (req, res) => {
  res.status(200).json({
    message: "hello Manash Ranjan!",
  });
});



const startServer = async () => {
  try {
    connectDB();
    app.listen(8080, () => {
      console.log("server start on port 8080");
      console.log("http://localhost:8080");
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
