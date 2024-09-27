import app from "./app.js";
import connectCloudinary from "./config/cloudinary.js";
import connectDB from "./config/db.js";
import { serverPort } from "./secret.js";

app.listen(serverPort, async () => {
  console.log(`App listen on port ${serverPort}`);
  await connectDB();
  await connectCloudinary();
});
