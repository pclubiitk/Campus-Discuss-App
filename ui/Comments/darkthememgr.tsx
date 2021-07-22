import React, { useState } from 'react'
import { Appearance,Image, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native'

type props ={
    icon: string;
    
}
let buttoncontainer: {} | null | undefined;
const colorScheme = Appearance.getColorScheme();
const Darkthememgr = (props:props) => {
    const [upDark, setUpDark] = useState('\'../assets/up_dark.png\'')
    const [upLight, setUpLight] = useState("'../assets/up.png'")
    const [downDark, setDownDark] = useState("\'../assets/down_dark.png\'")
    const [downLight, setDownLight] = useState('../assets/down.png')

    const [imgSource1, setimgSource1] = useState('..assets/up_selected.png');
    const [imgSource2, setimgSource2] = useState('..assets/down_selected.png');
    const [likeToggle, setlikeToggle] = useState(0);
    const [dislikeToggle, setdislikeToggle] = useState(0);
    if (colorScheme ==='dark') {
        if (props.icon=='up') {
            buttoncontainer =(
                <TouchableOpacity activeOpacity ={0.5}>
                    <View>
                        <Image 
                        source ={require('../assets/up_dark.png')}
                        style={{height:20,width:20}}
                        />

                    </View>
                </TouchableOpacity>
            )
        }
        if (props.icon=='down') {
            buttoncontainer =(
                <TouchableOpacity activeOpacity ={0.5}>
                    <View>
                        <Image 
                        source ={require('../assets/down_dark.png')}
                        style={{height:20,width:20}}
                        />

                    </View>
                </TouchableOpacity>
            )
        }
    } else {
        if (props.icon=='up') {
            buttoncontainer =(
                <TouchableOpacity activeOpacity ={0.5}>
                    <View>
                        <Image 
                        source ={require('../assets/up.png')}
                        style={{height:20,width:20}}
                        />

                    </View>
                </TouchableOpacity>
            )
        }
        if (props.icon=='down') {
            buttoncontainer =(
                <TouchableOpacity activeOpacity ={0.5}>
                    <View>
                        <Image 
                        source ={require('../assets/down.png')}
                        style={{height:20,width:20}}
                        />

                    </View>
                </TouchableOpacity>
            )
        }
    }
    return (
        <View>
            {buttoncontainer}
        </View>
    )
}

export default Darkthememgr
