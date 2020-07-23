import React from "react";
import { TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";

type Props = {
  onBack: () => void;
};

const BackButton = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onBack} activeOpacity={0.5}>
      <ListItem leftIcon={{ name: "arrow-back" }} title="Back" />
    </TouchableOpacity>
  );
};

export default BackButton;
