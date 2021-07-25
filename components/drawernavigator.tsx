import React,{Component} from 'react';
import { StyleSheet,Button, View,Text} from 'react-native';
import {  Avatar } from 'react-native-elements'
import {
  Title
} from 'react-native-paper';
import { 
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';  


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
         <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    
    </View>
  );
}

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <View style={styles.container}>
            <View style={styles.userInfo}>
              <View style={{flexDirection:'row',marginTop: 15}}>
                  <Avatar
                      source={{
                          uri: 'data:image/jpeg;base64,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'
                      }}
                      size={80}
                  />
                <View style={{marginLeft:15, flexDirection:'column'}}>
                      <Title>Student Name</Title>
                      <Text>Student Roll</Text>
                      <Text>Username</Text>     
                </View>

               </View>
              
            </View>

        </View>
        
        <DrawerItem
            icon={({color, size}) => (
              <Icon 
              name="home-outline" 
              color={color}
              size={size}
              />
            )}
            label="Home"
            onPress={() => {props.navigation.navigate('Home')}}
        />

        <DrawerItem 
            icon={({color, size}) => (
                <Icon 
                name="account-outline" 
                color={color}
                size={size}
                />
            )}
            label="Profile"
            onPress={() => {props.navigation.navigate('Profile')}}
        />

        <DrawerItem 
            icon={({color, size}) => (
                <Icon 
                name="checkbox-blank-circle" 
                color={color}
                size={size}
                />
            )}
            label="Following"
            onPress={() => {props.navigation.navigate('Home')}}
        />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />

      </DrawerContentScrollView>
      
    );
  }



const Drawer = createDrawerNavigator();

function MyDrawer(){
    return(
        <Drawer.Navigator  drawerContent={props => <CustomDrawerContent {...props} />}>
             <Drawer.Screen name="Home" component={HomeScreen} />
             <Drawer.Screen name="Profile" component={HomeScreen} />
        </Drawer.Navigator>
    );
}


export default MyDrawer;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    userInfo: {
      paddingLeft :20,
    },
  });