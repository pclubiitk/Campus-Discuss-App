import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ListItem} from 'react-native-elements';

type Props = {
  name: string;
  avatarSize: number;
  titleStyle?: {};
};

let colors = [
  '#ef9a9a',
  '#ef5350',
  '#e53935',
  '#c62828',
  '#f06292',
  '#c2185b',
  '#ce93d8',
  '#9c27b0',
  '#7b1fa2',
  '#c5cae9',
  '#5c6bc0',
  '#3949ab',
  '#1a237e',
  '#90caf9',
  '#42a5f5',
  '#4dd0e1',
  '#4db6ac',
  '#00695c',
  '#c0ca33',
  '#4caf50',
  '#2e7d32',
  '#fff59d',
  '#fdd835',
  '#795548',
];

const Title = (props: Props) => {
  const randomIdx = Math.floor(Math.random() * colors.length);
  let color = colors[randomIdx];

  return (
    <ListItem
      leftAvatar={{
        title: props.name[0].toUpperCase(),
        rounded: true,
        size: props.avatarSize,
        containerStyle: {
          backgroundColor: color,
          transform: [{translateY: -1}, {translateX: -22}], //avatar location
        },
      }}
      title={
        <Text style={{...styles.name}}>
          {props.name}
          <Text> </Text>
          {'\u25CF'}
        </Text>
      }
      containerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    height: 23,
    fontSize: 16,
    transform: [{translateX: -27}, {translateY: -2}], //title
  },
  container: {
    padding: '1%',
    height: 25,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#f9f9f9',
  },
});

export default Title;
