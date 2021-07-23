import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export type FooterContainerProps = {
  post: IPost
}

const Footer = ({ post }: FooterContainerProps) => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <Feather name={"bookmark"} size={20} color={'grey'} />
    </View> 
    &nbsp;&nbsp;
     <View style={styles.iconContainer}>
      <Feather name={"message-circle"} size={20} color={'grey'} />
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
});
