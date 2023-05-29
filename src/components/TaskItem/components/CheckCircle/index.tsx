import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Theme } from "../../../../config/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ShouldUpdateDataContext from "../../../../contexts/shouldUpdateData/shouldUpdateData";

const CheckCircle = ({ checked, id }: { checked: boolean; id: string }) => {
  const { update, setUpdate } = useContext(ShouldUpdateDataContext);

  const handlePress = async () => {
    const getItem = await AsyncStorage.getItem(id);
    const parseItem = JSON.parse(getItem!);
    const updateItem = {
      ...parseItem,
      checked: !parseItem.checked,
    };

    await AsyncStorage.setItem(id, JSON.stringify(updateItem));
    setUpdate(!update);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      {!checked ? (
        <MaterialIcons
          onPress={handlePress}
          name="radio-button-unchecked"
          size={24}
          color={Theme.third}
          style={{ marginRight: 10 }}
        />
      ) : (
        <MaterialIcons
          onPress={handlePress}
          name="check-circle"
          size={24}
          color={Theme.third}
          style={{ marginRight: 10 }}
        />
      )}
    </TouchableOpacity>
  );
};

export default CheckCircle;
