import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/")
    return NextResponse.redirect(new URL("/admin/dashboard/", req.url));
  if (pathname === "/admin")
    return NextResponse.redirect(new URL("/admin/dashboard/", req.url));
}

export const config = {};
