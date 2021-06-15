import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const IUserData = () => {

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

 

  const username= "Sarthak Goyal";
  
  return (
  <View style={styles.container}>
      
  <Text style={styles.heading}>Profile Screen</Text>
  <View style={styles.top}>
    <View style={styles.profileImage}>
      <Text style={styles.ImageText}>{username[0]}</Text>
    </View>
    <Text style={styles.Text}>{username}</Text>
  </View>  
    
    
    <View>
    <FlatList 
      contentContainerStyle= {{
        paddingBottom:0,
      }}
      data= {[
        {key: 'Coding enthusiast'},
        {key: 'Went to Allen Institute'},
        {key: 'Studies at IIT Kanpur'},
        {key: 'Lives in Kanpur, Uttar Pradesh'},
      ]}
      renderItem= {({item})=> <Text style={styles.Text}>{item.key}</Text> }
      ListFooterComponent={<View style={{width:15}}></View>}
    />
    </View>
    <View style={styles.urlbox}>
    <Text style={styles.url} onPress={()=> Linking.openURL('#') }>facebook</Text>
    <Text style={styles.url} onPress={()=> Linking.openURL('#') }>linkedin</Text>
    <Text style={styles.url} onPress={()=> Linking.openURL('#') }>github</Text>
    </View>
  <View style={styles.posts}>  
    <Text style={{fontSize:40,lineHeight:50,fontFamily:'Verdana'}}>Posts</Text>
    <Text style={{fontSize:20,lineHeight:30}}>Check out the cool conversations you have started in the past!</Text>
    <View>
      <FlatList 
          data= {Data}
          renderItem= {({item})=> (
            <View style={styles.box}>
            <Text>{item.title}{"\n"}{item.data} </Text>
            </View>
          )}
          ListFooterComponent={<View style={{width:15}}></View>}
      />
    </View>  
        
  </View>    
   
<StatusBar style="auto" />
</View>


);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#512DA8',
    margin: '20px 0',
  },
  ImageText: {
    fontSize: 70,
    color: '#fff',
    marginLeft: 27,
    marginTop: 10,
  },
  heading: {
    fontSize: 50, 
    paddingBottom: 30,
    textAlign: 'center',
    fontFamily: 'Verdana',
  },
  Text: {
    fontSize: 20,
    fontFamily: 'Baskerville Old Face',
  },
  url: {
    color: 'blue',
    fontSize: 20,
    
  },
  urlbox:{
      marginTop: 40,
      marginBottom: 40,
  },
  top: {
    alignItems: 'center',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 300,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'yellow',
    lineHeight:10,
    paddingHorizontal: 15,
    marginRight: 15,
  },
  posts: {
    alignItems: 'center',
  },
});
