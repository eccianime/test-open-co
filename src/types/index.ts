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
};
