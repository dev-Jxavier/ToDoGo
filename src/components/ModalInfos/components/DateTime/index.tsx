import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface DateTimeProps {
  time: Date;
  date: Date;
}

const DateTime = ({ time, date }: DateTimeProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Text style={styles.text}>{new Date(date).toDateString()}</Text>
        <MaterialIcons
          name="date-range"
          size={16}
          color={"rgba(0, 0, 0, 0.6)"}
        />
      </View>
      <View style={styles.containerContent}>
        <Text style={styles.text}>
          {new Date(time).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </Text>
        <MaterialIcons
          name="access-time"
          size={16}
          color={"rgba(0, 0, 0, 0.6)"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    display: "flex",
    alignItems: "flex-end",
    gap: 4,
  },
  containerContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  text: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.6)",
    fontFamily: "Josefin-Sans-medium",
  },
});

export default DateTime;
