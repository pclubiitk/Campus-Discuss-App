import React, { useState } from 'react'
import { Appearance,Image, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowAltCircleUp,faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'

type props ={
    icon: string;
    
}
let buttoncontainer: {} | null | undefined;
const colorScheme = Appearance.getColorScheme();
const Darkthememgr = (props:props) => {
    
        if (props.icon=='up') {
            buttoncontainer =(
                <TouchableOpacity activeOpacity ={0.5}>
                    <View>
                        <FontAwesomeIcon icon ={faArrowAltCircleUp}
                        size={20}
                        color='#33BEF0'
                        />
                        

                    </View>
                </TouchableOpacity>
            )
        }
        if (props.icon=='down') {
            buttoncontainer =(
                <TouchableOpacity activeOpacity ={0.5}>
                    <View>
                        <FontAwesomeIcon icon ={faArrowAltCircleDown}
                        size={20}
                        color='#33BEF0'
                        />

                    </View>
                </TouchableOpacity>
            )
        }
    
    return (
        <View>
            {buttoncontainer}
        </View>
    )
}

export default Darkthememgr
