import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("running middleware");
  if (!isAuthenticated(request)) {
    const response = NextResponse.json(
      {
        error: "not authenticated",
      },
      { status: 401 }
    );
    return response;
  }
}

const logHeaders = (request: NextRequest) => {
  //check the headers
  console.log(request.headers.get("typ"));
  console.log(request.headers.get("alg"));
};

const isAuthenticated = (request: NextRequest) => {
  // logHeaders(request);
  if (request.headers.get("typ") && request.headers.get("alg")) {
    console.log("authenticated");
    return true;
  }
  console.log("not authenticated");
  return false;
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/:path*",
};
