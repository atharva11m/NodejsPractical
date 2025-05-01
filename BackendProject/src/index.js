// require("dotenv").config({path:'./env'});
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_Name } from "./constants.js";
import connectDB from "./db/db.js";
dotenv.config({
  path: "./env",
});
connectDB();
