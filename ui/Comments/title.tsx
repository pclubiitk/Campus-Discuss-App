import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListItem} from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import moment from 'moment';

type Props = {
  name: string;
  avatarSize: number;
  titleStyle?: {};
  time: string;
};

let colors = [
  '#ef9a9a',  '#ef5350',  '#e53935',  '#c62828',  '#f06292',  '#c2185b',  '#ce93d8',  '#9c27b0',  '#7b1fa2',  '#c5cae9',  '#5c6bc0',  '#3949ab',  '#1a237e',  '#90caf9',  '#42a5f5',  '#4dd0e1',  '#4db6ac',  '#00695c',  '#c0ca33',  '#4caf50',  '#2e7d32',  '#fff59d',  '#fdd835',  '#795548',
];

const Title = (props: Props) => {
  const randomIdx = Math.floor(Math.random() * colors.length);
  let color = colors[randomIdx];

  return (
      <View style={{flexDirection:'row',alignContent:'flex-start',}} >
            <Avatar rounded title={props.name[0].toUpperCase()} containerStyle={{backgroundColor:color}} size={props.avatarSize} />
            <View style={{alignItems:'center'}}>
                <Text style={{paddingLeft:10,paddingTop:5}}>
                    {props.name}   
                    <Text> </Text>
                    {'\u25CF'}
                    <Text> </Text>
                    <Text style={styles.time}>{moment.utc(props.time).local().startOf('seconds').fromNow()}</Text>
                </Text>
            </View>         
      </View>
          
          
          
      
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    height: 23,
    fontSize: 16,
     //title
  },
  container: {
    padding: 2,
    height: 25,
    marginTop: 5,
    marginBottom: 0,
    backgroundColor: '#f9f9f9',
  },
  time:{
    fontSize:12,
    fontWeight:'normal',
    paddingLeft:5,
    
  },
});

export default Title;
