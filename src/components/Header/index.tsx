import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Theme } from "../../config/theme";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDoGo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme().primary,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontFamily: "Josefin-Sans-bold",
  },
});

export default Header;
