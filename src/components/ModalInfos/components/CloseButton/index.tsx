import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Theme } from "../../../../config/theme";
import ModalInfosVisibleContext from "../../../../contexts/modalInfosVisible/modalInfosVisible";

const CloseButton = () => {
  const { visible, setVisible } = useContext(ModalInfosVisibleContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        <MaterialIcons name="close" size={24} color={Theme.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignSelf: "flex-end",
  },
});

export default CloseButton;
