import dotenv from "dotenv";
dotenv.config();

const serverPort = process.env.PORT || 4001;

const atlasURI =
  process.env.MONGO_DB_ATLAS_URL || "mongodb://localhost:27017/Forever";

const cloudnaryApiKey = process.env.CLOUDINARY_API_KRY || "299758788324545";
const cloudnarySecret =
  process.env.CLOUDINARY_SECRET_KRY || "TjJIWYKs_Sqi35VN_CqxFVBPdjY";
const cloudnaryName = process.env.CLOUDINARY_NAME || "dyaj1dlzu";

const jwtSecret = process.env.JWT_SECRET || "7293jkdkasfsnfsfns";

const adminEmail = process.env.ADMIN_EMAIL || "foreveradmin@gmail.com";
const adminPassword = process.env.ADMIN_PASSWORD || "Abcabc123!";

export {
  serverPort,
  atlasURI,
  cloudnaryApiKey,
  cloudnarySecret,
  cloudnaryName,
  jwtSecret,
  adminEmail,
  adminPassword,
};
