import { ReactNode, Dispatch, SetStateAction } from "react";

export interface PropsChildren {
  children: ReactNode;
}

export type PropsUpdateContext = {
  update: boolean;
  setUpdate: Dispatch<SetStateAction<boolean>>;
};
