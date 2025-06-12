import {
  useGetPostCommentsQuery,
  useGetSinglePostQuery,
} from '@/src/redux/api/postsApi';

export default function usePostDetailsHook(id: string) {
  const postId = Number(id);
  const skip = Number.isNaN(postId);

  const {
    data: post,
    isLoading: isPostLoading,
    isError: isPostError,
  } = useGetSinglePostQuery({ postId }, { skip });
  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useGetPostCommentsQuery({ postId }, { skip });

  return {
    post,
    comments,
    isLoading: isPostLoading || isCommentsLoading,
    isError: isPostError || isCommentsError,
  };
}
