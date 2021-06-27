import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import CommentList from './CommentList';
import CommentBlock from './CommentBlock';
import SideComment from './SideComment';

type Props = {
  comment: IComment;
  showReplies: boolean;
};

const MaximisedComment = (props: Props) => {
  let [selfExpanded, setSelfExpanded] = useState(false);

  const onSelectHandler = () => {
    setSelfExpanded(true);
  };

  const onBackHandler = () => {
    setSelfExpanded(false);
  };

  return (
    <>
      <TouchableOpacity onPress={onSelectHandler} activeOpacity={0.6}>
        <View style={styles.outer}>
          <SideComment comment={props.comment} />
          <CommentList comments={props.comment.replies} />
        </View>
      </TouchableOpacity>
      {selfExpanded ? (
        <CommentBlock comment={props.comment} onBack={onBackHandler} />
      ) : (
        <></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  outer: {
    //comment below main comment
    width: '100%',
    paddingLeft: '5%',
    marginTop: 10,
  },
});

export default MaximisedComment;
