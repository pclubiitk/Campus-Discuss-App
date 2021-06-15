import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { PostType } from "../../../types";
import moment from 'moment';

import Footer from './Footer';

export type MainContainerProps = {
  post: PostType
}

const MainContainer = ({ post }: MainContainerProps) => (
  <View style={styles.container}>
    <View style={styles.postHeaderContainer}>
      <View style={styles.postHeaderNames}>
        <Text style={styles.name}>{post.user.name}</Text>
        <Text style={styles.username}>@{post.user.username}</Text>
        <Text style={styles.createdAt}>{moment(post.createdAt).fromNow()}</Text>
      </View>
    </View>
    <View>
      <Text style={styles.content}>{post.content}</Text>
      {!!post.image && <Image style={styles.image} source={{ uri: post.image}} />}
    </View>
    <Footer post={post} />
  </View>
)

export default MainContainer;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  postHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postHeaderNames: {
    flexDirection: 'row',
  },
  name: {
    marginRight: 5,
    fontWeight: 'bold',
  },
  username: {
    marginRight: 5,
    color: 'grey',
  },
  createdAt: {
    marginRight: 5,
    color: 'grey',
  },
  content: {
    marginTop: 5,
    lineHeight: 18,
  },
  image: {
    marginVertical: 10,
    width: "100%",
    height: 200,
    resizeMode: 'cover',
    borderRadius: 15,
    overflow: 'hidden',
  }
});
