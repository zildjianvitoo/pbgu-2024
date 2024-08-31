import { auth } from "./auth";

export default auth(
  (req: {
    auth: any;
    nextUrl: { origin: string | URL | undefined; pathname: string };
  }) => {
    const session = req.auth;
    const loginUrl = new URL("/login", req.nextUrl.origin);
    if (!session) {
      return Response.redirect(loginUrl);
    }

    const isAccessingAdmin =
      req.nextUrl.pathname.startsWith("/admin-dashboard");
    if (isAccessingAdmin && session.user.role !== "admin") {
      return Response.redirect(loginUrl);
    }
  },
);

export const config = {
  matcher: ["/dashboard/:path*", "/admin-dashboard", "/admin-dashboard/:path*"],
};
