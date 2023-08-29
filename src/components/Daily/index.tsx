import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TasksDay from "../TasksDay";
import { StorageData } from "../../types/storageData";
import ShouldUpdateDataContext from "../../contexts/shouldUpdateData/shouldUpdateData";
import NoTasks from "../NoTasks";

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

    return sortData(newArray);
  };

  const sortData = (data: GroupedData[]) => {
    return data.sort((a, b) => a.date.getTime() - b.date.getTime());
  };

  useEffect(() => {
    (async () => {
      try {
        const allKeys = await AsyncStorage.getAllKeys();
        const allData = await AsyncStorage.multiGet(allKeys);
        const parseData: StorageData[] = allData.map((item) =>
          JSON.parse(item[1]!)
        );
        setData(groupForDay(parseData));
      } catch (err) {
        Toast.show({
          type: "error",
          text1: "Erro!",
          text2: "Not possible to load data!",
        });
      }
    })();
  }, [update]);

  if (!data.length) {
    return <NoTasks />;
  }

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
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: "Josefin-Sans-regular",
  },
});

export default Daily;
