import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the `RequestCookies` API
  const cookie = request.cookies.get("atlastoken")?.value;
  const url = `${process.env.API_URL}/api/user/`;

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Token ${cookie}`,
      "Content-Type": "application/json",
    },
  };
  if (cookie) {
    const userresp = await fetch(url, requestOptions).then((response) =>
      response.json()
    );
    const usergroups = userresp?.groups;
    if (!Object.values(usergroups).find((v)=> v == 4)) {
      request.nextUrl.pathname = "/";
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  // const userresp = await fetch(url, requestOptions).then((response) => response.json());
  // const data = await userresp.json();
  // console.log(cookie, url); // => 'fast'
  // const requestOptions = {}
  // const response = await fetch(url, requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => this.setState({ postId: data.id }));

  // const user = await getUser(cookie);
  // console.log(user,"user from middleware");
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
