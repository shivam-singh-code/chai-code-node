import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET,
});

const uploadOnCloudnary = (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload to cloudnary
    const response = cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // File uploaded successfully
    console.log("file is uploaded on cloudnary full response", response);
    console.log("file is uploaded on cloudnary", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //Remove the locally saved temp file as the upload operation got falied
  }
};

export { uploadOnCloudnary };
