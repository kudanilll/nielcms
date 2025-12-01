import { z } from "zod";

export const mediaSchema = z.object({
  publicId: z.string(),
  url: z.string().url(),
  format: z.string(),
  bytes: z
    .number()
    .max(Number(process.env.CLOUDINARY_MAX_FILE_SIZE || 10485760)),
});
