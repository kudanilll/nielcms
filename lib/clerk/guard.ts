import { currentUser } from "@clerk/nextjs/server";
import { getUserRole } from "./roles";

export async function requireRole(
  min: "viewer" | "editor" | "admin" | "owner"
) {
  const user = await currentUser();
  if (!user) return { ok: false as const };
  const role = await getUserRole(user.id);
  const order = ["viewer", "editor", "admin", "owner"];
  const ok = order.indexOf(role) >= order.indexOf(min);
  return ok ? { ok: true as const, user, role } : { ok: false as const };
}
