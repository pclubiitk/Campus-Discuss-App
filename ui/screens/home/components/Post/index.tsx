
import React from 'react';
import { View , StyleSheet } from 'react-native';
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";

export type PostProps = {
  post: IPost,
}

const Post = ({ post }: PostProps) => (
  <View style={styles.container}>
     <LeftContainer user={post.author} />
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

