import { FlatList } from 'react-native';
import { PostListProps } from '../types';
import PostListItem from './PostListItem';

export default function PostList({ posts, changePage }: PostListProps) {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <PostListItem post={item} />}
      onEndReached={changePage}
      onEndReachedThreshold={0.9}
    />
  );
}
