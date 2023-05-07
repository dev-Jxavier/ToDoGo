import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import CheckCircle from "./components/CheckCircle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ShouldUpdateDataContext from "../../contexts/shouldUpdateData/shouldUpdateData";
import { CommonActions, useNavigation } from "@react-navigation/native";
import ModalInfosVisibleContext from "../../contexts/modalInfosVisible/modalInfosVisible";
import { StorageData } from "../../types/storageData";
import { FORM_TASK } from "../../config/constants";

const TaskItem = ({
  checked,
  time,
  title,
  id,
  description,
  date,
}: StorageData) => {
  const navigation = useNavigation();
  const { update, setUpdate } = useContext(ShouldUpdateDataContext);
  const { visible, setVisible, setData } = useContext(ModalInfosVisibleContext);
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

    const handleEdit = () =>
      navigation.dispatch(CommonActions.navigate(FORM_TASK, { id }));

    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={handleEdit}>
          <View style={{ ...styles.button, backgroundColor: "#1D3354" }}>
            <MaterialIcons name="edit" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
          <View style={{ ...styles.button, backgroundColor: "#D64045" }}>
            <MaterialIcons name="delete" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const handleOpenModal = () => {
    setData({ title, description, time, date });
    setVisible(!visible);
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
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
  button: {
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
    marginLeft: 8,
  },
});

export default TaskItem;
