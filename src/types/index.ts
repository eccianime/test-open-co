import { SimpleLineIcons } from '@expo/vector-icons';
import { FlatListProps } from 'react-native';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostListProps = Omit<
  FlatListProps<Post>,
  'data' | 'renderItem' | 'keyExtractor'
> & {
  posts: Post[];
  changePage?: () => void;
};

export type PostListItemProps = {
  post: Post;
  isComplete?: boolean;
  index: number;
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
  index: number;
};

export type ErrorProps = {
  text: string;
  onPressRetry: () => void;
};

export type HeaderProps = {
  text: string;
  hasBackButton?: boolean;
};

export type EmptyListProps = {
  text: string;
  icon: keyof typeof SimpleLineIcons.glyphMap;
};

export type LoaderProps = {
  message?: string;
  size?: 'small' | 'large';
  color?: string;
};
