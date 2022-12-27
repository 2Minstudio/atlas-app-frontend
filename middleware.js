import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getUser } from "./helpers/helper";
export async function middleware(request) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the `RequestCookies` API
  const cookie = request.cookies.get("atlastoken")?.value;
//   console.log(cookie); // => 'fast'
  const user = await getUser(cookie);
  console.log(user);
  //   const allCookies = request.cookies.getAll();
  //   console.log(allCookies); // => [{ name: 'nextjs', value: 'fast' }]

  //   request.cookies.has("nextjs"); // => true
  //   request.cookies.delete("nextjs");
  //   request.cookies.has("nextjs"); // => false

  //   // Setting cookies on the response using the `ResponseCookies` API
  const response = NextResponse.next();
  //   response.cookies.set("vercel", "fast");
  //   response.cookies.set({
  //     name: "vercel",
  //     value: "fast",
  //     path: "/test",
  //   });
  //   const cookie = response.cookies.get("vercel");
  //   console.log(cookie); // => { name: 'vercel', value: 'fast', Path: '/test' }
  // The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header.

  return response;
}

export const config = {
  matcher: "/admin/:path*",
};
