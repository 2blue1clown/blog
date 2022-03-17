
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})



const baseURL =  "http://localhost:5262"

//const baseURL = "https://blogbackend20220308104133.azurewebsites.net"

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

module.exports = module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  ...nextConfig})
