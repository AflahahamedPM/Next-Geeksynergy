import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

function isCrawler(req) {
  const userAgent = req.headers.get("user-agent") || "";
  console.log("user-agent - ",userAgent);
  
  const crawlers = ["Googlebot", "Bingbot", "Yahoo! Slurp", "DuckDuckBot", "Baiduspider", "YandexBot", "Sogou", "Screaming Frog SEO Spider/20.4"];
  return crawlers.some((crawler) => userAgent.includes(crawler));
}

export default clerkMiddleware(async (auth, req) => {
  if (isCrawler(req)) {
    return NextResponse.next();
  }

  const { userId, redirectToSignIn } = await auth();

  if (isAdminRoute(req) && !userId) {
    return redirectToSignIn();
  }

  const isAdmin = userId === process.env.NEXT_PUBLIC_ADMIN_ID;

  if (isAdminRoute(req) && !isAdmin) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
