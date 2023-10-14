import type { NextApiRequest, NextApiResponse } from "next";
import { LoginDetails } from "../../src/services/Authentication.service";
import { COMMENT_DATA } from "../../data/comments";

type ResponseData = {
  message: string;
};

export interface NewComment {
  blogName: string;
  content: string;
  title: string;
  userId: string;
  username: string;
}

export interface Comment extends NewComment {
  createdDate: Date;
  id: string;
}

// currently just a place holder while i tested out how to use next api backends
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comment[] | undefined>
) {
  if (req.method === "GET") {
    res.status(200).json(COMMENT_DATA);
  }
  if (req.method === "POST") {
    console.log(req.body);
    const newComment: NewComment = req.body;

    const finalComment = {
      ...newComment,
      createdDate: new Date(),
      id: `${COMMENT_DATA.length + 1}`,
    };
    COMMENT_DATA.push(finalComment);

    res.status(200).json(COMMENT_DATA);
  }
}
