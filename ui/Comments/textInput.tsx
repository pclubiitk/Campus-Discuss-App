import React from 'react'
import { Appearance, Image, Keyboard, KeyboardAvoidingView, OpaqueColorValue, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPaperPlane, } from '@fortawesome/free-solid-svg-icons'

const colorScheme = Appearance.getColorScheme();
let color = '#ffffffff'
let bgColor='#000000';
const MessageInput = () => {
    if(colorScheme==='dark'){
        bgColor='#010101ff'
        color='#000000'
    }
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{justifyContent:'flex-end',bottom:0}}
        > 
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{justifyContent:'flex-end',flexDirection:'row',padding:5}} >
            <View style={{borderWidth:1,borderRadius:40,width:'90%',alignSelf:'flex-end',minHeight:40,backgroundColor:'#010101ff',justifyContent:'center'}}> 
           <TextInput
                style={{width:'90%',translateX:10,margin:2,color:"grey"}}
                multiline
                placeholder="What's on your mind....."
                
            />
            </View>
            <View style= {{justifyContent:'center',padding:4}}>
            <FontAwesomeIcon icon={faPaperPlane}
            size={28}
            color='#33BEF7'
            />
        </View>
        </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
}

export default MessageInput

const styles = StyleSheet.create({})
