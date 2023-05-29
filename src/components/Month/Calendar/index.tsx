import React from "react";
import { View, StyleSheet } from "react-native";
import { Calendar as ReactNativeCalendar } from "react-native-calendars";
import { Theme } from "../../../config/theme";

interface CalendarProps {
  selectedDay: string;
  setSelectedDay: React.Dispatch<React.SetStateAction<string>>;
}

const Calendar = ({ selectedDay, setSelectedDay }: CalendarProps) => {
  return (
    <View style={styles.container}>
      <ReactNativeCalendar
        onDayPress={(day) => setSelectedDay(day.dateString)}
        current={selectedDay}
        monthFormat={"MMM yyyy"}
        hideExtraDays={true}
        disableMonthChange={true}
        firstDay={1}
        hideArrows={true}
        markedDates={{
          [selectedDay]: { selected: true, selectedColor: Theme.third },
        }}
        theme={{
          todayTextColor: "#2d4150",
          textDayFontFamily: "Josefin-Sans-regular",
          textMonthFontFamily: "Josefin-Sans-semiBold",
          textDayHeaderFontFamily: "Josefin-Sans-regular",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    elevation: 3,
  },
});

export default Calendar;
