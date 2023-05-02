import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Theme } from "../../../../config/theme";

const Button = () => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.9}>
      <Text style={styles.textButton}>Create Task</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme().secondary,
    height: 40,
    marginTop: 46,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "#fff",
    fontFamily: "Josefin-Sans-semiBold",
    fontSize: 16,
  },
});

export default Button;
