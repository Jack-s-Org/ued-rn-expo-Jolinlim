import {
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import ProgressBarSteps from "@/ProgressBar/ProgressBarSteps";
import ProgressBarRunning from "@/ProgressBar/ProgressBarRunning";
import ProgressBarJump from "@/ProgressBar/ProgressBarJump";
import ProgressBarPushUpsHits from "@/ProgressBar/ProgressBarPushUps";
import ProgressBarSquats from "@/ProgressBar/ProgressBarSquats";

const CharacterScreen = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        {/* Character Image */}
        <Image
          source={require("@/assets/images/Me_Character.png")}
          style={styles.image}
        />

        {/* Back Button */}
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons
            name="chevron-back-sharp"
            size={24}
            color="black"
            style={styles.icon}
          />
        </Pressable>

        {/* Title Text */}
        <Text style={styles.textTitle}> Avocado + Tuna</Text>

        {/* Description Text */}
        <Text style={styles.text}>
          50g of proteins + 70 of carbohydrates + 30g of fats = 120 cal
        </Text>

        <View style={styles.box}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* First Box */}
            <View style={styles.innerBox}>
              {/* Image Inside the Box */}
              <Image
                source={require("@/assets/images/Steps.png")}
                style={styles.boxImage}
              />
              {/* Text Inside the Box */}
              <Text style={styles.textBox}>Steps</Text>
            </View>

            {/* Second Box */}
            <View style={styles.innerBox}>
              {/* Image Inside the Box */}
              <Image
                source={require("@/assets/images/Steps.png")}
                style={styles.boxImage}
              />
              {/* Text Inside the Box */}
              <Text style={styles.textBox}>Steps</Text>
            </View>

            {/* Third Box */}
            <View style={styles.innerBox}>
              {/* Image Inside the Box */}
              <Image
                source={require("@/assets/images/Steps.png")}
                style={styles.boxImage}
              />
              {/* Text Inside the Box */}
              <Text style={styles.textBox}>Steps</Text>
            </View>

            {/* Fourth Box */}
            <View style={styles.innerBox}>
              {/* Image Inside the Box */}
              <Image
                source={require("@/assets/images/Steps.png")}
                style={styles.boxImage}
              />
              {/* Text Inside the Box */}
              <Text style={styles.textBox}>Steps</Text>
            </View>

            {/* Fifth Box */}
            <View style={styles.innerBox}>
              {/* Image Inside the Box */}
              <Image
                source={require("@/assets/images/Steps.png")}
                style={styles.boxImage}
              />
              {/* Text Inside the Box */}
              <Text style={styles.textBox}>Steps</Text>
            </View>
          </ScrollView>
        </View>

        {/* Title Text */}
        <Text style={styles.textTitle}> Process </Text>

        {/* Description Text */}
        <Text style={styles.text}>
          Get a quick look at your current progress!
        </Text>

        {/* First Process Box */}
        <View style={styles.innerBoxProcess}>
          <View style={styles.row}>
            {/* Text Inside the Box */}
            <Text style={styles.textBoxProcess}>Steps hits</Text>
            {/* Number Inside the Box */}
            <Text style={styles.textNumberBoxProcess}>450/1000</Text>
            {/* Progress Bar Inside the Box */}
          </View>
          <ProgressBarSteps></ProgressBarSteps>
        </View>

        {/* Second Process Box */}
        <View style={styles.innerBoxProcess}>
          <View style={styles.row}>
            {/* Text Inside the Box */}
            <Text style={styles.textBoxProcess}>Running distance hits</Text>
            {/* Number Inside the Box */}
            <Text style={styles.textNumberBoxProcess}>5.5/10km</Text>
            {/* Progress Bar Inside the Box */}
          </View>
          <ProgressBarRunning></ProgressBarRunning>
        </View>

        {/* Third Process Box */}
        <View style={styles.innerBoxProcess}>
          <View style={styles.row}>
            {/* Text Inside the Box */}
            <Text style={styles.textBoxProcess}>Jump hits</Text>
            {/* Number Inside the Box */}
            <Text style={styles.textNumberBoxProcess}>100/200</Text>
            {/* Progress Bar Inside the Box */}
          </View>
          <ProgressBarJump></ProgressBarJump>
        </View>

        {/* Fourth Process Box */}
        <View style={styles.innerBoxProcess}>
          <View style={styles.row}>
            {/* Text Inside the Box */}
            <Text style={styles.textBoxProcess}>Push-ups hits</Text>
            {/* Number Inside the Box */}
            <Text style={styles.textNumberBoxProcess}>18/30</Text>
            {/* Progress Bar Inside the Box */}
          </View>
          <ProgressBarPushUpsHits></ProgressBarPushUpsHits>
        </View>

        {/* Fifth Process Box */}
        <View style={styles.innerBoxProcess}>
          <View style={styles.row}>
            {/* Text Inside the Box */}
            <Text style={styles.textBoxProcess}>Squats hits</Text>
            {/* Number Inside the Box */}
            <Text style={styles.textNumberBoxProcess}>65/100</Text>
            {/* Progress Bar Inside the Box */}
          </View>
          <ProgressBarSquats></ProgressBarSquats>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    marginTop: 16,
    flex: 1,
    backgroundColor: "#F2F4E6",
    // alignItems: "center",
    // justifyContent: "center",
  },

  button: {
    position: "absolute",
    top: 40,
    left: 16,
  },

  image: {
    marginBottom: 16,
    resizeMode: "contain",
    width: 354,
    height: 354,
  },

  textTitle: {
    fontSize: 24,
    fontFamily: "InterSemiBold",
    marginBottom: 8,
  },

  text: {
    fontSize: 14,
    left: 6,
    marginBottom: 16,
  },

  textBox: {
    fontSize: 14,
    textAlign: "center",
  },

  box: {
    flexDirection: "column",
    height: 138,
    width: 400,
    marginBottom: 16,
    paddingRight: 18,
  },

  innerBox: {
    backgroundColor: "#E7DCCA",
    flex: 1,
    borderWidth: 1,
    borderColor: "#000000",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 12,
    justifyContent: "center",
    padding: 16,
    marginRight: 16,
  },

  boxImage: {
    width: 80,
    height: 90,
    marginBottom: 8,
    resizeMode: "contain",
  },

  textBoxProcess: {
    fontSize: 16,
    fontFamily: "InterSemiBold",
  },

  textNumberBoxProcess: {
    fontSize: 16,
    fontFamily: "InterSemiBold",
    color: "#9D402F",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  boxProcess: {
    flexDirection: "row",
    height: 76,
    width: 354,
    textAlign: "center",
  },

  innerBoxProcess: {
    backgroundColor: "#E7DCCA",
    flex: 1,
    borderWidth: 1,
    borderColor: "#000000",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 12,
    alignContent: "center",
    justifyContent: "center",
    padding: 16,
    marginBottom: 16,
  },
});

export default CharacterScreen;
