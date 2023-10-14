import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CommentsService, BlogComment } from "../../services/Comments.service";

export const useComments = () => {
  const [comments, setComments] = useState<Array<BlogComment>>([]);
  const router = useRouter();

  useEffect(() => {
    // This is how you do async fetch request in the useEffect() for some reason
    const fetchData = async () => {
      const blogName = router.pathname.slice(1); //the slice(1) gets rid of the / at the beginning of the path
      const res = await CommentsService.get(blogName);
      if (res) {
        setComments(res);
      }
    };
    fetchData();
  }, []);

  const addComment = async (newComment: BlogComment) => {
    const res = await CommentsService.post(
      newComment,
      router.pathname.slice(1)
    ); //the slice(1) gets rid of the / at the beginning of the path
    if (res) {
      setComments([...comments, res]); //this is throwing an error for some reason.
    }
  };
  return { comments, addComment };
};
