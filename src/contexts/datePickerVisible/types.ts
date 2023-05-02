import { ReactNode, Dispatch, SetStateAction } from "react";

export interface PropsChildren {
  children: ReactNode;
}

export type PropsTabContext = {
  datePickerVisible: boolean;
  setDatePickerVisible: Dispatch<SetStateAction<boolean>>;
};
