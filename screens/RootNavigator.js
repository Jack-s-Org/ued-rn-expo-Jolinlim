import SignInScreen from "./SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreens from "./MainScreens";
// import AddScreen from "./AddScreen";
import ScannerScreen from "./ScannerScreen";
// import CharacterScreen from "./CharacterScreen";
// import MeScreen from "./MeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Main" component={MainScreens} />
        <Stack.Screen name="Scan" component={ScannerScreen} />
        {/* <Stack.Screen name="Character" component={CharacterScreen} /> */}
        {/* <Stack.Screen name="AddScreen" component={AddScreen} /> */}
        {/* <Stack.Screen name="Me" component={MeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
