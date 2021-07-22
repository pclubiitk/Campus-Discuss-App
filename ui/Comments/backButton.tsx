/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Image, Text, View, Appearance} from 'react-native';


let BackButtonContainer;
const colorScheme = Appearance.getColorScheme();
const BackButton = (props: any) => {
  if (colorScheme === 'dark') {
    BackButtonContainer = (
      <TouchableOpacity onPress={props.onBack} activeOpacity={0.5}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/backButtonDark.png')}
            style={{width: 35, height: 35, translateX: 5}}
          />
          <Text
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              translateX: 10,
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
          <Image
            source={require('../assets/backButtonLight.png')}
            style={{width: 35, height: 35, translateX: 5}}
          />
          <Text
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              translateX: 10,
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
      <Text style={{flex:1}}>{BackButtonContainer}</Text>
      <Text style={{flex:2,textAlign:'center',textAlignVertical:'center',fontWeight:'bold',fontSize:20}}>Comments</Text>
      <Text style={{flex:1,textAlign:'center'}} />
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'center',alignContent:'center',borderBottomWidth:2,borderColor:'#33BEF0'}}>
        <View style={{flex: 0.485, height: 1, backgroundColor: '#33BEF0'}} />
        <View style={{flex: 0.485, height: 1, backgroundColor: '#33BEF0'}} />
      </View>
    </View>

  );
};

export default BackButton;
