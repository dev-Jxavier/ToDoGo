import React, { useContext } from "react";
import { View, Modal, StyleSheet } from "react-native";
import TextField from "./components/TextField";
import CloseButton from "./components/CloseButton";
import DateTime from "./components/DateTime";
import ModalInfosVisibleContext from "../../contexts/modalInfosVisible/modalInfosVisible";

const ModalInfos = () => {
  const { visible, setVisible, data } = useContext(ModalInfosVisibleContext);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(!visible)}
      hardwareAccelerated={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <CloseButton />
          <TextField label="Title" content={data.title} />
          <TextField
            label="Description"
            content={data.description}
            withMargin={true}
          />
          <DateTime time={data.time} date={data.date} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalView: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 20,
    elevation: 5,
  },
});

export default ModalInfos;
