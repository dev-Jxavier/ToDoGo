import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import TasksDay from "../TasksDay";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageData } from "../../types/storageData";
import ShouldUpdateDataContext from "../../contexts/shouldUpdateData/shouldUpdateData";

interface GroupedData {
  date: Date;
  data: StorageData[];
}

const Daily = () => {
  const { update } = useContext(ShouldUpdateDataContext);

  const [data, setData] = useState<GroupedData[]>([]);

  const groupForDay = (data: StorageData[]) => {
    const newArray: GroupedData[] = [];

    data.forEach((item) => {
      const date = new Date(item.date).toLocaleDateString();

      const existingData = newArray.find(
        (element) => element.date.toLocaleDateString() === date
      );

      if (existingData) {
        existingData.data.push(item);
      } else {
        newArray.push({
          date: new Date(item.date),
          data: [item],
        });
      }
    });

    return newArray.sort((a, b) => a.date.getTime() - b.date.getTime());
  };

  useEffect(() => {
    const getMultData = async () => {
      const allKeys = await AsyncStorage.getAllKeys();
      const allData = await AsyncStorage.multiGet(allKeys);
      const parseData: StorageData[] = allData.map((item) =>
        JSON.parse(item[1]!)
      );
      setData(groupForDay(parseData));
    };
    getMultData();
  }, [update]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.date.getTime().toString()}
        renderItem={({ item }) => (
          <TasksDay title={item.date.toDateString()} item={item.data} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: "Josefin-Sans-regular",
  },
});

export default Daily;
