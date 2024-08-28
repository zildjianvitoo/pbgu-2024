import { auth } from "./auth";

export default auth(
  (req: { auth: any; nextUrl: { origin: string | URL | undefined } }) => {
    const session = req.auth;

    if (!session) {
      const loginUrl = new URL("/login", req.nextUrl.origin);
      return Response.redirect(loginUrl);
    }
  },
);

export const config = {
  matcher: ["/dashboard/:path*"],
};
