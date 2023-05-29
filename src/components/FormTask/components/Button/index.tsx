import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Theme } from "../../../../config/theme";

interface Props {
  id: string;
  onPress: () => void;
}

const Button = ({ id, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Text style={styles.textButton}>{id ? "Save Edit" : "Create Task"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme.secondary,
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
