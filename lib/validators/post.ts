import { z } from "zod";

export const postSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(3).max(120),
  slug: z
    .string()
    .min(3)
    .max(160)
    .regex(/^[a-z0-9-]+$/),
  status: z.enum(["draft", "published", "archived"]).default("draft"),
  content: z.string().min(1),
  coverUrl: z.string().url().optional(),
});
