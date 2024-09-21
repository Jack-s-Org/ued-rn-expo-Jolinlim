import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

const progressBarData = [{ id: 1, name: "StepsHit", targetValue: 40 }];

const ProgressBarCarbs = () => {
  const [progressArray] = useState(
    progressBarData.map(() => new Animated.Value(0))
  );

  useEffect(() => {
    progressArray.forEach((progress, index) => {
      Animated.timing(progress, {
        toValue: progressBarData[index].targetValue,
        duration: 1000 + index * 200,
        useNativeDriver: false,
      }).start();
    });
  }, [progressArray]);

  return (
    <View>
      {progressArray.map((progress, index) => (
        <View
          key={(progressBarData[index].id = "1")}
          style={styles.progressContainer}
        >
          <View style={styles.progressBarContainer}>
            <Animated.View
              style={[
                styles.bar,
                {
                  width: progress.interpolate({
                    inputRange: [0, 100],
                    outputRange: ["0%", "100%"],
                  }),
                },
              ]}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    marginTop: 8,
    marginBottom: 8,
  },

  progressBarContainer: {
    width: 72,
    height: 14,
    // borderWidth: 1,
    backgroundColor: "#E0A538",
    borderRadius: 12,
    overflow: "hidden",
  },
  bar: {
    height: 14,
    backgroundColor: "#9D402F",
    borderRadius: 12,
  },
});

export default ProgressBarCarbs;
