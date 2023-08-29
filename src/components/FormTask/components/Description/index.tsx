import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

interface Props {
  description: string;
  onChange: (value: string) => void;
}

const Description = ({ description, onChange }: Props) => {
  return (
    <TextInput
      style={styles.description}
      placeholder="Description"
      placeholderTextColor={"rgba(0, 0, 0, 0.6)"}
      multiline={true}
      defaultValue={description}
      onChangeText={(text) => onChange(text)}
      maxLength={200}
    />
  );
};

const styles = StyleSheet.create({
  description: {
    maxHeight: 150,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 12,
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",
    fontSize: 15,
    fontFamily: "Josefin-Sans-semiBold",
  },
});

export default Description;
