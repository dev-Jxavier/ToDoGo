import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface Props {
  title: string;
  onChange: (value: string) => void;
}

const Title = ({ title, onChange }: Props) => {
  return (
    <TextInput
      style={styles.title}
      placeholder="Title"
      placeholderTextColor={"rgba(0, 0, 0, 0.6)"}
      defaultValue={title}
      onChangeText={(text) => onChange(text)}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    height: 50,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    width: "100%",
    fontSize: 15,
    fontFamily: "Josefin-Sans-semiBold",
  },
});

export default Title;
