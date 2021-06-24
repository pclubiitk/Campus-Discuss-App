import React,{Component} from 'react';
import { StyleSheet,Button, View,Text } from 'react-native';
import { 
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';  


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
         <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <Button
        onPress={() => navigation.navigate('Feed Screen')}
        title="Go to Feed Screen"
      />
    </View>
  );
}

function FeedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
  
function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
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
             <Drawer.Screen name="Profile" component={HomeScreen} />
                <Drawer.Screen name="Feeds" component={FeedScreen} />
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
  });