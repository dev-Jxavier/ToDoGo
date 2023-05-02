import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";
import { Theme } from "../../config/theme";
import Title from "./components/Title";
import Description from "./components/Description";
import Calendar from "./components/Calendar";
import PickerDate from "./components/DatePicker";
import { DatePickerVisibleProvider } from "../../contexts/datePickerVisible/datePickerVisible";
import { useNavigation } from "@react-navigation/native";
import { StorageData } from "../../types/storageData";
import { TimePickerVisibleProvider } from "../../contexts/timePickerVisible/timePickerVisible";
import TimePicker from "./components/TimePicker";
import ShouldUpdateDataContext from "../../contexts/shouldUpdateData/shouldUpdateData";

//Ver formas de isolar o botão em um componente {TODO}
const CreateTask = () => {
  const now: Date = new Date();

  const { update, setUpdate } = useContext(ShouldUpdateDataContext);
  const navigation = useNavigation();
  const [fields, setFields] = useState<StorageData>({
    id: "",
    title: "",
    description: "",
    date: now,
    time: now,
    checked: false,
  });

  const handleFieldChange = (field: string, value: string | Date) => {
    setFields({ ...fields, [field]: value });
  };

  const storageData = async () => {
    try {
      const id = uuid.v4().toString();
      const item = { ...fields, id };
      await AsyncStorage.setItem(id, JSON.stringify(item));
      navigation.goBack();
      setUpdate(!update);
    } catch (error) {
      Alert.alert("Error to save data");
    }
  };

  return (
    <DatePickerVisibleProvider>
      <TimePickerVisibleProvider>
        <View style={styles.container}>
          <View style={{ gap: 25 }}>
            <Title
              title={fields.title}
              onChange={(value) => handleFieldChange("title", value)}
            />
            <Description
              description={fields.description}
              onChange={(value) => handleFieldChange("description", value)}
            />
            <Calendar date={fields.date} time={fields.time} />
          </View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.9}
            onPress={storageData}
          >
            <Text style={styles.textButton}>Create Task</Text>
          </TouchableOpacity>
          <PickerDate
            date={fields.date}
            onChangeDate={(value) => handleFieldChange("date", value)}
          />
          <TimePicker
            time={fields.time}
            onChangeTime={(value) => handleFieldChange("time", value)}
          />
        </View>
      </TimePickerVisibleProvider>
    </DatePickerVisibleProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingTop: 12,
    paddingHorizontal: 15,
  },
  containerCalendar: {
    display: "flex",
    flexDirection: "row",
    gap: 25,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: Theme().secondary,
    height: 40,
    marginTop: 46,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "#fff",
    fontFamily: "Josefin-Sans-semiBold",
    fontSize: 16,
  },
});

export default CreateTask;
