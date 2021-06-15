import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PostType } from "../../../../types";
import { Feather, EvilIcons, AntDesign } from '@expo/vector-icons';

export type FooterContainerProps = {
  post: PostType
}

const Footer = ({ post }: FooterContainerProps) => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <AntDesign name={"hearto"} size={20} color={'grey'} />
      <Text style={styles.number}>{post.numberOfLikes}</Text>
    </View> 
    &nbsp;&nbsp;
     <View style={styles.iconContainer}>
      <Feather name={"message-circle"} size={20} color={'grey'} />
      <Text style={styles.number}>{post.numberOfComments}</Text>
    </View>
  </View>
)

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  number: {
    marginLeft: 5,
    color: 'black',
    textAlign: 'center'
  },
});
