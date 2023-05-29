import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

interface Props {
  description: string;
  onChange: (value: string) => void;
}

const Description = ({ description, onChange }: Props) => {
  const [inputHeight, setInputHeight] = useState(0);

  return (
    <TextInput
      style={{
        ...styles.description,
        height: Math.max(50, inputHeight),
        paddingVertical: inputHeight > 50 ? 12 : 0,
      }}
      placeholder="Description"
      placeholderTextColor={"rgba(0, 0, 0, 0.6)"}
      multiline={true}
      onContentSizeChange={(e) => {
        setInputHeight(e.nativeEvent.contentSize.height);
      }}
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
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",
    fontSize: 15,
    fontFamily: "Josefin-Sans-semiBold",
  },
});

export default Description;
