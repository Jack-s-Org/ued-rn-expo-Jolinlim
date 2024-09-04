import { StyleSheet, Text, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";

const MeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Image
        source={require("@/assets/images/Me_Character.png")}
        style={{
          position: "absolute",
          top: 128,
          flex: 1,
          aspectRatio: 1,
          height: 390,
          width: 390,
          resizeMode: "contain",
        }}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    marginTop: 16,
    display: "flex",
    flex: 1,
    backgroundColor: "#F2F4E6",
    // width: 390,
  },
});

export default MeScreen;
