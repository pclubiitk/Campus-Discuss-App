import React from 'react'
import { Appearance, Image, Keyboard, KeyboardAvoidingView, OpaqueColorValue, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'

const colorScheme = Appearance.getColorScheme();
let bgColor='#000000ff';
const MessageInput = () => {
    if(colorScheme==='dark'){
        bgColor='#25252501'
    }
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{justifyContent:'flex-end',bottom:0}}
        > 
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{justifyContent:'flex-end',flexDirection:'row'}} >
            <View style={{borderWidth:1,borderRadius:40,width:'90%',alignSelf:'flex-end',minHeight:40,backgroundColor:bgColor,justifyContent:'center'}}> 
           <TextInput
                style={{width:'90%',translateX:10,margin:2}}
                multiline
                placeholder="What's on your mind....."
                
            />
            </View>
            <View style= {{justifyContent:'center'}}>
            <Image source={require('../assets/send.png')}
                    style={{height:35,width:35,margin:2}}/></View>
        </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
}

export default MessageInput

const styles = StyleSheet.create({})
