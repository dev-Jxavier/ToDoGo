import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import TaskItem from "../TaskItem";
import { StorageData } from "../../types/storageData";
import NoTasks from "../NoTasks";

interface TasksDayProps {
  title: string;
  item: StorageData[];
}

const TasksDay = ({ title, item }: TasksDayProps) => {
  if (!item.length) {
    return <NoTasks />;
  }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={item}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            id={item.id}
            title={item.title}
            description={item.description}
            date={item.date}
            time={item.time}
            checked={item.checked}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Josefin-Sans-medium",
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.6);",
    marginVertical: 12,
  },
});

export default TasksDay;
