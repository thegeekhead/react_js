import { viewBook } from "./ActionType";

export const initialState = {
  viewBookData: {
    name: "JAVA"
  }
};

export const mainReducer = (state=initialState, action) => {
  switch (action.type) {
    case viewBook: {
      return {
        ...state,
        viewBookData: {
          name: "C++"
        }
      };

    }
    default:return state;
  }
}