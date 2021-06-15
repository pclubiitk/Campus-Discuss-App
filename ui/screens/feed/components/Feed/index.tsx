import React from 'react';
import { View, FlatList } from 'react-native';
import posts from '../../data/posts';
import Post from '../Post';

const Feed = () => (
  <View style={{ width: '100%' , flex: 1 }}>
    <FlatList
      data={posts}
      renderItem={({item}) => <Post post={item} />}
      keyExtractor={(item) => item.id}
    />
  </View>
)

export default Feed;
