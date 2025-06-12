import {
  useGetPostCommentsQuery,
  useGetSinglePostQuery,
} from '@/src/redux/api/postsApi';

export default function usePostDetailsHook(id: string) {
  const {
    data: post,
    isLoading: isPostLoading,
    isError: isPostError,
  } = useGetSinglePostQuery({ postId: Number(id) });
  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useGetPostCommentsQuery({ postId: Number(id) });

  return {
    post,
    comments,
    isLoading: isPostLoading || isCommentsLoading,
    isError: isPostError || isCommentsError,
  };
}
