import React, { useContext } from "react";
import { View } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Theme } from "../../../../config/theme";
import TimePickerVisibleContext from "../../../../contexts/timePickerVisible/timePickerVisible";

interface Props {
  time: Date;
  onChangeTime: (value: Date) => void;
}

const TimePicker = ({ time, onChangeTime }: Props) => {
  const { timePickerVisible, setTimePickerVisible } = useContext(
    TimePickerVisibleContext
  );

  const handleTime = (
    event: DateTimePickerEvent,
    selectedTime: Date | undefined
  ) => {
    setTimePickerVisible(!timePickerVisible);
    if (event.type === "set") {
      onChangeTime(selectedTime!);
    }
  };

  return (
    <View>
      {timePickerVisible && (
        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode={"time"}
          is24Hour={true}
          textColor={Theme.primary}
          display="spinner"
          onChange={handleTime}
        />
      )}
    </View>
  );
};

export default TimePicker;
