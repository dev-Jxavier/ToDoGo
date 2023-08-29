import React from "react";
import { Theme } from "../../config/theme";
import { View, Text, StyleSheet } from "react-native";

const NoTasks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Oops, looks like your to-do list is empty! 😕
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  text: {
    width: "70%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: Theme.secondary,
  },
});

export default NoTasks;
