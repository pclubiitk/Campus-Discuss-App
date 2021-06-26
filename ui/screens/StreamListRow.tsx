import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Avatar, Card , Input, ListItem, Icon, Button, Header} from "react-native-elements";



const list = [
  {
    pk: 2,
    title: 'Craze of Club House',
    description: 'Recently People are shifting to clubhouse',
    followed_by: 400,
  },
  {
    pk: 2,
    title: 'Craze of Club House',
    description: 'Recently People are shifting to clubhouse',
    followed_by: 400,
  },
  {
    pk: 2,
    title: 'Craze of Club House',
    description: 'Recently People are shifting to clubhouse',
    followed_by: 400,
  },
  {
    pk: 2,
    title: 'Craze of Club House',
    description: 'Recently People are shifting to clubhouse',
    followed_by: 400,
  },
  {
    pk: 2,
    title: 'Craze of Club House',
    description: 'Recently People are shifting to clubhouse',
    followed_by: 400,
  },
  {
    pk: 2,
    title: 'Craze of Club House',
    description: 'Recently People are shifting to clubhouse',
    followed_by: 400,
  },

];


export default function App() {
  return (
    <ScrollView>
      <Header
        leftComponent={{ icon: 'home', color: '#fff'  }}
        centerComponent={{ text: 'Stream List', style: { 
          textAlign: 'center',
          fontSize: 25,
          color: '#fff',
          fontFamily: 'Baskerville Old Face'
          } 
        }}
        rightComponent={
          <Avatar
            rounded
            title="A"
            titleStyle={{color:''}}
            overlayContainerStyle={{backgroundColor: 'white'}}
            size="small"
          />}

      />
        
      
      <View style={styles.bottomDivider}>
        {list.map((item, i) => (
          <ListItem key={i} bottomDivider>
            <ListItem.Content onPress={()=>{void}}>
              <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
              <ListItem.Subtitle style={styles.followed_by}>{item.followed_by} Followers</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bottomDivider:{
   color: '#fff', 
  },
    title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 3,
  },
  followed_by: {
    color: '#ccc',
    fontSize: 14,
  },
});