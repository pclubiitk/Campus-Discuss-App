import React, {useState, forwardRef} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

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
        <TouchableOpacity
          style={styles.sendIcon}
          onPress={onReplyHandler}
          activeOpacity={0.5}>
          <Image
            source={require('../../assets/send.png')}
            style={{width: 40, height: 40, translateY: 3}}
          />
        </TouchableOpacity>
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
    marginRight: 22,
    alignSelf: 'center',
  },
  sendIcon: {
    translateX: -12,
    translateY: -5,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  inputBox: {flexDirection: 'row'},
  outer: {
    justifyContent: 'flex-end',
    backgroundColor: '#e0e0e0',
  },
  iconContainer: {
    alignSelf: 'center',
    translateY: -30,
    height: 40,
    width: 40,
    justifyContent: 'center',
  },
});

export default ReplyBox;
