import React, { useContext } from "react";
import { View } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Theme } from "../../../../config/theme";
import DatePickerVisibleContext from "../../../../contexts/datePickerVisible/datePickerVisible";

interface Props {
  date: Date;
  onChangeDate: (value: Date) => void;
}

const PickerDate = ({ date, onChangeDate }: Props) => {
  const { datePickerVisible, setDatePickerVisible } = useContext(
    DatePickerVisibleContext
  );

  const handleDate = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    setDatePickerVisible(!datePickerVisible);
    if (event.type === "set") {
      onChangeDate(selectedDate!);
    }
  };

  return (
    <View>
      {datePickerVisible && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          textColor={Theme().third}
          display="spinner"
          onChange={handleDate}
        />
      )}
    </View>
  );
};

export default PickerDate;
