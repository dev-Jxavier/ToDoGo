import React, { useContext } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { FORM_TASK } from "../../../../config/constants";
import ShouldUpdateDataContext from "../../../../contexts/shouldUpdateData/shouldUpdateData";

interface RightSwipleProps {
  children: React.ReactNode;
  id: string;
}

const RightSwiple = ({ children, id }: RightSwipleProps) => {
  const navigation = useNavigation();
  const { update, setUpdate } = useContext(ShouldUpdateDataContext);

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

  return (
    <Swipeable renderRightActions={renderRightActions}>{children}</Swipeable>
  );
};

const styles = StyleSheet.create({
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

export default RightSwiple;
