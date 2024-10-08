import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import { useFonts } from "expo-font";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";

const Icon = createIconSetFromIcoMoon(
  require("./assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export default function App() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("./assets/icomoon/icomoon.ttf"),
    FuturaBlack: require("./assets/fonts/Futura Extra Black font.ttf"),
    InterSemiBold: require("./assets/fonts/Inter_18pt-SemiBold.ttf"),
    InterBold: require("./assets/fonts/Inter_24pt-Bold.ttf"),
    InterRegular: require("./assets/fonts/Inter_18pt-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <RootNavigator />
      {/* <Icon name="Vector" size={50} color="red" /> */}

      {/* <VideoPlayer /> */}
    </SafeAreaProvider>
  );
}
