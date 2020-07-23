import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-elements";
import Title from "./Title";

type CommentProps = {
  comment: IComment;
};

const SideComment = (props: CommentProps) => {
  return (
    <Card
      title={<Title name={props.comment.user.name} avatarSize={35} />}
      dividerStyle={styles.divider}
      containerStyle={styles.container}
    >
      <View style={styles.content}>
        <Text>{props.comment.content}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: "0.5%",
    borderBottomLeftRadius: 15,
    backgroundColor: "#f9f9f9",
  },
  content: {
    marginBottom: 2,
    marginLeft: 16,
  },
  divider: { marginBottom: 0 },
});

export default SideComment;
