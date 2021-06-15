import React, {useState, forwardRef} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';

type Props = {
  placeholder: string;
};
const ReplyBox = forwardRef((props: Props, ref) => {
  let [inputText, setInputText] = useState('');

  const onReplyHandler = () => {
    console.log(inputText);
    setInputText('');
  };

  const textChangeHandler = (text: string) => {
    setInputText(text);
  };
  return (
    <View style={styles.outer}>
      <View style={styles.inputBox}>
        <TextInput
          placeholder={props.placeholder}
          style={styles.input}
          multiline
          onChangeText={textChangeHandler}
          value={inputText}
          ref={ref}
        />
        <TouchableNativeFeedback
          style={styles.sendIcon}
          onPress={onReplyHandler}>
          <Image
            source={require('E:/Coding/Visual_Studio_Code/CampusApp/assets/send.png')}
          />
        </TouchableNativeFeedback>
        {/* <Icon
          name="reply"
          type="entypo"
          color="#517fa4"
          size={20}
          reverse
          onPress={onReplyHandler}
          containerStyle={styles.iconContainer}
        /> */}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  input: {
    minHeight: 40,
    maxHeight: 100,
    marginVertical: 10,
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 21,
    marginLeft: 10,
    marginRight:22,
    alignSelf: 'center',
  },
  sendIcon: {
    alignSelf: 'flex-end',
    translateY: -3,
  },
  inputBox: {flexDirection: 'row'},
  outer: {
    justifyContent: 'flex-end',
    backgroundColor: '#e0e0e0',
  },
  iconContainer: {alignSelf: 'flex-end', translateY: -3},
});

export default ReplyBox;
