import * as Font from "expo-font";

export default async function bootstrap() {
  await Font.loadAsync({
    "opensans-regular": require("../assets/fonts/OpenSans-Regular.ttf"),
    "opensans-bold": require("../assets/fonts/OpenSans-Bold.ttf")
  });
}
