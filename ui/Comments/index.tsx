import React, { Component, useRef } from 'react'
import { Text, StyleSheet, View, TextPropTypes, TextInput, StatusBar } from 'react-native'
import BackButton from './Components/backButton'
import HeadComment from './Components/HeadComment';
import commentReply from "./Components/finalexample.js";
import MessageInput from './Components/textInput';
import { ScrollView } from 'react-native-gesture-handler';


type CommentProps = {
  comment: IComment;
  onReply: () => void;
};

const App = (props:CommentProps) => {
  let inpRef: React.MutableRefObject<TextInput | undefined> = useRef();

  const focusInputBox = () => {
    if (inpRef.current) {
      inpRef.current.focus();
    }
  };

  const onReplyHandler = () => {
    focusInputBox();
  };
  const statusheight =StatusBar.currentHeight;
  return (
    <View style={{marginTop:statusheight,padding:5,justifyContent:'space-between'}}>
      <View style={{height:'91%'}}>
        <BackButton onBack={"nav to be added"}  />
        <View style={{}}>
        <ScrollView> 
          <HeadComment />
        </ScrollView>
        </View>
        </View>
        <View style={{justifyContent:'flex-end',height:'7%',translateY:14}}>
          <MessageInput/>
        </View>
      </View>
  )
}

export default App


const styles = StyleSheet.create({})
