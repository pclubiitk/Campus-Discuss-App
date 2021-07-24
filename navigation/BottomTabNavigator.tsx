
import * as React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import { BottomTabParamList, HomeNavigatorParamList, TabTwoParamList } from './ParamList';
import ProfilePicture from '../ui/screens/home/components/ProfilePicture';
// import HomeScreen from './HomeScreen';
// import TabTwoScreen from './TabTwoScreen';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();


export default function BottomTabNavigator() {


  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e81031', 
        showLabel: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: () => <TabBarIcon name="md-home" color={"#e81031"} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: () => <TabBarIcon name="ios-card" color={"#e81031"} />,
        }}
      />
    </BottomTab.Navigator>
  );
}


function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}


const TabOneStack = createStackNavigator<HomeNavigatorParamList>();


function HomeNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerTitle: 'Campus Discuss - Home',
          headerLeft: () => (
            <ProfilePicture size={40} image={'https://icons-for-free.com/iconfiles/png/512/Android-1320568265274623818.png'} />
          )
        }}
      />
    </TabOneStack.Navigator>
  );
}


const TabTwoStack = createStackNavigator<TabTwoParamList>();


function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ 
        headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
        headerTitle: 'Campus Discuss - Profile', 
        headerLeft: () => (
            <ProfilePicture size={40} image={'https://icons-for-free.com/iconfiles/png/512/Android-1320568265274623818.png'} />
          ) }}
      />
    </TabTwoStack.Navigator>
  );
}
