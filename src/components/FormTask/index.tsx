import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import { Theme } from "../../config/theme";
import Title from "./components/Title";
import Description from "./components/Description";
import Calendar from "./components/Calendar";
import PickerDate from "./components/DatePicker";
import { DatePickerVisibleProvider } from "../../contexts/datePickerVisible/datePickerVisible";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StorageData } from "../../types/storageData";
import { TimePickerVisibleProvider } from "../../contexts/timePickerVisible/timePickerVisible";
import TimePicker from "./components/TimePicker";
import ShouldUpdateDataContext from "../../contexts/shouldUpdateData/shouldUpdateData";
import Button from "./components/Button";

type ParamList = {
  Param: { id: string };
};

const FormTask = () => {
  const { update, setUpdate } = useContext(ShouldUpdateDataContext);
  const route = useRoute<RouteProp<ParamList, "Param">>();
  const navigation = useNavigation();

  const now: Date = new Date();
  const { id } = route.params || "";

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
    if (!fields.title) {
      Toast.show({
        type: "info",
        text1: "Info",
        text2: "Title is required!",
      });
      return;
    }

    try {
      if (id) {
        await AsyncStorage.setItem(id, JSON.stringify(fields));
        navigation.goBack();
      } else {
        const id = uuid.v4().toString();
        const item = { ...fields, id };
        await AsyncStorage.setItem(id, JSON.stringify(item));
        navigation.goBack();
      }
      setUpdate(!update);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Error to save data",
      });
    }
  };

  useEffect(() => {
    const getStorageData = async () => {
      const data = await AsyncStorage.getItem(id);
      const parseData: StorageData = JSON.parse(data!);
      setFields({
        ...parseData,
        date: new Date(parseData.date),
        time: new Date(parseData.time),
      });
    };
    id && getStorageData();
  }, [id]);

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
          <Button id={id} onPress={storageData} />
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

export default FormTask;
