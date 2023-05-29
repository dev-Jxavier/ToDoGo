import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";
import Calendar from "./Calendar";
import TasksDay from "../TasksDay";
import { StorageData } from "../../types/storageData";
import ShouldUpdateDataContext from "../../contexts/shouldUpdateData/shouldUpdateData";

const Month = () => {
  const { update } = useContext(ShouldUpdateDataContext);

  const date = new Date();
  const formattedDate = format(date, "yyyy-MM-dd");
  const [selectedDay, setSelectedDay] = useState<string>(formattedDate);
  const [tasks, setTasks] = useState<StorageData[]>([]);
  const titleTaskDay = selectedDay.replace(/-/g, "/");

  useEffect(() => {
    (async () => {
      const parseData: StorageData[] = await getAllItems();
      const date = dateStringToDate(selectedDay);
      const data = filterByDate(parseData, date);
      setTasks(data);
    })();
  }, [selectedDay, update]);

  const dateStringToDate = (date: string) => {
    const [year, month, day] = date.split("-");
    return new Date(Number(year), Number(month) - 1, Number(day));
  };

  const getAllItems = async () => {
    const allKeys = await AsyncStorage.getAllKeys();
    const allData = await AsyncStorage.multiGet(allKeys);
    return allData.map((item) => JSON.parse(item[1]!));
  };

  const formatDateString = (date: Date): string => {
    return format(date, "yyyy-MM-dd");
  };

  const filterByDate = (data: StorageData[], date: Date): StorageData[] => {
    return data.filter((item) => {
      const formattedDate = formatDateString(date);
      const formattedItemDate = formatDateString(new Date(item.date));

      return formattedDate === formattedItemDate;
    });
  };

  return (
    <View style={styles.container}>
      <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <TasksDay title={titleTaskDay} item={tasks} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginVertical: 16,
  },
});

export default Month;
