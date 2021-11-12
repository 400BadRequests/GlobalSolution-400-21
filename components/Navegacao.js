import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./HomePage";
import HelpPage from "./HelpPage";

const Stack = createNativeStackNavigator();

export default function Navegacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          title: "AJUDAÊ 🙏",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#E084C0",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 30,
          },
        }}
      >
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="HelpPage" component={HelpPage} />
      </Stack.Navigator>
      <StatusBar barStyle="default" />
    </NavigationContainer>
  );
}
