import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request) {
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
    // allow only session users
    if (userresp && userresp?.id) {
      const usergroups = userresp?.groups;
      // If admin path make sure they are super admin access exist
      if (request.nextUrl.pathname.startsWith("/admin")) {
        if (!usergroups || !Object.values(usergroups).find((v) => v == 4)) {
          // request.nextUrl.pathname = "/";
          return NextResponse.redirect(new URL("/", request.url));
        }
      }
      
      const is_eligible = userresp?.is_eligible;

      if (request.nextUrl.pathname.startsWith("/dashboard")) {
        // Stop user who don't pay, pass, attend test
        const { paid, passed, test_taken, retried_count, allow_retry } =
          is_eligible;
        if (!paid || !passed || !test_taken) {
          return NextResponse.redirect(new URL("/", request.url));
        }
      }
    } else {
      console.log("Redirect non session users to home page");
      request.cookies.delete("atlastoken");
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
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};
