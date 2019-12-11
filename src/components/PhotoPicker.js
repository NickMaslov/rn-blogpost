import React, { useState } from "react";
import { Button, Image, View, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

async function askForPermission() {
  const { status } = await Permissions.askAsync(
    Permissions.CAMERA_ROLL,
    Permissions.CAMERA
  );
  if (status !== "granted") {
    Alert.alert(
      "Error",
      "Sorry, we need camera roll permissions to make this work!"
    );
    return false;
  }
  return true;
}

export const PhotoPicker = ({ onPick }) => {
  const [image, setImage] = useState(null);

  const takePhoto = async () => {
    const hasPermissions = await askForPermission();

    if (!hasPermissions) return;

    let image = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9]
    });

    // if (!image.cancelled) {
    setImage(image.uri);
    onPick(image.uri);
    // }
  };

  return (
    <View style={styles.wrapper}>
      <Button title="Make a Picture" onPress={takePhoto} />
      {console.log("image in render: ", image)}
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10
  },
  image: {
    height: 200,
    width: "100%"
  }
});
