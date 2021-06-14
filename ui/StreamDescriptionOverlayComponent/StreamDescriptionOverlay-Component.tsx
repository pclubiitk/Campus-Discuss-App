import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
  } from "react-native";
  import React, { useState } from 'react';
  import { Overlay } from 'react-native-elements';
  import Icon from 'react-native-vector-icons/FontAwesome';
  
  type Props = {
      stream: IStream;
      open : boolean;
      onButtonPress: ()=>void;
      isFollowed: boolean;
    };

    const GetDescription=(props : Props) => {
      return (
      <View style={Overlaystyles.component}>
        <Text style={Overlaystyles.component}>{props.stream.description}</Text>
      </View>
    );
  };
  const GetTitle=(props : Props) => {
    return (
    <View>
      <Text style={Overlaystyles.title}>{props.stream.title}</Text>
     </View>
    );
  };
  const GetFollowed_by=(props: Props) => {
    return (
    <View style={Overlaystyles.component}>
      <Text style={{color: "grey"}}><Text style={Overlaystyles.followers}>{props.stream.followed_by}</Text> Subscribers</Text>
    </View>
    );
  };
  const MyButton=(props : Props)=>{
    const [following,changefollowing]=useState(props.isFollowed);
    const [myIcon, setmyIcon] = following? useState("bell-slash") : useState("bell");
    const [buttonColor, setbuttonColor] = following? useState("#1762e3") : useState("#ff0000");
    function changeit(){
        changefollowing((following) ? false : true);
        setmyIcon(!following ? "bell-slash" : "bell");
        setbuttonColor(!following ? "#1762e3" : "#ff0000");
        props.onButtonPress();
    }
    return(
      <View style={Overlaystyles.component}>
        {
            <Icon.Button
            name={myIcon}
            backgroundColor={buttonColor}
            onPress={changeit}
            >
                {(following)? "UNSUBSCRIBE" : "SUBSCRIBE"}
            </Icon.Button>                    
        }
      </View>
    );
  };
    const StreamDescriptionOverlay = (props : Props) => {
    const [visible, setVisible] = useState(props.open);
    const toggleOverlay = () => {
      setVisible(!visible);
    };    
    return (
      <View>
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={Overlaystyles.container}>
        <Image
          source={require("./assets/cryptic.jpeg")}
          style={Overlaystyles.image}
        />          
          <GetTitle stream={props.stream} />
          <GetFollowed_by stream={props.stream} />
          <GetDescription stream={props.stream} />
          <MyButton isFollowed={props.isFollowed} onButtonPress={props.onButtonPress}/>
        </Overlay>
      </View>
    );
    };
 export default StreamDescriptionOverlay;
  const Overlaystyles = StyleSheet.create({
    title: {
        paddingTop: 10,
        color: "#000000",
        fontSize: 30,
        fontWeight: "bold",
        paddingBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
      height: 0.75 * Dimensions.get("screen").height,
      width: 0.75 * Dimensions.get("screen").width,
      flex: 0.5,
      borderRadius: 8,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    image: {
      height: 0.3 * Dimensions.get("screen").height,
      width: 0.3 * Dimensions.get("screen").width,
      flex: 1.65,
      borderRadius: 0.50 * Dimensions.get("screen").width,
    },
    followers:{
      fontSize: 15,
      fontWeight: "bold",
      color: "grey",
      paddingTop: 0,
      alignItems: "flex-start",
    },
    component: {
        flex: 1,
        fontSize: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
  });
