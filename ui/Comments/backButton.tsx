/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Image, Text, View, Appearance} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'


type Props = {
  onBack: () => void;
};

const colorScheme = Appearance.getColorScheme();
let BackButtonContainer;
const BackButton = (props: Props) => {
  if (colorScheme === 'dark') {
    BackButtonContainer = (
      <TouchableOpacity onPress={props.onBack} activeOpacity={0.5}>
        <View style={{flexDirection: 'row'}}>
        <FontAwesomeIcon icon ={faChevronCircleLeft}
                        size={32}
                        color='#33BEF0'
                        />
          <Text
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              translateX: 5,
            }}>
            Back
          </Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    BackButtonContainer = (
      <TouchableOpacity onPress={props.onBack} activeOpacity={0.5}>
        <View style={{flexDirection: 'row'}}>
        <FontAwesomeIcon icon ={faChevronCircleLeft}
                        size={32}
                        color='#33BEF0'
                        />
          <Text
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              translateX: 5,
            }}>
            Back
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <View style={{flexDirection:'row'}}>
      <View style={{flex:1}}>{BackButtonContainer}</View>
      <Text style={{flex:2,textAlign:'center',textAlignVertical:'center',fontWeight:'bold',fontSize:20}}>Comments</Text>
      <Text style={{flex:1,textAlign:'center'}} />
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'center',alignContent:'center',borderBottomWidth:2,borderColor:'#33BEF0'}}>
        <View style={{flex: 0.495, height: 1, backgroundColor: '#33BEF0'}} />
        <View style={{flex: 0.495, height: 1, backgroundColor: '#33BEF0'}} />
      </View>
    </View>

  );
};

export default BackButton;
