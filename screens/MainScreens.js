import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import NotificationsScreen from "./NotificationsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import MeScreen from "./MeScreen";
import DiscoverScreen from "./DiscoverScreen";
import AppDrawer from "./AppDrawer";
import ScannerScreen from "./ScannerScreen";
import ArticleScreen from "./ArticleScreen";
import AddScreen from "./AddScreen";
import CharacterScreen from "./CharacterScreen";
import CustomBowlScreen from "./CustomBowlScreen";
import { View, StyleSheet, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const MainStacks = createNativeStackNavigator();
const SecondaryStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Empty = () => null;

const MainTabs = ({ navigation }) => {
  const [unreadCount, setUnreadCount] = useState(4);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#F2F4E6", height: 80, paddingTop: 14 },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#1C453F",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && { backgroundColor: "#1C453F" },
              ]}
            >
              <Ionicons name="home" size={24} color={color} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: "#1C453F", top: 8 }}>Home</Text>
          ),
          tabBarActiveTintColor: "#F8ECDC",
          tabBarInactiveTintColor: "black",
        }}
      />

      <Tab.Screen
        name="Scan"
        component={Empty}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && { backgroundColor: "#1C453F" },
              ]}
            >
              <AntDesign name="scan1" size={24} color={color} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: "#1C453F", top: 8 }}>Scan</Text> // Set your desired label color here
          ),
          tabBarActiveTintColor: "#F8ECDC",
          tabBarInactiveTintColor: "#black",
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault(); // stop default navigation
            navigation.navigate("Scan"); // manually navigate to the stack screen outside of the tab navigators
          },
        }}
      />

      <Tab.Screen
        name="Character"
        component={SecondaryScreens}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && { backgroundColor: "#1C453F" },
              ]}
            >
              <Ionicons name="person-circle-outline" size={24} color={color} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: "#1C453F", top: 8 }}>Me</Text>
          ),
          tabBarActiveTintColor: "#F8ECDC",
          tabBarInactiveTintColor: "#black",
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("Character");
          },
        }}
      />
    </Tab.Navigator>
  );
};

const MainScreens = () => {
  return (
    <MainStacks.Navigator screenOptions={{ headerShown: false }}>
      <MainStacks.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Scan"
        component={ScannerScreen}
        options={{ animation: "fade_from_bottom" }}
      />

      {/* <MainStacks.Screen
        name="Me"
        component={MeScreen}
        options={{ animation: "fade_from_bottom" }}
      /> */}

      <MainStacks.Screen
        name="CustomBowl"
        component={CustomBowlScreen}
        options={{ animation: "fade_from_bottom" }}
      />

      <MainStacks.Screen
        name="AddScreen"
        component={AddScreen}
        options={{ animation: "fade_from_bottom" }}
      />

      <MainStacks.Screen
        name="ArticleScreen"
        component={ArticleScreen}
        options={{ animation: "fade_from_bottom" }}
      />
    </MainStacks.Navigator>
  );
};
const SecondaryScreens = () => {
  return (
    <SecondaryStacks.Navigator screenOptions={{ headerShown: false }}>
      <SecondaryStacks.Screen
        name="Character"
        component={CharacterScreen}
        options={{ headerShown: false }}
      />
      <SecondaryStacks.Screen
        name="Me"
        component={MeScreen}
        options={{ animation: "fade_from_bottom" }}
      />
    </SecondaryStacks.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 64,
    height: 32,
    borderRadius: 22,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#877571",
  },
});

export default MainScreens;
