export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostListProps = {
  posts: Post[];
  changePage: () => void;
};

export type PostListItemProps = {
  post: Post;
  isComplete?: boolean;
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type CommentListItemProps = {
  comment: Comment;
};

export type ErrorProps = {
  text: string;
  onPressRetry: () => void;
};

export type HeaderProps = {
  text: string;
};
