import React from "react";
import { useState } from "react";
import { TextInput } from "react-native";
import { StatusBar } from "react-native";
import { 
    StyleSheet, 
    Text, 
    View,  
    Image, 
    ScrollView ,
    NativeSyntheticEvent,
    TextInputChangeEventData,
    Linking,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
    profile:IUserData ,
    handlefblink:any, 
    onLogout: ()=>void,
    handleBackpress:any
}
const ProfileScreen=(prop:Props)=>{
    const [fblink,setfblink]=useState("");
    const handlefb = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const value=e.nativeEvent.text;
        setfblink(value);
        prop.handlefblink(fblink);
    }
    return (
        
        <View style={styles.container}>
            <StatusBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.titleBar}>
                    <Icon name="arrow-left" size={24} color="#52575D" onPress={()=>{prop.handleBackpress}}/>
                    <Icon name="exit-to-app" size={24} color="#52575D" onPress={()=>{prop.onLogout}}/>
                </View>

                <View style={{ alignSelf: "center" , paddingTop: 50}}>
                    <View style={styles.profileImage}>
                        <Image source={require("./assets/sample-dp.jpg")} style={styles.image} resizeMode="center"></Image>
                    </View>
                   
                    <View style={styles.active}></View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>{prop.profile.name}</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>{prop.profile.username}</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>{prop.profile.roll}</Text>
                        <Text style={[styles.text, styles.subText]}>IITK Roll</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1}]}>
                        <Text style={[styles.text, { fontSize: 24 }]}>{prop.profile.following}</Text>
                        <Text style={[styles.text, styles.subText]}>Followers</Text>
                    </View>
                    
                </View>

            
                
                <View style={{ alignItems: "center" , paddingTop: 55 }}>
                    <View style={styles.Item}>
                        <Icon name="email" size={24} color="#52575D" />
                        <Text style={[styles.text ,{paddingLeft:20 , fontSize:18}]}>{prop.profile.email}</Text>
                    </View>
                    <View style={styles.Item}>
                        <Icon name="facebook" size={24} color="#52575D"
                            onPress={()=>Linking.openURL(fblink)}
                        />
                        <TextInput 
                        onChange={(e)=>{handlefb(e)}} 
                        editable={true}
                        placeholder="Tap to set your fb link" 
                        style={[styles.text ,{paddingLeft:20 , fontSize:18, }]}>
                        {prop.profile.fblink}    
                        </TextInput>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
export default ProfileScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        color: "#52575D"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden",
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    Item: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16,
        marginLeft : 90,
        marginRight : 90
    },
});
