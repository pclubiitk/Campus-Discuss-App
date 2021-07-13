import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";

import MaximisedComment from "./MaximisedComment";
import ReplyBox from "./ReplyBox";
import BackButton from "./BackButton";

type Props = {
  isVisible: boolean;
  onBack: () => void;
  comments: Array<IComment>;
};

const CommentBox = (props: Props) => {
  return (
    <Overlay
      isVisible={props.isVisible}
      fullScreen
      overlayStyle={styles.overlay}
      onRequestClose={props.onBack}
    >
      <View style={styles.outer}>
        <BackButton onBack={props.onBack} />
        <View style={styles.commentOuter}>
          <View style={styles.commentList}>
            <FlatList
              data={props.comments}
              keyExtractor={(comment) => comment.pk.toString()}
              renderItem={({ item }) => (
                <MaximisedComment comment={item} showReplies={true} />
              )}
            />
          </View>
        </View>
        <ReplyBox placeholder={"Write a comment..."} />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  commentOuter: { paddingHorizontal: 10, flex: 1 },
  commentList: { paddingLeft: "5%", flex: 1 },
  overlay: { padding: 0 },
  outer: { flex: 1 },
});

export default CommentBox;
