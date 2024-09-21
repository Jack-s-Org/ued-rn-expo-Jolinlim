import React from "react";
import { View, StyleSheet } from "react-native";
import VideoPlayer from "./components/VideoPlayer";

const ScannerScreen = ({ navigation }) => {
  const handleVideoEnd = (status) => {
    if (status.didJustFinish) {
      navigation.navigate("AddScreen");
    }
  };

  return (
    <View style={styles.container}>
      <VideoPlayer onVideoEnd={handleVideoEnd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default ScannerScreen;
