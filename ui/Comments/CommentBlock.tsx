import React, {useRef} from 'react';
import {View, FlatList, TextInput, StyleSheet} from 'react-native';
import {Overlay} from 'react-native-elements';

import MaximisedComment from './MaximisedComment';
import MainComment from './MainComment';
import ReplyBox from './ReplyBox';
import BackButton from './BackButton';

type Props = {
  onBack: () => void;
  comment: IComment;
};

const CommentBox = (props: Props) => {
  let inpRef: React.MutableRefObject<TextInput | undefined> = useRef();

  const focusInputBox = () => {
    if (inpRef.current) {
      inpRef.current.focus();
    }
  };

  const onReplyHandler = () => {
    focusInputBox();
  };

  return (
    <Overlay
      isVisible
      fullScreen
      overlayStyle={styles.overlay}
      onRequestClose={props.onBack}>
      <View style={styles.outer}>
        <BackButton onBack={props.onBack} />
        <View style={styles.commentOuter}>
          <MainComment comment={props.comment} onReply={onReplyHandler} />
          <View style={styles.commentList}>
            <FlatList
              data={props.comment.replies}
              keyExtractor={comment => comment.pk.toString()}
              renderItem={({item}) => (
                <MaximisedComment comment={item} showReplies />
              )}
            />
          </View>
        </View>
        <ReplyBox
          placeholder={'Reply to ' + props.comment.user.name}
          ref={inpRef}
        />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlay: {padding: 0, paddingBottom: 0},
  outer: {flex: 1},
  commentOuter: {paddingHorizontal: 10, flex: 1},
  commentList: {paddingLeft: '4%', flex: 1},
});

export default CommentBox;
