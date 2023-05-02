import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import CheckCircle from "./components/CheckCircle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ShouldUpdateDataContext from "../../contexts/shouldUpdateData/shouldUpdateData";

interface TaskItemProps {
  id: string;
  checked: boolean;
  title: string;
  time: Date;
}

const TaskItem = ({ checked, time, title, id }: TaskItemProps) => {
  const { update, setUpdate } = useContext(ShouldUpdateDataContext);
  const parsedTime = new Date(time);
  const formattedTime = parsedTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const renderRightActions = () => {
    const handleDelete = async () => {
      await AsyncStorage.removeItem(id);
      setUpdate(!update);
    };

    return (
      <TouchableOpacity onPress={handleDelete}>
        <View style={styles.containerButton}>
          <MaterialIcons name="delete" size={24} color="white" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.container}>
        <CheckCircle checked={checked} id={id} />
        <View>
          <Text
            style={{
              ...styles.title,
              textDecorationLine: checked ? "line-through" : "none",
            }}
          >
            {title}
          </Text>
          <View style={styles.containerTime}>
            <Text style={styles.time}>{formattedTime}</Text>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    elevation: 3,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    marginVertical: 4,
  },
  title: {
    color: "#000",
    fontFamily: "Josefin-Sans-semiBold",
    fontSize: 14,
  },
  containerTime: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  time: {
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Josefin-Sans-regular",
    fontSize: 12,
  },
  containerButton: {
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D64045",
    marginTop: 4,
    marginLeft: 8,
  },
});

export default TaskItem;
