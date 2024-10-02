import app from "./app.js";
import connectCloudinary from "./config/cloudinary.js";
import connectDB from "./config/db.js";
import { serverPort } from "./secret.js";

const startServer = async () => {
  try {
    await connectDB();
    await connectCloudinary();
    console.log("Database and Cloudinary connections established");
  } catch (error) {
    console.error("Failed to establish connections", error);
  }
};

startServer();

// Conditionally listen to the server in development mode
if (process.env.NODE_ENV !== "production") {
  app.listen(serverPort, () => {
    console.log(`App listening on port ${serverPort}`);
  });
}

// Export the app for Vercel's serverless environment
export default app;
