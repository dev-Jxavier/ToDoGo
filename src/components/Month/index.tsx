import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Month = () => {
  return (
    <View style={styles.container}>
      <Text>Month</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Month;
