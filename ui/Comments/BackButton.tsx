import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import {ListItem} from 'react-native-elements';

type Props = {
  onBack: () => void;
};

const BackButton = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onBack} activeOpacity={0.5}>
      <ListItem>
        <Image
          source={{
            uri: 'E:/Coding/Visual_Studio_Code/CampusApp/assets/backButton.png',
          }}
          style={{resizeMode: 'cover', width: 40, height: 40}}
        />
        <title>back</title>
      </ListItem>
    </TouchableOpacity>
  );
};

export default BackButton;
