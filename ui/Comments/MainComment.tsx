import React from 'react';
import {Card} from 'react-native-elements';
import {StyleSheet, View, Text} from 'react-native';
import Title from './Title';

import moment from 'moment';

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
            titleStyle={styles.titleMain}
          />
        }
        containerStyle={styles.container}>
        <View style={styles.content}>
          <Text style={{marginTop: 5}}>{props.comment.content}</Text>
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
    paddingLeft: '2%', //main comment avatar and box
    padding: '1%',
    margin: '0.5%',
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: '#f9f9f9',
  },
  content: {
    marginBottom: 2, //main comment content
    marginLeft: 10,
  },
  title: {fontSize: 20, paddingBottom: 0},
  subtitlesBox: {
    marginBottom: 0, //tinme and reply below comment main
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
  },
  subtitles: {color: 'grey', fontWeight: 'bold'},
  titleMain: {
    height: 25,
    translateY: 2,
    fontSize: 19,
  },
});

export default MainComment;
