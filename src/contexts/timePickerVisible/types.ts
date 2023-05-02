import { ReactNode, Dispatch, SetStateAction } from "react";

export interface PropsChildren {
  children: ReactNode;
}

export type PropsTabContext = {
  timePickerVisible: boolean;
  setTimePickerVisible: Dispatch<SetStateAction<boolean>>;
};
