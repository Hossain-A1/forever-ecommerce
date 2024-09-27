import mongoose from "mongoose";
import { atlasURI } from "../secret.js";

const connectDB = async (option = {}) => {
  try {
    mongoose.connect(atlasURI, option);
    console.log("Connection to DB is successfull established");

    mongoose.connection.on("Error", (error) => {
      console.log(`Db connection error ${error}`);
    });
  } catch (error) {
    console.log(`could not connect ${error.toString()}`);
  }
};

export default connectDB;
