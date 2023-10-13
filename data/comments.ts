import { Comment } from "../pages/api/comments";

export const COMMENT_DATA: Comment[] = [
  {
    blogName: "blog-00",
    content: "This is a test comment",
    createdDate: new Date(),
    id: "1",
    title: "From Data file",
    userId: "1",
    username: "Jono",
  },
];
