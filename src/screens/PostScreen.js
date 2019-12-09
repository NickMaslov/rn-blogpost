import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DATA } from "../data";
import { THEME } from "../theme";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam("postId");

  const post = DATA.find(p => p.id === postId);

  const removeHandler = () => {
    Alert.alert(
      "Delete Post",
      "Your sure you want to delete post?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => console.log("OK Pressed")
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView style={styles.center}>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title="Delete"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam("date");
  const booked = navigation.getParam("booked");
  const iconName = booked ? "ios-star" : "ios-star-outline";
  return {
    headerTitle: "Post from " + new Date(date).toLocaleDateString(),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Take photo"
          iconName={iconName}
          onPress={() => console.log("Press photo")}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  textWrap: {
    padding: 10
  },
  title: {
    fontFamily: "opensans-regular"
  }
});
