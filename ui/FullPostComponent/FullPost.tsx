import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { type IPost } from "../types";

type Props = {
  post: IPost,
  onOpencomments: ()=>void;
};

const CButton = (props : Props) => {
  const onPress = () => {
    props.onOpenComments();
  }

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Feather name={"message-square"} size={30} color="white" />
    </TouchableOpacity>
  )
};

const FullPost = ( {post} : Props) => {
  return (
    <View style={styles.container}>
       <View style={styles.postHeaderContainer}>
         <View style={styles.postHeaderNames}>
           <Text style={styles.name}>{post.author.name}</Text>
           <Text style={styles.username}>@{post.author.username}</Text>
           <Text style={styles.createdAt}>{post.pub_date}</Text>
         </View>
       </View>
       <View>
           <Text style={styles.content}>{post.post_text}</Text>
       </View>
       <CButton onOpenComments={props.onOpenComments}/>
    </View>
  );
}

export default FullPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#e81031',
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
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
  }
});

