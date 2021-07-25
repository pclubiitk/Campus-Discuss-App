import React from 'react';
import {View, StyleSheet} from 'react-native';
import MinimisedComment from './MinimisedComment';

type Props = {
  comments: Array<IComment>;
};

const CommentList = (props: Props) => {
  const maxHiddenChats = 3;

  if (!props.comments) {
    return <> </>;
  }
  return (
    <View style={styles.commentList}>
      {props.comments.slice(0, maxHiddenChats).map((comment: IComment) => (
        <MinimisedComment comment={comment} key={comment.pk} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  commentList: {
    width: '100%',
    paddingLeft: '5%',
  },
});

export default CommentList;
