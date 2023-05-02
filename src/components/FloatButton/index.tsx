import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Theme } from "../../config/theme";
import { useNavigation, CommonActions } from "@react-navigation/native";

const FloatButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.dispatch(CommonActions.navigate("CreateTask"))
        }
      >
        <MaterialIcons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  button: {
    backgroundColor: Theme().secondary,
    borderRadius: 30,
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FloatButton;
