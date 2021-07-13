
import React from 'react';
import { View , StyleSheet } from 'react-native';
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";

import { PostType } from '../../types';

export type PostProps = {
  post: PostType,
}

const Post = ({ post }: PostProps) => (
  <View style={styles.container}>
     <LeftContainer user={post.user} />
     <MainContainer post={post} />
  </View>
)

export default Post;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: 'lightgrey',
  }
});

