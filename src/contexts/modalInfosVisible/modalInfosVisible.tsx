import React, { createContext, useState, FC, useMemo } from "react";
import { PropsChildren, PropsVisibleContext } from "./types";

const DEFAULT_VALUE: PropsVisibleContext = {
  visible: false,
  setVisible: () => {},
  data: {
    title: "",
    description: "",
    time: new Date(),
    date: new Date(),
  },
  setData: () => {},
};

const ModalInfosVisibleContext =
  createContext<PropsVisibleContext>(DEFAULT_VALUE);

export const ModalInfosVisibleProvider: FC<PropsChildren> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(DEFAULT_VALUE.visible);
  const [data, setData] = useState<any>(DEFAULT_VALUE.data);

  const ModalInfosVisibleProviderValue = useMemo(
    () => ({
      visible,
      setVisible,
      data,
      setData,
    }),
    [visible, setVisible, data, setData]
  );

  return (
    <ModalInfosVisibleContext.Provider value={ModalInfosVisibleProviderValue}>
      {children}
    </ModalInfosVisibleContext.Provider>
  );
};

export default ModalInfosVisibleContext;
