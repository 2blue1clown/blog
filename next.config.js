

const baseURL =  "http://localhost:5262"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    backendURL: baseURL ,
    backendLoginUrl: baseURL + "/api/Authorization",
    backendUsersUrl: baseURL + "/api/Users",
    backendCommentsUrl: baseURL + "/api/Comments",
  }
}

module.exports = nextConfig
