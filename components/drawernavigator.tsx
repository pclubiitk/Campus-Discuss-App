import React from "react";

import { createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator } from "react-navigation-drawer"

import { Profile }  from "../ui/screens/profile"
import { Feed } from "../ui/screens/feed"

const  ProfileStack = createStackNavigator({

});

const ProfileStackScreen=()=>(
    <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
)


const  FeedStack = createStackNavigator({

});

const FeedStackScreen=()=>(
    <FeedStack.Navigator>
        <ProfileStack.Screen name="Profile" component={Profile} />
    </FeedStack.Navigator>
)




const Drawer = createDrawerNavigator({

});

export default() => (
    <NavigationContainer>
        <Drawer.Screen name="Profile" component={ProfileStackScreen}/>
        <Drawer.Screen name="Feed" component={FeedStackScreen}/>
    </NavigationContainer>
);

