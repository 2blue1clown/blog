import type { NextApiRequest, NextApiResponse } from "next";
import { LoginDetails } from "../../src/services/Authentication.service";

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    res.status(200).json({ message: "Hello, this was a post" });
    console.log(req.body as LoginDetails);
  }
  if (req.method === "GET") {
    res.status(200).json({ message: "Hello, this was a GET" });
    console.log(req.body as LoginDetails);
  }
  //   res.status(200).json({ message: "Hello from Next.js!" });
}
