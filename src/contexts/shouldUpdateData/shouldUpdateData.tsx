import React, { createContext, useState, FC, useMemo } from "react";
import { PropsChildren, PropsUpdateContext } from "./types";

const DEFAULT_VALUE: PropsUpdateContext = {
  update: false,
  setUpdate: () => {},
};

const ShouldUpdateDataContext =
  createContext<PropsUpdateContext>(DEFAULT_VALUE);

export const ShouldUpdateDataProvider: FC<PropsChildren> = ({ children }) => {
  const [update, setUpdate] = useState<boolean>(DEFAULT_VALUE.update);

  const ShouldUpdateDataProviderValue = useMemo(
    () => ({
      update,
      setUpdate,
    }),
    [update, setUpdate]
  );

  return (
    <ShouldUpdateDataContext.Provider value={ShouldUpdateDataProviderValue}>
      {children}
    </ShouldUpdateDataContext.Provider>
  );
};

export default ShouldUpdateDataContext;
