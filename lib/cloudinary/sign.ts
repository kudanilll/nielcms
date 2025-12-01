import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export function signUpload(publicId?: string) {
  const folder = process.env.CLOUDINARY_UPLOAD_FOLDER || "cms-media";
  const ts = Math.floor(Date.now() / 1000);
  const params: Record<string, string> = { timestamp: String(ts), folder };
  if (publicId) params.public_id = publicId;
  const signature = cloudinary.utils.api_sign_request(
    params,
    process.env.CLOUDINARY_API_SECRET as string
  );
  return {
    timestamp: ts,
    folder,
    signature,
    api_key: process.env.CLOUDINARY_API_KEY,
  };
}
