import React, { createContext, useState, FC, useMemo } from "react";
import { PropsChildren, PropsTabContext } from "./types";

const DEFAULT_VALUE: PropsTabContext = {
  datePickerVisible: false,
  setDatePickerVisible: () => {},
};

const DatePickerVisibleContext = createContext<PropsTabContext>(DEFAULT_VALUE);

export const DatePickerVisibleProvider: FC<PropsChildren> = ({ children }) => {
  const [datePickerVisible, setDatePickerVisible] = useState(
    DEFAULT_VALUE.datePickerVisible
  );

  const datePickerVisibleProviderValue = useMemo(
    () => ({
      datePickerVisible,
      setDatePickerVisible,
    }),
    [datePickerVisible, setDatePickerVisible]
  );

  return (
    <DatePickerVisibleContext.Provider value={datePickerVisibleProviderValue}>
      {children}
    </DatePickerVisibleContext.Provider>
  );
};

export default DatePickerVisibleContext;
