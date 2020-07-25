import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from "react-native";
import Swiper from "react-native-swiper";
import * as Animatable from "react-native-animatable";

const SwiperComponent = (props:any) => {

    const [state, setState] = useState(false);
    const [animation, setAnimation] = useState("");

    const handleIndexChange = (index:number) => {
        if (index == 2) {
            setState(true);
            setAnimation("bounceInRight");
        }
        else {
            setState(false);
            setAnimation("");
        }
    }

        return (
            <Swiper
                loop={false}
                dot={<View style={styles.dot} />}
                activeDot={<View style={styles.activeDot} />}
                onIndexChanged= {(index)=>handleIndexChange(index)}
            >
                <View style={styles.slide}>
                    <View style={styles.header}>
                        <Image
                            source = {require("./asset/custom.png")}
                            style={styles.image1}
                            resizeMode={"stretch"}
                        />
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.title}>
                            Campus Discuss IITK
                        </Text>
                        <Text style={styles.subtitle}>
                            Revolutionizing ideas through discussions at a single platform. Delivered specially for the IITK junta! 
                        </Text>
                    </View>
                </View>

                <View style={styles.slide}>
                    <View style={styles.header}>
                        <Image
                            source={require("./asset/custom3.jpg")}
                            style={styles.image2}
                            resizeMode={"stretch"}
                        />
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.title}>
                            Topic Specific
                        </Text>
                        <Text style={styles.subtitle}>
                            Check out streams that fit your genre and interests. Subscribe them to keep yourself updated !
                        </Text>
                    </View>
                </View>

                <View style={styles.slide}>
                    <View style={styles.header}>
                        <Image
                            source={require("./asset/custom4.png")}
                            style={styles.image3}
                            resizeMode={"stretch"}
                        />
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.title}>
                            Create Posts
                        </Text>
                        <Text style={styles.subtitle}>
                            Share your posts and let the discussion beign!
                        </Text>
                        {state?
                            <Animatable.View
                                animation={animation}
                                delay={0}
                                duration={1000}
                                useNativeDriver
                            >
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={()=>props.navigation.navigate("LoginScreen")} 
                                    >
                                    <Text style={{ color: "white" }}>Login</Text>
                                </TouchableOpacity>
                            </Animatable.View> : null}
                    </View>
                </View>
            </Swiper>
        );
}
    
export default SwiperComponent;

const { width, height } = Dimensions.get("screen");
const height_img = height * 0.5 * 0.8;
const width_img = height_img * 1.1;
const width_button = width * 0.3;

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    image1: {
        height: height_img,
        width: height_img*1.5
    },
    image3: {
        height: height_img*1.3,
        width: width_img*1.3
    },
    image2: {
        height: height_img,
        width: width_img
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#3465d9",
        textAlign: "center"
    },
    subtitle: {
        color: 'gray',
        textAlign: 'center',
        marginTop: 20
    },
    dot: {
        backgroundColor: 'rgba(52,101,217,.4)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5,
        marginVertical: 3
    },
    activeDot: {
        backgroundColor: "#3465d9",
        width: 20,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5,
        marginVertical: 3
    },
    button: {
        width: width_button,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#3645d9",
        borderRadius: 50,
        marginTop: 15
    }


});