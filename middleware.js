import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  if (req.nextUrl.pathname === "/UserDashBoard" && "/" && "/DoctorDashBoard") {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
    // You could also for any property on the session object,
    // like role === "admin" or name === "John Doe", etc.
    if (!session) return NextResponse.redirect("http://localhost:3000/login");
    // If user is authenticated, continue.
  }
}
