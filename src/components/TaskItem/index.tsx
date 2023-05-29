import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import CheckCircle from "./components/CheckCircle";
import ModalInfosVisibleContext from "../../contexts/modalInfosVisible/modalInfosVisible";
import { StorageData } from "../../types/storageData";
import RightSwiple from "./components/RightSwiple";

const TaskItem = ({
  checked,
  time,
  title,
  id,
  description,
  date,
}: StorageData) => {
  const { visible, setVisible, setData } = useContext(ModalInfosVisibleContext);
  const parsedTime = new Date(time);
  const formattedTime = parsedTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const handleOpenModal = () => {
    setData({ title, description, time, date });
    setVisible(!visible);
  };

  return (
    <RightSwiple id={id}>
      <TouchableWithoutFeedback onPress={handleOpenModal}>
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
      </TouchableWithoutFeedback>
    </RightSwiple>
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
});

export default TaskItem;
