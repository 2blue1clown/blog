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

const isAuthenticated = (request: NextRequest) => {
  // console.log(request.headers.get("Authorization"));
  if (request.headers.get("Authorization") === "Bearer <JWT>") {
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
