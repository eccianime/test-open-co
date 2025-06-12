import { FlatList } from 'react-native';
import { PostListProps } from '../types';
import PostListItem from './PostListItem';

export default function PostList({
  posts,
  changePage,
  ...props
}: PostListProps) {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <PostListItem post={item} index={index} />
      )}
      onEndReached={() => changePage && changePage()}
      onEndReachedThreshold={changePage ? 0.9 : undefined}
      {...props}
    />
  );
}
