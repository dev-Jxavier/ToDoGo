import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import TimePickerVisibleContext from "../../../../contexts/timePickerVisible/timePickerVisible";
import DatePickerVisibleContext from "../../../../contexts/datePickerVisible/datePickerVisible";

interface Props {
  date: Date;
  time: Date;
}

const Calendar = ({ date, time }: Props) => {
  const { setDatePickerVisible, datePickerVisible } = useContext(
    DatePickerVisibleContext
  );
  const { setTimePickerVisible, timePickerVisible } = useContext(
    TimePickerVisibleContext
  );

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const formattedTime = `${time.getHours() || "00"}:${time.getMinutes()}`;

  return (
    <View style={styles.containerCalendar}>
      <Text style={styles.textCalendar}>
        {`${formattedDate} - ${formattedTime}`}
      </Text>
      <View style={styles.containerButton}>
        <TouchableOpacity
          onPress={() => setDatePickerVisible(!datePickerVisible)}
        >
          <MaterialIcons
            name="date-range"
            size={24}
            color={"rgba(0, 0, 0, 0.6)"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTimePickerVisible(!timePickerVisible)}
        >
          <MaterialIcons
            name="access-time"
            size={24}
            color={"rgba(0, 0, 0, 0.6)"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCalendar: {
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    width: "100%",
    backgroundColor: "#fff",
  },
  containerButton: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  textCalendar: {
    fontSize: 15,
    fontFamily: "Josefin-Sans-semiBold",
    color: "rgba(0, 0, 0, 0.6)",
  },
});

export default Calendar;
