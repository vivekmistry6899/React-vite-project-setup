import { ReactNode } from "react";

export interface childrenType {
  name?: string;
  path: string;
  element?: ReactNode;
  children?: childrenType[];
  checkPermission?: boolean
}
export interface routes {
  checkPermission?: boolean
  name?: string;
  path: string;
  element?: ReactNode;
  children?: childrenType[];
}