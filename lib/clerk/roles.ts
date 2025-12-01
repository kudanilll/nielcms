import { db } from "@/lib/firebase/admin";
import { Role } from "@/types/role";

export async function getUserRole(userId: string): Promise<Role> {
  const doc = await db.collection("roles").doc(userId).get();
  const role = (doc.data()?.role as Role) ?? "viewer";
  return role;
}

export function can(
  role: Role,
  action: "manage_users" | "write" | "publish" | "delete"
) {
  if (role === "owner") return true;
  if (role === "admin") return action !== "manage_users" ? true : true;
  if (role === "editor")
    return action !== "manage_users" && action !== "delete";
  return action === "write" ? false : false;
}
