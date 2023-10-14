import type { NextApiRequest, NextApiResponse } from "next";
import { LoginDetails } from "../../../src/services/Authentication.service";
import { COMMENT_DATA } from "../../../data/comments";

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
  res: NextApiResponse<Comment[] | undefined>
) {
  if (req.method === "GET") {
    const { blog } = req.query;
    if (!blog || blog.length > 1) {
      res.status(404).json(undefined);
    } else {
      const blogComments = COMMENT_DATA.filter((c) =>
        c.blogName === blog[0] ? true : false
      );
      res.status(200).json(blogComments);
    }
  }
}
