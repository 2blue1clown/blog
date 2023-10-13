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
  {
    blogName: "blog-00",
    content: "This is the 2nd test comment",
    createdDate: new Date("December 17, 1995 03:24:00"),
    id: "2",
    title: "From Data file",
    userId: "2",
    username: "Tim",
  },
];
