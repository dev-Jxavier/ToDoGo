import React, { createContext, useState, FC, useMemo } from "react";
import { PropsChildren, PropsTabContext } from "./types";

const DEFAULT_VALUE: PropsTabContext = {
  timePickerVisible: false,
  setTimePickerVisible: () => {},
};

const TimePickerVisibleContext = createContext<PropsTabContext>(DEFAULT_VALUE);

export const TimePickerVisibleProvider: FC<PropsChildren> = ({ children }) => {
  const [timePickerVisible, setTimePickerVisible] = useState(
    DEFAULT_VALUE.timePickerVisible
  );

  const TimePickerVisibleProviderValue = useMemo(
    () => ({
      timePickerVisible,
      setTimePickerVisible,
    }),
    [timePickerVisible, setTimePickerVisible]
  );

  return (
    <TimePickerVisibleContext.Provider value={TimePickerVisibleProviderValue}>
      {children}
    </TimePickerVisibleContext.Provider>
  );
};

export default TimePickerVisibleContext;
