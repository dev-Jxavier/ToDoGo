import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  label: string;
  content: string;
  withMargin?: boolean;
}
//Adicionar o withMargin no TextField
const TextField = ({ label, content, withMargin = false }: Props) => {
  return (
    <View>
      <Text style={{ ...styles.title, marginTop: withMargin ? 18 : 0 }}>
        {label}
      </Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Josefin-Sans-regular",
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    fontFamily: "Josefin-Sans-semiBold",
    fontSize: 16,
  },
});

export default TextField;
