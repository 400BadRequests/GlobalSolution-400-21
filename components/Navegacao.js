import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./HomePage";
import HelpPage from "./HelpPage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import DetailsPage from "./DetailsPage";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";

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
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="DetailsPage" component={DetailsPage} />
        <Stack.Screen name="CreatePost" component={CreatePost} />
        <Stack.Screen name="EditPost" component={EditPost} />
      </Stack.Navigator>
      <StatusBar barStyle="default" />
    </NavigationContainer>
  );
}
