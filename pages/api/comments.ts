import type { NextApiRequest, NextApiResponse } from "next";
import { LoginDetails } from "../../src/services/Authentication.service";
import { COMMENT_DATA } from "../../data/comments";

type ResponseData = {
  message: string;
};

export type Comment = {
  blogName: string;
  content: string;
  createdDate: Date;
  id: string;
  title: string;
  userId: string;
  username: string;
};

// currently just a place holder while i tested out how to use next api backends
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comment[]>
) {
  //   if (req.method === "POST") {
  //     res.status(200).json({ message: "Hello, this was a post" });
  //     console.log(req.body as LoginDetails);
  //   }
  if (req.method === "GET") {
    res.status(200).json(COMMENT_DATA);
    console.log(req.body as LoginDetails);
  }
}
