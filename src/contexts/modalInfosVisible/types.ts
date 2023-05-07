import { ReactNode, Dispatch, SetStateAction } from "react";

export interface PropsChildren {
  children: ReactNode;
}

interface Data {
  title: string;
  description: string;
  time: Date;
  date: Date;
}

export type PropsVisibleContext = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  data: Data;
  setData: Dispatch<SetStateAction<Data>>;
};
