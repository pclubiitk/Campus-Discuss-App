import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Avatar, Card , Input, ListItem, Icon, Button, Header} from "react-native-elements";



const users = {
  name: 'Sarthak Goyal',
  avatar: 'https://qph.fs.quoracdn.net/main-qimg-1c761741c76263eae062cad851b0b80f.webp'
}

const Data = [
  {
    title: "May, 2021",
    data: ["Finally, midsem over!!!", "Yaar, ye dukh kahe khatam nahi hota :'(", "Yaar..meko laga tha ek bar Harry Potter padh lena bhot h for the quiz... :')"]
  },
  {
    title: "April, 2021",
    data: ["Finally...mth quiz OVER!!!!!"]
  }
]

const listevil= [
  {
    title: 'Important days of my Life',
    icon: 'calendar',
    type:'evilicon'
  },
  {
    title: 'Education',
    icon: 'pencil',
    type: 'evilicon'
  },
  {
    title: 'Places I have been',
    icon: 'image',
    type: 'evilicon'
  },
]
const listData= ['21st July 2021', 'Studying at IIT Kanpur', 'Visited Kanpur']




function IUserData() {
  return (
    <ScrollView>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'Profile Page', style: { 
          textAlign: 'center',
          fontSize: 25,
          color: '#fff',
          fontFamily: 'Baskerville Old Face'
          } 
        }}
        rightComponent={ 
          <Button
          onPress={()=> {
            console.log("You pressed the logout button")
          }}
          icon={
            <Icon
              name="close"
              size={15}
              color="white"
              type='evilicon'
            />
          }
          
        />
         }
      />
      <Card>
      <Card.Divider/>
      <Card.Image source= {{uri: users.avatar}}>
        
        <Avatar
          rounded
          title={users.name[0]}
          size= {90}
          activeOpacity= {0.7}
          overlayContainerStyle={{backgroundColor: 'blue'}}
          containerStyle= {{ position: 'absolute', bottom: 0, alignSelf: 'center'}}
        />
      </Card.Image>
      <Text style= {styles.user}>{users.name}</Text>
      <Text>Just pretend that I have written some really good bio here and I am adding unnecessary text so that I have sufficient length.</Text>
      
      <View>
      {
        listevil.map((item, i) => (
          <ListItem.Swipeable key={i} rightContent={
            <Text>{listData[i]}</Text>
          } bottomDivider>
            <Icon name={item.icon} type = {item.type} color = '#23B6FF'/>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem.Swipeable>
        ))
      }
      </View>
      <Input
        placeholder='Facebook Profile link'
        leftIcon={
          <Icon
            name='sc-facebook'
            size={24}
            color='#23B6FF'
            type='evilicon'
          />
        }
      />
      <Input
        placeholder='GitHub Profile link'
        leftIcon={
          <Icon
            name='sc-github'
            size={24}
            color='#23B6FF'
            type='evilicon'
          />
        }
      />
      <Input
        placeholder='LinkedIn Profile link'
        leftIcon={
          <Icon
            name='sc-linkedin'
            size={24}
            color='#23B6FF'
            type='evilicon'
          />
        }
      />
      <Card wrapperStyle={{
      backgroundColor: '#FFFFFF'
    }}>
      <Card.Title style = {styles.headers1} >Posts</Card.Title>
      
        {
          Data.map((d,i) => {
            return(
              <View key={i} >
                <Text style = { styles.headers2}>{d.title}</Text>
                <Card containerStyle={{
                  borderColor: '#dbf4ff',
                  backgroundColor: '#dbf4ff',
                }}
                wrapperStyle= {{
                  backgroundColor: '#fff',
                  borderWidth: 2,
                  borderColor: '#ffffff'
                  
                }}>
                  <Text style={styles.body}>{d.data}</Text>
                </Card>
              </View>
            )
          })
        }
      
    </Card>
    </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  user: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Baskerville Old Face',
  },
  headers1: {
    textAlign: 'center',
    fontSize: 25,
    color: '#23b6ff',
    fontFamily: 'Baskerville Old Face'
  },
  headers2: {
    textAlign: 'left',
    fontSize: 15,
    color: 'black',
    fontFamily: 'Verdana'

  },
  body: {
    textAlign: 'left',
    fontSize: 15,
    color: '#025cb0',
    fontFamily: 'Lucida Console'
  }
});
