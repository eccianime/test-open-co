import { EmptyList, Header, Loader, PostList } from '@/src/components';
import useSearchHook from '@/src/hook/useSearchHook';
import { TextInput, View } from 'react-native';

export default function Search() {
  const {
    filteredPosts,
    isLoading,
    searchText,
    setSearchText,
    debouncedSearchText,
  } = useSearchHook();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View className='flex-1 '>
      <Header text='Post Search' />
      <TextInput
        value={searchText}
        onChangeText={setSearchText}
        placeholder='Search for a post'
        className='border border-default-primary rounded-lg p-4 mx-6 font-poppins_medium mb-6'
      />

      <PostList
        posts={debouncedSearchText.length > 2 ? filteredPosts : []}
        contentContainerClassName={`${
          !filteredPosts.length || debouncedSearchText.length < 3
            ? 'flex-1'
            : ''
        }`}
        ListEmptyComponent={
          <View className='flex-1 items-center justify-center mx-6'>
            {debouncedSearchText.length > 2 ? (
              <EmptyList text='No posts found' icon='question' />
            ) : (
              <EmptyList
                text='Write at least 3 characters to start the search'
                icon='magnifier'
              />
            )}
          </View>
        }
      />
    </View>
  );
}
