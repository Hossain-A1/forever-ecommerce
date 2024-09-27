import { v2 as cloudinary } from "cloudinary";
import { cloudnaryName, cloudnaryApiKey, cloudnarySecret } from "../secret.js";

const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: cloudnaryName,
    api_key: cloudnaryApiKey,
    api_secret: cloudnarySecret,
  });
};

export default connectCloudinary;
