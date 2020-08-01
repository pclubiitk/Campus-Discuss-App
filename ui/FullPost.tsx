import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import ViewMoreText from "react-native-view-more-text";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";

type Props = {
  post: IPost;
  onOpenComments: () => void;
};

type TitleProps = {
  name: string;
  pub_date: string;
  title: string;
  styles: any;
};

const colors = [
  { primary: "#102027", secondary: "#37474f" },
  { primary: "#260e04", secondary: "#4e342e" },
  { primary: "#7f0000", secondary: "#b71c1c" },
  { primary: "#78002e", secondary: "#ad1457" },
  { primary: "#38006b", secondary: "#6a1b9a" },
  { primary: "#00363a", secondary: "#006064" },
  { primary: "#003d00", secondary: "#33691e" },
  { primary: "#004c8c", secondary: "#0277bd" },
];

const getColor = () => {
  const randomIdx = Math.floor(Math.random() * colors.length);
  const color = colors[randomIdx];
  return color;
};

const Title = (props: TitleProps) => {
  const styles = props.styles;
  return (
    <View style={styles.titleBody}>
      <View>
        <Text style={styles.title} numberOfLines={1}>
          {props.title}
        </Text>
      </View>
      <View>
        <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode="middle">
          <Text
            style={styles.bold}
            onPress={() => {
              console.log(props.name);
            }}
          >
            {props.name}
          </Text>{" "}
          posted{" "}
          <Text style={styles.bold}>{moment(props.pub_date).fromNow()}</Text>
        </Text>
      </View>
    </View>
  );
};

const FullPost = (props: Props) => {
  const styles = createStyles();
  const MAX_LINES = 30;

  const renderViewMore = (
    onPress:
      | ((event: import("react-native").GestureResponderEvent) => void)
      | undefined
  ) => {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <LinearGradient colors={["#f2f2f2", "#a0a0a0"]} style={styles.viewMore}>
          <Icon name="down" type="antdesign" color="grey"></Icon>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  const renderViewLess = () => {
    return <></>;
  };

  return (
    <View>
      <Card
        title={
          <Title
            name={props.post.author.name}
            pub_date={props.post.last_modified}
            title={props.post.post_title}
            styles={styles}
          />
        }
        containerStyle={styles.container}
        wrapperStyle={styles.wrapper}
      >
        <View style={styles.body}>
          <View>
            <LinearGradient
              colors={["white", "#f0f0f0"]}
              style={styles.contentBody}
            >
              <ViewMoreText
                numberOfLines={MAX_LINES}
                renderViewMore={renderViewMore}
                renderViewLess={renderViewLess}
                textStyle={styles.content}
              >
                <Text>{props.post.post_text}</Text>
              </ViewMoreText>
            </LinearGradient>
          </View>
          <Button
            title="Open Comments"
            titleStyle={styles.buttonTitle}
            onPress={props.onOpenComments}
            type="outline"
            buttonStyle={styles.buttonBody}
          />
        </View>
      </Card>
    </View>
  );
};

const createStyles = () => {
  const color = getColor();
  return StyleSheet.create({
    container: {
      padding: 0,
      flexGrow: 1,
      borderRadius: 10,
      backgroundColor: color.secondary,
      margin: 5,
    },
    wrapper: { flexGrow: 1 },
    body: { paddingLeft: 5 },
    contentBody: {
      flexGrow: 1,
      backgroundColor: "white",
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      minHeight: 100,
    },
    content: {
      fontSize: 14,
      fontFamily: "sans-serif-medium",
      lineHeight: 18,
      padding: 5,
      paddingBottom: 0,
    },
    buttonBody: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      padding: 5,
    },
    buttonTitle: { color: "white" },
    titleBody: {
      backgroundColor: color.primary,
      padding: 5,
      alignContent: "stretch",
    },
    title: { color: "white", fontSize: 20 },
    subtitle: { color: "#e0e0e0", fontSize: 12 },
    bold: { fontWeight: "bold" },
    viewMore: {
      borderBottomRightRadius: 5,
      borderBottomLeftRadius: 5,
    },
  });
};

export default FullPost;
