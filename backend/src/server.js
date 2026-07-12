import express from "express";
import { ENV } from "./config/env.js";
// import { connect } from "mongoose";
import { connectDB } from "./config/db.js";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

import userRoutes from "./models/user.model.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(clerkMiddleware());

// connectDB();

app.get("/", (req, res) => res.send("Hello from server"));

app.use("/api/user", userRoutes);

// app.listen(ENV.PORT, () =>
//   console.log("Server is up and running on PORT:", ENV.PORT),
// );

const startServer = async () => {
  try {
    await connectDB();

    // listen for local development
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () =>
        console.log("Server is up and running on PORT:", ENV.PORT),
      );
    }
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
