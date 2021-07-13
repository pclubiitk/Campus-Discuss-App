import React from "react";
import { StyleSheet, Text } from "react-native";
import { ListItem } from "react-native-elements";

type Props = {
  name: string;
  avatarSize: number;
  titleStyle?: {};
};

let colors = [
  "#ef9a9a",
  "#ef5350",
  "#e53935",
  "#c62828",
  "#f06292",
  "#c2185b",
  "#ce93d8",
  "#9c27b0",
  "#7b1fa2",
  "#c5cae9",
  "#5c6bc0",
  "#3949ab",
  "#1a237e",
  "#90caf9",
  "#42a5f5",
  "#4dd0e1",
  "#4db6ac",
  "#00695c",
  "#c0ca33",
  "#4caf50",
  "#2e7d32",
  "#fff59d",
  "#fdd835",
  "#795548",
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
          transform: [{ translateY: -8 }, { translateX: -16 }],
        },
      }}
      title={
        <Text style={{ ...styles.name, ...props.titleStyle }}>
          {props.name}
        </Text>
      }
      containerStyle={styles.container}
    ></ListItem>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
    transform: [{ translateX: -24 }],
  },
  container: {
    padding: "0.8%",
    height: 20,
    marginTop: 5,
    backgroundColor: "#f9f9f9",
  },
});

export default Title;
