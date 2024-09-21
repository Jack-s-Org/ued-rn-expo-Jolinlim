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
import Feather from "@expo/vector-icons/Feather";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        {/* Title Text */}
        <Text style={styles.textTitle}>
          Hi, what would you like to search today?
        </Text>

        {/* Search Box */}
        <View style={[styles.searchBox, { marginRight: 18 }]}>
          <Feather
            name="search"
            size={24}
            color="#000000"
            style={[styles.searchboxIcon, { opacity: 0.5 }]}
          />
          <View>
            <Text style={[styles.searchboxText, { opacity: 0.5 }]}>
              Search for your query
            </Text>
          </View>
        </View>

        {/* Categories Box */}
        <View style={styles.horizontalContainer}>
          {/* Nutrition Box */}
          <View style={styles.boxNutrition}>
            <Text style={styles.boxTextNutrition}>Nutrition</Text>
          </View>

          {/* WorkOut Box */}
          <View style={styles.boxCategories}>
            <Text style={styles.boxText}>Workout</Text>
          </View>

          {/* Tutorial Box */}
          <View style={styles.boxCategories}>
            <Text style={styles.boxText}>Tutorial</Text>
          </View>

          {/* Relax Box */}
          <View style={[styles.boxCategories, { marginRight: 18 }]}>
            <Text style={styles.boxText}>Relax</Text>
          </View>
        </View>

        {/* Subtitle Box */}
        <Text style={styles.subtitleText}>Categories</Text>
        <Text style={styles.description}>
          Select your favourite food categories.
        </Text>

        {/* Categories Image */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {/* Bowl*/}
          <Image
            source={require("@/assets/images/Categories_Bowl.png")}
            style={styles.image}
          />

          {/* Toast*/}
          <Image
            source={require("@/assets/images/Categories_Toast.png")}
            style={styles.image}
          />

          {/* Salad*/}
          <Image
            source={require("@/assets/images/Categories_Salad.png")}
            style={styles.image}
          />
        </ScrollView>

        {/* Subtitle Box */}
        <Text style={styles.subtitleText}>Nutrition Facts</Text>
        <Text style={styles.description}>
          A simple guide for healthier choices.
        </Text>

        {/* Nutrition Facts */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {/* HealthyDiets*/}
          {/* Click to read Article */}
          <Pressable
            onPress={() => {
              navigation.navigate("ArticleScreen");
            }}
          >
            <Image
              source={require("@/assets/images/HealthyDiets.png")}
              style={styles.imageArticle}
            />
          </Pressable>

          {/* Tips*/}
          <Image
            source={require("@/assets/images/TipsOn.png")}
            style={styles.imageArticle}
          />

          {/* WorkLife*/}
          <Image
            source={require("@/assets/images/WorkLife.png")}
            style={styles.imageArticle}
          />
        </ScrollView>

        {/* Subtitle Box */}
        <Text style={styles.subtitleText}>Popular Recipes</Text>
        <Text style={styles.description}>
          Simple guide to your favourite recipes.
        </Text>

        {/* Popular Recipe */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollView}
        >
          {/* Salmon*/}
          <Image
            source={require("@/assets/images/Salmon.png")}
            style={styles.imageArticle}
          />

          {/* HealthyBowl*/}
          <Image
            source={require("@/assets/images/HealthyBowl.png")}
            style={styles.imageArticle}
          />

          {/* AvocadoToast*/}
          <Image
            source={require("@/assets/images/AvocadoToast.png")}
            style={styles.imageArticle}
          />
        </ScrollView>

        {/* Subtitle Box */}
        <Text style={styles.subtitleText}>Training Journeys</Text>
        <Text style={styles.description}>
          Choose a training that’s specials for you.{" "}
        </Text>

        {/* Popular Recipe */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollView}
        >
          {/* Jump*/}
          <Image
            source={require("@/assets/images/Jump.png")}
            style={styles.imageSports}
          />

          {/* Dumbbell Upper*/}
          <Image
            source={require("@/assets/images/DumbbellUpper.png")}
            style={styles.imageSports}
          />

          {/* Dumbbell Lower*/}
          <Image
            source={require("@/assets/images/DumbbellLower.png")}
            style={styles.imageSports}
          />
        </ScrollView>

        {/* Subtitle Box */}
        <Text style={styles.subtitleText}>Workout Tutorials</Text>
        <Text style={styles.description}>
          Step-by-step guides to effective workouts.
        </Text>

        {/*  WorkOut Tutorials */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollView}
        >
          {/* Yoga*/}
          <Image
            source={require("@/assets/images/Yoga.png")}
            style={styles.imageArticle}
          />

          {/* Pilates*/}
          <Image
            source={require("@/assets/images/Pilates.png")}
            style={styles.imageArticle}
          />

          {/* PilatesUpper*/}
          <Image
            source={require("@/assets/images/PilatesUpper.png")}
            style={styles.imageArticle}
          />
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4E6",
    paddingLeft: 18,
  },

  box: {
    width: "100%",
    height: 44,

    borderRadius: 12,
    borderColor: "#000000",
    borderWidth: 1,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  searchBox: {
    flexDirection: "row",
    height: 44,
    backgroundColor: "#E7DCCA",
    borderRadius: 12,
    borderColor: "#000000",
    borderWidth: 1,
    marginBottom: 16,
    alignItems: "center",
    paddingHorizontal: 10,
  },

  searchboxIcon: {
    paddingRight: 8,
  },

  searchboxText: {
    fontSize: 16,
    fontFamily: "InterRegular",
    color: "#000000",
  },

  horizontalContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  boxNutrition: {
    width: "23%",
    height: 34,
    backgroundColor: "#1C453F",
    borderRadius: 12,
    // marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  boxCategories: {
    width: "23%",
    height: 34,
    backgroundColor: "#F2F4E6",
    borderColor: "#1C453F",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    // marginBottom: 16,
  },

  textTitle: {
    fontSize: 28,
    fontFamily: "InterBold",
    marginBottom: 16,
    paddingRight: 18,
  },

  boxTextNutrition: {
    color: "#FFFFFF",
    fontFamily: "InterSemiBold",
    fontSize: 14,
  },

  boxText: {
    color: "#000000",
    fontFamily: "InterSemiBold",
    fontSize: 14,
  },

  subtitleText: {
    fontSize: 18,
    fontFamily: "InterSemiBold",
    marginBottom: 8,
  },

  image: {
    marginBottom: 16,
    resizeMode: "contain",
    width: 164,
    height: 100,
    marginRight: 16,
  },

  imageArticle: {
    marginBottom: 16,
    resizeMode: "contain",
    width: 214,
    height: 168,
    paddingVertical: 16,
    marginRight: 16,
  },

  description: {
    fontSize: 14,
    fontFamily: "InterRegular",
    marginBottom: 16,
  },

  imageSports: {
    marginBottom: 16,
    resizeMode: "contain",
    width: 274,
    height: 392,
    paddingVertical: 16,
    marginRight: 16,
  },
});

export default HomeScreen;
