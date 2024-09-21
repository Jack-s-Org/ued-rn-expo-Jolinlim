import React, { useRef, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";

const { width } = Dimensions.get("window");

const ArticleScreen = ({ navigation }) => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { source: require("@/assets/images/ArticleImage1.png") },
    { source: require("@/assets/images/ArticleImage2.png") },
    { source: require("@/assets/images/ArticleImage3.png") },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        scrollViewRef.current.scrollTo({
          x: nextIndex * width,
          animated: true,
        });
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* Back Button */}
        <Pressable
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
          accessible={true}
        >
          <Ionicons
            name="chevron-back-sharp"
            size={24}
            color="black"
            style={styles.icon}
          />
        </Pressable>

        {/* Favourite Button */}
        <Pressable
          style={styles.backButton}
          onPress={() => {
            navigation.replace("Me", { screen: "MeScreen" });
          }}
          accessible={true}
        >
          <Foundation
            name="book-bookmark"
            size={24}
            color="black"
            style={styles.icon}
          />
        </Pressable>
      </View>
      {/* Image Carousel */}
      <ScrollView
        horizontal
        pagingEnabled
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
      >
        {images.map((image, index) => (
          <Image key={index} source={image.source} style={styles.image} />
        ))}
      </ScrollView>
      <View
        style={{
          height: 500,
          width: 400,
          position: "absolute",
          right: 0,
          top: 660,
        }}
      >
        <ImageBackground
          source={require("@/assets/images/Article_.png")}
          style={{
            height: 624,
            width: 390,
            position: "absolute",
            right: 0,
            top: -330,
          }}
        ></ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4E6",
  },
  header: {
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    marginRight: 16,
  },
  carousel: {
    height: 222,
  },
  image: {
    width: width,
    height: 222,
  },
});

export default ArticleScreen;
