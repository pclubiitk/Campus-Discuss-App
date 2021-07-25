import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View , Image, Button} from "react-native";
import Hyperlink from 'react-native-hyperlink'
import { NavigationContainer, StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import IUserdata from 'profile';


export const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title= "profile page"
        onPress= {()=>  navigation.navigate('IUserData')}
      />
    </View>
  );
};

export const IUserData= () => {
  const username= "abc";
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Image 
        source= {{
          uri : "#",
        }}
      />
      <Text>{username}</Text>
      <Hyperlink linkText={ url => url === '#'?'Hyperlink':url} >
        <Text>facebook -- (Add facebook url later) </Text>
      </Hyperlink>
      <Hyperlink linkText={ url => url === '#'?'Hyperlink':url} >
        <Text>github -- (Add github url later) </Text>
      </Hyperlink>
      <Hyperlink linkText={ url => url === '#'?'Hyperlink':url} >
        <Text>linkedin -- (Add linkedin url later) </Text>
      </Hyperlink> 
      <Text>Enter bio here</Text>
    </View>
  );
};

type RootStackParamList= {
  Home: undefined;
}

const Stack = createStackNavigator();
const RootStack = createStackNavigator<RootStackParamList>();


function App() {
  return (
    <View style={styles.container}>
     
      <Text>hello there</Text>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen name= "Home" component= {HomeScreen} />
        </RootStack.Navigator>
        {/* <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={IUserData} />
        </Stack.Navigator> */}
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;

