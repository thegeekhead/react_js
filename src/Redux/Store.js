import { createStore } from "redux";
import { mainReducer } from "./Reducer.js";

export const store = createStore(mainReducer);
