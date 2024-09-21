import { BottomTabBar } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomBowlScreen = ({ navigation }) => {
  const [activeText, setActiveText] = useState("bases"); // Initialize to empty string

  const handleTextPress = (text) => {
    console.log(text); // Log the pressed text
    setActiveText(text);
  };

  const getTextColor = (text) => {
    return activeText === text ? "#9D402F" : "black";
  };

  const getTextOpacity = (text) => {
    return activeText === text ? 1 : 0.4;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textTitle}>Custom Bowl</Text>
        <Text style={styles.textSubTitle}>120cal</Text>

        {/* Horizontal Scroll for Items */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={require("@/assets/images/Avocado_.png")}
            style={styles.cardImage}
          />
          <Image
            source={require("@/assets/images/Onion.png")}
            style={styles.cardImage}
          />
          <Image
            source={require("@/assets/images/Tomato.png")}
            style={styles.cardImage}
          />
          <Image
            source={require("@/assets/images/Tuna.png")}
            style={styles.cardImage}
          />
          <Image
            source={require("@/assets/images/Sourdough.png")}
            style={styles.cardImage}
          />
        </ScrollView>
      </View>

      <View>
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => handleTextPress("bases")}>
            <Text
              style={[
                styles.textSubTitle,
                {
                  color: getTextColor("bases"),
                  opacity: getTextOpacity("bases"),
                  marginRight: 16,
                },
              ]}
            >
              BASES
            </Text>
          </Pressable>
          <Pressable onPress={() => handleTextPress("toppings")}>
            <Text
              style={[
                styles.textSubTitle,
                {
                  color: getTextColor("toppings"),
                  opacity: getTextOpacity("toppings"),
                  marginRight: 16,
                },
              ]}
            >
              TOPPINGS
            </Text>
          </Pressable>
          <Pressable onPress={() => handleTextPress("addOn")}>
            <Text
              style={[
                styles.textSubTitle,
                {
                  color: getTextColor("addOn"),
                  opacity: getTextOpacity("addOn"),
                },
              ]}
            >
              ADD ON
            </Text>
          </Pressable>
        </View>

        {/* Bases Ingredients */}
        <View>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            {activeText === "bases" && (
              <>
                <Image
                  source={require("@/assets/images/1.png")}
                  style={styles.cardImage2}
                />
                <Image
                  source={require("@/assets/images/2.png")}
                  style={styles.cardImage2}
                />
                <Image
                  source={require("@/assets/images/3.png")}
                  style={styles.cardImage2}
                />
                <Image
                  source={require("@/assets/images/4.png")}
                  style={styles.cardImage2}
                />
                <Image
                  source={require("@/assets/images/5.png")}
                  style={styles.cardImage2}
                />
              </>
            )}
            {activeText === "toppings" && (
              <>
                <Image
                  source={require("@/assets/images/6.png")}
                  style={styles.cardImage2}
                />
                <Image
                  source={require("@/assets/images/7.png")}
                  style={styles.cardImage2}
                />
                <Image
                  source={require("@/assets/images/8.png")}
                  style={styles.cardImage2}
                />
                <Image
                  source={require("@/assets/images/9.png")}
                  style={styles.cardImage2}
                />
                <Image
                  source={require("@/assets/images/10.png")}
                  style={styles.cardImage2}
                />
              </>
            )}
            {activeText === "addOn" && (
              <>
                <Image
                  source={require("@/assets/images/11.png")}
                  style={styles.cardImage2}
                />
              </>
            )}
          </ScrollView>

          {/* Click cancel button to go back */}
          <Pressable
            onPress={() => {
              navigation.replace("Main", { screen: "AddScreen" });
            }}
          >
            <Image
              source={require("@/assets/images/Bottom Bar.png")}
              style={styles.boxBottomTab}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    marginTop: 16,
    flex: 1,
    backgroundColor: "#F2F4E6",
  },
  textTitle: {
    fontSize: 24,
    fontFamily: "InterSemiBold",
    textAlign: "left",
    marginBottom: 16,
  },
  textSubTitle: {
    fontSize: 14,
    fontFamily: "InterRegular",
    textAlign: "left",
    marginBottom: 16,
  },
  cardImage: {
    marginBottom: 16,
    resizeMode: "contain",
    marginRight: 12,
    width: 144,
    height: 210,
  },
  cardImage2: {
    marginBottom: 16,
    resizeMode: "contain",
    marginRight: 22,
    width: 360,
    height: 240,
  },
  scrollView: {
    height: 400,
  },
  buttonContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  boxBottomTab: {
    height: 82,
    width: "110%",
    position: "absolute",
    bottom: -26,
    left: -20,
  },
});

export default CustomBowlScreen;
