import { View, StyleSheet, Text, Image, Button, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import VideoPlayer from "../assets/components/VideoPlayer";

const Separator = () => <View style={styles.separator} />;

const AddScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <VideoPlayer></VideoPlayer>
      <Image
        source={require("@/assets/images/Avocado.png")}
        style={{
          position: "absolute",
          top: 70,
          height: 264,
          width: 354,
          alignSelf: "center",
        }}
      />
      <Text style={styles.textTitle}> Avocado + Tuna</Text>
      <Text style={styles.text}>
        {" "}
        50g of proteins + 70 of carbohydrates + 30g of fats = 120 cal
      </Text>

      <View style={styles.box}>
        {/* First Box */}
        <View style={styles.innerBox}>
          <Text style={styles.textBox}>Description</Text>
          <Image
            source={require("@/assets/images/expand_circle_down.png")}
            style={styles.icon}
          />
        </View>
      </View>

      {/* Separator */}
      <View style={styles.separator} />

      {/* Second Box */}
      <View style={styles.box}>
        <View style={styles.innerBox}>
          <Text style={styles.textBox}>Cooking Time Est.</Text>
          <Image
            source={require("@/assets/images/expand_circle_down.png")}
            style={styles.icon}
          />
        </View>
      </View>

      {/* Separator */}
      <View style={styles.separator} />

      {/* Third Box */}
      <View style={styles.box}>
        <View style={styles.innerBox}>
          <Text style={styles.textBox}>Custom Bowl</Text>
          <Image
            source={require("@/assets/images/expand_circle_down.png")}
            style={styles.icon}
          />
        </View>
      </View>

      {/* Separator */}
      <View style={styles.separator} />

      {/* Pressable Button */}
      <View style={styles.box}>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.replace("Main", { screen: "Home" });
          }}
        >
          <Text style={styles.buttonText}>Start</Text>
        </Pressable>
      </View>
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
    width: 390,
  },

  textTitle: {
    fontSize: 24,
    top: 280,
    fontFamily: "InterSemiBold",
  },

  text: {
    fontSize: 14,
    top: 292,
  },

  textBox: {
    fontSize: 16,
    fontFamily: "InterSemiBold",
  },

  box: {
    flexDirection: "row",
    height: 76,
    top: 308,
  },

  innerBox: {
    backgroundColor: "#E7DCCA",
    flex: 1,
    borderWidth: 1,
    borderColor: "#E7DCCA",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 12,
    justifyContent: "center",
    paddingHorizontal: 16,
    position: "relative",
  },

  button: {
    flexDirection: "row",
    height: 50,
    width: 354,
    backgroundColor: "#1C453F",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    position: "relative",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "InterSemiBold",
  },

  icon: {
    position: "absolute",
    height: 27,
    width: 27,
    right: 16,
  },

  separator: {
    marginVertical: 16,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    top: 308,
  },
});

export default AddScreen;
