import { Text, Button, StyleSheet, Image, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

const SignInScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          marginLeft: -16,
        }}
      >
        <Text
          style={{
            fontFamily: "FuturaBlack",
            fontSize: "70",
            color: "#1C453F",
          }}
        >
          KEEP
        </Text>
        <Text
          style={{
            fontFamily: "FuturaBlack",
            fontSize: "70",
            color: "#1C453F",
          }}
        >
          YOUR
        </Text>
        <Text
          style={{
            fontFamily: "FuturaBlack",
            fontSize: "70",
            color: "#1C453F",
          }}
        >
          HEALTH
        </Text>
        <Text
          style={{
            fontFamily: "FuturaBlack",
            fontSize: "70",
            color: "#1C453F",
          }}
        >
          ON TRACK.
        </Text>
      </View>
      <Image
        source={require("@/assets/images/SignIn-10.png")}
        style={{
          position: "absolute",
          top: 314,
          height: 400,
          width: 400,
          alignSelf: "center",
        }}
      />
      <Pressable
        title="Log In"
        onPress={() => {
          navigation.replace("Main", { screen: "Home" });
        }}
        style={{
          textAlign: "center",
          backgroundColor: "#1C453F",
          padding: 14,
          borderRadius: 12,
          height: 50,
          width: 353,
          jusifyContent: "center",
          alignItems: "center",
          marginTop: 320,
          // borderWidth: 0.5,
          // borderwidthcolor: "black",
        }}
      >
        <Text
          style={{
            fontFamily: "InterSemiBold",
            fontSize: "16",
            color: "white",
          }}
        >
          Log In
        </Text>
      </Pressable>
      <View
        title="Sign Up"
        style={{
          textAlign: "center",
          // backgroundColor: "#F2F4E6",
          borderWidth: 1,
          padding: 14,
          borderRadius: 12,
          height: 50,
          width: 353,
          jusifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          borderwidthcolor: "#F2F4E6",
        }}
      >
        <Text
          style={{
            fontFamily: "InterSemiBold",
            fontSize: "16",
            color: "black",
          }}
        >
          Sign Up
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F4E6",
    // margin: "6%",
  },
});

export default SignInScreen;
