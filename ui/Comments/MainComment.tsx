import React from "react";
import { Card } from "react-native-elements";
import { StyleSheet, View, Text } from "react-native";
import Title from "./Title";

import moment from "moment";

type CommentProps = {
  comment: IComment;
  onReply: () => void;
};

const MainComment = (props: CommentProps) => {
  return (
    <>
      <Card
        title={
          <Title
            name={props.comment.user.name}
            avatarSize={40}
            titleStyle={styles.title}
          />
        }
        containerStyle={styles.container}
      >
        <View style={styles.content}>
          <Text style={{ marginTop: 5 }}>{props.comment.content}</Text>
        </View>
      </Card>
      <View style={styles.subtitlesBox}>
        <View>
          <Text style={styles.subtitles}>
            {moment(props.comment.created_at).fromNow()}
          </Text>
        </View>
        <View>
          <Text style={styles.subtitles} onPress={props.onReply}>
            Reply
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "1%",
    margin: "0.5%",
    marginTop: 10,
    borderBottomLeftRadius: 15,
    backgroundColor: "#f9f9f9",
  },
  content: {
    marginBottom: 2,
    marginLeft: 16,
  },
  title: { fontSize: 20, paddingTop: 5 },
  subtitlesBox: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
  },
  subtitles: { color: "grey", fontWeight: "bold" },
});

export default MainComment;
