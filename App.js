// In App.js in a new project

import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/Screen/Home/Home";
import Register from "./src/Screen/Register/Register";
import Login from "./src/Screen/Login/Login";
import DetailScreen from "./src/Screen/DetailScreen/DetailScreen";
import VeryDetailScreen from "./src/Screen/VeryDetail/VeryDetailScreen";

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import SettingScreen from "../Screen/Settings/Settings";
// import NotificationScreen from "../Screen/Notification/Notification";

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator;

// const HomeStack = ({ navigation }) => {
//   return (
//     <Stack.Navigator initialRouteName="DetailScreen">
//       <Stack.Screen
//         component={Homepage}
//         name="DetailScreen"
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         component={VeryDetailScreen}
//         name="VeryDetailScreen"
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen component={AllReviews} name="All Reviews" />
//     </Stack.Navigator>
//   );
// };

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="DetailNews" component={VeryDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export function Tab1() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Notification" component={NotificationScreen} />
//       <Tab.Screen name="Settings" component={SettingScreen} />
//     </Tab.Navigator>
//   );
// }
