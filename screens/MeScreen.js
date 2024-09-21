import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import ProgressBarProtein from "./ProgressBar/ProgressBarProtein";
import ProgressBarFats from "./ProgressBar/ProgressBarFats";
import ProgressBarCarbs from "./ProgressBar/ProgressBarCarbs";
import Ionicons from "@expo/vector-icons/Ionicons";

const MeScreen = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      {/* Calendar Box */}
      <SafeAreaView style={styles.stickyCalendar}>
        <View style={styles.boxCalendarContent}>
          {/* Row for Calendar Icon and Text */}
          <View style={styles.calendarRow}>
            <Pressable
              onPress={() => {
                navigation.replace("Character", { screen: "CharacterScreen" });
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
            <AntDesign name="calendar" size={24} color="black" />
            <Text style={styles.boxCalendarText}>August, 2024</Text>
          </View>
          {/* Date */}
          <Image
            source={require("@/assets/images/date.png")}
            style={styles.boxDate}
          />
          {/* Down Button Positioned at the Bottom */}
          <AntDesign
            name="down"
            size={24}
            color="#9D402F"
            style={styles.boxCalendarIcon}
          />
        </View>
      </SafeAreaView>

      {/* Main Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.imageContainer}>
          {/* Bottom Image */}
          <Image
            source={require("@/assets/images/Card.png")}
            style={styles.bottomImage}
          />

          {/* Top Image */}
          <Image
            source={require("@/assets/images/CharacterProfile.png")}
            style={styles.topImage}
          />
        </View>

        <View style={styles.boxDailySummary}>
          <View style={{ width: 180, height: 150 }}>
            <Text
              style={{
                fontFamily: "InterSemiBold",
                fontSize: 16,
                marginBottom: 16,
              }}
            >
              Daily summary
            </Text>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontFamily: "InterRegular",
                  fontSize: 14,
                  marginBottom: 8,
                }}
              >
                Breakfast
              </Text>
              <Text
                style={{
                  fontFamily: "InterRegular",
                  fontSize: 14,
                  marginBottom: 8,
                }}
              >
                500cals
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontFamily: "InterRegular",
                  fontSize: 14,
                  marginBottom: 8,
                }}
              >
                Lunch
              </Text>
              <Text
                style={{
                  fontFamily: "InterRegular",
                  fontSize: 14,
                  marginBottom: 8,
                }}
              >
                2000cals
              </Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontFamily: "InterRegular",
                  fontSize: 14,
                  marginBottom: 8,
                }}
              >
                Dinner
              </Text>
              <Text
                style={{
                  fontFamily: "InterRegular",
                  fontSize: 14,
                  marginBottom: 8,
                }}
              >
                1580cals
              </Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontFamily: "InterRegular",
                  fontSize: 14,
                  marginBottom: 16,
                }}
              >
                Others
              </Text>
              <Text
                style={{
                  fontFamily: "InterRegular",
                  fontSize: 14,
                  marginBottom: 16,
                }}
              >
                580cals
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontFamily: "InterSemiBold",
                  fontSize: 16,
                  marginBottom: 8,
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  fontFamily: "InterSemiBold",
                  fontSize: 16,
                  marginBottom: 8,
                }}
              >
                4160cals
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 122,
              height: 144,
              marginLeft: 16,
            }}
          >
            <Image
              source={require("@/assets/images/data.png")}
              style={{ width: 122, height: 144 }}
            />
          </View>
        </View>

        <View style={styles.boxDailySummary2}>
          <View>
            <Text
              style={{
                fontFamily: "InterSemiBold",
                fontSize: 16,
              }}
            >
              Protein
            </Text>
            <ProgressBarProtein></ProgressBarProtein>
            <Text
              style={{
                fontFamily: "InterSemiBold",
                fontSize: 16,
                marginBottom: 8,
              }}
            >
              50/110
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontFamily: "InterSemiBold",
                fontSize: 16,
              }}
            >
              Fats
            </Text>
            <ProgressBarFats></ProgressBarFats>
            <Text
              style={{
                fontFamily: "InterSemiBold",
                fontSize: 16,
                marginBottom: 8,
              }}
            >
              20/60
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontFamily: "InterSemiBold",
                fontSize: 16,
              }}
            >
              Carbs
            </Text>
            <ProgressBarCarbs></ProgressBarCarbs>
            <Text
              style={{
                fontFamily: "InterSemiBold",
                fontSize: 16,
                marginBottom: 8,
              }}
            >
              60/160
            </Text>
          </View>
        </View>

        <View style={styles.boxOthers}>
          <Text
            style={{
              fontFamily: "InterSemiBold",
              fontSize: 16,
            }}
          >
            Favourite Article
          </Text>
        </View>

        <View style={styles.boxOthers}>
          <Text
            style={{
              fontFamily: "InterSemiBold",
              fontSize: 16,
            }}
          >
            Awards and Leaderboard
          </Text>
        </View>

        <View style={styles.boxOthers}>
          <Text
            style={{
              fontFamily: "InterSemiBold",
              fontSize: 16,
            }}
          >
            Connect with People
          </Text>
        </View>

        <View style={styles.boxOthers}>
          <Text
            style={{
              fontFamily: "InterSemiBold",
              fontSize: 16,
            }}
          >
            Support
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4E6",
  },

  stickyCalendar: {
    height: 222,
    backgroundColor: "#E7DCCA",
    borderRadius: 12,
    borderColor: "#000000",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 16,
  },

  boxCalendarContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  calendarRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },

  boxCalendarText: {
    fontSize: 18,
    fontFamily: "InterBold",
    color: "#000000",
    marginLeft: 8,
  },

  boxCalendarIcon: {
    marginTop: 8,
  },

  boxDate: {
    alignSelf: "center",
    marginTop: 8,
    height: 82,
    width: 390,
    resizeMode: "contain",
  },

  scrollViewContent: {
    paddingTop: 260,
    paddingHorizontal: 18,
  },

  imageContainer: {
    position: "relative",
    width: 228,
    height: 308,
    marginBottom: 16,
  },

  bottomImage: {
    width: "120%",
    height: "120%",
    bottom: 40,
    left: 15,
    resizeMode: "contain",
  },

  topImage: {
    position: "absolute",
    left: 170,
    width: 160,
    height: 308,
    resizeMode: "contain",
  },

  summaryBoxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: 500,
    marginTop: 16,
  },

  summaryColumn: {
    flex: 1,
  },

  dataImageColumn: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 16,
    width: 140,
  },

  boxDailySummary: {
    backgroundColor: "#E7DCCA",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#000000",
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    height: 180,
    flexDirection: "row",
    marginBottom: 16,
  },

  boxDailySummary2: {
    backgroundColor: "#E7DCCA",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#000000",
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    height: 96,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  boxDailySummaryText: {
    fontFamily: "InterSemiBold",
    fontSize: 16,
    marginBottom: 16,
  },

  dailySummaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    width: 150,
  },

  boxDailySummaryContentText: {
    fontFamily: "InterRegular",
    fontSize: 14,
  },

  boxDailySummaryData: {
    width: 122,
    height: 144,
    resizeMode: "contain",
  },

  boxOthers: {
    backgroundColor: "#E7DCCA",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#000000",
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    height: 72,
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 16,
  },

  icon: {
    right: 90,
  },
});

export default MeScreen;
