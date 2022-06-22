import { viewBook } from "./ActionType";

export const viewSelectedBook = (selectedBook) => {
  return {
    type: viewBook,
    payload: selectedBook
  }
}