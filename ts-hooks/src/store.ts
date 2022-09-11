import { createContext } from "react";

const initialState = {
  firstName: "Gregor",
  lastName: "Gilchrist",
};

// make states match this schema
export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;
