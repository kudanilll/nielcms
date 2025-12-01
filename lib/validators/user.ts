import { z } from "zod";
import { Role } from "@/types/role";

export const roleSchema = z.object({
  role: z.enum(["owner", "admin", "editor", "viewer"] as [
    Role,
    Role,
    Role,
    Role
  ]),
});
