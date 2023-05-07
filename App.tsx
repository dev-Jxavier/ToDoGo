import React from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import Toast from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./src/components/Header";
import Screens from "./src/components/Screens";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Josefin-Sans-regular": require("./assets/fonts/JosefinSans-Regular.ttf"),
    "Josefin-Sans-medium": require("./assets/fonts/JosefinSans-Medium.ttf"),
    "Josefin-Sans-bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
    "Josefin-Sans-semiBold": require("./assets/fonts/JosefinSans-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar />
      <Header />
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
      <Toast position="bottom" visibilityTime={1000} />
    </>
  );
}
