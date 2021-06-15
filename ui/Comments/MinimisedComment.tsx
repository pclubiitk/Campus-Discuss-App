import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Card} from 'react-native-elements';

type Props = {
  comment: IComment;
};

const MinimisedComment = (props: Props) => {
  return (
    <Card containerStyle={styles.container}>
      <Text numberOfLines={1}>
        <Text style={styles.name}>{' ' + props.comment.user.name}</Text>
        <Text>{'  ' + props.comment.content}</Text>
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
    marginBottom: 4,
    marginTop: 4,
  },
  name: {
    fontWeight: 'bold',
    marginLeft: 7,
    marginRight: 5,
  },
});

export default MinimisedComment;
